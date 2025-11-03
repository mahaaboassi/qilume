import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface TreatmentCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-[#E0CFC2] rounded-xl p-6 text-center relative flex justify-center flex-col items-center">
      <div className="mx-auto rounded-full overflow-hidden mb-4">
        <Image src={image} alt={title} className="object-cover w-[321px] h-[321px]" />
      </div>
      <h2 className="font-semibold text-xl font-istok">{title}</h2>
      <p className="text-xl mt-2 font-darker">{description}</p>
      <Link href="/contact" className="mt-4 cursor-pointer bg-[#34523E] text-white px-4 py-2 hover:bg-[#2c4434] transition w-[193px]">
        Know More
      </Link>
    </div>
  );
};

export default TreatmentCard;
