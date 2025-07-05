'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AppointmentPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <Header />


        <div className="relative h-[250px] w-full flex items-center justify-start px-6 md:px-16 pt-30 overflow-hidden">
          <img
            src="/Appointement.png"
            alt="Appointment Banner"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          {/* Optional content can go here */}
        </div>


        {/* Appointment Form */}
        <main className="flex-grow px-4 md:px-10 py-10">
          <form className="bg-white max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Branch */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Select Branch <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm">
                <option>--Select Branch--</option>
                <option>Branch A</option>
                <option>Branch B</option>
              </select>
            </div>

            {/* Speciality 1 */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Select Speciality <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm">
                <option>--Select Speciality--</option>
                <option>Cardiology</option>
                <option>Orthopaedics</option>
              </select>
            </div>

            {/* Speciality 2 */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Select Speciality <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm">
                <option>--Select Speciality--</option>
              </select>
            </div>

            {/* Speciality 3 */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Select Speciality <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm">
                <option>--Select Speciality--</option>
              </select>
            </div>

            {/* Doctor */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Select Doctor <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm">
                <option>--Select Doctor--</option>
              </select>
            </div>

            {/* Appointment Date */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Appointment Date <span className="text-red-500">*</span></label>
              <input
                type="date"
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
              />
            </div>

            {/* Buttons */}
            <div className="col-span-full flex gap-4 mt-4 justify-center lg:justify-end">
              <button
                type="reset"
                className="bg-teal-500 text-white px-6 py-2 rounded-md text-sm hover:bg-teal-600"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-cyan-600 text-white px-6 py-2 rounded-md text-sm hover:bg-cyan-700"
              >
                Next
              </button>
            </div>
          </form>
        </main>

      <Footer />
    </div>
  );
}
