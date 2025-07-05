'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServiceDetails = ({ service, onBack }) => {
  if (!service) return <div className="text-center py-20">Service Not Found</div>;

  return (
    <div className="min-h-screen bg-white tracking-wide pt-30">
      <Header />

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-[1440px] mx-auto px-4 md:px-20 py-10 gap-6">
        {/* Image and Title */}
        <div className="flex items-center gap-4">
          <div className="w-[120px] h-[120px] relative rounded-full overflow-hidden">
            <Image
              src={service.image || '/default-image.jpg'} // fallback image
              alt={service.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-4xl font-semibold text-[#555]">{service.name}</h2>
        </div>

        {/* Enquiry Form */}
        <div className="w-full max-w-xl border border-[#b5b5b5] rounded-b-lg p-5 space-y-4">
          <div>
            <label className="text-sm font-medium text-[#757272]">Name</label>
            <input
              type="text"
              className="w-full border-b border-[#707070] py-2 outline-none text-sm text-gray-600"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#757272]">Type Your Query</label>
            <input
              type="text"
              className="w-full border-b border-[#707070] py-2 outline-none text-sm text-gray-600"
              placeholder="Your query here"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
            <div className="flex items-center gap-2 border-b border-[#707070] pb-2 w-full sm:w-[70%]">
              <span className="text-sm font-medium text-[#757272]">+91</span>
              <input
                type="tel"
                className="w-full outline-none text-sm text-gray-600"
                placeholder="Phone Number"
              />
            </div>
            <button className="bg-[#b3b3b3] px-4 py-1.5 rounded text-xs text-[#555] w-full sm:w-auto">
              Get OTP
            </button>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs text-[#757272]">
              I agree with the Terms & Conditions and Privacy Policy
            </p>
          </div>

          <p className="text-[10px] text-[#757272] font-medium">
            * By submitting this form, you consent to receive communication from us via call, WhatsApp, email, and SMS.
          </p>

          <div className="pt-3">
            <button className="bg-[#195aff] text-white px-8 py-2 text-sm font-semibold rounded hover:bg-blue-600 w-full sm:w-auto">
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 py-10 flex flex-col gap-12">
        {/* About */}
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold text-[#555]">{service.name}</h2>
          <div className="space-y-2">
            <p className="text-lg font-medium text-[#212529]">{service.tagline || `Best ${service.name} Hospital`}</p>
            <p className="text-base font-medium text-[#757272]">{service.description}</p>
          </div>
        </div>

        {/* Diseases Treated */}
        {service.diseases?.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#555]">Diseases Treated</h3>
            <ul className="list-disc pl-5 text-[#757272] space-y-2 text-base font-medium">
              {service.diseases.map((disease, index) => (
                <li key={index}>{disease}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Treatments & Procedures */}
        {service.treatments?.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#555]">Treatment and Procedures</h3>
            <ul className="list-disc pl-5 text-[#757272] space-y-2 text-base font-medium">
              {service.treatments.map((treatment, index) => (
                <li key={index}>{treatment}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology */}
        {service.technology?.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#555]">Advanced Technology Used</h3>
            <ul className="list-disc pl-5 text-[#757272] space-y-2 text-base font-medium">
              {service.technology.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
