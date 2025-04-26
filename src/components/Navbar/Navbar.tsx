"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { Contact, Mail, Menu, X } from "lucide-react";
import {useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

    const handleSmoothScroll = (e:React.MouseEvent<HTMLElement>, sectionId: string) => {
      e.preventDefault();
  
      if(pathname === '/)'){
        const element = document.getElementById(sectionId);
        if(element){
          element.scrollIntoView({behavior: 'smooth'});
        }
      }
      else{
        sessionStorage.setItem('scrollTo', sectionId);
        window.location.href = `/#${sectionId}`;
      }
    }

  return (
    <nav className="flex justify-between items-center py-2 px-[5%] lg:px-[10%]" id="top">
      <Image height={200} width={200} src={logo} alt="logo" />
      <ul className=" hidden  lg:flex items-center gap-6 text-[18px] font-bold ">
        
        <li className="cursor-pointer hover:text-[#f8aa03] transition-all duration-300 ease-in-out"><Link href={"/"}>Home</Link></li>
        <li className="cursor-pointer hover:text-[#f8aa03] transition-all duration-300 ease-in-out"><Link onClick={(e) => handleSmoothScroll(e, 'course')} href={"/#course"}>Course</Link></li>
        <li className="cursor-pointer hover:text-[#f8aa03] transition-all duration-300 ease-in-out"><Link href={'/event'}>Event</Link></li>
        <li className="cursor-pointer hover:text-[#f8aa03] transition-all duration-300 ease-in-out"><Link href={'/blog'}>Blog</Link></li>
        <li className="cursor-pointer hover:text-[#f8aa03] transition-all duration-300 ease-in-out"><Link onClick={(e) => handleSmoothScroll (e, 'about')} href={"/#about"}>About us</Link></li>
        <li className="cursor-pointer hover:text-[#f8aa03] transition-all duration-300 ease-in-out"><Link href={'/contact'}>Contact</Link></li>
      </ul>
      <div className="hidden lg:flex items-center justify-between gap-10">
        <button className="bg-[#f8aa03] hover:bg-white cursor-pointer hover:text-[#f8aa03] transition-all ease-in-out duration-300 px-[2rem] py-[1rem] rounded-[10px] text-lg font-bold ">
          Enroll Now
        </button>
        <Contact size={40} />
        <Mail size={40} />
      </div>

      <div className=" lg:hidden z-50 fixed right-10 " onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X size={40} className=" lg:hidden hover:text-pink-800 transition-all ease-in-out duration-300 text-[#f8aa03] cursor-pointer" />
        ) : (
          <Menu
            size={50}
            className="lg:hidden text-[#f8aa03] hover:text-pink-800 transition-all ease-in-out duration-300 cursor-pointer"
          />
        )}
      </div>

      <div className={` fixed top-0 left-0 w-[100%] h-screen bg-gray-500/30  py-20 pl-5 
        transition-all ease duration-400 z-40 flex flex-col items-start gap-6 
        text-[18px] font-bold shadow-md lg:hidden transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
      
        <ul
          
        className={`fixed top-0 left-0 w-[60%] h-screen bg-black py-20 pl-5 
        transition-all ease duration-900 z-40 flex flex-col items-start gap-6 
        text-[18px] font-bold shadow-md lg:hidden transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          
          <li className="cursor-pointer transition-all duration-300 ease-in-out text-[#f8aa03] hover:text-[#f8aa03]"><Link href={"/"}>Home</Link></li>
          <li className="cursor-pointer transition-all duration-300 ease-in-out text-[#f8aa03] hover:text-[#f8aa03]"><Link href={"/#course"}>Course</Link></li>
          <li className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f8aa03]"><Link href={"/event"}>Event</Link></li>
          <li className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f8aa03]"><Link href={"/blog"}>Blog</Link></li>
          <li className="cursor-pointer transition-all duration-300 ease-in-out text-[#f8aa03] hover:text-[#f8aa03]"><Link href={"/#about"}>About us</Link></li>
          <li className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f8aa03]"><Link href={"/contact"}>Contact</Link></li>
        </ul>
        </div>
    </nav>
  );
};
export default Navbar;
