
import { Monitor, Settings, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-industrial-500 to-energy-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-poppins">SIDE</span>
                <p className="text-sm text-gray-400 leading-none">Sistema Integrado de Desempenho Energético</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Plataforma inteligente desenvolvida pela EGE Soluções para transformar a gestão energética e produtiva das indústrias.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🏭 Industrial IoT</span>
              <span>⚡ Gestão Energética</span>
              <span>📊 Analytics</span>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold mb-4 font-poppins">Soluções</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Monitor size={16} />
                  <span>Monitoramento Real-time</span>
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Settings size={16} />
                  <span>Gestão de Energia</span>
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Users size={16} />
                  <span>Analytics Avançado</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4 font-poppins">EGE Soluções</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>📧 contato@egesolucoes.com.br</p>
              <p>📱 (11) 99999-9999</p>
              <p>📍 São Paulo, SP - Brasil</p>
              <p className="pt-2">
                <span className="text-green-400">●</span> Sistema Online 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 EGE Soluções. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <span>ISO 50.001</span>
                <span className="text-green-400">✓</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>OPC UA</span>
                <span className="text-green-400">✓</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>ESG Ready</span>
                <span className="text-green-400">✓</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
