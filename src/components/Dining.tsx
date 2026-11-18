import React, { useState } from 'react';
import { Utensils, Clock, Check, Sparkles, ShieldCheck, Flame, Coffee } from 'lucide-react';
import { DINING_OUTLETS } from '../data/hotelData';

interface DiningProps {
  onReserveTable: (outletId: string) => void;
}

export const Dining: React.FC<DiningProps> = ({ onReserveTable }) => {
  const [activeTab, setActiveTab] = useState<'olives' | 'sky-grill' | 'the-lounge'>('olives');

  const selectedOutlet = DINING_OUTLETS.find(o => o.id === activeTab) || DINING_OUTLETS[0];

  return (
    <section id="dining" className="py-14 md:py-20 lg:py-28 bg-[#2B0305] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8F171B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#DFC48B] font-semibold block">
            Gastronomy & Culinary Art
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-playfair font-normal text-white leading-tight">
            Exceptional Dining Experiences.
          </h2>
          <p className="text-[15px] sm:text-base text-[#FAF6F0]/80 font-light leading-relaxed">
            From the authentic purity of Olives Pure Vegetarian to the open-air starlit spectacle of Sky Grill Rooftop and 24-hour patisserie comforts at The Lounge.
          </p>

          {/* Restaurant Selector Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-[#420608] border border-[#C5A059]/35 shadow-luxury gap-1 mt-4 max-w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('olives')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'olives'
                  ? 'bg-gradient-to-r from-[#C5A059] to-[#DFC48B] text-[#330507] shadow-md font-bold'
                  : 'text-[#E5D5C5] hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Olives (Pure Veg)</span>
            </button>
            <button
              onClick={() => setActiveTab('sky-grill')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'sky-grill'
                  ? 'bg-gradient-to-r from-[#C5A059] to-[#DFC48B] text-[#330507] shadow-md font-bold'
                  : 'text-[#E5D5C5] hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Sky Grill Rooftop</span>
            </button>
            <button
              onClick={() => setActiveTab('the-lounge')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'the-lounge'
                  ? 'bg-gradient-to-r from-[#C5A059] to-[#DFC48B] text-[#330507] shadow-md font-bold'
                  : 'text-[#E5D5C5] hover:text-white'
              }`}
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>The Lounge (24 Hrs)</span>
            </button>
          </div>
        </div>

        {/* Selected Outlet Spotlight (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#3D0608]/90 rounded-3xl p-6 sm:p-10 border border-[#C5A059]/30 shadow-luxury-lg backdrop-blur-md">
          {/* Outlet Photography Composition */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-luxury bg-[#2B0305]">
              <img
                src={selectedOutlet.coverImage}
                alt={selectedOutlet.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B0305]/90 via-transparent to-transparent" />
              
              {selectedOutlet.badge && (
                <div className="absolute top-4 left-4 bg-[#C5A059] text-[#330507] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {selectedOutlet.badge}
                </div>
              )}

              <div className="absolute top-4 right-4 bg-[#420608]/90 backdrop-blur-md text-xs text-[#DFC48B] px-2.5 py-1 rounded-full border border-[#C5A059]/40">
                Original MKM Photograph
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-playfair text-xl sm:text-2xl text-white">{selectedOutlet.name}</span>
                <span className="text-[#DFC48B] bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10 text-xs">
                  {selectedOutlet.type}
                </span>
              </div>
            </div>

            {/* Sub-gallery of verified dining images */}
            {selectedOutlet.galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {selectedOutlet.galleryImages.slice(1, 5).map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-[#C5A059]/30 group">
                    <img
                      src={img}
                      alt={`${selectedOutlet.name} interior ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Outlet Story & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#DFC48B] font-semibold block">
                {selectedOutlet.type}
              </span>
              <h3 className="text-2xl sm:text-3xl font-playfair font-normal text-white">
                {selectedOutlet.name}
              </h3>
              <p className="text-sm font-playfair italic text-[#DFC48B]">
                "{selectedOutlet.tagline}"
              </p>
            </div>

            <p className="text-[15px] text-[#FAF6F0]/90 font-light leading-relaxed">
              {selectedOutlet.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-2 pt-1">
              <span className="text-xs uppercase tracking-wider text-[#DFC48B] font-semibold block">
                Culinary Features & Services
              </span>
              <div className="space-y-2">
                {selectedOutlet.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#FAF6F0]">
                    <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-3.5 rounded-xl bg-[#2D0406] border border-[#C5A059]/30 text-xs space-y-1">
              <div className="flex items-center gap-2 text-[#DFC48B] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Operating Hours</span>
              </div>
              <p className="text-[#FAF6F0]/90 text-xs leading-relaxed">
                {selectedOutlet.timings}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onReserveTable(selectedOutlet.id)}
                className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-hotel-gold via-[#E5C887] to-hotel-gold hover:brightness-105 text-[#330507] font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-gold-glow flex items-center justify-center gap-2"
              >
                <Utensils className="w-3.5 h-3.5 text-[#330507]" />
                <span>Reserve a Table</span>
              </button>

              <a
                href="tel:04212233311"
                className="py-3 px-5 rounded-full border border-[#C5A059]/40 text-[#FAF6F0] hover:text-white hover:border-hotel-gold text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
              >
                <span>F&B: 0421-2233311</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3-Star Outdoor Catering Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#420608] via-[#58090C] to-[#420608] border border-[#C5A059]/40 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs text-[#DFC48B] uppercase tracking-widest font-semibold flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Speciality Service
            </span>
            <h4 className="font-playfair text-xl sm:text-2xl text-white">
              3-Star Outdoor Catering & Home Delivery in Tiruppur
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF6F0]/80 max-w-2xl font-light">
              We bring Hotel MKM Rich's culinary standards to your weddings, corporate lunches, and private celebrations with live kitchen stations and dedicated pure veg/non-veg setups.
            </p>
          </div>
          <button
            onClick={() => onReserveTable('olives')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFC48B] hover:brightness-105 text-[#330507] font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
          >
            Inquire for Catering
          </button>
        </div>
      </div>
    </section>
  );
};
