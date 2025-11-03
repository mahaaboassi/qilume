import TreatmentCard from "./card";
import hyperpigmentation from "@/assets/services/hyperpigmentation.jpg";
import acne from "@/assets/services/acne.png";
import weightloss from "@/assets/services/weight-loss.jpeg";
import antiaging from "@/assets/services/anti-aging.jpeg";
import regenerative from "@/assets/services/regeneration.png";
import rejuvenation from "@/assets/services/skin-rejuvnation.jpeg";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface Treatment {
  image: StaticImageData;
  title: string;
  description: string;
}

const treatments: Treatment[] = [
  {
    image: hyperpigmentation,
    title: "Hyperpigmentation",
    description: "Fade dark spots and achieve even-toned skin with specialized laser and peel solutions.",
  },
  {
    image: acne,
    title: "Anti-Acne Treatments",
    description: "Target breakouts and scarring with our expert-led acne control and resurfacing treatments.",
  },
  {
    image: weightloss,
    title: "Non-Surgical Weight Loss",
    description: "Sculpt your body with Cryo T-Shock, Radio Frequency and Fat reduction treatments - no downtime required.",
  },
  {
    image: antiaging,
    title: "Anti-Aging Treatments",
    description: "Achieve Smooth and firm skin including injectables, collagen boosters, and skin tightening. Subtle, natural-looking results that enhance your timeless beauty.",
  },
  {
    image: regenerative,
    title: "Regenerative Treatments",
    description: "Heal from within with PRP, microneedling, and IV therapies designed to activate natural renewal.",
  },
  {
    image: rejuvenation,
    title: "Skin Rejuvenation",
    description: "From plant-based exosomes and thermo facials to Ayurveda rituals and Fire & Ice facials — each treatment is designed to restore glow, boost collagen, and revive tired skin.",
  },
];

const TreatmentsGrid: React.FC = () => {
  return (
    <section className="pt-4 bg-[#EFEAE6] pb-14">
      <h4 className="text-3xl font-bold text-center mb-10 font-abhaya text-2xl lg:text-5xl">Our Treatments</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-10 mx-auto px-4">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold mb-2 font-abhaya text-3xl lg:text-4xl">Find what Feels Right</h3>
        <p className="text-gray-600 mb-4 text-sm lg:text-xl">
          No one-size-fits-all here—check out the full range of treatments we offer.
        </p>
        <Link href="/services" className="bg-[#34523E] text-white px-6 py-3 lg:w-[206px] hover:bg-[#2c4434] transition">
          Know Our Services
        </Link>
      </div>
    </section>
  );
};

export default TreatmentsGrid;
