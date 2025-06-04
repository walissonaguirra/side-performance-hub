
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Settings, Users, Cloud } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            O que é o <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-600 to-energy-600">SIDE</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma plataforma inteligente desenvolvida pela EGE Soluções para transformar a gestão energética e produtiva das indústrias
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Texto principal */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 font-poppins">
                Transformação Industrial Inteligente
              </h3>
              <p className="text-gray-600 leading-relaxed">
                O SIDE é uma plataforma inteligente desenvolvida pela EGE Soluções para integrar, monitorar e otimizar o desempenho energético e produtivo das indústrias em tempo real.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Projetado com base nas exigências das normas internacionais, como a <strong>ISO 50.001</strong>, o SIDE permite a coleta automática de dados diretamente das linhas de produção e sistemas de utilidades, transformando essas informações em indicadores estratégicos de eficiência, sustentabilidade e performance.
              </p>
            </div>

            <div className="bg-gradient-to-r from-industrial-50 to-energy-50 rounded-xl p-6 border border-industrial-100">
              <h4 className="font-semibold text-gray-900 mb-3">Mais do que um software</h4>
              <p className="text-gray-700">
                O SIDE é uma ferramenta de transformação industrial rumo à produtividade inteligente e à sustentabilidade operacional.
              </p>
            </div>
          </div>

          {/* Espaço para GIF */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-industrial-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Sistema em Ação</h4>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-energy-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-industrial-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-2 h-2 bg-energy-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Monitor className="mx-auto text-gray-400 mb-3" size={56} />
                    <p className="text-gray-500 font-medium">Espaço para GIF</p>
                    <p className="text-sm text-gray-400">Demonstração do SIDE em funcionamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de funcionalidades principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-industrial-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-industrial-500 to-industrial-600 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Monitor className="text-white" size={24} />
              </div>
              <CardTitle className="text-lg font-poppins">Monitoramento Real-time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Coleta automática de dados das linhas de produção e sistemas de utilidades
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-energy-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-energy-500 to-energy-600 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Settings className="text-white" size={24} />
              </div>
              <CardTitle className="text-lg font-poppins">ISO 50.001</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Conformidade com normas internacionais de gestão energética
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-industrial-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-industrial-500 to-industrial-600 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="text-white" size={24} />
              </div>
              <CardTitle className="text-lg font-poppins">Gestão Avançada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Sistema completo de usuários, permissões e hierarquias
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-energy-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-energy-500 to-energy-600 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cloud className="text-white" size={24} />
              </div>
              <CardTitle className="text-lg font-poppins">Arquitetura Moderna</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Infraestrutura modularizada em containers independentes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
