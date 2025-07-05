'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from "../components/Footer";
import { useRouter } from 'next/navigation';

export default function DoctorListPage() {


  const router = useRouter();

  const specialities = [
    'Anaesthesiology',
    'Cardiac Surgery',
    'Dentistry',
    'Cardiology',
    'ENT',
    'Neurology',
    'Ophthalmology',
    'Gastroenterology – Surgical',
  ];  

  const handleNavigation = (slug) => {
    // convert to a slug if needed (e.g., lowercase and hyphenated)
    const formattedSlug = slug.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    router.push(`/services/${formattedSlug}`);
  };
  return (
    <div className="min-h-screen bg-white tracking-wide pt-20">
      <Header />

      <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto px-4 md:px-8 gap-6 mt-10">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-[280px] bg-white text-gray-600 rounded-md p-4 flex flex-col gap-4 mt-10">
          <h2 className="text-lg font-semibold text-[#195aff]">FILTERS</h2>

          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-300 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
          />

          <div>
            <label className="text-md block mb-1 text-[#195aff]">Location</label>
            <select className="w-full border border-gray-300 px-3 py-2 text-sm rounded-md text-gray-600">
              <option>Select Location</option>
              <option>Hi-Tech City</option>
              <option>Nampally</option>
              <option>Madhapur</option>
            </select>
          </div>

          <div>
            <label className="text-md block mb-1 text-[#195aff]">Hospital</label>
            <select className="w-full border border-gray-300 px-3 py-2 text-sm rounded-md">
              <option>Select Hospital</option>
              <option>Hospital A</option>
              <option>Hospital B</option>
            </select>
          </div>

          <div>
            <label className="text-md block mb-1 text-[#195aff]">Speciality</label>
            <select className="w-full border border-gray-300 px-3 py-2 text-sm rounded-md">
              <option>Select Speciality</option>
              <option>Orthopaedics</option>
              <option>Cardiology</option>
              <option>Pulmonology</option>
            </select>
          </div>

          <button className="text-xs text-[#195aff] underline mt-2 self-start">Clear all</button>
        </aside>

        {/* Main Content */}
        <section className="flex-1 flex flex-col gap-12 my-10">
          {/* Center of Excellence */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#555]">Center of Excellence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Cardiac Sciences',
                'Gastro Sciences',
                'Nephrology',
                'Neurosciences',
                'Oncology',
                'Orthopaedics',
                'Paediatrics',
                'Pulmonology',
                'Robot-Assisted Surgery',
                'Transplants',
                'Urology',
                'Vascular & Endovascular Surgery and Interventional Radiology',
                'Woman & Child Institute',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-md  p-3 text-base font-medium text-[#757272]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>



          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#555]">Specialities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialities.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleNavigation(item)}
                  className="bg-white rounded-md p-3 text-base font-medium text-[#757272] cursor-pointer hover:bg-gray-100 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}
