import { PrivacySection } from "@/components/support/section"
import { Video } from "@/components/about/video"
import Footer from "@/components/common/footer"
import { Navbar } from "@/components/common/navbar"

export default function About() {
    return(
        <div>
            <Navbar/>
            <PrivacySection/>
            <Video/>
            <Footer/>
        </div>
    )
}