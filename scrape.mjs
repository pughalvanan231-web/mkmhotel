import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.mkmhotels.in/';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).toString();
        }
        return resolve(fetchUrl(redirectUrl));
      }
      if (res.statusCode !== 200) {
        return resolve('');
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => {
      console.error(`Error fetching ${url}:`, err.message);
      resolve('');
    });
  });
}

function downloadBinary(url, destPath) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    const file = fs.createWriteStream(destPath);
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).toString();
        }
        return resolve(downloadBinary(redirectUrl, destPath));
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(true));
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      resolve(false);
    });
  });
}

const pages = [
  'index.html',
  'accommodation.html',
  'dining.html',
  'speciality.html',
  'rooftop.html',
  'richhalls.html',
  'coffee.html',
  'spa-Ayurveda-herbal-tirupur-bali-spa.html',
  'gallery.html',
  'contact.html',
  'bookbyphone.html',
  'virtualtour.html',
  'rajavirundhu.html',
  'message.html'
];

async function main() {
  const allImages = new Set();
  const pageData = {};

  for (const page of pages) {
    console.log(`Auditing ${page}...`);
    const pageUrl = BASE_URL + page;
    const html = await fetchUrl(pageUrl);
    
    // Extract text without HTML tags
    const cleanText = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // Extract img src
    const imgMatches = [...html.matchAll(/(?:src|href)=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg))["']/gi)].map(m => m[1]);
    
    pageData[page] = {
      title: (html.match(/<title>([^<]+)<\/title>/i) || [])[1] || '',
      images: [...new Set(imgMatches)],
      textSnippet: cleanText.substring(0, 1500)
    };

    imgMatches.forEach(img => {
      if (!img.startsWith('http') && !img.includes('apextec') && !img.includes('google') && !img.includes('facebook') && !img.includes('twitter')) {
        allImages.add(img);
      } else if (img.includes('mkmhotels.in')) {
        allImages.add(img.replace('https://www.mkmhotels.in/', '').replace('http://www.mkmhotels.in/', ''));
      }
    });
  }

  fs.writeFileSync('site_audit.json', JSON.stringify(pageData, null, 2));
  console.log(`Saved site_audit.json. Total unique images found: ${allImages.size}`);

  console.log('Downloading all unique images...');
  const assetDir = path.join(process.cwd(), 'downloaded_assets');
  let downloadedCount = 0;

  for (const imgRel of allImages) {
    const cleanRel = imgRel.replace(/^\.\//, '').replace(/^\//, '');
    const fullUrl = BASE_URL + cleanRel;
    const dest = path.join(assetDir, cleanRel.replace(/\//g, path.sep));
    const ok = await downloadBinary(fullUrl, dest);
    if (ok) {
      downloadedCount++;
      console.log(`Downloaded [${downloadedCount}]: ${cleanRel}`);
    } else {
      console.log(`Failed / skipped: ${cleanRel}`);
    }
  }

  console.log(`Done! Successfully downloaded ${downloadedCount} assets.`);
}

main().catch(console.error);
