import React from 'react';
import Image from 'next/image';
import heroMain from '@/assets/hero/hero.png';
import acneIcon from '@/assets/banner/acne.png';
import pigmentIcon from '@/assets/banner/drop.png';
import antiAgeIcon from '@/assets/banner/coffee.png';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="bg-[#EFEAE6] py-5 lg:py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-12">
      <div className="lg:w-3/5 space-y-6 text-center md:text-left">
        <h2 className="text-4xl md:text-8xl text-center font-bold text-[#1b1b1b] leading-tight font-abril">
          Feel Confident in <br /> Your Skin
        </h2>
        <p className="text-[#4a4a4a] text-center text-sm md:text-base">
          ⁠Safe and Effective Skin Treatments guided by Global Aesthetic Experts
        </p>
        <Link href="/contact" className="bg-[#31533E] flex mx-auto text-white py-1.5 px-3 lg:py-3 lg:px-6 rounded-2xl text-md lg:text-xl font-medium w-fit">
          Book Consultation
        </Link>
        <h1 style={{ visibility: "hidden" }}>Trusted Skin Care Clinic in Gurgaon</h1>
        <div className="flex justify-between lg:justify-center lg:gap-x-32 mt-8 mx-auto w-full px-5">
          <div className="flex flex-col items-center text-sm">
            <div className='h-[70px] lg:h-[100px] flex items-center justify-center'>
                <Image src={acneIcon} alt="Anti-aging" />
            </div>
            <p className="mt-2 text-sm lg:text-lg text-center">Acne & Scars <br /> Repair</p>
          </div>
          <div className="flex flex-col items-center text-sm">
            <div className='h-[70px] lg:h-[100px] flex items-center justify-center'>
                <Image src={pigmentIcon} alt="Anti-aging" />
            </div>
            <p className="mt-2 text-sm lg:text-lg text-center">Pigmentation <br /> Treatment</p>
          </div>
          <div className="flex flex-col items-center text-sm">
            <div className='h-[70px] lg:h-[100px] flex items-center justify-center'>
            <Image src={antiAgeIcon} alt="Anti-aging"/>
            </div>
            <p className="mt-2 text-sm lg:text-lg text-center">Anti-aging <br /> Solutions</p>
          </div>
        </div>
      </div>

      <div className="relative px-5 lg:px-0 lg:w-2/5">
        <Image 
          src={heroMain} 
          alt="Skin Care Clinic in Gurgaon" 
          className="lg:max-w-[580px]" 
        />
      </div>

    <a href="https://wa.me/919667929992" target="_blank" rel="noopener noreferrer" className="fixed bg-[#25D366] p-2 z-50 rounded-xl bottom-[20px] right-[40px]">
      <FaWhatsapp size={50} color="white" />
    </a>
    </section>
  );
};
