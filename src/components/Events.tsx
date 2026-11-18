import React from 'react';
import { Users, Check, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { BANQUET_HALLS } from '../data/hotelData';

interface EventsProps {
  onPlanEvent: (hallId?: string) => void;
}

export const Events: React.FC<EventsProps> = ({ onPlanEvent }) => {
  return (
    <section id="events" className="py-14 md:py-20 lg:py-28 bg-[#FAF6F0] relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A37E33] font-semibold block">
            Conferences, Banquets & Celebrations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-playfair font-normal text-[#720E12] leading-tight">
            Distinguished Venues for Every Occasion.
          </h2>
          <p className="text-[15px] sm:text-base text-[#736566] font-light leading-relaxed">
            At Hotel MKM Rich, we host Tiruppur's finest corporate conferences, export dealer meets, product launches, and grand wedding banquets across three versatile, acoustically refined venues.
          </p>
        </div>

        {/* 3 Venue Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BANQUET_HALLS.map((hall) => (
            <div
              key={hall.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#720E12]/15 shadow-luxury hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Real Venue Photograph */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2B0305]">
                  <img
                    src={hall.coverImage}
                    alt={hall.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#420608]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium border border-[#C5A059]/40">
                    {hall.type}
                  </div>

                  <div className="absolute top-3 right-3 bg-[#C5A059] text-[#330507] text-xs font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> Up to {hall.capacity}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-playfair text-2xl text-white">{hall.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-[#736566] leading-relaxed">
                    {hall.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs uppercase tracking-wider text-[#736566] font-semibold block">
                      Venue Facilities & Utilities
                    </span>
                    <div className="space-y-1.5 text-xs text-[#1F1A1B]">
                      {hall.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suitable for tags */}
                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider text-[#736566] font-semibold block mb-1.5">
                      Recommended For
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {hall.suitableFor.slice(0, 3).map((item, i) => (
                        <span key={i} className="text-xs px-2.5 py-0.5 rounded-full bg-[#F5EFE6] text-[#720E12] border border-[#720E12]/10 font-semibold">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Pinned at bottom */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onPlanEvent(hall.id)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#720E12] hover:bg-[#8F171B] text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#DFC48B]" />
                  <span>Inquire for {hall.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Event CTA Strip in Royal Maroon & Gold */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#420608] text-white border border-[#C5A059]/40 shadow-luxury flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs text-[#DFC48B] uppercase tracking-widest font-semibold flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Full-Service Event Planning
            </span>
            <h4 className="font-playfair text-xl sm:text-2xl text-white">
              Ready to Host Your Next Corporate or Family Event?
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF6F0]/80 font-light">
              Our dedicated banquet specialists coordinate seating, audio-visual equipment, and customized multi-cuisine catering.
            </p>
          </div>

          <button
            onClick={() => onPlanEvent()}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-hotel-gold via-[#E5C887] to-hotel-gold hover:brightness-105 text-[#330507] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-gold-glow whitespace-nowrap flex items-center gap-2"
          >
            <span>Plan Your Event With Us</span>
            <ArrowRight className="w-4 h-4 text-[#330507]" />
          </button>
        </div>
      </div>
    </section>
  );
};
