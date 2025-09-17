import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";
import { useFavorites } from "@/contexts/FavoritesContext";

interface MotorcycleProps {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  installment: number;
  installmentCount: number;
  mileage?: number;
  image: string;
  condition: "nova" | "seminova";
  features: string[];
}

const MotorcycleCard = memo(({ motorcycle }: { motorcycle: MotorcycleProps }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  }, []);

  const handleLike = useCallback(() => {
    toggleFavorite(motorcycle.id);
  }, [toggleFavorite, motorcycle.id]);

  const handleViewDetails = useCallback(() => {
    navigate(`/moto/${motorcycle.id}`);
  }, [navigate, motorcycle.id]);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={motorcycle.image} 
          alt={motorcycle.name}
          className="w-full h-56 object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge 
            className={`${
              motorcycle.condition === 'nova' 
                ? "bg-emerald-500 text-white shadow-lg" 
                : "bg-blue-500 text-white shadow-lg"
            } font-semibold px-3 py-1`}
          >
            {motorcycle.condition === 'nova' ? 'Nova' : 'Seminova'}
          </Badge>
          {motorcycle.condition === 'nova' && (
            <Badge className="bg-gradient-primary text-white shadow-lg font-semibold px-3 py-1">
              <Zap className="h-3 w-3 mr-1" />
              Lançamento
            </Badge>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="sm" 
            variant="secondary" 
            className="h-10 w-10 p-0 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-colors duration-200"
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 transition-colors duration-200 ${
              isFavorite(motorcycle.id)
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-600 hover:text-red-400'
            }`} />
          </Button>
        </div>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border border-white/20">
          <div className="flex items-center gap-0.5">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          </div>
          <span className="text-xs font-semibold text-gray-800">4.8</span>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">
              {motorcycle.name}
            </h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span>Garantia</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-3">
            {motorcycle.brand} • {motorcycle.year}
            {motorcycle.mileage && ` • ${motorcycle.mileage.toLocaleString()} km`}
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-2">
            <p className="text-3xl font-bold text-primary">
              {formatPrice(motorcycle.price)}
            </p>
            {motorcycle.condition === 'seminova' && (
              <Badge variant="outline" className="text-xs">
                -15%
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            ou {motorcycle.installmentCount}x de {formatPrice(motorcycle.installment)} sem juros
          </p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {motorcycle.features.slice(0, 2).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20">
                {feature}
              </Badge>
            ))}
            {motorcycle.features.length > 2 && (
              <Badge variant="secondary" className="text-xs px-3 py-1">
                +{motorcycle.features.length - 2} mais
              </Badge>
            )}
          </div>
        </div>

        <Button 
          className="w-full bg-gradient-primary border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={handleViewDetails}
        >
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
});

MotorcycleCard.displayName = 'MotorcycleCard';

export default MotorcycleCard;