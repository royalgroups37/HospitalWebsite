'use client';

import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter, FaPhoneAlt, FaEnvelope, FaHeadset, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <div
      className="flex flex-col items-center w-full overflow-hidden gap-16 px-4 py-12 md:px-12 lg:px-24"
      style={{ background: 'linear-gradient(179.39deg, #031e2d 1.17%, #000c2c 86.81%)' }}
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-12">
        {/* Branding */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-2 rounded-full">
              <svg width="24" height="24" fill="#195AFF"><circle cx="12" cy="12" r="10" /></svg>
            </div>
            <p className="text-2xl font-bold text-white">HOSPITAL NAME</p>
          </div>
          <p className="text-3xl font-semibold text-white mb-4">Your Health, Our Priority Anytime, Anywhere</p>
          <p className="text-white text-opacity-80">Reach out to us for all your healthcare needs.</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-xl font-bold text-[#ffa250] mb-2">Company</p>
            <ul className="text-white text-opacity-80 space-y-2">
              <li>About Us</li>
              <li>Our Mission & Vision</li>
              <li>Careers</li>
              <li>Legal Notice</li>
              <li>Global Network</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold text-[#ffa250] mb-2">Services</p>
            <ul className="text-white text-opacity-80 space-y-2">
              <li>Pharmacy Services</li>
              <li>Medical Specialties</li>
              <li>Health Checkups</li>
              <li>Health Consultation</li>
              <li>Emergency Services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <button className="flex items-center gap-2 bg-[#195aff] text-white px-6 py-3 rounded-full">
          <FaPhoneAlt /> Contact Us
        </button>
        <button className="flex items-center gap-2 bg-[#195aff] text-white px-6 py-3 rounded-full">
          <FaEnvelope /> Email Us
        </button>
        <button className="flex items-center gap-2 bg-[#195aff] text-white px-6 py-3 rounded-full">
          <FaHeadset /> (+91) 123-456-7890
        </button>
        <button className="flex items-center gap-2 bg-[#195aff] text-white px-6 py-3 rounded-full">
          <FaMapMarkerAlt /> Location on Map
        </button>
      </div>

      {/* Divider */}
      <hr className="border-t border-white border-opacity-50 w-full" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-white text-sm">
        <div className="flex gap-4">
          <FaInstagram />
          <FaLinkedinIn />
          <FaFacebookF />
          <FaTwitter />
        </div>
        <div className="flex gap-6">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <p className="text-center">2025 © <strong>Hospital</strong>. All Rights Reserved.</p>
      </div>
    </div>
  );
}
