import Courses from "@/components/Courses/Courses";
import GetFullAcess from "@/components/GetFullAcess/GetFullAcess";
import Hero from "@/components/Hero/Hero";
import OurPartner from "@/components/OurPartner/OurPartner";
import PhysicalAndOnline from "@/components/PhysicalAndOnline/PhysicalAndOnline";
import Testimonials from "@/components/Testimonials/Testimonials";


const Home = () => {
  return (
  <>
   <Hero/>
   <OurPartner/>
   <Courses/>
   <PhysicalAndOnline/>
   <GetFullAcess/>
   <Testimonials/>
    </>
  );
};
export default Home;
