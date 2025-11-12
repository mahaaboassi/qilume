
import { Navbar } from "@/components/common/navbar";
import { Hero } from "@/components/home/hero/banner";
import { Text } from "@/components/home/note/text";
import { ImageSection } from "@/components/home/image/image.section";
import TreatmentsGrid from "@/components/home/services/grid";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Text/>
      <ImageSection/>
      <TreatmentsGrid/>
      <Footer/>
    </div>
  );
}
