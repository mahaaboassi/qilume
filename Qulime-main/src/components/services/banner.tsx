import Image from "next/image"
import Link from "next/link"
import banner from "@/assets/services/banner.png"

export const BannerSection = () => {
    return (
        <div className="relative w-full h-[300px]">
        <Image
          src={banner}
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-left text-white py-4 px-10 lg:px-20">
          <div className="text-center flex flex-col lg:gap-y-2">
            <p className="font-bold text-left text-xl lg:text-5xl mb-2 font-istok text-black">QILUMÉ SIGNATURE TREATMENTS</p>
            <p className="mb-4 text-black text-left max-w-2xl font-darker text-md lg:text-lg">
              Each of our bespoke skin treatments is carefully curated using
              clinically trusted methods and advanced aesthetic technology —
              designed to restore, renew, and reveal your natural radiance.
            </p>
            <Link
              href="/contact"
              className="bg-[#31533E] uppercase text-white px-4 py-2 rounded-full transition flex justify-left w-fit"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>
    )
}