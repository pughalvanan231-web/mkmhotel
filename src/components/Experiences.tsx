import React from 'react';
import { 
  Sparkles, 
  UtensilsCrossed, 
  Clock, 
  Flower2, 
  Wifi, 
  Car, 
  ChefHat, 
  Briefcase, 
  ShieldCheck,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { HOTEL_AMENITIES } from '../data/hotelData';

interface ExperiencesProps {
  onOpenBooking: () => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-[#C5A059]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#C5A059]" />;
      case 'Flower2': return <Flower2 className="w-5 h-5 text-[#C5A059]" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-[#C5A059]" />;
      case 'Car': return <Car className="w-5 h-5 text-[#C5A059]" />;
      case 'ChefHat': return <ChefHat className="w-5 h-5 text-[#C5A059]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#C5A059]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="experiences" className="py-14 md:py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A37E33] font-semibold block">
            Guest Amenities & Hospitality Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-playfair font-normal text-[#720E12] leading-tight">
            Designed for Business Ease & Personal Rest.
          </h2>
          <p className="text-[15px] sm:text-base text-[#736566] font-light leading-relaxed">
            Every amenity at Hotel MKM Rich is oriented toward seamless hospitality, whether arriving for textile business appointments or rejuvenating with family.
          </p>
        </div>

        {/* Feature Split Showcase: Montage Bali Spa Feature */}
        <div className="mb-14 bg-white rounded-3xl overflow-hidden border border-[#720E12]/15 shadow-luxury grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-auto sm:h-full bg-[#2B0305]">
            <img
              src="/hotel_assets/sliderimages/select/homeslider/s1/spa1.jpg"
              alt="Montage Bali Spa at Hotel MKM Rich"
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 bg-[#420608]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#DFC48B] font-medium border border-[#C5A059]/40">
              Wellness Sanctuary
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs text-[#DFC48B] font-medium uppercase tracking-wider block">Signature Therapy</span>
              <h4 className="font-playfair text-xl sm:text-2xl">Montage Bali Spa & Herbal Wellness</h4>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#A37E33] font-semibold block">
              Holistic Rejuvenation
            </span>
            <h3 className="text-2xl sm:text-3xl font-playfair text-[#720E12] leading-snug">
              Authentic Balinese & Ayurvedic Therapies in Tiruppur.
            </h3>
            <p className="text-sm sm:text-[15px] text-[#736566] leading-relaxed font-light">
              Destress your body and recharge your energy. Montage Bali Spa adopts a holistic approach to wellness with signature deep tissue massages, Ayurvedic herbal therapy, and aroma stress-relief therapies administered by certified therapists.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-[#1F1A1B]">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5EFE6] border border-[#720E12]/10">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <span>Balinese Deep Tissue</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5EFE6] border border-[#720E12]/10">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <span>Herbal Ayurveda</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5EFE6] border border-[#720E12]/10">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <span>Aroma Therapy</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5EFE6] border border-[#720E12]/10">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <span>Reflexology Sessions</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="tel:04212233300"
                className="inline-flex items-center gap-2 text-xs text-[#720E12] font-bold uppercase tracking-wider hover:text-[#A37E33] transition-colors"
              >
                <span>Book Spa Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            </div>
          </div>
        </div>

        {/* 8 Verified Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_AMENITIES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#720E12]/15 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 space-y-3 h-full flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] flex items-center justify-center border border-[#720E12]/10">
                  {getIcon(item.iconName)}
                </div>
                <h4 className="text-lg font-playfair font-normal text-[#720E12]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#736566] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
