
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    features: false,
    benefits: false,
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'features', 'benefits', 'cta'];
      const newVisibility = { ...isVisible };

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.8;
          newVisibility[section as keyof typeof isVisible] = isInView;
        }
      });

      setIsVisible(newVisibility);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      <main>
        <section id="hero" className={`transition-all duration-1000 ${isVisible.hero ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <HeroSection />
        </section>

        <section id="about" className={`transition-all duration-1000 ${isVisible.about ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <AboutSection />
        </section>

        <section id="features" className={`transition-all duration-1000 ${isVisible.features ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <FeaturesSection />
        </section>

        <section id="benefits" className={`transition-all duration-1000 ${isVisible.benefits ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <BenefitsSection />
        </section>

        <section id="cta" className={`transition-all duration-1000 ${isVisible.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <CTASection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
