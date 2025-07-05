'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from "../components/Footer";
import { useRouter } from 'next/navigation';
// Reusable DoctorCard Component
function DoctorCard() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/AboutDoctors');
    };
    return (
        <div className="flex flex-col items-start gap-3 rounded w-full max-w-xs  p-4  bg-white">
            {/* Profile Image */}
            <div className="w-[120px] h-[120px] relative overflow-hidden rounded-full">
                <Image
                    src="/Doctorlistprofileimage.jpg"
                    alt="Dr. Alluri Sita Ramaraju"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-2 text-[#2c2c2c]">
                <p className="text-lg font-semibold">Dr. Alluri Sita Ramaraju</p>

                <p className="text-[15px] text-[#757272] leading-5">
                    Clinical Director & Head<br />
                    Department of Orthopedics and<br />
                    Joint Replacement
                </p>

                <div>
                    <p className="text-base font-medium">Speciality</p>
                    <p className="text-[15px] font-light text-[#757272]">Orthopaedics</p>
                </div>

                <div>
                    <p className="text-base font-medium">Qualification</p>
                    <p className="text-xs font-light text-[#757272]">
                        MBBS, DNB (Orthopedics), MNAMS, FIMSA, Fellow in Complex Primary & Revision Total Knee Arthroplasty (Switzerland)
                    </p>
                </div>

                <div>
                    <p className="text-base font-medium">Hospital</p>
                    <p className="text-[15px] font-light text-[#757272]">Nampally, Hyderabad</p>
                </div>
            </div>

            {/* Appointment Button */}
            <div className="w-full mt-2">
                <button
                    onClick={handleClick}
                    className="w-full bg-[#195aff] text-white text-base font-medium py-2 rounded"
                >
                    Book an Appointment
                </button>
            </div>

        </div>
    );
}

// Main Page
export default function DoctorListPage() {
    return (
        <div className=" h-full tracking-wide bg-white" >
            <Header />
            <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto p-4 md:p-8 gap-6 ">

                {/* Sidebar Filters */}
                <aside className="w-full lg:w-[280px] bg-white  text-gray-600 rounded-md p-4 flex flex-col gap-4 ">
                    <h2 className="text-lg  text-[#195aff]">FILTERS</h2>

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

                {/* Doctors Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <DoctorCard key={i} />
                    ))}
                </section>
            </div>
            <Footer />

        </div>
    );
}
