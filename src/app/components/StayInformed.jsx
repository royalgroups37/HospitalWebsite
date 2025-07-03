'use client';

import Image from 'next/image';

const StayInformed = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-[100px] gap-16 mx-auto py-12">
      {/* Title Section */}
      <div className="flex flex-col justify-start items-center w-full max-w-[730px] gap-4 text-center">
        <div className="flex items-center gap-3">
          <svg
            width={19}
            height={18}
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 0.25C7.04 0.25 6.59 0.43 6.26 0.76C5.93 1.09 5.75 1.54 5.75 2V5.25H2.5C2.04 5.25 1.59 5.43 1.26 5.76C0.93 6.09 0.75 6.54 0.75 7V11C0.75 11.97 1.53 12.75 2.5 12.75H5.75V16C5.75 16.97 6.53 17.75 7.5 17.75H11.5C11.96 17.75 12.41 17.57 12.74 17.24C13.07 16.91 13.25 16.46 13.25 16V12.75H16.5C16.96 12.75 17.41 12.57 17.74 12.24C18.07 11.91 18.25 11.46 18.25 11V7C18.25 6.54 18.07 6.09 17.74 5.76C17.41 5.43 16.96 5.25 16.5 5.25H13.25V2C13.25 1.54 13.07 1.09 12.74 0.76C12.41 0.43 11.96 0.25 11.5 0.25H7.5Z"
              fill="#195AFF"
            />
          </svg>
          <p className="text-sm font-bold uppercase text-[#195aff]">Blog & News</p>
        </div>
        <p className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold capitalize text-[#2c2c2c]">
          Stay Informed with the Latest In
        </p>
        <p className="text-base text-[#757272] opacity-80">
          Our Blog & News section keeps you updated with the latest health tips, medical breakthroughs, clinic news, and wellness advice.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Large Blog Card */}
        <div className="relative w-full lg:w-[866px] h-[500px] lg:h-[668px] rounded-3xl overflow-hidden">
          <Image
            src="/Homepageblog1.jpg"
            fill
            alt="Health Checkups"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-10">
            <p className="text-sm font-bold uppercase">January 15, 2025 - 0 Comments - News</p>
            <p className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold mt-4">
              Understanding the Importance of Regular Health Checkups
            </p>
            <div className="mt-6 inline-flex px-6 py-4 rounded-full bg-[#195aff] text-base font-bold text-white">
              Read More
            </div>
          </div>
        </div>

        {/* Small Blog Cards */}
        <div className="flex flex-col w-full lg:w-[342px] gap-8">
          {/* Card 1 */}
          <div className="flex flex-col gap-4">
            <div className="h-[214px] w-full rounded-xl overflow-hidden">
              <Image
            src="/Homepageblog2.jpg"
                alt="Mental Wellness"
                width={342}
                height={214}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-[#2c2c2c]">
                How to Manage Stress and Improve Mental Well-being
              </p>
              <p className="text-base text-[#757272] opacity-80">
                Tuesday - January 24, 2025
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4">
            <div className="h-[214px] w-full rounded-xl overflow-hidden">
              <Image
            src="/Homepageblog3.jpg"
                alt="Emergency Care"
                width={342}
                height={214}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-[#2c2c2c]">
                New Advances in Emergency Care: What You Need to Know
              </p>
              <p className="text-base text-[#757272] opacity-80">
                Tuesday - January 24, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayInformed;
