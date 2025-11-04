import Office from "@/assets/about/office.png"
import Image from "next/image"

export const PrivacySection = () => {
    return (
        <div>
            <div className="relative">
                <Image src={Office} className="lg:h-[300px] w-full object-cover" alt={"Office"}></Image>
                <p className="absolute bottom-[20px] left-[20px] text-lg lg:text-3xl font-bold">
                    Privacy Policy<br/>
                    <span className="text-xs lg:text-sm font-medium">Last Updated: Nov 3, 2025</span>
                </p>
            </div>

            <div className="flex flex-col gap-y-1 px-10 py-5  lg:px-20">
                {/* <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Privacy Policy for QiLumé</p> */}
                <p className="font-darker text-sm  lg:text-lg font-medium">At Qilume, we value your trust and are committed to protecting your personal information.</p>
                <p className="font-darker text-sm  lg:text-lg font-medium">This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, contact us, or use our services.</p>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Information We Collect<br/>
                <span className="text-md lg:text-lg">We may collect the following types of information:</span></p>  
                <ul className="pl-1 flex flex-col gap-1 font-darker text-lg md:text-xl font-medium">
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Personal Information: Your name, phone number, email address, and other contact details provided through our website forms, bookings, or consultations.</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Medical or Skin Details (if applicable): Information you share during appointments or online consultations to help us provide personalized treatments.</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Website Usage Data: Information such as IP address, browser type, and pages visited — collected through cookies or analytics tools to improve our services.</li>
                </ul> 
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">How We Use Your Information<br/>
                <span className="text-md lg:text-lg">We use your information to:</span></p>  
                <ul className="pl-1 flex flex-col gap-1 font-darker text-lg md:text-xl font-medium">
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Schedule and manage your appointments</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Provide personalized skincare or beauty treatments</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Respond to your inquiries or requests</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Send updates, offers, or reminders (only if you’ve opted in)</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Improve our website and client experience</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Comply with legal or regulatory obligations</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Maintain accurate health records to ensure treatment safety and effectiveness</li>
                </ul> 
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Data Protection</p>  
                <div className="pl-1 font-darker text-lg md:text-xl font-medium flex flex-col gap-1">
                    <p>We take appropriate technical and organizational measures to protect your information against unauthorized access, disclosure, or loss.</p> 
                    <p>Your information is stored securely and only accessible to authorized staff members.</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Sharing Your Information<br/>
                <span className="text-md lg:text-lg">We may share limited data only with:</span></p>  
                <ul className="pl-1 flex flex-col gap-1 font-darker text-lg md:text-xl font-medium">
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Medical or skincare specialists working under Qilume (for your treatment)</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Payment processors (for billing)</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Service providers that support our operations (e.g. website hosting, email systems)
                    All partners are required to maintain strict confidentiality and data protection standards.</li>
                </ul> 
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Cookies & Analytics</p>  
                <div className="pl-1 font-darker text-lg md:text-xl font-medium flex flex-col gap-1">
                    <p>Our website may use cookies to enhance your browsing experience and understand site usage.
                        You can adjust your browser settings to refuse cookies if you prefer.</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Your Rights<br/>
                <span className="text-md lg:text-lg">You have the right to:</span></p>  
                <ul className="pl-1 flex flex-col gap-1 font-darker text-lg md:text-xl font-medium">
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Ask us what data we hold about you</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Request corrections or updates</li>
                    <li className="flex gap-2 items-center"><span className="w-[8px] h-[8px] rounded-full bg-[#31533E]"></span>Opt out of promotional messages at any time</li>
                </ul> 
                <p>To exercise any of these rights, please contact us at <a href="mailto:info@qilumeaesthetics.com<">info@qilumeaesthetics.com</a></p>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Updates to This Policy</p>  
                <div className="pl-1 font-darker text-lg md:text-xl font-medium flex flex-col gap-1">
                    <p>We may update this Privacy Policy periodically. Any changes will be posted on our website with the updated “Last Updated” date.</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">Contact Us</p>  
                <div className="pl-1 font-darker text-lg md:text-xl font-medium flex flex-col gap-1">
                    <p>If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us: <a href="mailto:info@qilumeaesthetics.com<">info@qilumeaesthetics.com</a></p>
                </div>
            </div>
        </div>
    )
}