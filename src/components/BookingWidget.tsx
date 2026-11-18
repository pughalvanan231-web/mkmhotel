import React, { useState } from 'react';
import { Calendar, Users, Home, Search, ShieldCheck } from 'lucide-react';
import { ROOMS } from '../data/hotelData';

interface BookingWidgetProps {
  onCheckAvailability: (params: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    rooms: number;
    roomId: string;
  }) => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onCheckAvailability }) => {
  const [checkIn, setCheckIn] = useState(() => {
    return new Date().toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState(() => {
    return new Date(Date.now() + 86400000).toISOString().split('T')[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('privilege');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      adults,
      children,
      rooms,
      roomId: selectedRoom
    });
  };

  return (
    <div className="relative z-30 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16 -mt-6 sm:-mt-12">
      <div className="bg-[#420608] border border-hotel-gold/35 rounded-2xl sm:rounded-3xl shadow-luxury-lg p-5 sm:p-6 text-white backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#58090C]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hotel-gold animate-ping" />
            <h3 className="font-playfair text-lg text-white font-normal">Direct Reservation & Best Rate Guarantee</h3>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#FAF6F0]/80">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-hotel-gold" /> No Advance Hidden Fees
            </span>
            <span className="hidden sm:inline text-hotel-gold">•</span>
            <span className="hidden sm:inline">Complimentary High-Speed Wi-Fi</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 items-end">
          {/* Room Category */}
          <div className="lg:col-span-1 space-y-1.5">
            <label className="block text-xs uppercase tracking-wider text-hotel-gold font-semibold flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-hotel-gold" /> Room Type
            </label>
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full h-11 px-3 bg-[#2D0406] border border-hotel-gold/30 rounded-xl text-xs text-white focus:outline-none focus:border-hotel-gold cursor-pointer"
            >
              {ROOMS.map((r) => (
                <option key={r.id} value={r.id} className="bg-[#2D0406] text-white">
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div className="space-y-1.5">
            <label className="block text-xs uppercase tracking-wider text-hotel-gold font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-hotel-gold" /> Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full h-11 px-3 bg-[#2D0406] border border-hotel-gold/30 rounded-xl text-xs text-white focus:outline-none focus:border-hotel-gold cursor-pointer"
              required
            />
          </div>

          {/* Check-out */}
          <div className="space-y-1.5">
            <label className="block text-xs uppercase tracking-wider text-hotel-gold font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-hotel-gold" /> Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full h-11 px-3 bg-[#2D0406] border border-hotel-gold/30 rounded-xl text-xs text-white focus:outline-none focus:border-hotel-gold cursor-pointer"
              required
            />
          </div>

          {/* Adults */}
          <div className="space-y-1.5">
            <label className="block text-xs uppercase tracking-wider text-hotel-gold font-semibold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-hotel-gold" /> Adults
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full h-11 px-3 bg-[#2D0406] border border-hotel-gold/30 rounded-xl text-xs text-white focus:outline-none focus:border-hotel-gold cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num} className="bg-[#2D0406] text-white">
                  {num} Adult{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Rooms */}
          <div className="space-y-1.5">
            <label className="block text-xs uppercase tracking-wider text-hotel-gold font-semibold flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-hotel-gold" /> Rooms
            </label>
            <select
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="w-full h-11 px-3 bg-[#2D0406] border border-hotel-gold/30 rounded-xl text-xs text-white focus:outline-none focus:border-hotel-gold cursor-pointer"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num} className="bg-[#2D0406] text-white">
                  {num} Room{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Action Button */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              type="submit"
              className="w-full h-11 px-4 rounded-xl bg-gradient-to-r from-hotel-gold via-[#E5C887] to-hotel-gold hover:brightness-105 text-[#330507] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-gold-glow flex items-center justify-center gap-2"
            >
              <Search className="w-3.5 h-3.5 text-[#330507]" />
              <span>Check Rates</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
