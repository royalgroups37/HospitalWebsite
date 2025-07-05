'use client';

import React from 'react';

export default function OurDoctors() {
  return (
    <div className="bg-white px-4 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-4 text-center mb-12">
        <div className="flex items-center gap-2 text-[#195aff] font-bold uppercase text-sm">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0.25C6.53587 0.25 6.09075 0.434375 5.76256 0.762563C5.43437 1.09075 5.25 1.53587 5.25 2V5.25H2C1.53587 5.25 1.09075 5.43437 0.762563 5.76256C0.434375 6.09075 0.25 6.53587 0.25 7V11C0.25 11.966 1.034 12.75 2 12.75H5.25V16C5.25 16.966 6.034 17.75 7 17.75H11C11.4641 17.75 11.9092 17.5656 12.2374 17.2374C12.5656 16.9092 12.75 16.4641 12.75 16V12.75H16C16.4641 12.75 16.9092 12.5656 17.2374 12.2374C17.5656 11.9092 17.75 11.4641 17.75 11V7C17.75 6.53587 17.5656 6.09075 17.2374 5.76256C16.9092 5.43437 16.4641 5.25 16 5.25H12.75V2C12.75 1.53587 12.5656 1.09075 12.2374 0.762563C11.9092 0.434375 11.4641 0.25 11 0.25H7Z"
              fill="#195AFF"
            />
          </svg>
          Our Doctors
        </div>
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2c2c2c]">
          Meet Our Specialist Doctors
        </h2>
        <p className="text-base text-[#757272] max-w-2xl">
          Our team of specialist doctors is dedicated to providing expert care across a wide range of medical fields.
        </p>
      </div>

      {/* Doctors Cards */}
   <div className="flex flex-wrap justify-center gap-8">
  {[
    {
      name: 'Dr. John Smith',
      title: 'Cardiologist',
      image: '/Homepagedoctor1.jpg',
    },
    {
      name: 'Dr. Sarah Johnson',
      title: 'Orthopedic Surgeon',
      image: '/Homepagedoctor2.jpg',
    },
    {
      name: 'Dr. Michael Lee',
      title: 'Pediatrician',
      image: '/Homepagedoctor3.jpg',
    },
    {
      name: 'Dr. Emily Davis',
      title: 'Gynecologist',
      image: '/Homepagedoctor4.jpg',
    },
  ].map((doc, index) => (
    <div
      key={index}
      className="w-full sm:w-[45%] lg:w-[22%] max-w-sm flex flex-col items-center gap-4"
    >
      <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
        <img
          src={doc.image}
          alt={doc.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center space-y-1">
        <p className="text-xl font-medium text-[#031e2d]">{doc.name}</p>
        <p className="text-base text-[#131313] opacity-70">{doc.title}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
