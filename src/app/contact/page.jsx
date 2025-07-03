'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactFormPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-10 mt-30">
        <div className="bg-white border border-gray-500 rounded-lg w-full max-w-4xl p-6 md:p-10">
          <form className="space-y-6">
            {/* Grid Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full border border-gray-500 px-3 py-4 rounded-md text-md text-gray-500"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full border border-gray-500 px-3 py-4 rounded-md text-md text-gray-500 "
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full border border-gray-500 px-3 py-4 rounded-md text-md text-gray-500"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full border border-gray-500 px-3 py-4 rounded-md text-md text-gray-500"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full border border-gray-500 px-3 py-4 rounded-md text-md text-gray-500"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">Speciality*</label>
                <select className="w-full border border-gray-500 px-3 py-4 rounded-md text-md text-gray-500">
                  <option>Select Speciality</option>
                  <option>Orthopaedics</option>
                  <option>Cardiology</option>
                  <option>Pulmonology</option>
                </select>
              </div>
            </div>

            {/* Query */}
            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">Query</label>
              <textarea
                rows={4}
                placeholder="Enter your Query here..."
                className="w-full border border-gray-500 px-3 py-4 rounded-md text-md text-gray-500"
              ></textarea>
            </div>

            {/* Checkbox and Submit */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <label className="flex items-center text-md text-gray-600">
                <input type="checkbox" className="mr-2" />
                I agree with&nbsp;
                <a href="#" className="text-[#195aff] underline">Terms of Use</a>
                &nbsp;and&nbsp;
                <a href="#" className="text-[#195aff] underline">Privacy Policy</a>
              </label>

              <button
                type="submit"
                className="bg-[#195aff] text-white text-md font-medium px-6 py-4 rounded-md hover:bg-blue-600"
              >
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
