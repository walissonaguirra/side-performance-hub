
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Monitor, 
  Settings, 
  Check, 
  Upload,
  Calendar
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Settings,
      title: "Redução de Desperdícios",
      description: "Identifique e elimine desperdícios energéticos com dados precisos e análises em tempo real",
      percentage: "até 30%",
      metric: "redução de custos"
    },
    {
      icon: Check,
      title: "Controle Automatizado",
      description: "Automatize o controle de metas de eficiência com alertas inteligentes e dashboards personalizados",
      percentage: "99%",
      metric: "automação de processos"
    },
    {
      icon: Monitor,
      title: "Conformidade ESG",
      description: "Mantenha conformidade com padrões de sustentabilidade e ESG com relatórios detalhados",
      percentage: "100%",
      metric: "compliance garantido"
    },
    {
      icon: Upload,
      title: "Decisões Baseadas em Dados",
      description: "Tome decisões estratégicas com dados confiáveis e indicadores de performance em tempo real",
      percentage: "Real-time",
      metric: "análise de dados"
    },
    {
      icon: Calendar,
      title: "Incentivos Governamentais",
      description: "Participe de programas de incentivos voltados à eficiência energética com documentação completa",
      percentage: "Elegível",
      metric: "para incentivos"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Benefícios <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-600 to-energy-600">Comprovados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforme sua operação industrial com resultados mensuráveis e impacto direto no seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Lista de benefícios */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-industrial-500 hover:border-l-energy-500"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-industrial-500 to-industrial-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-poppins mb-2">
                          {benefit.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-2xl font-bold text-energy-600">{benefit.percentage}</span>
                          <span className="text-sm text-gray-500">{benefit.metric}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Espaço para GIF dos benefícios */}
          <div className="relative">
            <div className="bg-gradient-to-br from-industrial-50 to-energy-50 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Resultados em Ação</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-energy-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Dados ao vivo</span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Monitor className="mx-auto text-gray-400 mb-3" size={56} />
                    <p className="text-gray-500 font-medium">Espaço para GIF</p>
                    <p className="text-sm text-gray-400">Demonstração dos resultados e benefícios</p>
                  </div>
                </div>
              </div>

              {/* Métricas visuais */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-sm text-gray-600 mb-1">Economia Total</div>
                  <div className="text-xl font-bold text-energy-600">R$ 2.5M</div>
                  <div className="text-xs text-green-600">↗ +12% este mês</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-sm text-gray-600 mb-1">CO₂ Evitado</div>
                  <div className="text-xl font-bold text-industrial-600">1.2K ton</div>
                  <div className="text-xs text-green-600">↗ +8% este mês</div>
                </div>
              </div>
            </div>

            {/* Elementos flutuantes */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-energy-500 to-energy-600 rounded-full shadow-lg animate-float flex items-center justify-center">
              <Check className="text-white" size={24} />
            </div>
          </div>
        </div>

        {/* Seção de impacto */}
        <div className="bg-gradient-to-r from-industrial-600 to-energy-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              Impacto Transformador
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Mais do que economia, o SIDE promove uma transformação completa na gestão energética industrial
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">30%</div>
              <div className="text-sm opacity-80">Redução de custos energéticos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99.8%</div>
              <div className="text-sm opacity-80">Uptime de sistema</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">ISO</div>
              <div className="text-sm opacity-80">50.001 Compliance</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">Monitoramento contínuo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
