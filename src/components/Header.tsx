
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6358fb5f-f46e-4e06-87a9-fc4a5d2de66b.png" 
              alt="EGE Soluções" 
              className="w-12 h-12"
            />
            <div>
              <span className="text-xl font-bold text-gray-900 font-poppins">SIDE</span>
              <p className="text-xs text-gray-500 leading-none">EGE Soluções</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-industrial-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-industrial-600 transition-colors font-medium"
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-600 hover:text-industrial-600 transition-colors font-medium"
            >
              Benefícios
            </button>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-gradient-to-r from-industrial-600 to-industrial-700 hover:from-industrial-700 hover:to-industrial-800 text-white"
            >
              Solicitar Demo
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-industrial-600 transition-colors font-medium text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-industrial-600 transition-colors font-medium text-left"
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-600 hover:text-industrial-600 transition-colors font-medium text-left"
              >
                Benefícios
              </button>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="bg-gradient-to-r from-industrial-600 to-industrial-700 hover:from-industrial-700 hover:to-industrial-800 text-white w-full"
              >
                Solicitar Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
