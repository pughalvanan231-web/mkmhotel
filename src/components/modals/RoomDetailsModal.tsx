import React, { useState } from 'react';
import { X, Check, Users, Bed, Maximize2, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { RoomCategory, HOTEL_INFO } from '../../data/hotelData';

interface RoomDetailsModalProps {
  room: RoomCategory | null;
  onClose: () => void;
  onBookNow: (room: RoomCategory) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({
  room,
  onClose,
  onBookNow
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  const images = room.galleryImages && room.galleryImages.length > 0 ? room.galleryImages : [room.image];

  const handleWhatsApp = () => {
    const text = `Hello Hotel MKM Rich, I am inquiring about the ${room.name} (Tariff: ₹${room.singlePrice} - ₹${room.doublePrice}). Please share availability and booking details.`;
    window.open(`https://wa.me/919443323300?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B0305]/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF6F0] border border-[#C5A059]/40 rounded-2xl shadow-luxury-lg overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#420608] px-6 py-4 text-hotel-ivory flex items-center justify-between border-b border-[#C5A059]/30">
          <div>
            <span className="text-[#DFC48B] text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Room Showcase
            </span>
            <h3 className="text-xl sm:text-2xl font-playfair font-normal text-white">
              {room.name}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Photo Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-hotel-green-dark border border-hotel-gold/20 shadow-md">
              <img
                src={images[activeImageIndex] || room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-3 right-3 bg-hotel-green/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-hotel-gold font-medium border border-hotel-gold/30">
                Original MKM Photograph
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImageIndex === idx ? 'border-hotel-gold ring-2 ring-hotel-gold/40' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 p-3.5 bg-white rounded-xl border border-hotel-gold/20 text-center">
            <div className="space-y-0.5">
              <Bed className="w-4 h-4 mx-auto text-hotel-gold" />
              <span className="text-[10px] uppercase text-hotel-charcoal-light tracking-wider block">Bedding</span>
              <span className="text-xs font-semibold text-hotel-green">{room.bedType}</span>
            </div>
            <div className="space-y-0.5 border-x border-hotel-ivory-dark">
              <Users className="w-4 h-4 mx-auto text-hotel-gold" />
              <span className="text-[10px] uppercase text-hotel-charcoal-light tracking-wider block">Occupancy</span>
              <span className="text-xs font-semibold text-hotel-green">{room.occupancy}</span>
            </div>
            <div className="space-y-0.5">
              <Maximize2 className="w-4 h-4 mx-auto text-hotel-gold" />
              <span className="text-[10px] uppercase text-hotel-charcoal-light tracking-wider block">Room Size</span>
              <span className="text-xs font-semibold text-hotel-green">{room.size}</span>
            </div>
          </div>

          {/* Tagline & Description */}
          <div className="space-y-2">
            <p className="text-sm font-playfair italic text-hotel-gold-dark">
              "{room.tagline}"
            </p>
            <p className="text-sm text-hotel-charcoal-light leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Amenities List */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-hotel-green">
              Verified In-Room Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {room.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-hotel-ivory-dark">
                  <Check className="w-3.5 h-3.5 text-hotel-gold flex-shrink-0" />
                  <span className="text-hotel-charcoal">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Official Tariff Card */}
          <div className="p-4 bg-hotel-ivory rounded-xl border border-hotel-gold/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-hotel-charcoal-light font-medium block">
                Official Hotel MKM Rich Tariff
              </span>
              <div className="flex items-baseline gap-4 mt-1">
                <div>
                  <span className="text-xs text-hotel-charcoal-light">Single: </span>
                  <span className="text-lg font-bold text-hotel-green">₹{room.singlePrice.toLocaleString()}</span>
                </div>
                <div className="h-4 w-px bg-hotel-gold/40"></div>
                <div>
                  <span className="text-xs text-hotel-charcoal-light">Double: </span>
                  <span className="text-lg font-bold text-hotel-green">₹{room.doublePrice.toLocaleString()}</span>
                </div>
              </div>
              <span className="text-[10px] text-hotel-charcoal-light mt-0.5 block">Per night • Exclusive of government taxes</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onBookNow(room)}
                className="px-5 py-2.5 rounded-full bg-hotel-green text-white hover:bg-hotel-green-light font-medium text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-hotel-gold" /> Reserve This Room
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-3.5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs transition-colors flex items-center justify-center"
                title="WhatsApp Inquiry"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
