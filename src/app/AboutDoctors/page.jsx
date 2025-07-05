'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from "../components/Footer";


// Main Page
export default function AboutDoctors() {
  return (
    <div className=" h-full tracking-wide bg-white" >
      <Header />
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1240px] mx-auto p-4 gap-6 bg-white rounded ">
        {/* Image */}
        <div className="w-[180px] h-[180px] lg:w-[234px] lg:h-[234px] rounded-full bg-[url('/frame-14173.jpeg')] bg-cover bg-no-repeat bg-center" />

        {/* Doctor Info */}
        <div className="flex flex-col justify-between items-start w-full lg:w-[60%] gap-2">
          <p className="text-lg font-semibold text-[#555]">Dr. P. Prabhakar</p>
          <p className="text-[15px] font-medium text-[#757272]">
            Clinical Director &amp; Head Department of Orthopedics and Joint Replacement
          </p>

          <div>
            <p className="text-base font-medium text-[#555]">Speciality</p>
            <p className="text-[15px] font-medium text-[#757272]">Orthopaedics</p>
          </div>

          <div>
            <p className="text-base font-medium text-[#555]">Qualification</p>
            <p className="text-xs font-medium text-[#757272]">
              MBBS, DNB (Orthopedics), MNAMS, FIMSA, Fellow in Complex Primary &amp; Revision Total Knee
              Arthroplasty (Switzerland)
            </p>
          </div>

          <div>
            <p className="text-base font-medium text-[#555]">Hospital</p>
            <p className="text-[15px] font-medium text-[#757272]">Nampally, Hyderabad</p>
          </div>
        </div>

        {/* Button */}
        <div className="w-full lg:w-auto">
          <button
            className="w-full lg:w-auto px-6 py-2 bg-[#195aff] text-white text-base font-medium rounded"
            onClick={() => router.push('/AboutDoctors')}
          >
            Book an Appointment
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start max-w-screen-xl w-full px-4 md:px-8 gap-5 mx-auto py-10">
        <p className="text-xl md:text-2xl font-semibold text-[#555]">
          Clinical Director & Head – Department of Orthopedics and Joint Replacement
        </p>
        <div className="text-sm md:text-base font-medium text-[#555] space-y-4 text-justify leading-relaxed">
          <p>
            Dr. [Full Name] is a renowned orthopedic surgeon with over 25 years of experience in the field of musculoskeletal health and joint restoration. Serving as the Clinical Director and Head of the Department of Orthopedics and Joint Replacement, he has led the transformation of the department into one of the most advanced and patient-centric units in the region.
          </p>
          <p>
            He specializes in total knee and hip replacements, revision joint surgeries, arthroscopy, sports injuries, and complex trauma cases. His expertise in robotic-assisted joint replacement surgery has made him a pioneer in minimally invasive surgical techniques that ensure faster recovery and improved mobility for patients.
          </p>
          <p>
            Under his leadership, the department has implemented cutting-edge treatment protocols, introduced state-of-the-art surgical suites, and adopted global best practices. The team, handpicked by Dr. [Last Name], consists of skilled surgeons, physiotherapists, and rehabilitation experts who work collaboratively to provide seamless care from diagnosis to recovery.
          </p>
          <p>
            Beyond his clinical excellence, Dr. [Last Name] is actively involved in medical education and research. He has authored numerous papers in international orthopedic journals and frequently speaks at global conferences on joint preservation, prosthetic design, and advancements in orthopedic technology.
          </p>
          <p>
            A believer in holistic healing, he promotes patient education and encourages a proactive approach to musculoskeletal health. His consultation style is rooted in empathy, where he takes time to understand the unique concerns of every patient and crafts a tailored treatment plan aligned with their lifestyle.
          </p>
          <p>
            With a strong emphasis on innovation and outcome-based care, Dr. [Last Name] has helped thousands of patients regain pain-free mobility and return to active lives. His mission is to make world-class orthopedic care accessible, affordable, and aligned with the highest standards of clinical excellence.
          </p>
          <p>
            Outside of the hospital, Dr. [Last Name] is deeply involved in community outreach programs, conducting free orthopedic camps in rural areas and organizing awareness drives on bone and joint health. His dedication to service has earned him accolades from both medical associations and the communities he serves.
          </p>
          <p>
            Through his vision and tireless efforts, the Department of Orthopedics and Joint Replacement continues to set benchmarks in patient outcomes, surgical innovation, and integrated care, reaffirming its place as a leader in the orthopedic domain.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start max-w-screen-xl w-full px-4 md:px-8 gap-[42px] mx-auto py-10">
        {/* Field(s) of Expertise */}
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xl md:text-2xl font-semibold text-[#555]">
            Field(s) of Expertise
          </p>
          <div className="flex flex-col gap-4 text-sm md:text-base font-medium text-[#555] text-justify">
            <p>Joint Replacement Surgery (Knee, Hip, Shoulder)</p>
            <p>Arthroscopic Sports Injury Management</p>
            <p>Complex Trauma and Fracture Management</p>
            <p>Spinal Disorders and Minimally Invasive Spine Surgery</p>
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xl md:text-2xl font-semibold text-[#555]">
            Education
          </p>
          <div className="flex flex-col gap-4 text-sm md:text-base font-medium text-[#555] text-justify">
            <p>MBBS – Osmania Medical College, Hyderabad</p>
            <p>MS (Orthopedics) – All India Institute of Medical Sciences, New Delhi</p>
            <p>Fellowship in Joint Replacement – Germany</p>
            <p>Robotic Joint Replacement Certification – UK</p>
          </div>
        </div>

        {/* Research and Presentations */}
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xl md:text-2xl font-semibold text-[#555]">
            Research and Presentations
          </p>
          <div className="flex flex-col gap-4 text-sm md:text-base font-medium text-[#555] text-justify">
            <p>“Long-Term Outcomes of Total Knee Arthroplasty in Indian Patients” – IJOS, 2021</p>
            <p>“Minimally Invasive Techniques in Hip Replacement” – AO Summit, Switzerland</p>
            <p>“Use of Robotics in Revision Knee Surgeries” – Annual Orthopedic Congress, 2022</p>
            <p>“Joint Preservation vs Replacement in Young Adults” – Indian OrthoCon, 2023</p>
          </div>
        </div>

        {/* Publications */}
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xl md:text-2xl font-semibold text-[#555]">
            Publications
          </p>
          <div className="flex flex-col gap-4 text-sm md:text-base font-medium text-[#555] text-justify">
            <p>“Navigated Joint Replacement Techniques” – International Journal of Orthopedics</p>
            <p>“Pre-Operative Planning Using 3D Modeling” – Ortho Journal India</p>
            <p>“Comparative Study on Cemented vs Cementless Implants” – JAMA Orthopedics</p>
            <p>“Post-Operative Rehab and Recovery Analysis” – Global Ortho Review</p>
          </div>
        </div>

        {/* Awards and Recognitions */}
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xl md:text-2xl font-semibold text-[#555]">
            Awards and Recognitions
          </p>
          <div className="flex flex-col gap-4 text-sm md:text-base font-medium text-[#555] text-justify">
            <p>Best Orthopedic Surgeon – India Health Awards, 2020</p>
            <p>Excellence in Joint Replacement – OrthoCon, 2022</p>
            <p>Lifetime Achievement Award – Telangana Medical Council, 2023</p>
            <p>Gold Medal in MS Orthopedics – AIIMS, New Delhi</p>
          </div>
        </div>
      </div>


      <Footer />

    </div>
  );
}
