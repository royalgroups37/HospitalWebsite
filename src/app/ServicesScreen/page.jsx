'use client';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Link from 'next/link';
import { services } from '@/utils/Services';


export default function Services() {
    return (
        <div className="bg-[#fdfbf7] h-full tracking-wide pt-20">

            <Header />


            {

                <ServicesSection />
                // services.map((e) => (
                // ))

            }


            <Footer />
        </div>
    );
}
