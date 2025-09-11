import { useParams, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MessageCircle, 
  Phone, 
  Calculator,
  Gauge,
  Fuel,
  Weight,
  Zap,
  Settings,
  Shield,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Sparkles,
  Eye,
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar
} from "lucide-react";
import { motorcyclesDatabase } from "@/data/motorcycles";
import hondaImage from "@/assets/honda-cbr600rr.jpg";
import yamahaImage from "@/assets/yamaha-mt09.jpg";
import kawasakiImage from "@/assets/kawasaki-ninja400.jpg";
import suzukiImage from "@/assets/suzuki-gsxs750.jpg";

// Generate detailed specs for each motorcycle
const generateSpecs = (motorcycle: any) => {
  const specsMap: Record<string, any> = {
    "1": { // CBR 600RR
      engine: "599cc, 4 cilindros",
      power: "121 cv @ 13.500 rpm",
      torque: "6,3 kgfm @ 11.000 rpm",
      consumption: "17 km/l",
      weight: "194 kg",
      topSpeed: "260 km/h"
    },
    "2": { // MT-09
      engine: "847cc, 3 cilindros",
      power: "115 cv @ 10.000 rpm",
      torque: "8,9 kgfm @ 8.500 rpm",
      consumption: "15 km/l",
      weight: "193 kg",
      topSpeed: "240 km/h"
    },
    "3": { // Ninja 400
      engine: "399cc, 2 cilindros",
      power: "45 cv @ 10.000 rpm",
      torque: "3,8 kgfm @ 8.000 rpm",
      consumption: "20 km/l",
      weight: "168 kg",
      topSpeed: "180 km/h"
    },
    "4": { // GSX-S750
      engine: "749cc, 4 cilindros",
      power: "112 cv @ 10.500 rpm",
      torque: "8,1 kgfm @ 9.000 rpm",
      consumption: "16 km/l",
      weight: "213 kg",
      topSpeed: "250 km/h"
    },
    "5": { // CB 650R
      engine: "649cc, 4 cilindros",
      power: "95 cv @ 12.000 rpm",
      torque: "6,4 kgfm @ 8.500 rpm",
      consumption: "18 km/l",
      weight: "201 kg",
      topSpeed: "220 km/h"
    },
    "6": { // YZF-R3
      engine: "321cc, 2 cilindros",
      power: "42 cv @ 10.750 rpm",
      torque: "3,0 kgfm @ 9.000 rpm",
      consumption: "22 km/l",
      weight: "169 kg",
      topSpeed: "180 km/h"
    },
    "7": { // Ducati Panigale V2
      engine: "955cc, 2 cilindros",
      power: "155 cv @ 10.750 rpm",
      torque: "10,4 kgfm @ 9.000 rpm",
      consumption: "14 km/l",
      weight: "200 kg",
      topSpeed: "280 km/h"
    },
    "8": { // BMW S1000RR
      engine: "999cc, 4 cilindros",
      power: "207 cv @ 13.500 rpm",
      torque: "11,5 kgfm @ 11.000 rpm",
      consumption: "13 km/l",
      weight: "197 kg",
      topSpeed: "300 km/h"
    },
    "9": { // KTM 390 Duke
      engine: "373cc, 1 cilindro",
      power: "44 cv @ 9.000 rpm",
      torque: "3,7 kgfm @ 7.000 rpm",
      consumption: "25 km/l",
      weight: "149 kg",
      topSpeed: "170 km/h"
    },
    "10": { // Triumph Street Triple 765
      engine: "765cc, 3 cilindros",
      power: "118 cv @ 12.000 rpm",
      torque: "7,7 kgfm @ 9.500 rpm",
      consumption: "16 km/l",
      weight: "189 kg",
      topSpeed: "240 km/h"
    },
    "11": { // Aprilia RS 660
      engine: "659cc, 2 cilindros",
      power: "100 cv @ 10.500 rpm",
      torque: "6,7 kgfm @ 8.500 rpm",
      consumption: "18 km/l",
      weight: "183 kg",
      topSpeed: "230 km/h"
    },
    "12": { // Harley-Davidson Sportster
      engine: "883cc, 2 cilindros",
      power: "50 cv @ 6.000 rpm",
      torque: "7,0 kgfm @ 3.750 rpm",
      consumption: "12 km/l",
      weight: "255 kg",
      topSpeed: "160 km/h"
    },
    "13": { // Kawasaki Z900
      engine: "948cc, 4 cilindros",
      power: "125 cv @ 9.500 rpm",
      torque: "9,8 kgfm @ 7.700 rpm",
      consumption: "15 km/l",
      weight: "210 kg",
      topSpeed: "250 km/h"
    },
    "14": { // Yamaha R1
      engine: "998cc, 4 cilindros",
      power: "200 cv @ 13.500 rpm",
      torque: "11,3 kgfm @ 11.500 rpm",
      consumption: "13 km/l",
      weight: "201 kg",
      topSpeed: "300 km/h"
    },
    "15": { // Honda CB 1000R
      engine: "998cc, 4 cilindros",
      power: "145 cv @ 10.500 rpm",
      torque: "10,4 kgfm @ 8.250 rpm",
      consumption: "14 km/l",
      weight: "212 kg",
      topSpeed: "250 km/h"
    },
    "16": { // Suzuki GSX-R1000
      engine: "999cc, 4 cilindros",
      power: "202 cv @ 13.200 rpm",
      torque: "11,8 kgfm @ 10.800 rpm",
      consumption: "13 km/l",
      weight: "202 kg",
      topSpeed: "300 km/h"
    }
  };

  return specsMap[motorcycle.id] || {
    engine: "Motor não especificado",
    power: "Potência não especificada",
    torque: "Torque não especificado",
    consumption: "Consumo não especificado",
    weight: "Peso não especificado",
    topSpeed: "Velocidade não especificada"
  };
};

const generateDescription = (motorcycle: any) => {
  const descriptions: Record<string, string> = {
    "1": "A Honda CBR 600RR é uma moto esportiva de alta performance, perfeita para quem busca velocidade e adrenalina. Com design agressivo e tecnologia de ponta, oferece uma experiência única de pilotagem.",
    "2": "A Yamaha MT-09 é conhecida por sua versatilidade e desempenho equilibrado. Ideal para uso urbano e viagens, combina conforto e esportividade.",
    "3": "A Kawasaki Ninja 400 é perfeita para iniciantes e pilotos experientes que buscam uma moto esportiva acessível. Com excelente relação custo-benefício e tecnologia moderna.",
    "4": "A Suzuki GSX-S750 combina potência e praticidade. Ideal para uso urbano e estrada, oferece conforto e performance em um pacote versátil.",
    "5": "A Honda CB 650R representa o futuro das motos naked. Com design moderno e tecnologia avançada, oferece uma experiência de pilotagem única.",
    "6": "A Yamaha YZF-R3 é a escolha perfeita para quem quer começar no mundo das esportivas. Com excelente manobrabilidade e tecnologia moderna.",
    "7": "A Ducati Panigale V2 é pura emoção italiana. Com design icônico e performance excepcional, representa o melhor da engenharia Ducati.",
    "8": "A BMW S1000RR é uma das motos esportivas mais avançadas do mundo. Com tecnologia de ponta e performance extrema, é feita para pistas.",
    "9": "A KTM 390 Duke é conhecida por sua agilidade e diversão. Perfeita para o trânsito urbano, oferece uma experiência de pilotagem única.",
    "10": "A Triumph Street Triple 765 combina tradição britânica com tecnologia moderna. Com motor de 3 cilindros característico, oferece torque e suavidade.",
    "11": "A Aprilia RS 660 representa a nova geração de motos esportivas. Com design italiano e tecnologia avançada, oferece performance e versatilidade.",
    "12": "A Harley-Davidson Sportster é um ícone americano. Com estilo clássico e motor V-twin característico, representa a essência do motociclismo custom.",
    "13": "A Kawasaki Z900 é uma naked bike de alta performance. Com motor potente e design agressivo, oferece adrenalina pura na cidade e estrada.",
    "14": "A Yamaha R1 é uma das motos esportivas mais icônicas do mundo. Com tecnologia de ponta e performance extrema, é feita para pilotos experientes.",
    "15": "A Honda CB 1000R é a naked bike premium da Honda. Com design futurista e motor potente, oferece uma experiência de pilotagem única.",
    "16": "A Suzuki GSX-R1000 é uma lenda das pistas. Com tecnologia de ponta e performance extrema, representa o melhor da engenharia Suzuki."
  };

  return descriptions[motorcycle.id] || "Uma motocicleta excepcional que combina performance, tecnologia e design. Ideal para pilotos que buscam qualidade e confiabilidade.";
};

// Generate motorcycle data with detailed information
const generateMotorcycleData = () => {
  const data: Record<string, any> = {};
  
  motorcyclesDatabase.forEach(motorcycle => {
    const images = [motorcycle.image, motorcycle.image, motorcycle.image, motorcycle.image];
    
    data[motorcycle.id] = {
      ...motorcycle,
      images,
      specs: generateSpecs(motorcycle),
      description: generateDescription(motorcycle),
      warranty: motorcycle.condition === 'nova' ? '3 anos' : '1 ano',
      dealerNotes: motorcycle.condition === 'nova' 
        ? 'Moto zero km, pronta entrega. Financiamento aprovado na hora.'
        : 'Revisões em dia, único dono. Aceito troca.'
    };
  });
  
  return data;
};

const motorcycleData = generateMotorcycleData();

const MotorcycleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  
  const motorcycle = motorcycleData[id || "1"];

  if (!motorcycle) {
    return <div>Moto não encontrada</div>;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleLike = useCallback(() => {
    setIsLiked(prev => !prev);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage(prev => (prev + 1) % motorcycle.images.length);
  }, [motorcycle.images.length]);

  const prevImage = useCallback(() => {
    setSelectedImage(prev => (prev - 1 + motorcycle.images.length) % motorcycle.images.length);
  }, [motorcycle.images.length]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
        <img 
          src={motorcycle.images[selectedImage]} 
          alt={motorcycle.name}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate('/catalogo')}
                    className="flex items-center gap-2 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar ao Catálogo
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleLike}
                      className={`backdrop-blur-sm border-white/30 ${
                        isLiked 
                          ? 'bg-red-500 border-red-500 text-white' 
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <Badge 
                    className={`${
                      motorcycle.condition === 'nova' 
                        ? "bg-green-500 text-white" 
                        : "bg-blue-500 text-white"
                    } backdrop-blur-sm`}
                  >
                    {motorcycle.condition === 'nova' ? 'Nova' : 'Seminova'}
                  </Badge>
                  
                  <div className="flex items-center gap-1 text-white">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-sm text-white/70">(127 avaliações)</span>
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                  {motorcycle.brand} {motorcycle.name}
                </h1>
                
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{motorcycle.year}</span>
                  </div>
                  {motorcycle.mileage && (
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4" />
                      <span>{motorcycle.mileage.toLocaleString()} km</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>São Paulo, SP</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
        {/* Image Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex gap-2">
            {motorcycle.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedImage 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-8">

        {/* Price and Key Info Section */}
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {formatPrice(motorcycle.price)}
                </p>
                <p className="text-lg text-muted-foreground">
                  ou {motorcycle.installmentCount}x de {formatPrice(motorcycle.installment)} sem juros
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Garantia {motorcycle.warranty}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">Pronta entrega</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-medium">Financiamento aprovado</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-gradient-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Negociar pelo WhatsApp
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar para Loja
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Images and basic info */}
          <div className="lg:col-span-2">
            {/* Enhanced Image Gallery */}
            <ScrollAnimation animation="fadeInUp" delay={0.3}>
              <div className="mb-8">
                <div className="relative group">
                  <img 
                    src={motorcycle.images[selectedImage]} 
                    alt={motorcycle.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 group-hover:scale-105"
                    onClick={() => setShowImageModal(true)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  
                  {/* Navigation arrows */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Thumbnail Gallery */}
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <div className="grid grid-cols-4 gap-3 mb-8">
                {motorcycle.images.map((img: string, index: number) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                      index === selectedImage 
                        ? 'ring-2 ring-primary scale-105' 
                        : 'hover:scale-105'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${motorcycle.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                    {index === selectedImage && (
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* Enhanced Tabs for detailed information */}
            <ScrollAnimation animation="fadeInUp" delay={0.5}>
              <Tabs defaultValue="specs" className="mb-8">
                <TabsList className="grid w-full grid-cols-3 bg-muted/50 backdrop-blur-sm">
                  <TabsTrigger value="specs" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                    <Settings className="h-4 w-4 mr-2" />
                    Especificações
                  </TabsTrigger>
                  <TabsTrigger value="features" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                    <Shield className="h-4 w-4 mr-2" />
                    Equipamentos
                  </TabsTrigger>
                  <TabsTrigger value="description" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Descrição
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="specs" className="mt-6">
                  <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Settings className="h-6 w-6 text-primary" />
                        Especificações Técnicas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Gauge className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Motor</p>
                            <p className="text-muted-foreground">{motorcycle.specs.engine}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Zap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Potência</p>
                            <p className="text-muted-foreground">{motorcycle.specs.power}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Settings className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Torque</p>
                            <p className="text-muted-foreground">{motorcycle.specs.torque}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Fuel className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Consumo</p>
                            <p className="text-muted-foreground">{motorcycle.specs.consumption}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Weight className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Peso</p>
                            <p className="text-muted-foreground">{motorcycle.specs.weight}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Gauge className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Vel. Máxima</p>
                            <p className="text-muted-foreground">{motorcycle.specs.topSpeed}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              
                <TabsContent value="features" className="mt-6">
                  <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Shield className="h-6 w-6 text-primary" />
                        Equipamentos e Recursos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {motorcycle.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              
                <TabsContent value="description" className="mt-6">
                  <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-primary" />
                            Sobre esta moto
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {motorcycle.description}
                          </p>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-green-500" />
                            <span className="font-medium">Garantia: {motorcycle.warranty}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="font-medium">Revisões em dia</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-yellow-500" />
                            <span className="font-medium">Único dono</span>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/10">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <MessageCircle className="h-4 w-4 text-primary" />
                            Observações do vendedor
                          </h4>
                          <p className="text-muted-foreground">
                            {motorcycle.dealerNotes}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </ScrollAnimation>
          </div>

          {/* Right column - Enhanced sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimation animation="fadeInLeft" delay={0.6}>
              <Card className="sticky top-4 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">{motorcycle.name}</CardTitle>
                      <p className="text-muted-foreground">
                        {motorcycle.brand} • {motorcycle.year}
                        {motorcycle.mileage && ` • ${motorcycle.mileage.toLocaleString()} km`}
                      </p>
                    </div>
                    <Badge 
                      className={`${
                        motorcycle.condition === 'nova' 
                          ? "bg-green-500 text-white" 
                          : "bg-blue-500 text-white"
                      } backdrop-blur-sm`}
                    >
                      {motorcycle.condition === 'nova' ? 'Nova' : 'Seminova'}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  {/* Enhanced action buttons */}
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="lg">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Negociar pelo WhatsApp
                    </Button>
                    
                    <Button variant="outline" className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar para Loja
                    </Button>
                    
                    <Button variant="secondary" className="w-full" size="lg">
                      <Calculator className="h-4 w-4 mr-2" />
                      Simular Financiamento
                    </Button>
                  </div>

                  <Separator />

                  {/* Enhanced contact info */}
                  <div className="text-center space-y-3">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                      <h4 className="font-semibold mb-2">Fale conosco</h4>
                      <p className="text-2xl font-bold text-primary">(11) 9999-9999</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Seg-Sex: 8h às 18h | Sáb: 8h às 14h
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>São Paulo, SP</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MotorcycleDetails;