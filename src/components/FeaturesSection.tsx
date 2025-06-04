
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Settings, 
  Users, 
  Calendar, 
  List, 
  Upload, 
  Download,
  Cloud,
  Check
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Monitor,
      title: "Layout Responsivo",
      description: "Interface adaptável para qualquer dispositivo, garantindo acesso completo em desktop, tablet e mobile",
      color: "from-industrial-500 to-industrial-600",
      badge: "UI/UX"
    },
    {
      icon: Settings,
      title: "Recursos Dinâmicos",
      description: "Configurações flexíveis que se adaptam às necessidades específicas de cada indústria",
      color: "from-energy-500 to-energy-600",
      badge: "Configuração"
    },
    {
      icon: Calendar,
      title: "Gestão de Turnos",
      description: "Cadastro dinâmico de turnos com árvore de justificativas para apontamento de paradas de máquina",
      color: "from-industrial-500 to-industrial-600",
      badge: "Operacional"
    },
    {
      icon: List,
      title: "Módulo de Paradas",
      description: "Sistema completo para registro, análise e gestão de paradas de máquina com categorização detalhada",
      color: "from-energy-500 to-energy-600",
      badge: "Análise"
    },
    {
      icon: Upload,
      title: "Análise Pareto",
      description: "Módulo avançado de análise Pareto com exportação de dados e filtros por turno, motivo e período",
      color: "from-industrial-500 to-industrial-600",
      badge: "Analytics"
    },
    {
      icon: Settings,
      title: "Cadastro de Máquinas",
      description: "Sistema dinâmico para cadastro e gerenciamento de máquinas com configurações personalizáveis",
      color: "from-energy-500 to-energy-600",
      badge: "Equipamentos"
    },
    {
      icon: Cloud,
      title: "Dispositivos IoT",
      description: "Cadastro dinâmico de dispositivos IoT no protocolo OPC UA para integração industrial completa",
      color: "from-industrial-500 to-industrial-600",
      badge: "IoT"
    },
    {
      icon: Monitor,
      title: "Dados Real-time",
      description: "Atualizações de dados na tela em tempo real para monitoramento contínuo da operação",
      color: "from-energy-500 to-energy-600",
      badge: "Tempo Real"
    },
    {
      icon: Cloud,
      title: "Infraestrutura",
      description: "Aplicação modularizada em containers independentes para máxima escalabilidade e confiabilidade",
      color: "from-industrial-500 to-industrial-600",
      badge: "Arquitetura"
    },
    {
      icon: Users,
      title: "Gestão de Usuários",
      description: "Sistema completo de usuários por tipos, grupos de permissões e hierarquia entre grupos",
      color: "from-energy-500 to-energy-600",
      badge: "Segurança"
    },
    {
      icon: Check,
      title: "Banco InfluxDB",
      description: "Segurança no armazenamento de dados com banco de dados InfluxDB otimizado para séries temporais",
      color: "from-industrial-500 to-industrial-600",
      badge: "Database"
    },
    {
      icon: Users,
      title: "Login Microsoft AD",
      description: "Segurança de acesso à aplicação usando autenticação Microsoft Active Directory",
      color: "from-energy-500 to-energy-600",
      badge: "Auth"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-industrial-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Recursos e <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-600 to-energy-600">Módulos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma plataforma completa com recursos avançados para gestão energética e produtiva industrial
          </p>
        </div>

        {/* Espaço para GIF dos recursos */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 font-poppins">Demonstração dos Recursos</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-energy-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Ao vivo</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <Monitor className="mx-auto text-gray-400 mb-3" size={64} />
                <p className="text-gray-500 font-medium text-lg">Espaço para GIF</p>
                <p className="text-gray-400">Demonstração interativa dos módulos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de recursos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-industrial-200 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-poppins leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Seção adicional com destaque para tecnologias */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                Tecnologias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-600 to-energy-600">Ponta</span>
              </h3>
              <p className="text-gray-600">
                Construído com as melhores práticas e tecnologias mais avançadas do mercado
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-500 to-industrial-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Cloud className="text-white" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">OPC UA Protocol</h4>
                <p className="text-sm text-gray-600">
                  Protocolo padrão da indústria para comunicação M2M segura e confiável
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-energy-500 to-energy-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Settings className="text-white" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">InfluxDB</h4>
                <p className="text-sm text-gray-600">
                  Banco de dados otimizado para séries temporais e alta performance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-500 to-industrial-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Microsoft AD</h4>
                <p className="text-sm text-gray-600">
                  Integração completa com Active Directory para autenticação segura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
