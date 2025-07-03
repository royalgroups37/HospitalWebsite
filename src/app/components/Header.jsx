'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Doctors', href: '/Doctors' },
    { name: 'Specialities', href: '/Specialities' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 lg:px-20 py-4">
        <p className="text-2xl font-semibold uppercase text-[#1f2b6c]">Hospital</p>
        <div className="hidden lg:flex gap-10 text-sm text-[#1f2b6c]">
          <div className="flex items-center gap-2">
            <span className="text-[#159eec]">Emergency:</span> (+91) 123-456-7890
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#159eec]">Work Hour:</span> 24 Hours
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#159eec]">Location:</span> Hyderabad
          </div>
        </div>
        <button
          className="lg:hidden text-3xl text-[#1f2b6c]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-[#1f2b6c]">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 lg:px-20 py-4">
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg ${pathname === link.href ? 'text-[#159eec] font-semibold' : 'text-[#fcfefe]'
                  } hover:text-[#159eec] transition`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/Appointment"
              className="bg-[#bfd2f8] text-[#1f2b6c] px-6 py-2 rounded-full font-medium hover:bg-white transition"
            >
              Appointment
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden px-6 pb-6 bg-[#1f2b6c] flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base ${pathname === link.href ? 'text-[#159eec] font-semibold' : 'text-[#fcfefe]'
                  } hover:text-[#159eec] transition`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/Appointment"
              className="mt-2 inline-block bg-[#bfd2f8] text-[#1f2b6c] px-6 py-2 rounded-full font-medium text-center hover:bg-white transition"
              onClick={() => setMobileOpen(false)}
            >
              Appointment
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header
