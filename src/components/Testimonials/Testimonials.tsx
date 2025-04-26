import uzair_bin_sajid from "@/assets/Uzair-Bin-Sajid-qk5ch3wyckvb484ptk72cxvc0r8sdqs9xqup6i9d60.jpg";
import ehsan_durrani from "@/assets/ehsan-durrani-qk5ch3wyckvb484ptk72cxvc0r8sdqs9xqup6i9d60.jpg";
import samiullah_khan from "@/assets/DSC_9082-scaled-qk5ch3x3ybbt9ler2a2dq9vteo5098qh5kr0powjs0.jpg";
import { Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="py-[10%] px-[10%]" id="about">
      <div className="">
        <h2 className="text-5xl text-[#f8aa03] font-bold">Testimonials</h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="py-[10%] lg:py-[5%]">
          <div className="flex flex-col lg:flex-row items-center text-[15px] font-bold gap-5">
            <Image
              className="rounded-full h-[70px] lg:h-[50px] w-[70px] lg:w-[50px]"
              src={uzair_bin_sajid}
              alt="uzair_bin_sajid"
            />
            <p>
              Uzair Bin Sajid <br /> Student, SSUET
            </p>
            <div className="flex lg:flex-row  gap-2">
              <Star size={20} className="text-[#f8aa03]" />
              <Star size={20} className="text-[#f8aa03]" />
              <Star size={20} className="text-[#f8aa03]" />
            </div>
          </div>
          <p className="text-center lg:text-left lg:max-w-[55%] text-[15px] mt-2">
            Enrolling in FintecAcademy was a game-changer for me. The
            instructors are knowledgeable and supportive, and the material is
            comprehensive. Highly recommend!
          </p>

          <hr className="w-full lg:w-[60%] mt-10 mb-10 text-[#f8aa03]" />

          <div className="flex flex-col lg:flex-row items-center text-[15px] font-bold gap-5">
            <Image
              className="rounded-full h-[70px] lg:h-[50px] w-[70px] lg:w-[50px]"
              src={ehsan_durrani}
              alt="uzair_bin_sajid"
            />
            <p className="text-center lg:text-left">
              Uzair Bin Sajid <br /> Student, Ecommunity Quetta
            </p>
            <div className="flex lg:flex-row gap-2">
              <Star size={20} className="text-[#f8aa03]" />
              <Star size={20} className="text-[#f8aa03]" />
              <Star size={20} className="text-[#f8aa03]" />
            </div>
          </div>
          <p className="text-center lg:text-left lg:max-w-[55%] text-[15px] mt-2">
            FintecAcademy exceeded my expectations! The blend of theoretical
            knowledge and practical application in their courses really helped
            me grasp complex concepts easily
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <Image src={samiullah_khan} alt="samiullah_khan" />
          <div className="absolute bottom-0 left-0 w-full h-1/1 bg-gradient-to-t from-black to-transparent"></div>
          <div className="z-10 absolute bottom-10 left-10 max-w-[60%]">
            <p>
              Muhammad Samiullah Khan Master Trader at FintecMarkets
              Educationist at FintecAcademy
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end max-w-[100%]">
      <p className="text-center max-w-[100%] lg:max-w-[30%] mr-7">
        Welcome to the world of Financial Technology Education, where expertise
        meets precision, and success becomes a habit. I’m Sami Khan, your
        dedicated guide on the journey to financial mastery in the Financial
        Market.
      </p>
      </div>
    </div>
  );
};
export default Testimonials;
