import { CheckCheck, Lock } from "lucide-react"

const GetFullAcess = () => {
  return (
    <div className="px-[10%] ">
    <div className="flex items-center justify-center">
        
        <div className="flex items-center gap-4 ">
                <Lock size={30} className="text-[#f8aa03]"/>
            <h2 className="text-4xl text-[#f8aa03]">
               Get Full Acess for Course 
            </h2>
        </div>
        </div>
        
        <div className="py-[10%] lg:py-[5%] w-full px-[10%] lg:ml-20 grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-8 ">
            <ul className="-amber-400 w-full flex flex-col gap-3 text-[16px] lg:text-[19px]">
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Understanding the Forex Market</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Basics of Forex Trading</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Understanding the role of brokerage firms</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Understanding the trading platforms</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Fundamental analysis in Forex</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Technical analysis for Forex Trading</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Copy Trading Masterclass</li>
            </ul>

            <ul className="flex flex-col gap-3 text-[16px] lg:text-[19px]">
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Understanding the Forex Market</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Basics of Forex Trading</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Understanding the role of brokerage firms</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Understanding the trading platforms</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Fundamental analysis in Forex</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Technical analysis for Forex Trading</li>
                <li className="flex gap-2"><CheckCheck className="text-[#f8aa03]"/> Copy Trading Masterclass</li>
            </ul>
            
        </div>
            <div className="flex items-center justify-center"><button className="bg-[#f8aa03] hover:bg-white cursor-pointer hover:text-[#f8aa03] transition-all ease-in-out duration-300 px-[3rem] py-[1rem] rounded-md font-bold text-lg">Enroll Now</button></div>
        </div>
  )
}
export default GetFullAcess