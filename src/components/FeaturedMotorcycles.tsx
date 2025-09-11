import MotorcycleCard from "./MotorcycleCard";
import ScrollAnimation from "./ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotorcycleData } from "@/hooks/useMotorcycleSearch";
import { Search, Filter, X, Sparkles } from "lucide-react";
import { useMemo, useCallback, memo } from "react";

interface FeaturedMotorcyclesProps {
  motorcycles: MotorcycleData[];
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

const FeaturedMotorcycles = memo(({ motorcycles, hasActiveFilters, onClearFilters }: FeaturedMotorcyclesProps) => {
  // Memoize computed values to avoid recalculation on every render
  const sectionTitle = useMemo(() => 
    hasActiveFilters ? "Resultados da Busca" : "Motos em Destaque", 
    [hasActiveFilters]
  );
  
  const sectionDescription = useMemo(() => 
    hasActiveFilters 
      ? `${motorcycles.length} moto${motorcycles.length !== 1 ? 's' : ''} encontrada${motorcycles.length !== 1 ? 's' : ''} com os filtros aplicados`
      : "Confira nossa seleção especial de motos com os melhores preços e condições de pagamento",
    [hasActiveFilters, motorcycles.length]
  );

  // Memoize the clear filters callback
  const handleClearFilters = useCallback(() => {
    onClearFilters();
  }, [onClearFilters]);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden" id="motos">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollAnimation animation="fadeInUp" delay={0.1}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                {hasActiveFilters ? "Resultados" : "Nossa Seleção"}
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {sectionTitle}
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" delay={0.3}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {sectionDescription}
            </p>
          </ScrollAnimation>
          
          {hasActiveFilters && (
            <ScrollAnimation animation="scaleIn" delay={0.4}>
              <div className="flex items-center justify-center gap-4">
                <Badge 
                  variant="secondary" 
                  className="text-sm cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-all duration-300 hover:scale-105 px-4 py-2"
                  onClick={handleClearFilters}
                >
                  <X className="h-4 w-4 mr-2" />
                  Limpar Filtros
                </Badge>
              </div>
            </ScrollAnimation>
          )}
        </div>

        {motorcycles.length === 0 ? (
          <ScrollAnimation animation="fadeInUp" delay={0.1}>
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nenhuma moto encontrada</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Não encontramos motos com os filtros aplicados. 
                  Tente ajustar os critérios de busca ou limpar os filtros.
                </p>
                <Button 
                  onClick={handleClearFilters} 
                  variant="outline"
                  className="transition-all duration-300 hover:scale-105"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Limpar Filtros
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {motorcycles.map((motorcycle, index) => {
                // Simplified animation types for better performance
                const animationType = index % 2 === 0 ? 'fadeInUp' : 'fadeIn';
                
                return (
                  <ScrollAnimation 
                    key={motorcycle.id}
                    animation={animationType}
                    delay={Math.min(index * 0.03, 0.5)} // Further reduced delay
                    duration={0.2} // Shorter duration
                  >
                    <MotorcycleCard motorcycle={motorcycle} />
                  </ScrollAnimation>
                );
              })}
            </div>
            
            {/* Results summary */}
            <ScrollAnimation animation="scaleIn" delay={0.5}>
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  {motorcycles.length} moto{motorcycles.length !== 1 ? 's' : ''} disponível{motorcycles.length !== 1 ? 'is' : ''}
                </div>
              </div>
            </ScrollAnimation>
          </>
        )}
      </div>
    </section>
  );
});

FeaturedMotorcycles.displayName = 'FeaturedMotorcycles';

export default FeaturedMotorcycles;