'use client';

import Image from 'next/image';

const cards = [
  {
    title: 'Lorem ipsum',
    imgSrc: '/homepageimage1.jpg',
  },
  {
    title: 'Lorem ipsum',
    imgSrc: '/homepageimage2.jpg',
  },
  {
    title: 'Lorem ipsum',
    imgSrc: '/homepageimage3.jpg',
  },
];

const WelcomeSection = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-10 flex flex-col items-center gap-8 text-center">
      <p className="text-[#195aff] text-xl font-bold uppercase">Welcome to Our Hospital</p>
      <h2 className="text-3xl md:text-4xl text-[#2c2c2c] font-semibold">A Great Place to Receive Care</h2>
      <p className="max-w-4xl text-[#757272] text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat
        faucibus porttitor enim et.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-7xl">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full max-w-sm mx-auto">
            <div className="rounded-2xl overflow-hidden relative w-full h-[300px]">
              <Image
                src={card.imgSrc}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md -mb-6 z-10">
                <p className="text-[#212124] text-lg font-semibold capitalize">{card.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WelcomeSection;
