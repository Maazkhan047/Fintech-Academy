import Image from 'next/image';
import Fintecmarket_logo from '../../assets/Fintecmarkets-logo.jpg'
import logo_1 from '../../assets/logo-1.png'
import hero_img from '../../assets/hero-img-qk5ch3wx4q3m3sik1jm3c3lzhf0mdn53fhepny9kw0.png'
import logo_of_sir_syed from '../../assets/logo-of-sir-syed-university.png'

const OurPartner = () => {
  return (
    <section className="px-[10%] py-[5%]">
      <div className="flex flex-col items-center gap-5 ">
        <h2 className="text-4xl text-[#f8aa03] font-bold ">Our Partner</h2>
        <p className="text-center max-w-[100%] lg:w-[60%]">
          {" "}
          FintecAcademy is an academic initiative of Fintec Markets Copy Trading
          and is partnering with world-recognized institutions, it suggests a
          commitment to providing high-quality education and training in the
          field of financial technology (fintech) and copy trading.
        </p>
        <p className="text-center max-w-[100%] lg:w-[60%]">
          Partnering with reputable institutions can enhance the credibility and
          quality of the educational programs offered by FintecAcademy. It may
          also provide students with valuable opportunities for trading,
          networking, internships, and real-world exposure to the fintech
          industry.
        </p>
      </div>

      <div className='grid grid-cols-4 gap-2 lg:mx-30 my-10 items-center'>
        <Image height={150} width={150} src={Fintecmarket_logo} alt="logo" />
        <Image height={150} width={150} src={logo_1} alt="logo" />
        <Image height={150} width={150} src={hero_img} alt="logo" />
        <Image height={150} width={150} src={logo_of_sir_syed} alt="logo" />
      </div>
    </section>
  );
};
export default OurPartner;
