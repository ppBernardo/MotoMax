import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import equipeImage from "@/assets/equipe.png";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Users, 
  Award, 
  Shield, 
  Heart,
  CheckCircle,
  TrendingUp,
  Target,
  Eye,
  Handshake,
  Zap,
  Globe,
  MessageCircle,
  Calendar,
  Truck,
  Wrench,
  CreditCard,
  Headphones
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("historia");

  const stats = [
    { icon: Users, value: "15+", label: "Anos de Experiência", color: "text-blue-500" },
    { icon: Award, value: "5000+", label: "Motos Vendidas", color: "text-green-500" },
    { icon: Star, value: "4.9", label: "Avaliação Média", color: "text-yellow-500" },
    { icon: Shield, value: "100%", label: "Clientes Satisfeitos", color: "text-purple-500" }
  ];

  const values = [
    {
      icon: Handshake,
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados na transparência e honestidade com nossos clientes.",
      color: "bg-blue-500"
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos sempre a melhor qualidade em produtos e serviços, superando as expectativas dos nossos clientes.",
      color: "bg-green-500"
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Somos apaixonados por motocicletas e compartilhamos essa paixão com cada cliente que atendemos.",
      color: "bg-red-500"
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Estamos sempre atualizados com as últimas tecnologias e tendências do mercado motociclístico.",
      color: "bg-yellow-500"
    }
  ];

  const services = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Entregamos sua moto em até 48h em São Paulo e região metropolitana.",
      features: ["Entrega gratuita", "Seguro incluído", "Documentação completa"]
    },
    {
      icon: Wrench,
      title: "Assistência Técnica",
      description: "Oficina especializada com técnicos certificados pelas principais montadoras.",
      features: ["Manutenção preventiva", "Revisões oficiais", "Garantia estendida"]
    },
    {
      icon: CreditCard,
      title: "Financiamento",
      description: "Parcerias com as melhores financeiras para facilitar sua compra.",
      features: ["Taxas especiais", "Aprovação rápida", "Sem entrada"]
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre disponível para ajudar você.",
      features: ["WhatsApp direto", "Chat online", "Telefone de emergência"]
    }
  ];

  const team = [
    {
      name: "Carlos Silva",
      role: "Fundador & CEO",
      experience: "20 anos no mercado",
      specialty: "Esportivas e Naked",
      image: "👨‍💼"
    },
    {
      name: "Ana Santos",
      role: "Gerente Comercial",
      experience: "12 anos de experiência",
      specialty: "Custom e Touring",
      image: "👩‍💼"
    },
    {
      name: "Roberto Lima",
      role: "Especialista Técnico",
      experience: "15 anos na área",
      specialty: "Manutenção e Reparos",
      image: "👨‍🔧"
    },
    {
      name: "Mariana Costa",
      role: "Atendimento ao Cliente",
      experience: "8 anos de experiência",
      specialty: "Pós-venda e Suporte",
      image: "👩‍💻"
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Fundação da Loja",
      description: "Iniciamos nossa jornada com uma pequena loja no centro de São Paulo, focada em motos usadas."
    },
    {
      year: "2012",
      title: "Expansão para Novas",
      description: "Expandimos nosso negócio para incluir motos zero quilômetro das principais marcas."
    },
    {
      year: "2016",
      title: "Oficina Própria",
      description: "Inauguramos nossa oficina especializada com técnicos certificados."
    },
    {
      year: "2020",
      title: "Plataforma Digital",
      description: "Lançamos nossa plataforma online para facilitar a compra e venda de motos."
    },
    {
      year: "2023",
      title: "Reconhecimento",
      description: "Recebemos o prêmio de melhor concessionária de motos da região."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={equipeImage} 
            alt="Equipe da loja"
            className="w-full h-full object-cover object-center object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <Star className="h-4 w-4 mr-2" />
                  Desde 2008
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
                  Sobre Nossa Loja
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Há mais de 15 anos, somos referência em motocicletas, oferecendo as melhores marcas, 
                  serviços especializados e um atendimento que faz a diferença.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Fale Conosco
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm bg-white/10">
                    <MapPin className="h-4 w-4 mr-2" />
                    Visite Nossa Loja
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Números que Falam
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nossa trajetória é marcada por conquistas e resultados que comprovam nossa excelência no atendimento.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={0.3 + index * 0.1}>
                <Card className="text-center border-0 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center`}>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Nossa História
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conheça nossa trajetória, valores e a equipe que faz a diferença no atendimento.
              </p>
            </div>
          </ScrollAnimation>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "historia", label: "Nossa História", icon: Calendar },
              { id: "valores", label: "Nossos Valores", icon: Heart },
              { id: "servicos", label: "Nossos Serviços", icon: Wrench },
              { id: "equipe", label: "Nossa Equipe", icon: Users }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "bg-gradient-primary border-0 shadow-lg" 
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === "historia" && (
              <ScrollAnimation animation="fadeInUp" delay={0.3}>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                          {item.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            )}

            {activeTab === "valores" && (
              <ScrollAnimation animation="fadeInUp" delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-6`}>
                          <value.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollAnimation>
            )}

            {activeTab === "servicos" && (
              <ScrollAnimation animation="fadeInUp" delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                            <service.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollAnimation>
            )}

            {activeTab === "equipe" && (
              <ScrollAnimation animation="fadeInUp" delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {team.map((member, index) => (
                    <Card key={index} className="text-center border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-6">
                        <div className="text-6xl mb-4">{member.image}</div>
                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                        <p className="text-primary font-semibold mb-2">{member.role}</p>
                        <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                        <Badge variant="secondary" className="text-xs">
                          {member.specialty}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Venha nos Conhecer
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Estamos localizados no coração de São Paulo, prontos para atendê-lo com excelência.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <ScrollAnimation animation="fadeInLeft" delay={0.3}>
              <div className="space-y-8">
                <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Endereço</h4>
                          <p className="text-muted-foreground">
                            Rua das Motos, 1234<br />
                            Centro - São Paulo, SP<br />
                            CEP: 01234-567
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Telefone</h4>
                          <p className="text-muted-foreground">
                            (11) 9999-9999<br />
                            (11) 3333-3333
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">E-mail</h4>
                          <p className="text-muted-foreground">
                            contato@motoweb.com.br<br />
                            vendas@motoweb.com.br
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                          <p className="text-muted-foreground">
                            Segunda a Sexta: 8h às 18h<br />
                            Sábado: 8h às 14h<br />
                            Domingo: Fechado
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            {/* Map Placeholder */}
            <ScrollAnimation animation="fadeInRight" delay={0.4}>
              <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Nossa Localização</h3>
                  <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Mapa interativo</p>
                      <p className="text-sm text-muted-foreground">Centro de São Paulo</p>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button className="flex-1 bg-gradient-primary border-0">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Globe className="h-4 w-4 mr-2" />
                      Como Chegar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
