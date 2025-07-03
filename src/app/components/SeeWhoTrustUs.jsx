'use client';

import Image from 'next/image';

export default function SeeWhoTrustUs() {
  return (
    <>

      <div className="flex flex-col items-center w-full px-4 md:px-8 lg:px-[100px] py-16 gap-16 bg-[#195aff]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <svg
              width={19}
              height={18}
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 0.25C7.03587 0.25 6.59075 0.434375 6.26256 0.762563C5.93437 1.09075 5.75 1.53587 5.75 2V5.25H2.5C2.03587 5.25 1.59075 5.43437 1.26256 5.76256C0.934375 6.09075 0.75 6.53587 0.75 7V11C0.75 11.966 1.534 12.75 2.5 12.75H5.75V16C5.75 16.966 6.534 17.75 7.5 17.75H11.5C11.9641 17.75 12.4092 17.5656 12.7374 17.2374C13.0656 16.9092 13.25 16.4641 13.25 16V12.75H16.5C16.9641 12.75 17.4092 12.5656 17.7374 12.2374C18.0656 11.9092 18.25 11.4641 18.25 11V7C18.25 6.53587 18.0656 6.09075 17.7374 5.76256C17.4092 5.43437 16.9641 5.25 16.5 5.25H13.25V2C13.25 1.53587 13.0656 1.09075 12.7374 0.762563C12.4092 0.434375 11.9641 0.25 11.5 0.25H7.5Z"
                fill="#FFA250"
              />
            </svg>
            <p className="text-sm font-bold uppercase text-[#ffa250]">Patient Testimonials</p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            Hear from Those Who Trust Our Hospital Link
          </h2>
          <p className="text-sm md:text-base text-[#f4f4f4]">
            Our patients' experiences speak volumes. Read how Our Hospital has provided compassionate,
            expert care and made a difference in their lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {[
            { name: 'Samantha', location: 'HI-TECH CITY', image: '/Homepagetestimonials1.jpg' },
            { name: 'Suman', location: 'Madhapur', image: '/Homepagetestimonials2.jpg' },
            { name: 'Jessica', location: 'Gachibowli', image: '/Homepagetestimonials3.jpg' },
          ].map((person, index) => (
            <div
              key={index}
              className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl p-6 gap-4 transition hover:scale-[1.02]"
            >
              {/* Image + Name */}
              <div className="flex items-center gap-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={88}
                  height={88}
                  className="rounded-2xl object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-white">{person.name}</p>
                  <p className="text-sm text-[#f4f4f4]">{person.location}</p>
                </div>
                <div className="ml-auto flex items-center justify-center h-12 w-12 bg-[#ffa250] rounded-full">
                  <svg
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 0L7 2C6 4 5 7 5 10C6 9.5 7 9.5 8 10.5C9 11.5 9.5 13 9 14.5C8.5 16 7 17.5 5 18C3.5 18 2 17.5 1 16C0 14.5 0 12.5 0.5 10C1 7.5 2 5 3.5 2.5C4 1.5 4.5 0.5 5 0Z"
                      fill="#F4F4F4"
                    />
                  </svg>
                </div>
              </div>

              {/* Testimonial */}
              <p className="text-sm text-[#f4f4f4]">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis. Curabitur tempus urna at turpis condimentum lobortis.
                Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
              </p>

              {/* Stars */}
              <div className="text-[#f8d700] text-base font-semibold">★★★★★</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full pt-[40%] overflow-hidden bg-white">
        <Image
          src="/Homepagesubscribebanner.jpg"
          alt="Banner Icon"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

    </>
  );
}
