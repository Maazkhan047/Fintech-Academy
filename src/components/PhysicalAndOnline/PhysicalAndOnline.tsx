"use client";

import Image from "next/image";
import sir_syed_uni_logo from "@/assets/sir-syed-uni-logo-qk5ch4usjewlfu3co2loxfmsm545lfw09vi6ns7yzs.jpg";
import smchs_logo from "@/assets/smchs-log-qk5ch4usjewlfu3co2loxfmsm545lfw09vi6ns7yzs.jpg";
import ecommunity_logo from "@/assets/Screenshot_12-qk5ch3wyckvb484ptk72cxvc0r8sdqs9xqup6i9d60.png";
import image_video from "@/assets/Fintecmarkets-logo.jpg";
import { PlayIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
const PhysicalAndOnline = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [play]);

  return (
    <div className="px-[10%] py-[5%]">
      <div className="text-center flex items-center flex-col gap-5">
        <h2 className="text-4xl text-[#f8aa03] font-bold">
          Physical and Online Classes
        </h2>
        <p className="max-w-[60%] text-lg lg:w-[100%]">
          Whether you prefer learning in-person or from the comfort of your
          home, FintecAcademy offers both physical and online classes to suit
          your preferences
        </p>
      </div>

      <div className="gap-20 lg:m-auto w-[80%] py-[7%] flex flex-col lg:flex-row justify-center items-start lg:items-center lg:gap-10 mt-10">
        <div className=" flex items-center gap-5 lg:border-l-1 lg:pl-5 h-[40px]">
          <Image
            className="rounded-full"
            height={60}
            src={sir_syed_uni_logo}
            alt=""
          />
          <div>
            <p className="max-w-[270px] text-[16px]">
              Sir Syed University of Engineering and Technology
            </p>
            <p className="text-sm text-[#b2b2b2]">Karachi, Pakistan</p>
          </div>
        </div>

        <div className="flex items-center gap-5 lg:border-l-1 lg:pl-5 h-[40px]">
          <Image className="rounded-full" height={60} src={smchs_logo} alt="" />
          <div>
            <p className="w-full text-[16px]">SMCHS | Sharah-e-Faisal</p>
            <p className="text-sm text-[#b2b2b2]">Karachi, Pakistan</p>
          </div>
        </div>

        <div className="flex items-center gap-5 lg:border-l-1 lg:pl-5 h-[40px]">
          <Image
            className="rounded-full"
            height={60}
            src={ecommunity_logo}
            alt=""
          />
          <div>
            <p className="max-w-[270px] text-[16px]">Ecommunity</p>
            <p className="text-sm text-[#b2b2b2]">Karachi, Pakistan</p>
          </div>
        </div>
      </div>

      <div className=" relative w-[100%] flex items-center justify-center">
        <Image
          className="w-[100%] object-cover h-[600px] rounded-md"
          src={image_video}
          alt=""
        />
        <div
          onClick={() => setPlay(!play)}
          className="absolute flex items-center justify-center p-[2rem] border-2 border-white cursor-pointer hover:border-pink-700 transition-all ease-in-out duration-300 rounded-full"
        >
          <PlayIcon
            className="hover:text-pink-700 transition-all ease-in-out duration-400"
            size={40}
          />
        </div>

        {play && (
          <div className="transition-all ease-in-out duration-300 fixed w-screen h-screen bg-black/70 top-0 flex items-center justify-center">
            <iframe
              className="w-full h-[80%]"
              title="Youtube video player"
              src="https://www.youtube.com/embed/kiPrrtclZOA?autoplay=1&start=3434"
              frameBorder ="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <X
              className="fixed top-5 right-5 cursor-pointer"
              onClick={() => setPlay(false)}
              size={40}
              color="white"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default PhysicalAndOnline;
