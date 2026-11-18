import React, { useState } from 'react';
import { X, Calendar, Users, Briefcase, Phone, MessageSquare, Check, Sparkles, Building2 } from 'lucide-react';
import { BANQUET_HALLS, EventVenue, HOTEL_INFO } from '../../data/hotelData';

interface EventInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialHallId?: string;
}

export const EventInquiryModal: React.FC<EventInquiryModalProps> = ({
  isOpen,
  onClose,
  initialHallId = 'diamond-ballroom'
}) => {
  const [selectedHallId, setSelectedHallId] = useState(initialHallId);
  const [eventType, setEventType] = useState('Corporate Conference / Seminar');
  const [eventDate, setEventDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendees, setAttendees] = useState(100);
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [needsCatering, setNeedsCatering] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentHall = BANQUET_HALLS.find(h => h.id === selectedHallId) || BANQUET_HALLS[0];

  const handleWhatsApp = () => {
    const text = `Hello Hotel MKM Rich Banquet Sales, I would like to inquire about hosting an event:
- Venue: ${currentHall.name} (Capacity: up to ${currentHall.capacity})
- Event Type: ${eventType}
- Tentative Date: ${eventDate}
- Expected Attendees: ${attendees}
- Organization / Company: ${companyName || 'Not specified'}
- Contact Person: ${contactPerson} (${contactPhone})
- Catering Required: ${needsCatering ? 'Yes (Veg / Non-Veg Buffets)' : 'No'}

Please share venue proposal, packages, and date availability. Thank you!`;

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
        <div className="bg-[#420608] px-6 py-4 text-hotel-ivory flex items-center justify-between border-b border-[#C5A059]/30">
          <div>
            <span className="text-[#DFC48B] text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Banquet & Meetings
            </span>
            <h3 className="text-xl sm:text-2xl font-playfair font-normal text-white">
              Plan Your Event With Us
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
              <h4 className="text-xl font-playfair text-hotel-green">Event Proposal Requested</h4>
              <p className="text-sm text-hotel-charcoal-light max-w-md mx-auto">
                Thank you, <strong className="text-hotel-green">{contactPerson}</strong>. Our dedicated event coordinator has received your enquiry for <strong className="text-hotel-green">{currentHall.name}</strong> on {eventDate}. We will send you a tailored proposal and schedule a site visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Message Event Sales on WhatsApp
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
              {/* Hall Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1.5">
                  Select Venue
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {BANQUET_HALLS.map((hall) => (
                    <button
                      type="button"
                      key={hall.id}
                      onClick={() => setSelectedHallId(hall.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedHallId === hall.id
                          ? 'border-hotel-gold bg-hotel-green text-white shadow-md'
                          : 'border-hotel-ivory-dark bg-white hover:border-hotel-gold/50 text-hotel-charcoal'
                      }`}
                    >
                      <p className={`text-xs font-semibold ${selectedHallId === hall.id ? 'text-white' : 'text-hotel-green'}`}>
                        {hall.name}
                      </p>
                      <p className={`text-[10px] mt-0.5 ${selectedHallId === hall.id ? 'text-hotel-gold-light' : 'text-hotel-charcoal-light'}`}>
                        Up to {hall.capacity} guests
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Event Type & Date */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-hotel-gold" /> Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  >
                    <option>Corporate Conference / Seminar</option>
                    <option>Textile / Export Dealer Meet</option>
                    <option>Wedding Reception / Engagement</option>
                    <option>Product Launch</option>
                    <option>Board Meeting / Executive Review</option>
                    <option>Family Celebration / Birthday</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-hotel-gold" /> Event Date
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  />
                </div>
              </div>

              {/* Attendees & Organization */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-hotel-gold" /> Expected Attendees
                  </label>
                  <input
                    type="number"
                    min={10}
                    max={currentHall.capacity}
                    value={attendees}
                    onChange={(e) => setAttendees(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-hotel-gold" /> Organization / Company
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Textile Exports Ltd"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  />
                </div>
              </div>

              {/* Contact Person & Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hotel-green font-semibold mb-1">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Babu"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
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
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-hotel-gold/30 rounded-xl text-xs focus:outline-none focus:border-hotel-gold"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-hotel-ivory-dark text-xs text-hotel-charcoal">
                <input
                  type="checkbox"
                  id="catering"
                  checked={needsCatering}
                  onChange={(e) => setNeedsCatering(e.target.checked)}
                  className="rounded text-hotel-gold focus:ring-hotel-gold"
                />
                <label htmlFor="catering" className="cursor-pointer">
                  Include 3-Star In-House Catering (Buffet lunch/dinner with dedicated Veg & Non-Veg kitchens)
                </label>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-full bg-hotel-green text-white font-medium text-xs hover:bg-hotel-green-light transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 text-hotel-gold" /> Request Event Proposal
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
                Direct Banquet Sales: <a href="tel:04212233300" className="font-semibold text-hotel-green hover:underline">0421 - 2233300 / 2233311</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
