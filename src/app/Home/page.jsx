
import Header from '../components/Header';

import TopImagesection from '../components/TopImagesection';


import WelcomeSection from '../components/WelcomeSection';
import Services from '../components/OurServices';
import HowItWorks from '../components/HowItWorks';
import OurDoctors from '../components/OurDoctors';
import AboutUs from '../components/AboutUs';
import StayInformed from '../components/StayInformed';
import SeeWhoTrustUs from '../components/SeeWhoTrustUs';


import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=" h-full tracking-wide  bg-[#fdfbf7]" id="homeScreen">

      <Header />
      <TopImagesection />

      <WelcomeSection />
      <Services />
      <OurDoctors />

      <HowItWorks />
      <AboutUs />
      <StayInformed />

      <SeeWhoTrustUs />


      <Footer />
    </div>
  );
}
