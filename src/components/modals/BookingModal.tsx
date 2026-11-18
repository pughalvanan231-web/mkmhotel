import React, { useState } from 'react';
import { X, Calendar, Users, Home, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';
import { HOTEL_INFO, ROOMS, RoomCategory } from '../../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
  initialChildren?: number;
  initialRoomsCount?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialAdults = 2,
  initialChildren = 0,
  initialRoomsCount = 1
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState(initialRoomId || 'privilege');
  const [checkIn, setCheckIn] = useState(initialCheckIn || new Date().toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(
    initialCheckOut || new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  const [roomsCount, setRoomsCount] = useState(initialRoomsCount);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];
  const nights = Math.max(1, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)));
  const estimatedCost = selectedRoom.singlePrice * roomsCount * nights;

  const handleWhatsAppInquiry = () => {
    const text = `Hello Hotel MKM Rich, I would like to inquire about booking a room:
- Room: ${selectedRoom.name}
- Check-in: ${checkIn}
- Check-out: ${checkOut} (${nights} night${nights > 1 ? 's' : ''})
- Rooms: ${roomsCount}
- Guests: ${adults} Adults, ${children} Children
- Guest Name: ${guestName || 'Guest'}
- Contact: ${guestPhone || 'Not specified'}
${specialRequests ? `- Note: ${specialRequests}` : ''}

Please confirm availability and best corporate rates. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919443323300?text=${encoded}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B0305]/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#C5A059]/40 rounded-2xl shadow-luxury-lg overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#420608] px-6 py-4 sm:py-5 text-hotel-ivory flex items-center justify-between border-b border-[#C5A059]/30">
          <div>
            <span className="text-[#DFC48B] text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Instant Stay Enquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-playfair font-normal mt-0.5 text-white">
              Reserve Your Stay at MKM Rich
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-hotel-green text-hotel-gold rounded-full flex items-center justify-center mx-auto shadow-gold-glow">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-playfair text-hotel-green">Enquiry Submitted Successfully!</h4>
              <p className="text-hotel-charcoal-light max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-hotel-green">{guestName || 'Valued Guest'}</strong>. Our front desk reservation team will connect with you immediately to confirm your stay details and provide our best published rates.
              </p>
              
              <div className="bg-white p-4 rounded-xl border border-hotel-gold/20 max-w-md mx-auto text-left text-xs space-y-1.5 text-hotel-charcoal">
                <p><strong>Selected Room:</strong> {selectedRoom.name}</p>
                <p><strong>Stay Dates:</strong> {checkIn} to {checkOut} ({nights} Night{nights > 1 ? 's' : ''})</p>
                <p><strong>Guests:</strong> {adults} Adults, {children} Children ({roomsCount} Room)</p>
                <p><strong>Official Reservation Desk:</strong> 0421 223 3300</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Message Directly on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full bg-hotel-green text-white font-medium text-sm hover:bg-hotel-green-light transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Room Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-2">
                  1. Select Room Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {ROOMS.map((room) => (
                    <button
                      type="button"
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedRoomId === room.id
                          ? 'border-hotel-gold bg-hotel-green text-white shadow-md'
                          : 'border-hotel-ivory-dark bg-white hover:border-hotel-gold/50 text-hotel-charcoal'
                      }`}
                    >
                      <p className={`text-xs font-semibold ${selectedRoomId === room.id ? 'text-white' : 'text-hotel-green'}`}>
                        {room.name}
                      </p>
                      <p className={`text-[11px] mt-0.5 ${selectedRoomId === room.id ? 'text-hotel-gold-light' : 'text-hotel-gold-dark font-medium'}`}>
                        From ₹{room.singlePrice.toLocaleString()} / night
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates & Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-hotel-gold" /> Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-hotel-gold/30 rounded-xl text-sm focus:outline-none focus:border-hotel-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-hotel-gold" /> Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-hotel-gold/30 rounded-xl text-sm focus:outline-none focus:border-hotel-gold"
                    required
                  />
                </div>
              </div>

              {/* Guests and Rooms */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-xl border border-hotel-gold/30">
                  <label className="block text-[11px] uppercase tracking-wider text-hotel-green font-semibold mb-1">
                    Rooms
                  </label>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setRoomsCount(Math.max(1, roomsCount - 1))}
                      className="w-7 h-7 rounded-lg bg-hotel-ivory hover:bg-hotel-ivory-dark font-bold text-sm text-hotel-green flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-semibold text-sm text-hotel-green">{roomsCount}</span>
                    <button
                      type="button"
                      onClick={() => setRoomsCount(roomsCount + 1)}
                      className="w-7 h-7 rounded-lg bg-hotel-ivory hover:bg-hotel-ivory-dark font-bold text-sm text-hotel-green flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-hotel-gold/30">
                  <label className="block text-[11px] uppercase tracking-wider text-hotel-green font-semibold mb-1">
                    Adults
                  </label>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded-lg bg-hotel-ivory hover:bg-hotel-ivory-dark font-bold text-sm text-hotel-green flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-semibold text-sm text-hotel-green">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-7 h-7 rounded-lg bg-hotel-ivory hover:bg-hotel-ivory-dark font-bold text-sm text-hotel-green flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-hotel-gold/30">
                  <label className="block text-[11px] uppercase tracking-wider text-hotel-green font-semibold mb-1">
                    Children
                  </label>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 rounded-lg bg-hotel-ivory hover:bg-hotel-ivory-dark font-bold text-sm text-hotel-green flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-semibold text-sm text-hotel-green">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-7 h-7 rounded-lg bg-hotel-ivory hover:bg-hotel-ivory-dark font-bold text-sm text-hotel-green flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anandha Kumar"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-hotel-gold/30 rounded-xl text-sm focus:outline-none focus:border-hotel-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 094433 23300"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-hotel-gold/30 rounded-xl text-sm focus:outline-none focus:border-hotel-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Early check-in requested, extra towels, airport pickup required..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-hotel-gold/30 rounded-xl text-sm focus:outline-none focus:border-hotel-gold resize-none"
                />
              </div>

              {/* Price summary badge */}
              <div className="bg-hotel-ivory p-3.5 rounded-xl border border-hotel-gold/30 flex items-center justify-between text-xs">
                <div>
                  <span className="text-hotel-charcoal-light block">Estimated Room Tariff ({nights} Night{nights > 1 ? 's' : ''}, {roomsCount} Room)</span>
                  <span className="text-base font-semibold text-hotel-green">
                    ₹{estimatedCost.toLocaleString()} <span className="text-xs font-normal text-hotel-charcoal-light">+ applicable taxes</span>
                  </span>
                </div>
                <span className="text-[11px] text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full font-medium">
                  Direct Booking Benefit
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-full bg-hotel-green text-white font-medium text-sm hover:bg-hotel-green-light transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4 text-hotel-gold" /> Submit Enquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="py-3 px-5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" /> Enquire via WhatsApp
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-hotel-charcoal-light pt-1">
                <a href={`tel:${HOTEL_INFO.phonePrimary}`} className="flex items-center gap-1 hover:text-hotel-gold transition-colors">
                  <Phone className="w-3 h-3 text-hotel-gold" /> Call Front Desk: {HOTEL_INFO.phonePrimary}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
