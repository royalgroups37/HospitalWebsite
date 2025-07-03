'use client';
import React from 'react';
import { FaMapMarkerAlt, FaBuilding, FaRupeeSign, FaExpandArrowsAlt, FaCalendarAlt } from 'react-icons/fa';
import Header from '../components/Header';
import PropertyForm from '../components/PropertyForm';

import Footer from '../components/Footer';

const Properties = () => {
  return (
    <div className="min-h-screen bg-white tracking-wide">
      <Header />

      <div className="flex flex-col w-full gap-8 px-6 md:px-20">
        {/* Header Text */}
        <div className="flex flex-col gap-4 pt-10">
          <p className="text-3xl md:text-5xl font-semibold text-[#1f4b43]">
            Find Your Dream Property
          </p>
          <p className="text-base md:text-lg font-medium text-[#1f4b43]">
            Welcome, where your dream property awaits in every corner of our beautiful world. Explore our
            curated selection of properties, each offering a unique story and a chance to redefine your
            life. With categories to suit every dreamer, your journey
          </p>
        </div>

        {/* Search Heading & Button */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl shadow p-6">
          <p className="text-lg md:text-xl font-medium text-[#1f4b43] mb-4 md:mb-0">
            Search For A Property
          </p>
          <button className="px-6 py-3 bg-[#1f4b43] text-white rounded-md font-medium hover:opacity-90 transition">
            Find Property
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-6">
          {/* Location */}
          <div className="flex items-center w-full md:w-[300px] gap-4 p-4 rounded-xl border border-neutral-800">
            <FaMapMarkerAlt className="text-[#1f4b43]" />
            <div className="border-l border-gray-700 h-6"></div>
            <p className="text-[#1f4b43] font-medium">Location</p>
          </div>

          {/* Property Type */}
          <div className="flex items-center w-full md:w-[300px] gap-4 p-4 rounded-xl border border-neutral-800">
            <FaBuilding className="text-[#1f4b43]" />
            <div className="border-l border-gray-700 h-6"></div>
            <p className="text-[#1f4b43] font-medium">Property Type</p>
          </div>

          {/* Pricing Range */}
          <div className="flex items-center w-full md:w-[300px] gap-4 p-4 rounded-xl border border-neutral-800">
            <FaRupeeSign className="text-[#1f4b43]" />
            <div className="border-l border-gray-700 h-6"></div>
            <p className="text-[#1f4b43] font-medium">Pricing Range</p>
          </div>

          {/* Property Size */}
          <div className="flex items-center w-full md:w-[300px] gap-4 p-4 rounded-xl border border-neutral-800">
            <FaExpandArrowsAlt className="text-[#1f4b43]" />
            <div className="border-l border-gray-700 h-6"></div>
            <p className="text-[#1f4b43] font-medium">Property Size</p>
          </div>

          {/* Build Year */}
          <div className="flex items-center w-full md:w-[300px] gap-4 p-4 rounded-xl border border-neutral-800">
            <FaCalendarAlt className="text-[#1f4b43]" />
            <div className="border-l border-gray-700 h-6"></div>
            <p className="text-[#1f4b43] font-medium">Build Year</p>
          </div>
        </div>
      </div>
      <PropertyForm />
      <Footer />
    </div>
  );
};

export default Properties;
