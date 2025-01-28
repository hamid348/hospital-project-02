import NavBar from '@/components/navbar/NavBar';
import HeroSection from '@/components/HeroSection/HeroSection';
import Services from '@/components/Services/Services';

export default function Home() {
  return (
   <div>
        <NavBar/>
        <div className='container'>
          
        <HeroSection/>
        <Services/>
        </div>
   </div>
  );
}
