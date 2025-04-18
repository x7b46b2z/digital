import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import MarketingTools from './components/MarketingTools';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AdvertisingCalculator from './components/AdvertisingCalculator';


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyUs />
      <Services />
      <MarketingTools />
      <Testimonials />
      <Team />   
      <AdvertisingCalculator />
      <ContactUs /> 
      <Footer />
     
    </div>
  );
}

export default App;