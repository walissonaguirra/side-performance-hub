
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Monitor, Calendar, Users, Settings } from 'lucide-react';
import { useState } from 'react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode integrar com seu sistema de contato
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-industrial-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Transforme sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-600 to-energy-600">Indústria</span> Hoje
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Solicite uma demonstração personalizada e descubra como o SIDE pode revolucionar sua gestão energética
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulário de contato */}
          <Card className="shadow-xl border-2 border-gray-100">
            <CardHeader className="bg-gradient-to-r from-industrial-600 to-energy-600 text-white rounded-t-lg">
              <CardTitle className="text-xl font-poppins">
                Solicitar Demonstração Gratuita
              </CardTitle>
              <p className="text-industrial-100">
                Preencha o formulário e nossa equipe entrará em contato em até 24h
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail Corporativo *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="seu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conte-nos sobre suas necessidades
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full"
                    placeholder="Descreva brevemente suas necessidades de gestão energética..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-industrial-600 to-energy-600 hover:from-industrial-700 hover:to-energy-700 text-white py-3 text-lg font-semibold"
                >
                  Solicitar Demonstração Gratuita
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar este formulário, você concorda em receber comunicações da EGE Soluções
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Lado direito com informações e espaço para GIF */}
          <div className="space-y-8">
            {/* Espaço para GIF da demonstração */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-poppins">
                  <Monitor className="text-industrial-600" size={24} />
                  <span>Veja o SIDE em Ação</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Monitor className="mx-auto text-gray-400 mb-3" size={48} />
                    <p className="text-gray-500 font-medium">Espaço para GIF</p>
                    <p className="text-sm text-gray-400">Preview da demonstração do SIDE</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações de contato e próximos passos */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-industrial-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Calendar className="text-industrial-600 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Demonstração Personalizada</h4>
                      <p className="text-gray-600 text-sm">
                        Nossa equipe técnica apresentará o SIDE configurado especificamente para suas necessidades industriais
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-energy-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="text-energy-600 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Suporte Especializado</h4>
                      <p className="text-gray-600 text-sm">
                        Consultoria completa desde a implementação até a otimização contínua dos processos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-industrial-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Settings className="text-industrial-600 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Implementação Ágil</h4>
                      <p className="text-gray-600 text-sm">
                        Processo de implementação otimizado com mínimo impacto nas operações existentes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Informações de contato direto */}
            <div className="bg-gradient-to-r from-industrial-600 to-energy-600 rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-4 font-poppins">Contato Direto</h4>
              <div className="space-y-2 text-sm">
                <p>📧 contato@egesolucoes.com.br</p>
                <p>📱 (11) 99999-9999</p>
                <p>🕒 Seg-Sex: 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
