import NavBar from '@/components/navbar/NavBar';
import HeroSection from '@/components/HeroSection/HeroSection';
import Services from '@/components/Services/Services';
import HowItWork from '@/components/HowItWork/HowItWork';
import RegisterDriver from '@/components/RegisterDriver/RegisterDriver';
import ServiceWork from '@/components/Services/ServiceWork';
// import TestMonial from '@/components/Testmonial/TestMonial';
import Footer from '@/components/Footer/Footer';
import { AnimatedTestimonialsDemo } from '@/components/newtestmonial/AnimatedTestmonialsDemo';
import FqaSection from '@/components/FQAs/FqaSection';
import AboutSection from '@/components/AboutSection/AboutSection';

export default function Home() {
  return (
   <>
        <NavBar/>
        <HeroSection/>

        
        <Services/>
        <HowItWork/>
        <AboutSection/>
        <RegisterDriver/>
        <ServiceWork/>
        {/* <TestMonial/> */}
        <AnimatedTestimonialsDemo/>

        <FqaSection/>
        
        <Footer/>
   </>
  );
}
