import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/hotelData';

interface GalleryProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onPhotoClick }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rooms' | 'dining' | 'halls' | 'overview' | 'kitchen'>('all');

  const filteredPhotos = GALLERY_PHOTOS.filter(photo => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'dining', label: 'Dining & Rooftop' },
    { id: 'halls', label: 'Banquets & Halls' },
    { id: 'overview', label: 'Lobby & Exterior' },
    { id: 'kitchen', label: 'Dual Kitchens' },
  ];

  return (
    <section id="gallery" className="py-14 md:py-20 lg:py-28 bg-[#FAF6F0] relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A37E33] font-semibold block">
            Visual Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-playfair font-normal text-[#720E12] leading-tight">
            An Authentic Glimpse of MKM Rich.
          </h2>
          <p className="text-[15px] sm:text-base text-[#736566] font-light leading-relaxed">
            Every image presented across our website showcases genuine property spaces, dining rooms, guest suites, and conference facilities of Hotel MKM Rich in Tiruppur.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#720E12] text-white shadow-md'
                    : 'bg-white text-[#736566] hover:text-[#720E12] hover:bg-[#F5EFE6] border border-[#720E12]/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(photo)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-luxury-lg transition-all duration-500 bg-[#2B0305] border border-[#720E12]/15"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B0305]/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-[#420608]/90 backdrop-blur-md text-[#DFC48B] border border-[#C5A059]/40">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-semibold font-playfair">{photo.title}</p>
                <p className="text-[11px] text-[#DFC48B] uppercase tracking-wider mt-0.5">Click to expand</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
