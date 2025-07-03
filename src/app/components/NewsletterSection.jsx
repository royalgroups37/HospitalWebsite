'use client';

import Image from 'next/image';

export default function NewsletterSection() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden rounded-xl py-12 px-4 sm:px-8 md:px-12 lg:px-[100px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-image.jpeg"
          alt="Newsletter Banner"
          fill
          className="object-cover object-center"
          quality={90}
          priority
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2c2c2c]">
          Subscribe to Our Newsletter for Health Tips and Updates
        </h2>
        {/* Subheading */}
        <p className="text-sm sm:text-base text-[#2c2c2c] opacity-80">
          Subscribe to Our Hospital's newsletter and stay up to date on our services, medical advice, and more!
        </p>

        {/* Input + Button Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-2 mt-2 w-full max-w-[577px] bg-white border border-[#ddd] rounded-full pl-6 pr-3 py-3">
          <div className="flex items-center flex-grow text-[#808080] gap-2">
            <span className="text-base">✉</span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-transparent text-sm outline-none placeholder-[#808080]"
            />
          </div>
          <button
            className="bg-[#195aff] text-white text-sm font-semibold rounded-full px-6 py-3 w-full sm:w-auto"
            style={{
              boxShadow: '-4px -4px 8px rgba(19,19,19,0.04), 4px 4px 8px rgba(25,90,255,0.2)',
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
