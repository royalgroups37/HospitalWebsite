'use client';

import Image from 'next/image';

const TopImagesection = () => (
  <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden bg-white">
    <Image
      src="/HomepageHeader.jpg"
      alt="Banner Icon"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, 
             (max-width: 768px) 100vw, 
             (max-width: 1024px) 100vw, 
             1440px"
      priority
    />
  </div>
);

export default TopImagesection;
