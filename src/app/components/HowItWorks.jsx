'use client';
import React from "react";

const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-[100px] py-[50px] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6">
        <div className="flex flex-col gap-2 w-full lg:w-[555px]">
          <div className="flex items-center gap-3">
            <p className="text-sm font-bold text-[#195aff] uppercase">How It Works</p>
          </div>
          <p className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#2c2c2c] capitalize">
            Trusted Healthcare with a Focus on Your Well-Being
          </p>
        </div>
        <p className="w-full lg:w-[476px] text-base text-[#131313] opacity-80">
          At Our Hospital, we’ve streamlined the healthcare process to ensure you receive the best care
          with ease and convenience.
        </p>
      </div>

      {/* Step Cards */}
      <div className="flex flex-col gap-6 mt-12 w-full max-w-[1312px]">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex gap-8 p-8 bg-[#e7edff] w-full lg:w-[656px] rounded-3xl">
            <div className="flex justify-center items-center h-14 w-14 rounded-full bg-[#195aff] text-white font-bold text-2xl">
              01
            </div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-[24px] lg:text-[32px] text-[#2c2c2c] capitalize">
                Book an Appointment
              </p>
              <p className="text-base text-[#757272] opacity-80">
                Schedule your visit through our easy-to-use online platform or by calling our friendly
                support team. Choose the time that works best for you.
              </p>
            </div>
          </div>
          <div className="flex gap-8 p-8 bg-[#f4f7ff] w-full lg:w-[656px] rounded-3xl">
            <div className="flex justify-center items-center h-14 w-14 rounded-full bg-[#195aff] text-white font-bold text-2xl">
              02
            </div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-[24px] lg:text-[32px] text-[#2c2c2c] capitalize">
                Consult Our Experts
              </p>
              <p className="text-base text-[#757272] opacity-80">
                Meet with our highly skilled doctors and medical specialists who will listen to your
                concerns, provide an accurate diagnosis, and recommend the effective treatment options.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex gap-8 p-8 bg-[#f4f7ff] w-full lg:w-[656px] rounded-3xl">
            <div className="flex justify-center items-center h-14 w-14 rounded-full bg-[#195aff] text-white font-bold text-2xl">
              03
            </div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-[24px] lg:text-[32px] text-[#2c2c2c] capitalize">
                Receive Care
              </p>
              <p className="text-base text-[#757272] opacity-80">
                Once a treatment plan is established, our team ensures you receive the necessary medical
                services, whether it’s a prescription from our pharmacy, specialized care.
              </p>
            </div>
          </div>
          <div className="flex gap-8 p-8 bg-[#e7edff] w-full lg:w-[656px] rounded-3xl">
            <div className="flex justify-center items-center h-14 w-14 rounded-full bg-[#195aff] text-white font-bold text-2xl">
              04
            </div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-[24px] lg:text-[32px] text-[#2c2c2c] capitalize">
                Follow-Up
              </p>
              <p className="text-base text-[#757272] opacity-80">
                After your treatment, we stay connected for follow-up consultations, ensuring your
                recovery is progressing smoothly and addressing any further questions you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
