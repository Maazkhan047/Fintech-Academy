import Image from "next/image";
import collage_finance_banner from "../../assets/collage-finance-banner-concept-3-min-scaled-qk5ch3x3ybbt9ler2a2dq9vteo5098qh5kr0powjs0.jpg";
import beautiful_cryptocurrency_banner from "../../assets/beautiful-cryptocurrency-hologram-design-scaled-qk5ch3x3ybbt9ler2a2dq9vteo5098qh5kr0powjs0.jpg";
import closeup_golden_bitcoins_banner from "@/assets/closeup-golden-bitcoins-dark-reflective-surface-histogram-decreasing-crypto-min-scaled-qk5ch3x3ybbt9ler2a2dq9vteo5098qh5kr0powjs0.jpg";
import stock_market_graph_banner from "@/assets/stock-market-graph-financial-data-electronic-board-laptop-screen-scaled-qk5ch4uy55d3l7ddwsh0arna020dgxu7hpei6yv5ls.jpg";
import { ArrowRight, Star } from "lucide-react";
import images from "@/assets/db";

const Courses = () => {
  return (
    <>
    <section className="px-[10%]" id="course">
      <div className=" flex flex-col gap-5 ">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#f8aa03]">
          Courses Available
        </h2>
        <p className="max-w-[70%] lg:w-[35%]">
          Fintec Academy has been a beacon of expertise, offering unparalleled
          educational experiences in forex, stock, and crypto trading.
        </p>
      </div>

      <div className="gap-5 py-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <div className="">
          <div className="relative">
            <Image
              className="rounded-2xl"
              src={collage_finance_banner}
              alt="collage_finance_banner"
            />
            <div className="flex gap-2 absolute top-6 right-5 bg-black rounded-xl px-3">
              <Star className="text-[#f8aa03]" />
              <p>5.00</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-yellow-500 to-transparent"></div>
            <h2 className="absolute bottom-10 left-10 text-2xl max-w-[80%] font-bold">
              Forex Trading Course
            </h2>
          </div>
          <div className="mt-10">
            <p className="text-[15px]">
              FintecAcademy Forex Trading Course is designed to build solid
              foundation of world’s largest and most liquid financial market.
            </p>
            <h2 className="mt-6 flex justify-between items-center text-[22px] font-bold cursor-pointer">
              Details{" "}
              <span className="hover:text-pink-800">
                <ArrowRight />
              </span>
            </h2>
          </div>
        </div>

        <div>
          <div className="relative">
            <Image
              className="rounded-2xl"
              src={beautiful_cryptocurrency_banner}
              alt="beautiful_cryptocurrency_banner"
            />
            <div className="flex gap-2 absolute top-6 right-5 bg-black rounded-xl px-3">
              <Star className="text-[#f8aa03]" />
              <p className="">5.00</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-yellow-500 to-transparent"></div>
            <h2 className="absolute bottom-10 left-10 text-2xl max-w-[80%] font-bold">
              Stock Trading Course
            </h2>
          </div>
          <div className="mt-10">
            <p className="text-[15px]">
              FintecAcademy Forex Trading Course is designed to build solid
              foundation of world’s largest and most liquid financial market.
            </p>
            <h2 className="mt-6 flex justify-between items-center text-[22px] font-bold cursor-pointer ">
              Details{" "}
              <span className="hover:text-pink-800">
                <ArrowRight />
              </span>
            </h2>
          </div>
        </div>

        <div>
          <div className="relative">
            <Image
              className="rounded-2xl"
              src={closeup_golden_bitcoins_banner}
              alt="closeup_golden_bitcoins_banner"
            />
            <div className="flex gap-2 absolute top-6 right-5 bg-black rounded-xl px-3">
              <Star className="text-[#f8aa03]" />
              <p>5.00</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-yellow-500 to-transparent"></div>
            <h2 className="absolute bottom-10 left-10 text-2xl max-w-[80%] font-bold">
              Crypto Trading Course
            </h2>
          </div>
          <div className="mt-10">
            <p className="text-[15px]">
              FintecAcademy Forex Trading Course is designed to build solid
              foundation of world’s largest and most liquid financial market.
            </p>
            <h2 className="mt-6 flex justify-between items-center text-[22px] font-bold cursor-pointer ">
              Details{" "}
              <span className="hover:text-pink-800">
                <ArrowRight />
              </span>
            </h2>
          </div>
        </div>

        <div>
          <div className="relative">
            <Image
              className="rounded-2xl"
              src={stock_market_graph_banner}
              alt="stock_market_graph_banner"
            />
            <div className="flex gap-2 absolute top-6 right-5 bg-black rounded-xl px-3">
              <Star className="text-[#f8aa03]" />
              <p>5.00</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-yellow-500 to-transparent"></div>
            <h2 className="absolute bottom-10 left-10 text-2xl max-w-[80%] font-bold">
              Copy Trading Masterclass
            </h2>
          </div>
          <div className="mt-10">
            <p className="text-[15px]">
              FintecAcademy Forex Trading Course is designed to build solid
              foundation of world’s largest and most liquid financial market.
            </p>
            <h2 className="mt-6 flex justify-between items-center text-[22px] font-bold cursor-pointer">
              Details{" "}
              <span className="hover:text-pink-800">
                <ArrowRight />
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-[#f8aa03] px-[3rem] py-[1rem] rounded-md font-bold text-lg cursor-pointer hover:bg-white hover:text-[#f8aa03] transition-all ease-in-out duration-300">
          Enroll Now
        </button>
      </div>
    </section>

    <section>
      <div className="px-[10%] py-[5%] grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4">
        {images.map((item, index) => (
          <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg">
            <Image fill className="object-cover" src={item.image} alt="image" />
          </div>
        ))}
      </div>
    </section>
    </>
  );
};
export default Courses;
