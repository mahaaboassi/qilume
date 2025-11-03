import Office from "@/assets/about/office.png"
import Image from "next/image"
import Surbhi from "@/assets/about/surbhi.png"

export const AboutSection = () => {
    return (
        <div>
            <div className="relative">
                <Image src={Office} className="lg:h-[300px] w-full object-cover" alt={"Office"}></Image>
                <p className="absolute bottom-[20px] left-[20px] text-lg lg:text-3xl font-bold">Know Our Journey</p>
            </div>

            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 items-center lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">MEET THE FOUNDERS</p>
                <p className="font-darker text-sm lg:w-1/2 text-center lg:text-lg font-medium">At the heart of QiLumé Aesthetics are two dynamic women; each bringing their unique expertise, vision, and energy to redefine the future of beauty and wellness.</p>
            </div>

            <div className="my-10">
                <div className="border-t-[1px] border-b-[1px] w-full border-black flex flex-col-reverse lg:flex-row">
                    <div className="lg:w-1/2 flex items-center justify-center border-r-[1px] border-black">
                        <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                            <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Surbhi Sikri<br/> <span className="text-md lg:text-lg">Founder & CEO, QiLumé Aesthetics</span></p>                            <p className="font-darker text-sm lg:text-lg font-medium">
                            Surbhi Sikri is a TEDx speaker, digital content creator, and marketing strategist with an audience of over one million across platforms. With a background in storytelling, branding, and aesthetic consultancy, she brings a fresh, intuitive approach to beauty and business.
                            <br/><br/>
                            Having spent the last three years working alongside leading aesthetic clinics, Surbhi understands the evolving needs of modern clients. Her role at QiLumé goes beyond brand building she curates experiences that are inclusive, elevated, and emotionally resonant. At the intersection of creativity and strategy, she ensures that QiLumé isn’t just a clinic; it’s a movement.
                            </p>
                        </div>
                    </div>
                    <Image src={Surbhi} alt={"Surbhi"} className="lg:w-1/2 h-[400px] lg:h-[500px] bg-[#e4eaf2] object-contain"></Image>
                </div>
            </div>
        </div>
    )
}