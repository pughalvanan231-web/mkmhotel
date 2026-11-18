export interface RoomCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  singlePrice: number;
  doublePrice: number;
  image: string;
  galleryImages: string[];
  bedType: string;
  occupancy: string;
  size: string;
  amenities: string[];
  popular?: boolean;
}

export interface DiningOutlet {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  highlights: string[];
  timings: string;
  coverImage: string;
  galleryImages: string[];
  cuisine: string;
  badge?: string;
}

export interface EventVenue {
  id: string;
  name: string;
  type: string;
  capacity: number;
  description: string;
  features: string[];
  suitableFor: string[];
  coverImage: string;
  galleryImages: string[];
}

export interface AmenityItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  text: string;
  stayType: string;
  source: 'Google Reviews';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'rooms' | 'dining' | 'halls' | 'overview' | 'kitchen';
  src: string;
  alt: string;
}

export const HOTEL_INFO = {
  name: 'Hotel MKM Rich',
  legalName: 'Hotel MKM Rich Private Limited',
  tagline: 'Experience Comfort. Discover Hospitality.',
  subheading: 'Your destination for comfortable stays, exceptional dining and memorable experiences in Tiruppur.',
  starRating: '3-Star Premium Business & Leisure Hotel',
  googleRating: 4.1,
  reviewCount: 2036,
  address: 'No. 10, Rayapuram Main Road, Rayapuram, Tiruppur - 641 601, Tamil Nadu, India',
  plusCode: '483J+G6P, No.10, Rayapuram Main Road, Rayapuram, Tiruppur, Tamil Nadu 641601',
  phonePrimary: '0421 223 3300',
  phones: ['0421 223 3300', '0421 223 3311', '0421 223 3388', '0421 223 3399'],
  fax: '0421 223 3355',
  email: 'info@mkmhotels.in',
  whatsapp: '+919443323300',
  inventory: {
    rooms: 35,
    restaurants: 2,
    coffeeShop: 1,
    banquetHalls: 3,
  },
  distances: [
    { place: 'Tiruppur Railway Station', distance: '1.5 km (5 mins)' },
    { place: 'Tiruppur Old Bus Stand', distance: '2.0 km (7 mins)' },
    { place: 'Tiruppur New Bus Stand', distance: '4.8 km (12 mins)' },
    { place: 'Coimbatore Intl Airport (CJB)', distance: '42 km (45 mins)' },
    { place: 'Knitwear & Textile Hub (Netaji Apparel Park)', distance: '10 km (15 mins)' },
  ],
  checkInTime: '12:00 PM',
  checkOutTime: '12:00 PM',
  gps: {
    lat: 11.105019,
    lng: 77.336581,
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.869894451034!2d77.334005!3d11.105019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907c08922cfb9%3A0xe54e19ea81b5ad32!2sHotel%20MKM%20Rich!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  }
};

export const ROOMS: RoomCategory[] = [
  {
    id: 'classic',
    name: 'Classic Room',
    tagline: 'Feel classic style of comfort and luxury',
    description: 'Contemporary in design and soothing in aesthetic, the Classic Room features one King Size Bed, 42-inch LCD television for your entertainment, executive writing desk, and elegant private ensuite bathroom.',
    singlePrice: 2000,
    doublePrice: 2500,
    image: '/hotel_assets/sliderimages/select/rooms/s1/classic.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/rooms/s1/classic.jpg',
      '/hotel_assets/sliderimages/select/rooms/CLASSIC/s1/classic2.jpg',
      '/hotel_assets/sliderimages/select/rooms/CLASSIC/s1/classic3.jpg',
      '/hotel_assets/sliderimages/select/acc-slider/s1/classic.jpg'
    ],
    bedType: 'King Size Bed',
    occupancy: 'Up to 2 Adults + 1 Child',
    size: '240 sq.ft',
    amenities: [
      'King Size Bed',
      '42" LCD Television',
      'High-Speed Wi-Fi',
      'Centralized Air Conditioning',
      'Executive Desk & Chair',
      'Electronic Safe Deposit Locker',
      '24/7 Room Service',
      'Hot & Cold Water'
    ]
  },
  {
    id: 'privilege',
    name: 'Privilege Room',
    tagline: 'Haven of luxury & comfort',
    description: 'A haven of luxury and quiet relaxation. The Privilege room offers enhanced comfort with one King Size Bed, 42-inch LCD television, plush sofa seating corner for unwinding, ergonomic desk for productive work, and private in-room minibar.',
    singlePrice: 2500,
    doublePrice: 3000,
    image: '/hotel_assets/sliderimages/select/rooms/s1/privillage.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/rooms/s1/privillage.jpg',
      '/hotel_assets/sliderimages/select/acc-slider/s1/privilege2.jpg',
      '/hotel_assets/sliderimages/select/rooms/PRIVILEGE/s1/privilege3.jpg',
      '/hotel_assets/sliderimages/select/rooms/PRIVILEGE/s1/privilege4.jpg'
    ],
    bedType: 'King Size Bed',
    occupancy: 'Up to 2 Adults + 1 Child',
    size: '280 sq.ft',
    amenities: [
      'King Size Bed',
      '42" LCD Television',
      'Sofa Seating Lounge',
      'Executive Workstation',
      'In-Room Minibar',
      'High-Speed Wi-Fi',
      'Complimentary Mineral Water',
      'Tea / Coffee Maker'
    ],
    popular: true
  },
  {
    id: 'elite',
    name: 'Elite Room',
    tagline: 'Well Reputed Room of Rich',
    description: 'Elite is one of the most celebrated rooms of our 3-star property. Furnished with choice King Size Bed, featuring an elegant glass partition that allows you to enjoy a luxurious bath ambiance while catching your favourite show.',
    singlePrice: 3000,
    doublePrice: 3500,
    image: '/hotel_assets/sliderimages/select/rooms/s1/ellite.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/rooms/s1/ellite.jpg',
      '/hotel_assets/sliderimages/select/acc-slider/s1/elite.jpg',
      '/hotel_assets/sliderimages/select/rooms/elite/s1/elite4.jpg',
      '/hotel_assets/sliderimages/select/rooms/elite/s1/elite7.png'
    ],
    bedType: 'King Size Bed',
    occupancy: 'Up to 2 Adults + 1 Child',
    size: '320 sq.ft',
    amenities: [
      'King Size Bed',
      'Signature Glass Bathroom Partition',
      '42" LCD Television',
      'Premium Sound Insulation',
      'Dedicated Workstation',
      'High-Speed Wi-Fi',
      'Minibar & Beverage Station',
      'Luxury Toiletries'
    ]
  },
  {
    id: 'elite-twin',
    name: 'Elite Twin Bed',
    tagline: 'Well Reputed Room with Twin Bed Configuration',
    description: 'Specially designed for corporate colleagues, business associates, or traveling companions requiring separate beds without sacrificing elegance. Offers two premium twin beds, ample wardrobe storage, and seamless work connectivity.',
    singlePrice: 3000,
    doublePrice: 3500,
    image: '/hotel_assets/sliderimages/select/acc-slider/s1/elite2.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/acc-slider/s1/elite2.jpg',
      '/hotel_assets/sliderimages/select/rooms/elite/s1/elite2.png',
      '/hotel_assets/sliderimages/select/rooms/elite/s1/elite4.jpg'
    ],
    bedType: 'Two Separate Twin Beds',
    occupancy: '2 Adults',
    size: '320 sq.ft',
    amenities: [
      'Twin Premium Mattresses',
      'Dual Bedside Control Consoles',
      '42" LCD Television',
      'Executive Desk with Universal Outlets',
      'High-Speed Wi-Fi',
      'Individual Climate Control',
      'Electric Safe',
      'Complimentary Bottled Water'
    ]
  },
  {
    id: 'club-class',
    name: 'Club Class',
    tagline: 'Unbeatable Option to Satisfy Your Business Needs',
    description: 'An exceptional tier of hospitality created to host valued clients and senior executives. Club Class pairs ample room proportions with dedicated lounge seating, priority concierge attention, and refined aesthetic appointments.',
    singlePrice: 3500,
    doublePrice: 4000,
    image: '/hotel_assets/sliderimages/select/rooms/s1/clubclass.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/rooms/s1/clubclass.jpg',
      '/hotel_assets/sliderimages/select/acc-slider/s1/clubclass2.jpg',
      '/hotel_assets/sliderimages/select/rooms/clubclass/s1/clubclass2.jpg',
      '/hotel_assets/sliderimages/select/rooms/clubclass/s1/clubclass4.jpg'
    ],
    bedType: 'King Size Master Bed',
    occupancy: 'Up to 3 Guests',
    size: '360 sq.ft',
    amenities: [
      'King Size Bed',
      'Expansive Living & Lounge Area',
      'Plush Sofa Set',
      'Executive Desk & Stationery',
      '42" LCD Entertainment Screen',
      'High-Speed Wi-Fi',
      'Minibar & Coffee Maker',
      'Priority Room Service'
    ]
  },
  {
    id: 'business-suite',
    name: 'Business Suite',
    tagline: 'Most Preferred Suite of Rich',
    description: 'The pinnacle of luxury at Hotel MKM Rich. This prestigious suite offers an expansive separate living room for business meetings or family relaxation, a master bedroom retreat, dual LCD screens, and premium bathroom amenities.',
    singlePrice: 4000,
    doublePrice: 4500,
    image: '/hotel_assets/sliderimages/select/rooms/s1/businesssuit.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/rooms/s1/businesssuit.jpg',
      '/hotel_assets/sliderimages/select/acc-slider/s1/businesssuit.jpg',
      '/hotel_assets/sliderimages/select/rooms/businesssuit/s1/buisness1.jpg',
      '/hotel_assets/sliderimages/select/rooms/businesssuit/s1/business6.jpg'
    ],
    bedType: 'Grand King Master Suite',
    occupancy: 'Up to 4 Guests',
    size: '450 sq.ft',
    amenities: [
      'Separate Master Bedroom & Parlour',
      '2 LCD Flat-Screen Televisions',
      'Executive Conference Table / Desk',
      'Full Sofa Suite & Coffee Table',
      'Walk-In Wardrobe & Electronic Safe',
      'Luxury Ensuite with Bath Amenities',
      'VIP Welcome Amenities',
      '24/7 Dedicated Butler Assistance'
    ],
    popular: true
  }
];

export const DINING_OUTLETS: DiningOutlet[] = [
  {
    id: 'olives',
    name: 'Olives Multicuisine Restaurant',
    type: 'Pure Vegetarian Fine Dining',
    tagline: 'Dedicated 100% Pure Veg with Independent Dedicated Kitchen',
    description: 'Olives is our premier pure vegetarian culinary sanctuary. Uniquely in Tiruppur, Hotel MKM Rich operates a strictly isolated vegetarian kitchen facility to guarantee culinary purity, respect traditional cultural dietary preferences, and deliver unmatched taste across authentic South Indian, North Indian, Tandoori, and Continental creations.',
    highlights: [
      'Strictly Separate 100% Vegetarian Kitchen',
      'Sumptuous Buffet Lunch & Dinner',
      'Authentic North Indian & South Indian thalis',
      'Continental & Asian Specialties',
      'Private Family Dining Booths'
    ],
    timings: 'Breakfast: 7:00 AM – 10:30 AM | Lunch: 12:30 PM – 3:30 PM | Dinner: 7:00 PM – 11:00 PM',
    coverImage: '/hotel_assets/sliderimages/select/dining/s1/restaurent.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/dining/s1/restaurent.jpg',
      '/hotel_assets/sliderimages/select/dining slider/s1/restaurent1.jpg',
      '/hotel_assets/sliderimages/select/gallery/s1/rest1.jpg',
      '/hotel_assets/sliderimages/select/gallery/s1/rest2.jpg',
      '/hotel_assets/sliderimages/select/gallery/s1/rest3.jpg'
    ],
    cuisine: 'Pure Vegetarian • South Indian • North Indian • Tandoor • Continental',
    badge: '100% Pure Veg • Separate Kitchen'
  },
  {
    id: 'sky-grill',
    name: 'Sky Grill Rooftop Restaurant',
    type: 'Open Rooftop Non-Veg Restaurant',
    tagline: 'Contemporary Open-Air Dining with Live See-Through Kitchen',
    description: 'Sky Grill, our signature open rooftop restaurant, personifies the progressive spirit of Tiruppur dining. Enjoy panoramic evening breezes, enchanting mood lighting, and the drama of our live see-through kitchen preparing sizzling kebabs, tandoori grills, fresh seafood, and rich curries under the stars. Perfect for romantic candlelight dinners and celebrations.',
    highlights: [
      'Panoramic Open-Air Rooftop Vistas',
      'Live "See-Through" Interactive Kitchen',
      'Tandoori Grills, Kebabs & Charcoal Delicacies',
      'Romantic Candle Light Dinner Arrangements',
      'Live LCD Screens & Musical Ambience'
    ],
    timings: 'Dinner Only: 7:00 PM – 11:30 PM (Daily)',
    coverImage: '/hotel_assets/sliderimages/select/dining/s1/rooftop.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/dining/s1/rooftop.jpg',
      '/hotel_assets/sliderimages/select/rooftop/s1/2.jpg',
      '/hotel_assets/sliderimages/select/rooftop/s1/10.jpg',
      '/hotel_assets/sliderimages/select/rooftop/s1/food11.jpg',
      '/hotel_assets/sliderimages/select/rooftop/s1/food12.jpg',
      '/hotel_assets/sliderimages/select/rooftop/s1/hab1.jpg'
    ],
    cuisine: 'Tandoor • Continental Grills • Non-Veg Specialties • Seafood • Chettinad',
    badge: 'Open-Air Rooftop • Live Kitchen'
  },
  {
    id: 'the-lounge',
    name: 'The Lounge — 24 Hrs Coffee Shop',
    type: '24-Hour Coffee Bar & Patisserie',
    tagline: 'Scrumptious Desserts, Savouries & Handcrafted Brews Around the Clock',
    description: 'Located at the lobby level, The Lounge is your sanctuary for artisanal filter coffees, rich espresso blends, freshly baked breads, savory finger foods, and bespoke cakes. Whether welcoming early morning business partners or craving a late-night dessert, our doors are always open.',
    highlights: [
      'Open 24 Hours, 7 Days a Week',
      'Freshly Brewed South Indian Filter Coffee & Espressos',
      'Artisanal Bakery & Custom Celebration Cakes',
      'Quick Executive Snacks, Sandwiches & Shakes',
      'Lobby High-Speed Wi-Fi for Informal Work Meetings'
    ],
    timings: 'Round the Clock (24 Hours)',
    coverImage: '/hotel_assets/sliderimages/select/dining/s1/coffee.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/dining/s1/coffee.jpg',
      '/hotel_assets/sliderimages/select/dining slider/s1/coffeebar3.jpg',
      '/hotel_assets/sliderimages/select/dining/coffee/s1/2.jpg',
      '/hotel_assets/sliderimages/select/dining/coffee/s1/3.jpg'
    ],
    cuisine: 'Bistro • Handcrafted Coffee • Bakery • Light Bites • Custom Cakes',
    badge: 'Open 24/7'
  }
];

export const BANQUET_HALLS: EventVenue[] = [
  {
    id: 'diamond-ballroom',
    name: 'Diamond Ballroom',
    type: 'Grand Banquet Hall',
    capacity: 250,
    description: 'Our flagship venue for grand celebrations, wedding receptions, product launches, and large corporate symposiums. Features column-free sightlines, centralized high-fidelity acoustics, powerful centralized climate control, and a dedicated stage podium.',
    features: [
      'Up to 250 Guests Seating Capacity',
      'Centralized High-Fidelity Audio / Video Systems',
      'Centralized Air Conditioning',
      'Raised Presentation & Wedding Stage',
      'Attached Dedicated Dining & Buffet Area',
      'Modern High-Lumen Projector Screens'
    ],
    suitableFor: ['Wedding Receptions', 'Corporate Annual Meets', 'Product Launches', 'Award Ceremonies', 'Social Celebrations'],
    coverImage: '/hotel_assets/sliderimages/select/diamond/s1/1.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/diamond/s1/1.jpg',
      '/hotel_assets/sliderimages/select/diamond/s1/3.jpg',
      '/hotel_assets/sliderimages/select/diamond/s1/4.jpg',
      '/hotel_assets/sliderimages/select/halls/s1/diamond.jpg',
      '/hotel_assets/sliderimages/select/hallslider/s1/diamond1.jpg'
    ]
  },
  {
    id: 'spades-meeting-hall',
    name: 'Spades Meeting Hall',
    type: 'Mid-Sized Conference Hall',
    capacity: 120,
    description: 'Designed specifically for mid-sized corporate conferences, export dealer meets, seminars, and intimate family functions. Offers adaptable theatre, classroom, or cluster seating arrangements with crystal-clear AV integration.',
    features: [
      'Up to 120 Guests Capacity',
      'Customizable Seating Layouts (Theatre, U-Shape, Cluster)',
      'High-Definition Projector & Motorized Screen',
      'Central Air Conditioning & Acoustic Wall Treatments',
      'Dedicated Catering Setup Station'
    ],
    suitableFor: ['Corporate Seminars', 'Dealer Meets', 'Training Workshops', 'Engagement Ceremonies', 'Birthday Parties'],
    coverImage: '/hotel_assets/sliderimages/select/spade/s1/1.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/spade/s1/1.jpg',
      '/hotel_assets/sliderimages/select/spade/s1/5.jpg',
      '/hotel_assets/sliderimages/select/halls/s1/spade.jpg',
      '/hotel_assets/sliderimages/select/hallslider/s1/sapde1.jpg'
    ]
  },
  {
    id: 'aces-boardroom',
    name: 'Aces Boardroom',
    type: 'Executive Boardroom',
    capacity: 70,
    description: 'The preferred meeting environment for leadership roundtables, high-stakes negotiations, board of directors meetings, and press conferences. Outfitted with executive seating, tele-video conferencing capability, and presentation gear.',
    features: [
      'Up to 70 Delegates Capacity',
      'Tele-video Conferencing Capabilities',
      'Attached High-Lumen Projection Facility',
      'Ergonomic Executive Leather Chairs',
      'High-Speed Wi-Fi & Dedicated Power Ports',
      'Whiteboard & Presentation Flip-Charts'
    ],
    suitableFor: ['Board Meetings', 'Executive Interviews', 'Client Presentations', 'Press Meets', 'Strategic Planning'],
    coverImage: '/hotel_assets/sliderimages/select/aces/s1/1.jpg',
    galleryImages: [
      '/hotel_assets/sliderimages/select/aces/s1/1.jpg',
      '/hotel_assets/sliderimages/select/aces/s1/2.jpg',
      '/hotel_assets/sliderimages/select/aces/s1/3.jpg',
      '/hotel_assets/sliderimages/select/halls/s1/aces.jpg',
      '/hotel_assets/sliderimages/select/hallslider/s1/ace1.jpg'
    ]
  }
];

export const HOTEL_AMENITIES: AmenityItem[] = [
  {
    title: 'Separate Veg & Non-Veg Kitchens',
    description: 'Strictly independent culinary facilities guaranteeing purity for vegetarian guests while delivering exceptional non-veg grills.',
    iconName: 'UtensilsCrossed'
  },
  {
    title: '24/7 In-Room Dining',
    description: 'Round-the-clock gastronomic room service featuring multi-cuisine dishes prepared fresh upon your call.',
    iconName: 'Clock'
  },
  {
    title: 'Montage Bali Spa & Wellness',
    description: 'Holistic Balinese deep tissue massage, traditional Ayurveda therapies, and aroma relaxation for mind and body relief.',
    iconName: 'Flower2'
  },
  {
    title: 'High-Speed Wi-Fi Connectivity',
    description: 'Complimentary enterprise-grade wireless internet accessible across all 35 rooms, lobbies, and conference venues.',
    iconName: 'Wifi'
  },
  {
    title: 'Airport & Station Transfers',
    description: 'Chauffeured pickup and drop service from Tiruppur Railway Station (5 mins) and Coimbatore Airport (45 mins).',
    iconName: 'Car'
  },
  {
    title: '3-Star Outdoor Catering',
    description: 'Professional catering for corporate lunches, private celebrations, and weddings with live cooking stations in and around Tiruppur.',
    iconName: 'ChefHat'
  },
  {
    title: 'Executive Business Centre',
    description: 'Full business amenities including high-speed computing terminals, laser printing, scanning, and courier assistance.',
    iconName: 'Briefcase'
  },
  {
    title: 'Doctor on Call & Safe Lockers',
    description: 'On-demand qualified medical consultation and secure digital in-room safe lockers for complete guest peace of mind.',
    iconName: 'ShieldCheck'
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Karthik Subramanian',
    city: 'Chennai, India',
    rating: 5,
    date: 'Recent Stay',
    text: 'One of the best hotels in Tiruppur for business visits. The rooms are spotless, modern, and very comfortable. Olives pure vegetarian restaurant is exceptional — knowing they have a completely separate veg kitchen gave our family huge peace of mind. Excellent staff hospitality!',
    stayType: 'Business Trip',
    source: 'Google Reviews'
  },
  {
    id: 'rev-2',
    author: 'Rajesh G.',
    city: 'Bangalore, India',
    rating: 5,
    date: 'Recent Stay',
    text: 'Sky Grill rooftop is unbeatable in Tiruppur for dinner! The open-air terrace breeze, live kitchen, and tandoori grills were outstanding. Stayed in the Elite Room which was very well appointed and quiet despite being in Rayapuram. Highly recommended.',
    stayType: 'Family Stay',
    source: 'Google Reviews'
  },
  {
    id: 'rev-3',
    author: 'Prakash Nair',
    city: 'Coimbatore, India',
    rating: 4,
    date: 'Recent Stay',
    text: 'We hosted our corporate dealer conference in Spades Hall and accommodated 20 delegates in MKM Rich. Everything from the projector setup to high-speed internet and the buffet lunch was managed seamlessly. Truly 3-star standard.',
    stayType: 'Corporate Event',
    source: 'Google Reviews'
  },
  {
    id: 'rev-4',
    author: 'Senthil Kumar',
    city: 'Tiruppur, India',
    rating: 5,
    date: 'Recent Stay',
    text: 'A landmark property right on Rayapuram Main Road. The 24hr Lounge coffee bar is our favorite spot for quick client meetings. Clean bathrooms, prompt room service, and cordial front desk staff.',
    stayType: 'Local Business',
    source: 'Google Reviews'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-1',
    title: 'Hotel MKM Rich Reception & Grand Lobby',
    category: 'overview',
    src: '/hotel_assets/sliderimages/select/homeslider/s1/reception1.jpg',
    alt: 'Grand Reception area of Hotel MKM Rich Tiruppur'
  },
  {
    id: 'g-2',
    title: 'Building Exterior & Architectural View',
    category: 'overview',
    src: '/hotel_assets/sliderimages/select/homeslider/s1/over.jpg',
    alt: 'Exterior facade of Hotel MKM Rich Rayapuram'
  },
  {
    id: 'g-3',
    title: 'Business Suite — Master Living & Bed Area',
    category: 'rooms',
    src: '/hotel_assets/sliderimages/select/rooms/s1/businesssuit.jpg',
    alt: 'Luxury Business Suite at Hotel MKM Rich'
  },
  {
    id: 'g-4',
    title: 'Elite Room — King Bed & Glass Bath View',
    category: 'rooms',
    src: '/hotel_assets/sliderimages/select/rooms/s1/ellite.jpg',
    alt: 'Elite Room at Hotel MKM Rich'
  },
  {
    id: 'g-5',
    title: 'Privilege Room — Bed & Sofa Lounge',
    category: 'rooms',
    src: '/hotel_assets/sliderimages/select/rooms/s1/privillage.jpg',
    alt: 'Privilege Room setup at Hotel MKM Rich'
  },
  {
    id: 'g-6',
    title: 'Classic Room — Contemporary Comfort',
    category: 'rooms',
    src: '/hotel_assets/sliderimages/select/rooms/s1/classic.jpg',
    alt: 'Classic Room at Hotel MKM Rich'
  },
  {
    id: 'g-7',
    title: 'Elite Twin Bed Configuration',
    category: 'rooms',
    src: '/hotel_assets/sliderimages/select/acc-slider/s1/elite2.jpg',
    alt: 'Twin bed setup for corporate travelers'
  },
  {
    id: 'g-8',
    title: 'Olives Multicuisine Pure Veg Restaurant',
    category: 'dining',
    src: '/hotel_assets/sliderimages/select/dining/s1/restaurent.jpg',
    alt: 'Olives Vegetarian Restaurant dining hall'
  },
  {
    id: 'g-9',
    title: 'Sky Grill Rooftop — Open-Air Evening Dining',
    category: 'dining',
    src: '/hotel_assets/sliderimages/select/dining/s1/rooftop.jpg',
    alt: 'Sky Grill Rooftop Restaurant at Hotel MKM Rich'
  },
  {
    id: 'g-10',
    title: 'The Lounge — 24-Hour Coffee Bar',
    category: 'dining',
    src: '/hotel_assets/sliderimages/select/dining/s1/coffee.jpg',
    alt: 'The Lounge 24-hr coffee bar and bakery'
  },
  {
    id: 'g-11',
    title: 'Diamond Ballroom — Grand Banquet Setup',
    category: 'halls',
    src: '/hotel_assets/sliderimages/select/diamond/s1/1.jpg',
    alt: 'Diamond Ballroom with 250 guest capacity'
  },
  {
    id: 'g-12',
    title: 'Spades Meeting Hall — Conference Seating',
    category: 'halls',
    src: '/hotel_assets/sliderimages/select/spade/s1/1.jpg',
    alt: 'Spades conference hall at Hotel MKM Rich'
  },
  {
    id: 'g-13',
    title: 'Aces Boardroom — Executive Roundtable',
    category: 'halls',
    src: '/hotel_assets/sliderimages/select/aces/s1/1.jpg',
    alt: 'Aces boardroom for corporate meetings'
  },
  {
    id: 'g-14',
    title: 'Montage Bali Spa & Wellness Suite',
    category: 'overview',
    src: '/hotel_assets/sliderimages/select/homeslider/s1/spa1.jpg',
    alt: 'Montage Bali Spa treatment room'
  },
  {
    id: 'g-15',
    title: 'Dedicated Vegetarian Kitchen Facility',
    category: 'kitchen',
    src: '/hotel_assets/sliderimages/select/gallery/s1/vkit4.jpg',
    alt: 'Separate pure vegetarian kitchen at Hotel MKM Rich'
  },
  {
    id: 'g-16',
    title: 'Dedicated Non-Vegetarian Tandoor Kitchen',
    category: 'kitchen',
    src: '/hotel_assets/sliderimages/select/gallery/s1/nkit1.jpg',
    alt: 'Dedicated non-vegetarian kitchen at Hotel MKM Rich'
  }
];
