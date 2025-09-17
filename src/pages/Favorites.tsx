import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotorcycleCard from "@/components/MotorcycleCard";
import { useFavorites } from "@/contexts/FavoritesContext";
import { motorcyclesDatabase } from "@/data/motorcycles";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const Favorites = () => {
  const navigate = useNavigate();
  const { favoriteIds, clearFavorites } = useFavorites();

  // Get favorite motorcycles from database
  const favoriteMotorcycles = useMemo(() => {
    return motorcyclesDatabase.filter(motorcycle => 
      favoriteIds.includes(motorcycle.id)
    );
  }, [favoriteIds]);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleClearAll = () => {
    clearFavorites();
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Header Section */}
        <section className="py-8 bg-gradient-to-b from-background to-secondary/20 border-b">
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
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-red-500 fill-red-500" />
                  <h1 className="text-3xl font-bold">Meus Favoritos</h1>
                </div>
              </div>
              
              {favoriteMotorcycles.length > 0 && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleClearAll}
                  className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Limpar Todos
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Favorites Content */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            {favoriteMotorcycles.length === 0 ? (
              // Empty State
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-12 w-12 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nenhuma moto favoritada</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Você ainda não favoritou nenhuma moto. Explore nosso catálogo 
                    e clique no coração para adicionar suas favoritas aqui.
                  </p>
                  <Button 
                    onClick={() => navigate('/catalogo')}
                    className="bg-gradient-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Explorar Catálogo
                  </Button>
                </div>
              </div>
            ) : (
              // Favorites Grid
              <>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Heart className="h-4 w-4 fill-current" />
                    {favoriteMotorcycles.length} moto{favoriteMotorcycles.length !== 1 ? 's' : ''} favoritada{favoriteMotorcycles.length !== 1 ? 's' : ''}
                  </div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Suas Motos Favoritas
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Aqui estão as motos que você mais gostou. Clique em qualquer uma para ver mais detalhes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {favoriteMotorcycles.map((motorcycle) => (
                    <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-16 text-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
                    <Heart className="h-4 w-4 fill-current" />
                    {favoriteMotorcycles.length} moto{favoriteMotorcycles.length !== 1 ? 's' : ''} na sua lista de favoritos
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
