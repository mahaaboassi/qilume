
import botox from "@/assets/services/botox.png";
import fillers from "@/assets/services/fillers.webp";
import threadLifts from "@/assets/services/thread-lifts.jpeg";
import hifu from "@/assets/services/hifu.webp";
import laserToning from "@/assets/services/laser_skin_toning.png";
import cryolipolysis from "@/assets/services/cryo-t-shock.jpeg";
import laserHairReduction from "@/assets/services/laser_hair_reduction.png";
import dermaplaning from "@/assets/services/dermaplaning.png";
import medifacials from "@/assets/services/medifacials.png";
import { StaticImageData } from "next/image";
import TreatmentCard from "../home/services/card";

interface Treatment {
  image: StaticImageData;
  title: string;
  description: string;
}

const treatments: Treatment[] = [
    {
      image: botox,
      title: "Botox",
      description: "Smooth fine lines and reduce dynamic wrinkles with precision-placed Botox for a refreshed, youthful look all without altering your natural expression.",
    },
    {
      image: fillers,
      title: "Fillers",
      description: "Restore volume, enhance facial contours, and rejuvenate skin with hyaluronic acid-based fillers tailored to your aesthetic goals.",
    },
    {
      image: threadLifts,
      title: "Thread Lifts",
      description: "Experience a subtle lift without surgery. Our collagen-stimulating threads provide natural contouring and firmness with minimal downtime.",
    },
    {
      image: hifu,
      title: "HIFU",
      description: "Tighten and lift skin non-invasively using high-intensity focused ultrasound. Ideal for jawline, neck, and cheek sculpting.",
    },
    {
      image: laserToning,
      title: "Laser Skin Toning",
      description: "Achieve an even, radiant complexion while reducing pigmentation and dullness with gentle yet powerful laser toning.",
    },
    {
      image: cryolipolysis,
      title: "Cryo T-Shock",
      description: "Target stubborn fat pockets with non-surgical fat freezing that contours your body while preserving skin health.",
    },
    {
      image: laserHairReduction,
      title: "Laser Hair Reduction",
      description: "Advanced laser systems for painless, long-lasting hair reduction—safe for all skin types and body areas.",
    },
    {
      image: dermaplaning,
      title: "Dermaplaning",
      description: "Reveal smoother, brighter skin by gently removing dead skin cells and peach fuzz—perfect before makeup or events.",
    },
    {
      image: medifacials,
      title: "MediFacials",
      description: "Customized, doctor-backed facials targeting concerns like acne, sensitivity, or aging—combining luxury and medical-grade care.",
    },
  ];
  

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-10 bg-[#EFEAE6]">
      <h2 className="text-3xl font-bold text-center font-abhaya text-2xl lg:text-4xl">Services we offer</h2>
      <div className="h-[2px] w-[100px] mx-auto bg-black mt-1 mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-10 mx-auto px-4">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
