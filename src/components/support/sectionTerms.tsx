import Office from "@/assets/about/office.png"
import Image from "next/image"

export const TermsSection = () => {
    return (
        <div>
            <div className="relative">
                <Image src={Office} className="lg:h-[300px] w-full object-cover" alt={"Office"}></Image>
                <p className="absolute bottom-[20px] left-[20px] text-lg lg:text-3xl font-bold">
                    Terms And Conditions<br/>
                    <span className="text-xs lg:text-sm font-medium">Last Updated: Nov 11, 2025</span>
                </p>
            </div>

            <div className="flex flex-col gap-y-1 px-10 py-5  lg:px-20">
                {/* <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Privacy Policy for QiLumé</p> */}
                <p className="font-darker text-sm  lg:text-lg font-medium">Welcome to QiLumé. By accessing or using our
                website and services, you agree to comply with and be bound by the
                following Terms and Conditions. Please read them carefully.</p>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Use of Our Services<br/></p>  
                <p className="font-darker text-lg md:text-xl font-medium">
                Our website provides information about our beauty and skincare
                services. You agree to use it only for lawful purposes and not in a
                way that may harm QiLumé, its clients, or its reputation.
                </p>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Appointments and Payments</p>  
                <ul className="pl-1 flex flex-col gap-1 font-darker text-lg md:text-xl font-medium">
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Appointments can be booked online or in person, subject to availability.</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Cancellations or rescheduling must be made at least 24 hours in advance.</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Payments for services and treatments must be completed before or immediately after the session, depending on our clinic’s policy.</li>
                </ul> 
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl"> Medical Disclaimer</p>  
                <div className="pl-1 font-darker text-lg md:text-xl font-medium flex flex-col gap-1">
                    <p>All skincare and aesthetic treatments are performed by qualified
                        professionals. However, results may vary for each individual. The
                        information on this website is for general knowledge and does not
                        replace professional medical advice.</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Intellectual Property</p>  
                <div className="pl-1 font-darker text-lg md:text-xl font-medium flex flex-col gap-1">
                    <p>All content on this website, including images, text, and design, is
                    the property of QiLumé and protected by copyright laws. You may not
                    copy, reproduce, or distribute any content without prior written
                    consent.</p> 
                </div>
                
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl"> Limitation of Liability</p>  
                <div className="pl-1 font-darker text-lg md:text-xl font-medium flex flex-col gap-1">
                    <p>QiLumé will not be liable for any indirect, incidental, or
                        consequential damages resulting from the use or inability to use our
                        website or services. While we strive for accuracy, we do not guarantee
                        that all information on our site is complete or error-free.</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl"> Privacy</p>  
                 <div className="pl-1 font-darker text-lg md:text-xl font-medium flex flex-col gap-1">
                    <p>  Please refer to our{" "}
                    <a
                        href="/privacy-policy"
                        className="text-[#31533E] underline hover:text-[#26422f]"
                    >
                        Privacy Policy
                    </a>{" "}
                    for information on how we handle your personal data.</p>
                 </div>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Contact Us</p>  
                <div className="pl-1 font-darker text-lg md:text-xl font-medium flex flex-col gap-1">
                    <p>
                        For any questions about these Terms and Conditions, please contact us
                        at{" "}
                        <a
                            href="mailto:info@qilumeaesthetics.com"
                            className="text-[#31533E] underline hover:text-[#26422f]"
                        >
                            info@qilumeaesthetics.com
                        </a>
                    </p>
                </div>
            </div>


        </div>
    )
}