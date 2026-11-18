import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, MessageSquare, Check, Sparkles, Utensils } from 'lucide-react';
import { DINING_OUTLETS, DiningOutlet, HOTEL_INFO } from '../../data/hotelData';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOutletId?: string;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
  initialOutletId = 'olives'
}) => {
  const [selectedOutletId, setSelectedOutletId] = useState(initialOutletId);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('08:00 PM');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [seatingPreference, setSeatingPreference] = useState('Standard');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentOutlet = DINING_OUTLETS.find(o => o.id === selectedOutletId) || DINING_OUTLETS[0];

  const handleWhatsApp = () => {
    const text = `Hello Hotel MKM Rich, I would like to reserve a table:
- Restaurant: ${currentOutlet.name}
- Date: ${date}
- Time: ${timeSlot}
- Guests: ${guests}
- Seating: ${seatingPreference}
- Name: ${name || 'Guest'}
- Contact: ${phone || 'Not provided'}

Please confirm table availability. Thank you!`;

    window.open(`https://wa.me/919443323300?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B0305]/85 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-[#FAF6F0] border border-[#C5A059]/40 rounded-2xl shadow-luxury-lg overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#420608] px-6 py-4 text-hotel-ivory flex items-center justify-between border-b border-[#C5A059]/30">
          <div>
            <span className="text-[#DFC48B] text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Culinary Reservation
            </span>
            <h3 className="text-xl sm:text-2xl font-playfair font-normal text-white">
              Reserve a Table
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-hotel-green text-hotel-gold rounded-full flex items-center justify-center mx-auto shadow-gold-glow">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-playfair text-hotel-green">Table Reservation Requested</h4>
              <p className="text-sm text-hotel-charcoal-light max-w-md mx-auto">
                Thank you, <strong className="text-hotel-green">{name}</strong>. Our F&B desk at {currentOutlet.name} has received your reservation for {guests} guests on {date} at {timeSlot}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Message via WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-hotel-green text-white font-medium text-xs hover:bg-hotel-green-light"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Outlet Choice */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1.5">
                  Choose Dining Venue
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {DINING_OUTLETS.filter(o => o.id !== 'the-lounge').map((outlet) => (
                    <button
                      type="button"
                      key={outlet.id}
                      onClick={() => setSelectedOutletId(outlet.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${selectedOutletId === outlet.id
                          ? 'border-hotel-gold bg-hotel-green text-white shadow-md'
                          : 'border-hotel-ivory-dark bg-white hover:border-hotel-gold/50 text-hotel-charcoal'
                        }`}
                    >
                      <p className={`text-xs font-semibold ${selectedOutletId === outlet.id ? 'text-white' : 'text-hotel-green'}`}>
                        {outlet.name}
                      </p>
                      <p className={`text-[11px] mt-0.5 ${selectedOutletId === outlet.id ? 'text-hotel-gold-light' : 'text-hotel-charcoal-light'}`}>
                        {outlet.type}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-hotel-gold" /> Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-hotel-gold" /> Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  >
                    <option>12:30 PM (Lunch)</option>
                    <option>01:30 PM (Lunch)</option>
                    <option>02:30 PM (Lunch)</option>
                    <option>07:00 PM (Dinner)</option>
                    <option>08:00 PM (Dinner)</option>
                    <option>09:00 PM (Dinner)</option>
                    <option>10:00 PM (Dinner)</option>
                  </select>
                </div>
              </div>

              {/* Guests and Seating */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-hotel-gold" /> Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1">
                    Seating Type
                  </label>
                  <select
                    value={seatingPreference}
                    onChange={(e) => setSeatingPreference(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  >
                    <option>Standard Table</option>
                    <option>Candle Light Romantic Table</option>
                    <option>Family Booth (Olives)</option>
                    <option>Open Rooftop Terrace (Sky Grill)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vignesh"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 094433 23300"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  />
                </div>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-full bg-hotel-green text-white font-medium text-xs hover:bg-hotel-green-light transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 text-hotel-gold" /> Confirm Reservation
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="py-2.5 px-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                </button>
              </div>

              <div className="text-center text-[11px] text-hotel-charcoal-light">
                Direct Restaurant Hotline: <a href="tel:04212233311" className="font-semibold text-hotel-green hover:underline">0421 - 2233311 / 2233300</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
