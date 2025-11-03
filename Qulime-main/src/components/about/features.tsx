
import QPlus from "@/assets/about/features/qplus.png"
import Tribeam from "@/assets/about/features/tribeam.png"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featureData = [
  {
    heading: "Ultracel Q+ HIFU",
    description: `Ultracel Q+ is a next-generation HIFU technology designed to lift, tighten, and contour without surgery. Using focused ultrasound waves, it stimulates deep collagen production for firmer, more youthful skin. Perfect for the face, neck, and jawline, it offers visible results with zero downtime — a true non-invasive facelift experience.`,
    image: QPlus,
  },
  {
    heading: "Primelase Laser Hair Reduction",
    description: `Primelase offers one of the world’s most powerful and painless laser hair reduction systems. Using cutting-edge diode technology, it delivers fast, effective, and long-lasting results across all skin types — including tanned and sensitive skin. Safe, virtually pain-free, and suitable for both face and body, it redefines hair removal with precision and comfort.`,
  },
  {
    heading: "TRI-Beam Premium",
    description: `TRI-Beam Premium is a versatile laser system that targets pigmentation, acne scars, uneven tone, and dull skin. Its Q-switched Nd:YAG technology delivers gentle yet powerful energy to rejuvenate skin at a cellular level. Safe for Indian skin types, it brightens complexion, refines texture, and restores clarity with minimal discomfort or recovery.`,
    image: Tribeam,
  },
]

export const Features = () => {
  return (
    <div className="my-10 space-y-10">
      <p className="text-center font-bold font-istok text-xl lg:text-3xl">SCIENCE BEHIND THE GLOW</p>
      {featureData.map((item, index) => (
        <div
          key={index}
          className={`border-t-[1px] border-b-[1px] w-full border-black flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div
            className={`lg:w-1/2 flex items-center justify-center border-black border-b-[1px] lg:border-b-0 ${
              index % 2 === 0 ? "lg:border-r-[1px]" : "lg:border-l-[1px]"
            }`}
          >
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
              <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">
                {item.heading}
              </p>
              <p className="font-darker text-sm lg:text-lg font-medium">
                {item.description}
              </p>
              <Link
                href="/services"
                className="flex gap-x-2 border-[1px] items-center border-[#31533E] px-2 py-1 lg:px-4 lg:py-2 w-fit font-istok text-sm lg:text-md"
              >
                <p>Know More</p> <ExternalLink size={14} />
              </Link>
            </div>
          </div>
          
          {
            item.image ? (
              <Image
                src={item.image}
                alt={item.heading}
                className="lg:w-1/2 h-[400px] lg:h-[500px] bg-[#e4eaf2] object-contain"/>
            ): <div className="lg:w-1/2 w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1091635818?autoplay=1&loop=1&background=1&title=0&byline=0&portrait=0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="prime_laser"
                  className="w-full h-full"
                  ></iframe>
              </div>
          }
        </div>
      ))}
    </div>
  )
}

