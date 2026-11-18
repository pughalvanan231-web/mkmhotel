import React from 'react';
import { Star, Quote, CheckCircle2, ExternalLink } from 'lucide-react';
import { HOTEL_INFO, GOOGLE_REVIEWS } from '../data/hotelData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-14 md:py-20 lg:py-28 bg-[#2B0305] text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Header & Rating Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#DFC48B] font-semibold block">
              Guest Testimonials & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-playfair font-normal text-white leading-tight">
              Verified Experiences from Real Guests.
            </h2>
            <p className="text-[15px] sm:text-base text-[#FAF6F0]/80 font-light leading-relaxed">
              Serving business visitors, knitwear industry delegates, and families with genuine warmth in the heart of Tiruppur.
            </p>
          </div>

          {/* Google Reputation Summary Card */}
          <div className="lg:col-span-5 bg-[#420608] p-6 sm:p-8 rounded-3xl border border-[#C5A059]/40 shadow-luxury-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#DFC48B] font-semibold block">
                Google Business Profile
              </span>
              <div className="flex items-baseline justify-center sm:justify-start gap-2">
                <span className="text-5xl font-playfair font-bold text-white leading-none">{HOTEL_INFO.googleRating}</span>
                <span className="text-[#DFC48B] text-base font-medium">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start text-[#C5A059] pt-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                ))}
                <Star className="w-4 h-4 fill-[#C5A059]/40" />
              </div>
              <span className="text-xs text-[#E5D5C5] block pt-1">
                Based on <strong className="text-white font-semibold">{HOTEL_INFO.reviewCount.toLocaleString()}+</strong> Google Reviews
              </span>
            </div>

            <a
              href="https://www.google.com/maps/place/Hotel+MKM+Rich/@11.1044473,77.3300962,15.33z"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-hotel-gold via-[#E5C887] to-hotel-gold hover:brightness-105 text-[#330507] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Read on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid with Equal Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#3D0608]/90 p-6 rounded-2xl border border-[#C5A059]/25 shadow-luxury flex flex-col justify-between space-y-4 hover:border-[#C5A059]/50 transition-colors h-full"
            >
              <div className="flex-1 flex flex-col justify-between space-y-3">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#C5A059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#C5A059]/30" />
                </div>

                <p className="text-xs text-[#FAF6F0]/90 font-light leading-relaxed italic flex-1">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-3 border-t border-[#58090C] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-white text-xs">{rev.author}</h4>
                  <span className="text-[11px] text-[#E5D5C5] block">{rev.city} • {rev.stayType}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#DFC48B] bg-[#2B0305] px-2 py-0.5 rounded border border-[#C5A059]/30">
                  <CheckCircle2 className="w-3 h-3 text-[#C5A059]" />
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
