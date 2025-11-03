"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/logo.png";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper function to check if link is active
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  // Define your nav links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact us" },
    { href: "/services", label: "Our Services" },
  ];

  return (
    <div className="bg-[#EFEAE6] w-full py-5 lg:py-2 relative z-50">
      <div className="flex justify-between items-center px-5 lg:px-20">
        <Link href="/" className='w-[250px] lg:w-[400px] lg:mx-auto'>
          <Image src={logo} alt="Qilumè Aesthetics"/>
        </Link>
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className='hidden lg:flex justify-center items-center gap-x-32 py-5 font-istok'>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg hover:underline transition-all duration-150 ${
              isActive(link.href) ? 'font-bold underline text-[#31533E]' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className={`text-lg text-white bg-[#31533E] px-6 py-3 rounded-2xl ${
            isActive("/contact") ? 'font-bold underline' : ''
          }`}
        >
          Book Consultation
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#EFEAE6] flex flex-col items-center justify-center gap-y-5 font-istok transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg hover:underline transition-all duration-150 ${
              isActive(link.href) ? 'font-bold underline' : ''
            }`}
            onClick={toggleMenu}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className={`text-lg text-white bg-[#31533E] px-6 py-3 rounded-2xl ${
            isActive("/contact") ? 'font-bold underline' : ''
          }`}
          onClick={toggleMenu}
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
};

