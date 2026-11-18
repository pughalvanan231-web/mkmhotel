import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, Check, Send } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Location: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('Room Reservation');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hello Hotel MKM Rich, I am reaching out from your website contact page regarding: ${formSubject}. Name: ${formName || 'Guest'}.`;
    window.open(`https://wa.me/919443323300?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="location" className="py-14 md:py-20 lg:py-28 bg-[#FAF6F0] relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A37E33] font-semibold block">
            Location & Direct Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-playfair font-normal text-[#720E12] leading-tight">
            Conveniently Situated in Rayapuram.
          </h2>
          <p className="text-[15px] sm:text-base text-[#736566] font-light leading-relaxed">
            Positioned in the prime commercial sector of Tiruppur, ensuring swift connectivity to the railway station, knitwear industrial zones, and international airport corridors.
          </p>
        </div>

        {/* 3-Column Info & Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Column 1: Contact Details & Distances */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#720E12]/15 shadow-luxury space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A37E33] font-semibold block mb-1">
                  Official Property Address
                </span>
                <h3 className="font-playfair text-xl text-[#720E12] mb-2">{HOTEL_INFO.name}</h3>
                <p className="text-xs text-[#1F1A1B] leading-relaxed">
                  {HOTEL_INFO.address}
                </p>
                <p className="text-xs text-[#736566] mt-1 font-mono">
                  Plus Code: {HOTEL_INFO.plusCode}
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-col gap-2.5 pt-1">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Hotel+MKM+Rich+Rayapuram+Tiruppur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 px-4 rounded-xl bg-[#720E12] hover:bg-[#8F171B] text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#DFC48B]" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`tel:${HOTEL_INFO.phonePrimary}`}
                  className="w-full h-11 px-4 rounded-xl bg-[#F5EFE6] hover:bg-[#ECE3D5] text-[#720E12] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 border border-[#720E12]/15"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call: {HOTEL_INFO.phonePrimary}</span>
                </a>

                <button
                  onClick={handleWhatsApp}
                  className="w-full h-11 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* Telephones & Email */}
              <div className="pt-4 border-t border-[#720E12]/10 space-y-2 text-xs text-[#1F1A1B]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>{HOTEL_INFO.phones.join(' / ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-[#720E12] underline">
                    {HOTEL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>24/7 Front Desk • Check-in: 12:00 PM</span>
                </div>
              </div>
            </div>

            {/* Nearby Transit Hubs Card in Royal Maroon & Gold */}
            <div className="bg-[#420608] text-white p-6 rounded-3xl border border-[#C5A059]/40 shadow-luxury space-y-3">
              <h4 className="font-playfair text-lg text-white">Proximity & Transit</h4>
              <div className="space-y-2 text-xs">
                {HOTEL_INFO.distances.map((dist, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-[#58090C] last:border-none">
                    <span className="text-[#FAF6F0]/90">{dist.place}</span>
                    <span className="text-[#DFC48B] font-semibold">{dist.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Google Maps Embed (lg:col-span-4) */}
          <div className="lg:col-span-4 h-full min-h-[420px] rounded-3xl overflow-hidden border border-[#720E12]/15 shadow-luxury bg-white flex flex-col">
            <div className="p-4 bg-[#420608] text-white flex items-center justify-between border-b border-[#C5A059]/30">
              <span className="text-xs font-playfair flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Rayapuram, Tiruppur
              </span>
              <span className="text-xs text-[#DFC48B] bg-black/40 px-2 py-0.5 rounded border border-[#C5A059]/30">Interactive Map</span>
            </div>
            <div className="flex-1 w-full relative min-h-[380px]">
              <iframe
                title="Hotel MKM Rich Location Map"
                src={HOTEL_INFO.gps.googleMapsEmbed}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 3: Contact Inquiry Form (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#720E12]/15 shadow-luxury">
            <span className="text-xs uppercase tracking-widest text-[#A37E33] font-semibold block mb-1">
              Direct Inquiry
            </span>
            <h3 className="font-playfair text-xl text-[#720E12] mb-4">Send a Message</h3>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-[#720E12] text-[#DFC48B] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-playfair text-lg text-[#720E12]">Message Sent Successfully!</h4>
                <p className="text-xs text-[#736566] leading-relaxed">
                  Thank you, {formName}. Our reservation desk will reach out to you shortly at {formPhone}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-full bg-[#720E12] text-white text-xs font-semibold hover:bg-[#8F171B]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#720E12] font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Balasubramanian"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full h-10 px-3 bg-[#FAF6F0] border border-[#720E12]/20 rounded-xl text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#720E12] font-semibold mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 094433 23300"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full h-10 px-3 bg-[#FAF6F0] border border-[#720E12]/20 rounded-xl text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#720E12] font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. guest@example.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full h-10 px-3 bg-[#FAF6F0] border border-[#720E12]/20 rounded-xl text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#720E12] font-semibold mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full h-10 px-3 bg-[#FAF6F0] border border-[#720E12]/20 rounded-xl text-xs focus:outline-none focus:border-[#C5A059]"
                  >
                    <option>Room Reservation & Corporate Tariffs</option>
                    <option>Banquet & Conference Hall Booking</option>
                    <option>Olives / Sky Grill Table Reservation</option>
                    <option>3-Star Outdoor Catering Request</option>
                    <option>General Feedback / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#720E12] font-semibold mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Write your dates, room requirements or details..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full p-3 bg-[#FAF6F0] border border-[#720E12]/20 rounded-xl text-xs focus:outline-none focus:border-[#C5A059] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 px-4 rounded-full bg-[#720E12] hover:bg-[#8F171B] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-[#DFC48B]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
