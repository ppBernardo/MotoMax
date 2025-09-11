import { Button } from "@/components/ui/button";
import { Zap, Shield, Award } from "lucide-react";
import heroImage from "@/assets/yamaha2.jpg";

interface HeroSectionProps {
  onSearch: () => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Yamaha em destaque"
          className="w-full h-full object-cover hero-bg-image"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-black/80 via-midnight-black/50 to-transparent"></div>
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