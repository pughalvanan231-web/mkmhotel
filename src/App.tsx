import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingWidget } from './components/BookingWidget';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Dining } from './components/Dining';
import { Events } from './components/Events';
import { Experiences } from './components/Experiences';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

// Modals
import { BookingModal } from './components/modals/BookingModal';
import { RoomDetailsModal } from './components/modals/RoomDetailsModal';
import { TableReservationModal } from './components/modals/TableReservationModal';
import { EventInquiryModal } from './components/modals/EventInquiryModal';
import { GalleryLightbox } from './components/modals/GalleryLightbox';

import { RoomCategory, GalleryPhoto, GALLERY_PHOTOS, HOTEL_INFO } from './data/hotelData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export const App: React.FC = () => {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingParams, setBookingParams] = useState<{
    roomId?: string;
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
    rooms?: number;
  }>({});

  const [selectedRoomDetails, setSelectedRoomDetails] = useState<RoomCategory | null>(null);
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [tableOutletId, setTableOutletId] = useState('olives');
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [eventHallId, setEventHallId] = useState('diamond-ballroom');
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<GalleryPhoto | null>(null);

  // Handlers
  const handleOpenBooking = (params?: typeof bookingParams) => {
    if (params) setBookingParams(params);
    setBookingModalOpen(true);
  };

  const handleBookRoom = (room: RoomCategory) => {
    setBookingParams({ roomId: room.id });
    setBookingModalOpen(true);
    if (selectedRoomDetails) setSelectedRoomDetails(null);
  };

  const handleReserveTable = (outletId: string) => {
    setTableOutletId(outletId);
    setTableModalOpen(true);
  };

  const handlePlanEvent = (hallId?: string) => {
    if (hallId) setEventHallId(hallId);
    setEventModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1F1A1B] flex flex-col w-full overflow-x-hidden selection:bg-hotel-gold selection:text-[#420608]">
      {/* 01 Navigation with Luxury Top Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 02 Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreRooms={() => scrollToSection('rooms')}
        />

        {/* 03 Floating Booking Widget */}
        <BookingWidget
          onCheckAvailability={(params) => {
            handleOpenBooking(params);
          }}
        />

        {/* 04 About Hotel MKM Rich */}
        <About
          onExploreRooms={() => scrollToSection('rooms')}
          onExploreDining={() => scrollToSection('dining')}
        />

        {/* 05 Rooms & Accommodation */}
        <Rooms
          onSelectRoomDetails={(room) => setSelectedRoomDetails(room)}
          onBookRoom={(room) => handleBookRoom(room)}
        />

        {/* 06 Dining Experiences */}
        <Dining onReserveTable={handleReserveTable} />

        {/* 07 Events & Meetings */}
        <Events onPlanEvent={handlePlanEvent} />

        {/* 08 Hotel Experiences & Amenities */}
        <Experiences onOpenBooking={() => handleOpenBooking()} />

        {/* 09 Verified Guest Reviews */}
        <Reviews />

        {/* 10 Photo Gallery */}
        <Gallery onPhotoClick={(photo) => setActiveLightboxPhoto(photo)} />

        {/* 11 Location & Transit */}
        <Location />
      </main>

      {/* 12 Footer */}
      <Footer />

      {/* Mobile Floating Quick Contact Bar in Royal Red & Gold */}
      <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden bg-[#420608]/95 backdrop-blur-md border border-[#C5A059]/40 rounded-full p-2 shadow-luxury-lg flex items-center justify-between text-white">
        <a
          href={`tel:${HOTEL_INFO.phonePrimary}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white hover:text-[#DFC48B]"
        >
          <Phone className="w-4 h-4 text-[#C5A059]" />
          <span>Call Desk</span>
        </a>

        <div className="w-px h-5 bg-[#C5A059]/30" />

        <a
          href={`https://wa.me/919443323300?text=${encodeURIComponent('Hello Hotel MKM Rich, I would like to inquire about booking a room.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-emerald-400"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <div className="w-px h-5 bg-[#C5A059]/30" />

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFC48B] text-[#330507] text-xs font-bold uppercase tracking-wider shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-[#330507]" />
          <span>Book</span>
        </button>
      </div>

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoomId={bookingParams.roomId}
        initialCheckIn={bookingParams.checkIn}
        initialCheckOut={bookingParams.checkOut}
        initialAdults={bookingParams.adults}
        initialChildren={bookingParams.children}
        initialRoomsCount={bookingParams.rooms}
      />

      <RoomDetailsModal
        room={selectedRoomDetails}
        onClose={() => setSelectedRoomDetails(null)}
        onBookNow={(room) => handleBookRoom(room)}
      />

      <TableReservationModal
        isOpen={tableModalOpen}
        onClose={() => setTableModalOpen(false)}
        initialOutletId={tableOutletId}
      />

      <EventInquiryModal
        isOpen={eventModalOpen}
        onClose={() => setEventModalOpen(false)}
        initialHallId={eventHallId}
      />

      <GalleryLightbox
        photo={activeLightboxPhoto}
        photos={GALLERY_PHOTOS}
        onClose={() => setActiveLightboxPhoto(null)}
        onNavigate={(p) => setActiveLightboxPhoto(p)}
      />
    </div>
  );
};

export default App;
