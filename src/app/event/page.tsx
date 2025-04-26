"use client";
import event_img from "@/assets/event_img/event_img";
import Image from "next/image";
import { useState } from "react";
import db_images from "@/assets/db";

const Event = () => {
  const images = [
    event_img.img_1,
    event_img.img_2,
    event_img.img_3,
    event_img.img_4,
    event_img.img_5,
  ];

  const [selectedImage, setSelectedImage] = useState(2);
  return (
    <div className="px-[10%] ">
      <div className="text-3xl lg:text-4xl font-bold w-[60%]">
        <h1>FOREX TRADING AWARENESS FOR MODERN ENTREPRENEURS </h1>
      </div>

      <div className="  flex item-center gap-2 py-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex  justify-center w-[bg-red-500 100%]  cursor-pointer "
            onClick={() => setSelectedImage(index)}
          >
            <Image
              className={`h-[400px] w-[150px] object-cover transition-all duration-400 ease-in-out ${
                selectedImage === index ? "w-[600px]" : "w-150px opacity-70"
              }`}
              src={image}
              alt="images"
            />

            <div className={`absolute bottom-10 `}>
              <button
                className={`${
                  selectedImage === index
                    ? "block tranistion-all duration-400"
                    : "hidden"
                } px-[1.2rem] py-[0.4rem] lg:px-[2rem] lg:py-[1rem] border-2 border-[#f8aa03] text-[12px] lg:text-[14px] hover:bg-[#f8aa03] transition-all duration-300 ease-in-out rounded-md  underline cursor-pointer text-white font-bold`}
              >
                Discover More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className=" py-[5%] grid  md:grid-cols-2 gap-2 lg:grid-cols-4">
        {db_images.map((item, index) => (
          <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg">
            <Image fill className="object-cover" src={item.image} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Event;
