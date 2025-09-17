import Header from "@/components/Header";
import FeaturedMotorcycles from "@/components/FeaturedMotorcycles";
import Footer from "@/components/Footer";
import { useMotorcycleSearch } from "@/hooks/useMotorcycleSearch";
import { motorcyclesDatabase } from "@/data/motorcycles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigate = useNavigate();
  const {
    filters,
    filteredMotorcycles,
    updateFilter,
    clearFilters,
    hasActiveFilters
  } = useMotorcycleSearch(motorcyclesDatabase);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Header with Search */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleBackToHome}
                  className="transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Início
                </Button>
                <h1 className="text-2xl font-bold">Catálogo de Motos</h1>
              </div>
              
              {/* Search Input */}
              <div className="w-full lg:w-96 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar por marca, modelo ou equipamento..."
                    value={filters.searchText}
                    onChange={(e) => updateFilter('searchText', e.target.value)}
                    className="pl-10 pr-10 bg-background border-border focus:border-primary transition-colors duration-300"
                  />
                  {filters.searchText && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateFilter('searchText', '')}
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motorcycles Catalog */}
        <FeaturedMotorcycles 
          motorcycles={filteredMotorcycles}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={clearFilters}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
