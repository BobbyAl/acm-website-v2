import React, { useState } from 'react';
import OfficerCard from './OfficerCard';

interface OfficerCardProps {
  image: string;
  name: string;
  position: string;
  focus: string[];
  socials: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  quote: string;
  isActive?: boolean;
}

interface OfficerCarouselProps {
  officers: OfficerCardProps[];
}

const OfficerCarousel = ({ officers }: OfficerCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Don't render carousel if no officers
  if (!officers || officers.length === 0) {
    return (
      <div className="text-center text-secondary">
        No officers in this committee yet.
      </div>
    );
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : officers.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < officers.length - 1 ? prev + 1 : 0));
  };

  const getVisibleOfficers = () => {
    const result = [];
    // Only proceed if we have officers
    if (officers.length > 0) {
      for (let i = -1; i <= 1; i++) {
        let index = currentIndex + i;
        
        // Handle wrapping around
        if (index < 0) index = officers.length - 1;
        if (index >= officers.length) index = 0;
        
        result.push({
          ...officers[index],
          isActive: i === 0
        });
      }
    }
    return result;
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-center items-center gap-8">
        {getVisibleOfficers().map((officer, index) => (
          <OfficerCard
            key={`${officer.name}-${index}`}
            {...officer}
          />
        ))}
      </div>
      
      {officers.length > 1 && (
        <>
          <button
            className="absolute left-24 top-1/2 -translate-y-1/2 bg-white/[0.1] hover:bg-white/[0.2] border border-white/[0.2] rounded p-2"
            onClick={handlePrevious}
          >
            ←
          </button>
          <button
            className="absolute right-24 top-1/2 -translate-y-1/2 bg-white/[0.1] hover:bg-white/[0.2] border border-white/[0.2] rounded p-2"
            onClick={handleNext}
          >
            →
          </button>
        </>
      )}
    </div>
  );
};

export default OfficerCarousel;