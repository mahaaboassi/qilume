import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#31533E] text-white px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 gap-8 text-sm md:text-base lg:flex">
        <div className='lg:w-[30%]'>
          <h3 className="font-semibold text-2xl mb-2 font-abhaya">About</h3>
          <p className="text-white text-lg font-darker">
            At QiLumé Aesthetics, we nurture your natural glow with gentle, effective treatments—
            bringing out your brightest, most confident self in a calm and uplifting space.
          </p>
          <div className='flex flex-col gap-1'>
            <Link href="/privacy-policy" className="underline inline-block font-darker">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="underline inline-block font-darker">Terms And Conditions</Link> 
            <Link href="/contact" className="underline mt-2 inline-block font-darker">
              LEARN MORE
            </Link>
          </div>
        </div>

        <div className='lg:w-[10%]'>
          <h3 className="font-semibold text-2xl mb-2 font-abhaya">Content</h3>
          <ul className="space-y-3 text-gray-200 text-xl font-darker">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">Our Services</Link></li>
            <li><Link href="/services" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>       
          </ul>
        </div>

        <div className='lg:w-[20%]'>
          <h3 className="font-semibold text-2xl mb-2 font-abhaya">Visit Us</h3>
          <div className="flex items-center gap-2 text-gray-200 mb-2">
            <div><MapPin size={18} /></div>
            <div className='text-lg font-darker'>Plot No 2027-P, Ground Floor, Sector 45, Gurugram, Haryana 122003</div>
          </div>
          <Link href="tel:+919667929992" className="flex items-center gap-2 text-gray-200">
            <Phone size={18} />
            <span className='text-lg font-darker'>+91 96679 29992</span>
          </Link>
        </div>

        <div className='lg:w-[40%]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.985001987931!2d77.0693335!3d28.449868499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19593455e077%3A0x73a856c8aa5c70ab!2sQilum%C3%A9%20Aesthetics%20Clinic!5e0!3m2!1sen!2sin!4v1753696575359!5m2!1sen!2sin" className='w-full h-[400px] py-10' allowFullScreen={false} loading="lazy"></iframe>
          {/* <h3 className="text-lg lg:text-3xl mb-2 font-abhaya">Subscribe to get 10% OFF</h3>
          <p className="mb-4 text-gray-200 font-darker">Subscribe for store updates and discounts.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="p-2 bg-white w-full text-black"
            />
            <button className="bg-white text-black px-4 hover:bg-gray-200">
              &gt;
            </button>
          </div> */}
        </div>
      </div>


      <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div>
            <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://www.youtube.com/@QiLum%C3%A9Aesthetics"><FaYoutube className="text-white hover:text-white cursor-pointer" size={25} /></Link>
            <Link href="https://www.linkedin.com/company/qilum%C3%A9-aesthetics/"><FaLinkedin className="text-white hover:text-white cursor-pointer" size={25} /></Link>
            <Link href="https://www.instagram.com/aestheticsbyqilume"><FaInstagram className="text-white hover:text-white cursor-pointer" size={25} /></Link>
            </div>
            <div className="text-white mb-2 md:mb-0 py-4">
            © 2025 QiLumé Aesthetics.
            </div>
        </div>
      </div>
    </footer>
  );
}
