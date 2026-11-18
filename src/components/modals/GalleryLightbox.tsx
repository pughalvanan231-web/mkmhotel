import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryPhoto } from '../../data/hotelData';

interface GalleryLightboxProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (photo: GalleryPhoto) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  photo,
  photos,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (!photo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex(p => p.id === photo.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prevIdx]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="w-full flex items-center justify-between text-white py-3 px-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-hotel-gold uppercase tracking-wider font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Hotel MKM Rich Gallery
            </span>
            <span className="text-xs text-gray-400">
              ({currentIndex + 1} of {photos.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative w-full aspect-[16/10] max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/40 border border-white/10">
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-w-full max-h-full object-contain select-none"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-lg hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-lg hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div className="w-full text-center py-4 text-white">
          <h4 className="text-lg font-playfair font-normal">{photo.title}</h4>
          <p className="text-xs text-hotel-gold mt-1 uppercase tracking-widest">{photo.category.toUpperCase()} • 100% ORIGINAL MKM PROPERTY PHOTOGRAPH</p>
        </div>
      </div>
    </div>
  );
};
