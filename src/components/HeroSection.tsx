
import { Button } from '@/components/ui/button';
import { ArrowDown, Monitor, Settings } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-industrial-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-industrial-100 to-energy-100 rounded-full opacity-50 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-energy-100 to-industrial-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-industrial-50 text-industrial-700 px-4 py-2 rounded-full text-sm font-medium">
                <Monitor size={16} />
                <span>Plataforma IIoT Avançada</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-poppins">
                Sistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-600 to-energy-600">Integrado</span> de Desempenho Energético
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Plataforma inteligente para integrar, monitorar e otimizar o desempenho energético e produtivo das indústrias em tempo real, com conformidade ISO 50.001.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('cta')}
                className="bg-gradient-to-r from-industrial-600 to-industrial-700 hover:from-industrial-700 hover:to-industrial-800 text-white px-8 py-3 text-lg font-semibold group"
              >
                Solicitar Demonstração
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="border-2 border-industrial-600 text-industrial-600 hover:bg-industrial-50 px-8 py-3 text-lg font-semibold"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-industrial-600 font-poppins">Real-time</div>
                <div className="text-sm text-gray-600">Monitoramento</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-energy-600 font-poppins">ISO 50.001</div>
                <div className="text-sm text-gray-600">Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-industrial-600 font-poppins">OPC UA</div>
                <div className="text-sm text-gray-600">Protocol</div>
              </div>
            </div>
          </div>

          {/* Visual Content - Espaço para GIF */}
          <div className="relative">
            <div className="bg-gradient-to-br from-industrial-100 to-energy-100 rounded-2xl p-8 shadow-2xl">
              {/* Placeholder para GIF principal */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Settings className="text-industrial-600" size={24} />
                    <span className="font-semibold text-gray-900">Dashboard Principal</span>
                  </div>
                  <div className="w-3 h-3 bg-energy-500 rounded-full animate-pulse-glow"></div>
                </div>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Monitor className="mx-auto text-gray-400 mb-2" size={48} />
                    <p className="text-gray-500 font-medium">Espaço para GIF</p>
                    <p className="text-sm text-gray-400">Dashboard em tempo real</p>
                  </div>
                </div>
              </div>

              {/* Indicadores visuais */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-sm text-gray-600 mb-1">Eficiência Energética</div>
                  <div className="text-2xl font-bold text-energy-600">94.2%</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-sm text-gray-600 mb-1">Uptime</div>
                  <div className="text-2xl font-bold text-industrial-600">99.8%</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-energy-500 to-energy-600 rounded-full shadow-lg animate-float flex items-center justify-center">
              <Monitor className="text-white" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-industrial-500 to-industrial-600 rounded-full shadow-lg animate-float flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
              <Settings className="text-white" size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
