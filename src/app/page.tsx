import NavBar from '@/components/navbar/NavBar';
import HeroSection from '@/components/HeroSection/HeroSection';
import Services from '@/components/Services/Services';
import HowItWork from '@/components/HowItWork/HowItWork';
import RegisterDriver from '@/components/RegisterDriver/RegisterDriver';

export default function Home() {
  return (
   <div>
        <NavBar/>
        <div className='container'>
          
        <HeroSection/>
        <Services/>
        <HowItWork/>
        <RegisterDriver/>
        </div>
   </div>
  );
}
