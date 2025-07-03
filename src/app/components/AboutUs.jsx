'use client';
import React from 'react';

export default function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[100px] py-12 gap-12 relative">
      {/* Images Section */}
      <div className="relative w-full max-w-[586px] h-[510px]">
        <img
          src="/Homepageaboutus1.jpg"
          className="w-[284.8px] h-[411.01px] absolute left-[0] top-[19.5px] rounded-3xl object-cover"
        />
        <div className="w-[284.79px] h-[410.99px]">
          <img
            src="/Homepageaboutus2.jpg"
            className="w-[284.79px] h-[410.99px] absolute left-[301px] top-[118.51px] rounded-3xl object-cover"
          />
          <svg
            width={68}
            height={67}
            viewBox="0 0 68 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[410px] top-[303.33px]"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M34.2 62.6c-7.7 0-15.1-3.1-20.6-8.6C8.2 48.6 5.1 41.3 5.1 33.5s3.1-15.1 8.6-20.6C19.1 7.5 26.5 4.5 34.2 4.5s15.1 3.1 20.6 8.6c5.4 5.4 8.5 12.9 8.5 20.4s-3.1 15.1-8.6 20.6c-5.4 5.4-12.8 8.5-20.5 8.5Zm0 4.2c8.8 0 17.3-3.5 23.5-9.7 6.2-6.2 9.7-14.7 9.7-23.5s-3.5-17.3-9.7-23.5c-6.2-6.2-14.7-9.7-23.5-9.7S16.9 3.8 10.7 10c-6.2 6.2-9.7 14.7-9.7 23.5s3.5 17.3 9.7 23.5c6.2 6.2 14.7 9.7 23.5 9.7Z"
                fill="#FAFAFA"
              />
              <path
                d="M27 21.3c.3-.2.7-.2 1.1-.2.4 0 .8.1 1.2.4l14.5 10.4c.3.2.6.5.7.8.1.3.2.6.2.9s-.1.6-.2.9c-.1.3-.4.6-.7.8L29.2 45.6c-.3.2-.7.4-1.1.4s-.8-.1-1.2-.3c-.3-.2-.6-.4-.8-.8-.2-.3-.3-.7-.3-1.1V23.2c0-.4.1-.8.3-1.1.2-.4.5-.6.9-.8Z"
                fill="#FAFAFA"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="66.42"
                  height="66.42"
                  fill="white"
                  transform="translate(0.98 0.33)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-start items-start w-full max-w-[531px] gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 0.25C6.29 0.25 5.84 0.43 5.51 0.76C5.18 1.09 5 1.54 5 2V5.25H1.75C1.29 5.25 0.84 5.43 0.51 5.76C0.18 6.09 0 6.54 0 7V11C0 11.97 0.78 12.75 1.75 12.75H5V16C5 16.97 5.78 17.75 6.75 17.75H10.75C11.21 17.75 11.66 17.57 11.99 17.24C12.32 16.91 12.5 16.46 12.5 16V12.75H15.75C16.21 12.75 16.66 12.57 16.99 12.24C17.32 11.91 17.5 11.46 17.5 11V7C17.5 6.54 17.32 6.09 16.99 5.76C16.66 5.43 16.21 5.25 15.75 5.25H12.5V2C12.5 1.54 12.32 1.09 11.99 0.76C11.66 0.43 11.21 0.25 10.75 0.25H6.75Z"
                fill="#195AFF"
              />
            </svg>
            <p className="text-sm font-bold uppercase text-[#195aff]">About Us</p>
          </div>
          <p className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#2c2c2c] capitalize">
            Our Hospital Create a Safe, Your Health Our Priority
          </p>
        </div>
        <p className="text-base text-[#757272] opacity-80">
          Our Hospital provides top-quality healthcare with experienced doctors, emergency services,
          and round-the-clock support. Your trusted partner for a healthier life.
        </p>

        {/* Vision Cards */}
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 w-full max-w-[232px]">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#e7edff]">
              <p className="text-2xl text-[#195aff]"></p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-medium text-[#2c2c2c]">Our Vision</p>
              <p className="text-base text-[#757272] opacity-80">
                To be a trusted leader in quality, accessible, and compassionate healthcare.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 w-full max-w-[232px]">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#e7edff]">
              <p className="text-2xl text-[#195aff]"></p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-medium text-[#2c2c2c]">Our Mission</p>
              <p className="text-base text-[#757272] opacity-80">
                Our Hospital delivers expert, patient-focused care with 24/7, advanced technology,
                and a focus on wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button className="px-6 py-4 rounded-full bg-[#195aff] text-white font-bold text-base">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
