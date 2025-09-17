import { Button } from "@/components/ui/button";
import { Zap, Shield, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/yamaha2.jpg";
import heroImage2 from "@/assets/kawasakiZ900.jpg";
import heroImage3 from "@/assets/panigale-v2.jpg";
import heroImage4 from "@/assets/r3.png";
import heroImage5 from "@/assets/bmws100rr.jpg";

interface HeroSectionProps {
  onSearch: () => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    { src: heroImage1, alt: "Yamaha em destaque" },
    { src: heroImage2, alt: "Kawasaki Z900" },
    { src: heroImage3, alt: "Ducati Panigale V2" },
    { src: heroImage4, alt: "Yamaha R3" },
    { src: heroImage5, alt: "BMW S1000RR" }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover hero-bg-image transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="sync"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-black/80 via-midnight-black/50 to-transparent"></div>
        
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="sm"
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
        >
          <ChevronLeft className="h-5 w-5 text-gray-800" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
        >
          <ChevronRight className="h-5 w-5 text-gray-800" />
        </Button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sua Nova
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Aventura
              </span>
              Começa Aqui
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Descubra nossa incrível seleção de motos novas e seminovas. 
              Financiamento em até 60x com as menores taxas do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 shadow-glow px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl" 
                onClick={onSearch}
              >
                <Zap className="mr-2 h-5 w-5" />
                Ver Catálogo de Motos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white/30 hover:bg-white hover:text-midnight-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:shadow-lg hover:scale-105"
              >
                Simular Financiamento
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Shield className="h-8 w-8 text-speed-orange mx-auto mb-2" />
                <p className="text-sm">Garantia Estendida</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-speed-orange mx-auto mb-2" />
                <p className="text-sm">15 Anos no Mercado</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-speed-orange mx-auto mb-2" />
                <p className="text-sm">Entrega Imediata</p>
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="lg:flex lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Encontre Sua Moto Ideal</h3>
              <p className="text-gray-300 mb-6">
                Explore nosso catálogo completo com mais de 200 motos disponíveis
              </p>
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary border-0 shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={onSearch}
              >
                <Zap className="mr-2 h-5 w-5" />
                Explorar Catálogo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;