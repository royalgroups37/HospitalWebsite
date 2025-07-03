'use client';

import Image from 'next/image';

const TopImagesection = () => (
  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-white mt-30">
    <Image
      src="/HomepageHeader.jpg"
      alt="Banner Icon"
      fill
      className="object-cover"
      sizes="100vw"
      priority
    />
  </div>
);

export default TopImagesection;
