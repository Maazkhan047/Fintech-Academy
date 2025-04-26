import { Check } from "lucide-react";
import Image from "next/image";
import banner_top_right from "../../assets/banner_top_right.jpg";
import banner_top_left from "../../assets/banner_top_left.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col xl:px-[10%] md:flex-row px-[5%] py-[5%] gap-10">
    <div className="w-full lg:w-[50%]">
      <div className="flex flex-col justify-between gap-2 ">
        <h1 className="text-5xl font-bold text-[#F8AA03] mb-10">
          Financial Technology Education
        </h1>
        <p className="w-[80%] text-lg">
          Welcome to FintecAcademy, your trusted partner on the journey
          towards financial empowerment and success.
        </p>
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex gap-6 items-center">
            <Check className="bg-[#F8AA03] rounded-full text-black" />
            <p>Professional Mentorship</p>
          </div>
          <div className="flex gap-6 items-center">
            <Check className="bg-[#F8AA03] rounded-full text-black" />
            <p>Certified Courses</p>
          </div>
          <div className="flex gap-6 items-center">
            <Check className="bg-[#F8AA03] rounded-full text-black" />
            <p>Lifetime Support</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mt-7 ">
          <button className="bg-[#F8AA03] hover:bg-white cursor-pointer hover:text-[#f8aa03] transition-all ease-in-out duration-300 px-[3rem] py-[1rem] rounded-md font-bold text-lg">
            Enroll Now
          </button>
          <button className="border border-[#F8AA03] cursor-pointer px-[3rem] py-[1rem] rounded-md font-bold text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>

{/*  right */}

    <div className=" grid gap-2 grid-cols-2   bg-gradient-to-t from-yellow-500 via-yellow-500/10 to-transparent rounded-full ">
      <div className="flex flex-col gap-2 justify-between items-center">
      <Image className=" h-[200px] w-[200px] object-cover" src={banner_top_left} alt=""/>
      <Image className="h-[300px] w-[300px] object-cover" src={banner_top_right} alt=""/>
      </div>

      <div className="flex flex-col gap-2 justify-between items-center">
      <Image className="h-[300px] w-[300px] object-cover" src={banner_top_left} alt=""/>
      <Image className="h-[200px] w-[200px] object-cover" src={banner_top_right} alt=""/>
      
      </div>
    </div>
  </section>
  )
}
export default Hero