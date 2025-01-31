import NavBar from '@/components/navbar/NavBar';
import HeroSection from '@/components/HeroSection/HeroSection';
import Services from '@/components/Services/Services';
import HowItWork from '@/components/HowItWork/HowItWork';
import RegisterDriver from '@/components/RegisterDriver/RegisterDriver';
import ServiceWork from '@/components/Services/ServiceWork';
// import TestMonial from '@/components/Testmonial/TestMonial';
import Footer from '@/components/Footer/Footer';
import { AnimatedTestimonialsDemo } from '@/components/newtestmonial/AnimatedTestmonialsDemo';

export default function Home() {
  return (
   <div>
        <NavBar/>
        <div className=''>
          
        <HeroSection/>
        <Services/>
        <HowItWork/>
        <RegisterDriver/>
        <ServiceWork/>
        {/* <TestMonial/> */}
        <AnimatedTestimonialsDemo/>

        </div>
        <Footer/>
   </div>
  );
}
