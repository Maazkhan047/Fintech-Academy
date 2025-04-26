import Image from "next/image";
import logo from "@/assets/logo.png";
import { ArrowUp, Facebook, Globe, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <div className="px-[10%] pt-[5%] lg:py-0 w-full overflow-hidden grid grid-cols-2 lg:grid-cols-4 gap-7 mb-5">
      <div>
        <Image height={150} src={logo} alt="logo" />
        <p className="max-w-[60%]">
          Welcome to FintecAcademy, your trusted partner on the journey towards
          financial empowerment and success
        </p>
      </div>

      <div className="mt-8 lg:m-0">
        <ul className="flex flex-col font-bold gap-4">
        <li className="text-[#f8aa03]"><Link href={'/'}>Home</Link></li>
        <li><Link href={'/#course'}>Course</Link></li>
        <li><Link href={'/event'}>Event</Link></li>
        <li><Link href={'/blog'}>Blog</Link></li>
        <li><Link href={'/#about'}>About us</Link></li>
        <li><Link href={'/#contact'}>Contact us</Link></li>
        <li><Link href={''}>Our Videos</Link></li>
          </ul>
        </div>

       <div className="flex flex-col gap-4 font-bold">
            <p className="text-[#f8aa03]">Our Course</p>
            <p>Advance Forex Trading Course </p>
            <p>Professional Stock Trading Course</p>
            <p>Crypto Trading Course</p>
            <p>Crypto Masterclass Courses</p>
        </div> 

        <div>
            <p className="text-[#f8aa03] font-bold">Stay Connected</p>
            <div className="grid grid-cols-3 gap-3 mt-5 w-[50%]">
                <Facebook/>
                <Instagram/>
                <Linkedin/>
                <Youtube/>
                <Twitter/>
                <Globe/>
            </div>
        </div>

    </div>
        <footer className="flex justify-between items-center px-[10%] bg-[#f8aa03] h-15 w-[100%]">
            <p>Copyright © 2023. All rights reserved</p>
            <p className="hidden lg:flex"><Link href={'#top'}>back to top</Link> <ArrowUp/></p>
        </footer>
        </>
    
  );
};
export default Footer;
