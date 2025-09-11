import Header from "@/components/Header";
import FeaturedMotorcycles from "@/components/FeaturedMotorcycles";
import Footer from "@/components/Footer";
import { useMotorcycleSearch } from "@/hooks/useMotorcycleSearch";
import { motorcyclesDatabase } from "@/data/motorcycles";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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
        {/* Simple Header */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
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
