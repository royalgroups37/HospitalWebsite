import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServiceDetails = () => {
  const facultyMembers = Array(9).fill({
    name: 'MR . Vamsi',
    qualification: 'BA, B.Ed, MBA',
    image: "/PROFILEIAMGE.png", // use a common image or make this dynamic
  });

  return (
    <div className="min-h-screen bg-white tracking-wide pt-30">
      <Header />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-[1440px] mx-auto px-4 md:px-20 py-10 gap-6">
        {/* ENT Image and Title */}
        <div className="flex items-center gap-4">
          <div className="w-[120px] h-[120px] relative rounded-full overflow-hidden">
            <Image
              src="/best-ent-hospital-in-hyderabad,-india.png" // Update path as needed
              alt="ENT Hospital"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-4xl font-semibold text-[#555]">ENT</h2>
        </div>

        {/* Enquiry Form */}
        <div className="w-full max-w-xl border border-[#b5b5b5] rounded-b-lg p-5 space-y-4">
          {/* Name Input */}
          <div>
            <label className="text-sm font-medium text-[#757272]">Name</label>
            <input
              type="text"
              className="w-full border-b border-[#707070] py-2 outline-none text-sm text-gray-600"
              placeholder="Enter your name"
            />
          </div>

          {/* Query Input */}
          <div>
            <label className="text-sm font-medium text-[#757272]">Type Your Query</label>
            <input
              type="text"
              className="w-full border-b border-[#707070] py-2 outline-none text-sm text-gray-600"
              placeholder="Your query here"
            />
          </div>

          {/* Phone & Get OTP */}
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

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs text-[#757272]">
              I agree with the Terms & Conditions and Privacy Policy
            </p>
          </div>

          {/* Consent Info */}
          <p className="text-[10px] text-[#757272] font-medium">
            * By submitting this form, you consent to receive communication
            from us via call, WhatsApp, email, and SMS.
          </p>

          {/* Enquire Now Button */}
          <div className="pt-3">
            <button className="bg-[#195aff] text-white px-8 py-2 text-sm font-semibold rounded hover:bg-blue-600 w-full sm:w-auto">
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 py-10 flex flex-col gap-12">

        {/* Header Section */}
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold text-[#555]">ENT</h2>
          <div className="space-y-2">
            <p className="text-lg font-medium text-[#212529]">
              Best ENT Hospital in Hyderabad
            </p>
            <p className="text-base font-medium text-[#757272]">
              We offer care for a wide range of problems such as general ear, nose, throat, and thyroid disorders, snoring, hearing problems, voice problems, and diseases of the salivary glands. Our Hospitals use a multidisciplinary approach for dealing with the disorders of the head, neck, temporal bone tumors, skull base tumors, and sino-nasal tumors.
            </p>
          </div>
        </div>

        {/* Diseases Treated Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#555]">Diseases Treated</h3>
          <p className="text-base font-medium text-[#555]">
            The ENT department at Our Hospitals treats a broad range of diseases affecting the ears, nose, throat, and related structures. Some of the most common conditions treated include:
          </p>
          <ul className="list-disc pl-5 text-[#757272] space-y-2 text-base font-medium">
            <li>Hearing Loss: Conductive and sensorineural hearing loss, including age-related hearing loss, noise-induced hearing loss, and genetic hearing disorders.</li>
            <li>Ear Infections: Middle ear infections (otitis media), outer ear infections (otitis externa), and recurrent ear infections.</li>
            <li>Sinusitis: Inflammation of the sinuses, which can lead to chronic sinus infections and congestion.</li>
            <li>Nasal Polyps: Noncancerous growths in the nasal passages or sinuses, causing blockage and difficulty breathing.</li>
            <li>Tonsillitis and Adenoiditis: Infections and inflammation of the tonsils and adenoids, commonly affecting children.</li>
            <li>Laryngitis: Inflammation of the vocal cords, often caused by viral infections, overuse, or smoking, leading to hoarseness or loss of voice.</li>
          </ul>
        </div>

        {/* Treatment Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#555]">Treatment and Procedures</h3>
          <p className="text-base font-medium text-[#757272]">
            Diagnostic procedures in Ear, Nose, and Throat (ENT) care are essential for accurately identifying various conditions affecting these critical areas of the body. ENT specialists, also known as otolaryngologists, use a range of techniques to diagnose issues related to hearing, balance, smell, taste, voice, and breathing. Here are some key diagnostic procedures commonly used in ENT care:
          </p>
          <ul className="list-disc pl-5 text-[#757272] space-y-2 text-base font-medium">
            <li>Tonsillectomy – Surgical removal of the tonsils to treat recurrent infections or sleep apnea.</li>
            <li>Septoplasty – Correction of a deviated nasal septum to improve breathing.</li>
            <li>Myringotomy with Grommet Insertion – Small tubes inserted in the eardrum to drain fluid and prevent infections.</li>
            <li>Functional Endoscopic Sinus Surgery (FESS) – Minimally invasive surgery to treat chronic sinus infections.</li>
            <li>Thyroidectomy – Surgical removal of part or all of the thyroid gland, often for nodules or cancer.</li>
            <li>Cochlear Implant Surgery – Implanting a device to help restore hearing in patients with severe hearing loss.</li>
          </ul>
        </div>

        {/* Technology Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#555]">Advanced Technology Used</h3>
          <p className="text-base font-medium text-[#757272]">
            Here are some of the latest technologies used in ENT treatments:
          </p>
          <ul className="list-disc pl-5 text-[#757272] space-y-2 text-base font-medium">
            <li>Endoscopic Surgery Systems – High-definition cameras and scopes for minimally invasive nasal and sinus surgeries.</li>
            <li>Cochlear Implants – Electronic devices that bypass damaged parts of the ear to provide hearing.</li>
            <li>Image-Guided Navigation Systems – Real-time GPS-like guidance during complex sinus and skull base surgeries.</li>
            <li>Laser Technology – Precision tools used for treating vocal cord lesions, tumors, and nasal obstructions with minimal damage.</li>
          </ul>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default ServiceDetails;
