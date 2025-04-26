import Image from "next/image";
import BlogImages from "@/assets/blog";

const Blog = () => {
  return (
    <div className="px-[5%] py-[5%] flex flex-col gap-5 items-center">
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_1}
          alt=""
          className="w-full h-auto lg:w-[500px] rounded-2xl shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 hover:transition-all ease-in-out duration-300"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Maximize Your Passive Income Potential Exploring Copy Trading in
            Forex
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            In the realm of financial independence and diverse income streams,
            copy trading stands out as a compelling avenue to generate […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_2}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl shadow-lg shadow-gray-400"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Why Forex Traders Lose Money
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            The foreign exchange market (Forex) offers immense opportunities for
            traders to profit from currency fluctuations. However, it’s also a
            market […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_3}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Top 5 Forex Trading Apps for Success
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            In the dynamic world of Forex trading, staying ahead of the curve
            requires agility, accessibility, and powerful tools. Fortunately,
            with […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_4}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Understanding MT5 Trade Copier A Powerful Tool for Forex Traders
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction The world of forex trading is known for its fast-paced
            and dynamic nature. Traders constantly seek ways to optimize […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_5}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Decoding Forex Charts: A Roadmap to Trading Success
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction: Embarking on a journey into the world of Forex trading
            is an exhilarating experience, and at the heart of […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_6}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Forex for Beginners: A Comprehensive Guide to Starting Your Trading
            Journey
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction: Welcome to the fascinating world of Forex trading,
            where global currencies dance to the rhythm of economic news,
            geopolitical […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_7}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Mastering Forex Trading: 10 Essential Tips for Success
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction Embarking on a journey into the world of Forex trading
            can be both exhilarating and challenging. Success in this […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_8}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Introducing Upgraded Metatrader Enhancing Your Trading
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction In the dynamic world of financial markets, staying
            ahead requires embracing innovation. We are thrilled to announce a
            major […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_9}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Mastering Forex Trading: Adapting to Evolving Market Dynamics
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction In the fast-paced world of forex trading, adaptability
            is key to success. The forex market is constantly evolving,
            influenced […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_10}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            The Art of Identifying Market Trends
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            ntroduction In the fast-paced world of forex trading, recognizing
            and capitalizing on market trends can be the difference between
            success […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_11}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Decoding Forex Candlestick Patterns & Price Action
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction In the realm of forex trading, understanding
            candlestick patterns and price action analysis is akin to decoding
            the language […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_12}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            The Power of Social Trading Solutions
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction In today’s dynamic financial landscape, the emergence
            of social trading platforms has revolutionized the way individuals
            approach investing. These […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_13}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            The Power of Currency Strength Meter
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction In the fast-paced world of Forex trading, having a
            reliable tool to analyze currency strength is crucial for making […]
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] flex flex-col lg:flex-row p-5 rounded-2xl gap-5">
        <Image
          src={BlogImages.img_14}
          alt=""
          className="w-full h-auto lg:w-[500px] hover:scale-105 hover:transition-all ease-in-out duration-300 cursor-pointer rounded-2xl"
        />
        <div className="flex flex-col gap-5 mt-5 lg:m-0">
          <h2 className="text-black font-bold text-2xl lg:text-3xl">
            Finteccare Pioneering the Future of Financial Services
          </h2>
          <p className="text-[14px] text-gray-400">
            {" "}
            Introduction In recent years, the financial services landscape has
            witnessed a remarkable transformation with the emergence of Fintech.
            These innovative […]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
