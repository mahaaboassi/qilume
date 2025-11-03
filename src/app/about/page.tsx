import { Features } from "@/components/about/features"
import { AboutSection } from "@/components/about/section"
import { Video } from "@/components/about/video"
import { WhyChooseUs } from "@/components/about/whyUs"
import Footer from "@/components/common/footer"
import { Navbar } from "@/components/common/navbar"

export default function About() {
    return(
        <div>
            <Navbar/>
            <AboutSection/>
            <WhyChooseUs/>
            <Features/>
            <Video/>
            <Footer/>
        </div>
    )
}