"use client";

import { useState, useEffect } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type CarouselType = {
  carouselSet: string[];
  title?: string;
  startIndex?: number;
  onClose?: () => void;
};

export default function Carousel({
  carouselSet,
  title,
  startIndex = 0,
  onClose,
}: CarouselType) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselSet.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselSet.length) % carouselSet.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-5xl h-[85vh] md:h-[90vh] bg-neutral-950 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Counter */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-30 bg-black/70 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium">
          {currentIndex + 1} / {carouselSet.length}
        </div>

        {/* Close */}
        <button
          className="absolute top-3 right-3 md:top-4 md:right-4 z-30 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition"
          onClick={onClose}
        >
          <XMarkIcon className="w-7 h-7 md:w-8 md:h-8" />
        </button>

        {/* Left */}
        <button
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="w-7 h-7 md:w-9 md:h-9" />
        </button>

        {/* Right */}
        <button
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="w-7 h-7 md:w-9 md:h-9" />
        </button>

        {/* Slider */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carouselSet.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full h-full flex-shrink-0"
            >
              <Image
                src={src}
                alt={title || `Image ${idx + 1}`}
                fill
                className="object-contain"
                priority={Math.abs(idx - currentIndex) <= 1}
                quality={82}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}