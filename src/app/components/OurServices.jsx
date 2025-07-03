'use client';

import React from 'react';
import { FaSyringe, FaUserMd, FaHeartbeat, FaNotesMedical, FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaSyringe className="text-[32px] text-[#195aff]" />, // Pharmacy
    title: 'Pharmacy Service',
    description: 'Convenient access to prescription medications & expert pharmaceutical advice, all in one place.',
    bg: 'bg-[#f4f7ff]',
  },
  {
    icon: <FaUserMd className="text-[32px] text-[#195aff]" />, // Medical Specialist
    title: 'Medical Specialist',
    description: 'Consult experienced specialists for accurate diagnoses & personalized treatment plans.',
    bg: 'bg-[#195aff]',
    textColor: 'text-white',
  },
  {
    icon: <FaHeartbeat className="text-[32px] text-[#195aff]" />, // Medical Checkup
    title: 'Medical Checkup',
    description: 'Regular health checkups to monitor your well-being and detect potential issues early.',
    bg: 'bg-[#f4f7ff]',
  },
  {
    icon: <FaNotesMedical className="text-[32px] text-[#195aff]" />, // Health Consultation
    title: 'Health Consultation',
    description: 'Professional guidance on maintaining a healthy lifestyle, managing chronic conditions, and more.',
    bg: 'bg-[#f4f7ff]',
  },
  {
    icon: <FaShieldAlt className="text-[32px] text-[#195aff]" />, // Health Assurance
    title: 'Health Assurance',
    description: 'Comprehensive health insurance plans offering financial protection for medical treatments.',
    bg: 'bg-[#f4f7ff]',
  },
];

const Services = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-20 py-16 bg-white">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
        <div className="flex items-center gap-2">
          <svg
            width={19}
            height={18}
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 0.25C7.03587 0.25 6.59075 0.434375 6.26256 0.762563C5.93437 1.09075 5.75 1.53587 5.75 2V5.25H2.5C2.03587 5.25 1.59075 5.43437 1.26256 5.76256C0.934375 6.09075 0.75 6.53587 0.75 7V11C0.75 11.966 1.534 12.75 2.5 12.75H5.75V16C5.75 16.966 6.534 17.75 7.5 17.75H11.5C11.9641 17.75 12.4092 17.5656 12.7374 17.2374C13.0656 16.9092 13.25 16.4641 13.25 16V12.75H16.5C16.9641 12.75 17.4092 12.5656 17.7374 12.2374C18.0656 11.9092 18.25 11.4641 18.25 11V7C18.25 6.53587 18.0656 6.09075 17.7374 5.76256C17.4092 5.43437 16.9641 5.25 16.5 5.25H13.25V2C13.25 1.53587 13.0656 1.09075 12.7374 0.762563C12.4092 0.434375 11.9641 0.25 11.5 0.25H7.5Z"
              fill="#195AFF"
            />
          </svg>
          <p className="text-sm font-bold uppercase text-[#195aff]">Our Services</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2c2c2c]">
          Comprehensive Healthcare Solutions
        </h2>
        <p className="text-[#757272] text-base opacity-80">
          At CareLink, we offer a wide range of medical services tailored to your needs, from routine check-ups to specialized treatments.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full max-w-[300px] h-[300px] rounded-3xl overflow-hidden p-8 flex flex-col justify-between ${service.bg}`}
          >
            <div className="flex justify-center items-center w-20 h-10 rounded-full bg-neutral-50 mb-4">
              <p className="text-[32px] text-[#195aff]">{service.icon}</p>
            </div>
            <div>
              <h3 className={`text-2xl font-medium mb-2 ${service.textColor || 'text-[#2c2c2c]'}`}>
                {service.title}
              </h3>
              <p className={`text-base ${service.textColor ? 'text-white' : 'text-[#757272]'} opacity-80`}>
                {service.description}
              </p>
            </div>
          </div>
        ))}

        {/* Emergency Call Card */}
        <div className="w-full max-w-[300px] h-[300px] rounded-3xl bg-[#f4f7ff] p-8 flex flex-col justify-between items-center text-center">
          <div>
            <h3 className="text-2xl font-medium text-[#2c2c2c] mb-2">Emergency Call</h3>
            <p className="text-[#757272] text-base">
              Quick access to emergency services, ensuring immediate care when you need it the most.
            </p>
          </div>
          <button className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full border border-gray-400 text-base font-bold text-[#2c2c2c]">
            Contact Us <span className="text-xl"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
