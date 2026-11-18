import React, { useState } from 'react';
import { Bed, Users, Maximize2, Check, Sparkles, Eye, Calendar } from 'lucide-react';
import { ROOMS, RoomCategory } from '../data/hotelData';

interface RoomsProps {
  onSelectRoomDetails: (room: RoomCategory) => void;
  onBookRoom: (room: RoomCategory) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoomDetails, onBookRoom }) => {
  const [filter, setFilter] = useState<'all' | 'suite' | 'executive'>('all');

  const filteredRooms = ROOMS.filter(room => {
    if (filter === 'suite') return room.id === 'business-suite' || room.id === 'club-class';
    if (filter === 'executive') return room.id === 'privilege' || room.id === 'elite' || room.id === 'elite-twin';
    return true;
  });

  return (
    <section id="rooms" className="py-14 md:py-20 lg:py-28 bg-[#FAF6F0] relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A37E33] font-semibold block">
            Accommodations & Living
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-playfair font-normal text-[#720E12] leading-tight">
            Refined Living in Tiruppur.
          </h2>
          <p className="text-[15px] sm:text-base text-[#736566] font-light leading-relaxed">
            Discover 35 well-appointed guest rooms and suites across six distinct categories, curated with modern ergonomic furnishings, premium bedding, and thoughtful executive amenities.
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#720E12]/15 shadow-sm gap-1 mt-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-[#720E12] text-white shadow-sm'
                  : 'text-[#736566] hover:text-[#720E12]'
              }`}
            >
              All Categories (6)
            </button>
            <button
              onClick={() => setFilter('executive')}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === 'executive'
                  ? 'bg-[#720E12] text-white shadow-sm'
                  : 'text-[#736566] hover:text-[#720E12]'
              }`}
            >
              Executive & Elite
            </button>
            <button
              onClick={() => setFilter('suite')}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === 'suite'
                  ? 'bg-[#720E12] text-white shadow-sm'
                  : 'text-[#736566] hover:text-[#720E12]'
              }`}
            >
              Suites & Club
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#720E12]/15 shadow-luxury hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Image Container with Original Hotel Photograph */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2B0305]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge */}
                  {room.popular && (
                    <div className="absolute top-3 left-3 bg-[#C5A059] text-[#330507] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#330507]" /> Most Popular
                    </div>
                  )}

                  <div className="absolute top-3 right-3 bg-[#420608]/90 backdrop-blur-md text-xs text-[#DFC48B] px-2.5 py-1 rounded-full border border-[#C5A059]/40">
                    Official MKM Photo
                  </div>

                  {/* Price Banner */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <span className="text-xs text-[#E5D5C5] uppercase tracking-wider block">Official Tariff</span>
                      <div className="text-2xl font-bold font-playfair text-white flex items-baseline gap-1">
                        <span>₹{room.singlePrice.toLocaleString()}</span>
                        <span className="text-xs font-normal text-white/80">/ night</span>
                      </div>
                    </div>
                    <span className="text-xs text-[#DFC48B] bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded border border-white/20">
                      {room.bedType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-playfair font-normal text-[#720E12] group-hover:text-[#A37E33] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs font-playfair italic text-[#A37E33]">
                      "{room.tagline}"
                    </p>
                  </div>

                  <p className="text-sm text-[#736566] leading-relaxed line-clamp-2">
                    {room.description}
                  </p>

                  {/* Specifications */}
                  <div className="flex items-center justify-between py-2.5 border-y border-[#720E12]/10 text-xs text-[#1F1A1B]">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#C5A059]" /> {room.occupancy}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" /> {room.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#C5A059]" /> AC Room
                    </span>
                  </div>

                  {/* Amenities Pills */}
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wider text-[#736566] font-semibold block">
                      Room Highlights
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-[#1F1A1B]">
                      {room.amenities.slice(0, 4).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 truncate">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-2.5">
                <button
                  onClick={() => onSelectRoomDetails(room)}
                  className="flex-1 py-2.5 px-3 rounded-full bg-[#F5EFE6] hover:bg-[#ECE3D5] text-[#720E12] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 border border-[#720E12]/15"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <button
                  onClick={() => onBookRoom(room)}
                  className="flex-1 py-2.5 px-3 rounded-full bg-[#720E12] hover:bg-[#8F171B] text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#DFC48B]" />
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
