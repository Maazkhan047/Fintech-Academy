'use client'
import Image from "next/image"
import customer_support from '@/assets/customer_support.jpg'
import { PhoneCall, SquareArrowOutUpRightIcon } from "lucide-react"
import { useState } from "react";

export function Contact() {
  const [result, setResult] = useState<string>("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({
              access_key: "c6411330-4beb-408c-a6bf-4cda042790a2",
              name: formData.get('name')?.toString() || '',
              email: formData.get('email')?.toString() || '',
              phone: formData.get('phone')?.toString() || '',
              message: formData.get('message')?.toString() || '',
          }),
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
          setResult('Message sent successfully!');
      }
      else{
        setResult('Something went wrong, please try again.');
      }
  }
  
  return (
    <div className="py-[4%]">
      <div className="relative w-full">
        <Image src={customer_support} alt="customer_support" className="w-full h-[25rem] object-cover opacity-40"/>
        <h1 className="absolute top-1/2 text-center -translate-y-1/2 text-5xl font-bold min-w-[100%]">24/7 Customer Support</h1>
      </div>
      
      <div className="py-[7%] flex flex-col md:flex-row  lg:px-[10%] gap-10">
      <div className="flex flex-col items-start gap-5 py-[5%] w-[100%] md:[50%] lg:w-[50%]">
        <p className="flex items-center gap-5 text-[1.2rem]"><PhoneCall size={30} className="text-[#F8AA03]"/> +447450371187</p>
        <p className="flex items-center gap-5 text-[1.2rem]"><PhoneCall size={30} className="text-[#F8AA03]"/> +447888872722</p>
        <p className="flex items-center gap-5 text-[1.2rem]"><SquareArrowOutUpRightIcon size={30} className="text-[#F8AA03]"/> Office Address: 2 Frederick Street, Kings Cross, London, United Kingdom, Wc1X0ND.</p>
      </div>

      <form action="" onSubmit={handleSubmit} className="flex flex-col lg:mt-[2rem] gap-2 w-[100%] md:[50%] lg:w-[50%]">
        <input type="text" name="name" placeholder="Name" className="outline-none border-b-2 rounded-md p-2 " />
        <input type="email" name="email" required placeholder="Email"  className="outline-none border-b-2 rounded-md p-2"/>
        <input type="Phone" name='phone' placeholder="Phone Number"  className="outline-none border-b-2 rounded-md p-2"/>
        <textarea name="message" placeholder="Message"   className="outline-none border-b-2 rounded-md p-2"></textarea>
        <button type="submit" className="bg-[#F8AA03] p-3 font-bold cursor-pointer rounded-md">Send</button>
        <span className="text-[#F8AA03] text-[14px]">{result}</span>
      </form>
      </div>
    </div>
  )
}
export default Contact;