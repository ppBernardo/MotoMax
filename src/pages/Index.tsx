import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  CreditCard, 
  Truck, 
  Wrench, 
  Star,
  Users,
  Award,
  Clock
} from "lucide-react";

const Index = () => {
  const handleSearch = () => {
    // Redirect to catalog page
    window.location.href = '/catalogo';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection 
          onSearch={handleSearch}
        />
        
        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <ScrollAnimation animation="fadeInUp" delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Star className="h-4 w-4" />
                  Por que escolher a MotoMax?
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={0.2}>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Excelência em Cada Detalhe
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={0.3}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Mais de 15 anos oferecendo as melhores condições do mercado, 
                  com tecnologia de ponta e atendimento personalizado.
                </p>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ScrollAnimation animation="fadeInUp" delay={0.4}>
                  <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <CreditCard className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Financiamento Facilitado</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Parcelamento em até 60x com as menores taxas do mercado e aprovação em até 24h
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp" delay={0.5}>
                  <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Truck className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Entrega Imediata</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Motos em estoque para entrega na hora ou agendamento personalizado
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp" delay={0.6}>
                  <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Shield className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Garantia Estendida</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Proteção completa para sua tranquilidade com cobertura nacional
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp" delay={0.7}>
                  <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Wrench className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Oficina Especializada</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Manutenção e revisão com técnicos certificados e peças originais
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-midnight-black via-slate-900 to-midnight-black text-white relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                Nossos Números
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Resultados que Falam por Si
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Dados que comprovam nossa excelência e compromisso com nossos clientes
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <p className="text-gray-300 font-medium">Anos no Mercado</p>
                  <p className="text-sm text-gray-400 mt-1">Experiência consolidada</p>
                </div>
                <div className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">5k+</div>
                  <p className="text-gray-300 font-medium">Motos Vendidas</p>
                  <p className="text-sm text-gray-400 mt-1">Clientes satisfeitos</p>
                </div>
                <div className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <p className="text-gray-300 font-medium">Clientes Satisfeitos</p>
                  <p className="text-sm text-gray-400 mt-1">Taxa de aprovação</p>
                </div>
                <div className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">24h</div>
                  <p className="text-gray-300 font-medium">Atendimento Online</p>
                  <p className="text-sm text-gray-400 mt-1">Sempre disponível</p>
                </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Junte-se a milhares de clientes satisfeitos
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pronto para Sua
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Nova Aventura?
                </span>
              </h2>
              
              <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
                Visite nossa loja ou entre em contato conosco. Nossa equipe especializada está pronta 
                para ajudar você a encontrar a moto perfeita para sua jornada.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-midnight-black hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 px-8 py-4 text-lg font-semibold"
                >
                  <Clock className="h-5 w-5 mr-2" />
                  Agendar Visita
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white hover:text-midnight-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:shadow-2xl hover:scale-105 px-8 py-4 text-lg font-semibold"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </div>
              
              <div className="mt-12 flex items-center justify-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">Garantia Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  <span className="text-sm">Entrega Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span className="text-sm">15 Anos de Experiência</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;