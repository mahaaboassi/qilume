import Image from "next/image";
import ServicesGrid from "./services";
import hair from "@/assets/services/banners/wellness.png"
import hair_mobile from "@/assets/services/banners/wellness_mobile.png"
import skin from "@/assets/services/banners/skin.png"
import laser from "@/assets/services/banners/laser.png"
import Link from "next/link";
import { BannerSection } from "./banner";

export const ServiceSection = () => {
  return (
    <div>
      <BannerSection/>
      <ServicesGrid/>

      <div className="py-5 lg:py-10">
        <p className="text-center font-bold text-lg lg:text-4xl font-abhaya">Total Aesthetic Care, Designed Around You</p>
        <hr className="w-72 h-[1px] my-2 bg-black mx-auto"/>
        <div className="flex flex-col gap-y-6 mt-2 ">
            <div className="relative w-full h-72 md:h-96">
                <Image
                src={skin}
                alt="Skin"
                className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-20">
                    <h2 className="font-abhaya text-white text-4xl md:text-8xl font-bold tracking-wide mb-4 uppercase text-center">ANTI-aging and beauty</h2>
                    <Link href="/services/anti-aging" className="bg-[#31533E] text-white px-6 py-2 transition">
                        Explore Face Treatments
                    </Link>
                </div>
            </div>

            <div className="relative w-full h-72 md:h-96">
                <Image
                src={hair}
                alt="Hair Solutions"
                className="hidden lg:block object-cover w-full h-full"
                />
                <Image
                src={hair_mobile}
                alt="Hair Solutions"
                className="block lg:hidden  object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-20">
                    <h2 className="font-abhaya text-white text-4xl md:text-9xl font-bold tracking-wide mb-4">WELLNESS</h2>
                    <Link href="/services/wellness" className="bg-[#31533E] text-white px-6 py-2 transition">
                        Explore Wellness
                    </Link>
                </div>
            </div>

            <div className="relative w-full h-72 md:h-96">
                <Image
                src={laser}
                alt="Hair Solutions"
                className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-20">
                    <h2 className="font-abhaya text-white text-4xl md:text-9xl font-bold tracking-wide mb-4">LASER</h2>
                    <Link href="/services/laser" className="bg-[#31533E] text-white px-6 py-2 transition">
                        Explore Lasers
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
