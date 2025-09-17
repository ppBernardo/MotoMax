import { Button } from "@/components/ui/button";
import { Search, Menu, Phone, MapPin, Sun, Moon, Heart } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { useFavorites } from "@/contexts/FavoritesContext";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { favoriteIds } = useFavorites();

  return (
    <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>(11) 9999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>São Paulo - SP</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Financiamento em até 60x</span>
            <span className="text-primary font-semibold">Frete Grátis SP</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="MotoMax Logo" 
                className={`h-10 w-auto transition-all duration-300 ${
                  theme === 'dark' ? 'brightness-0 invert' : ''
                }`}
              />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MotoMax
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}
            >
              Início
            </Link>
            <Link 
              to="/catalogo" 
              className={`hover:text-primary transition-colors ${location.pathname === '/catalogo' ? 'text-primary' : ''}`}
            >
              Catálogo
            </Link>
            <Link 
              to="/favoritos" 
              className={`hover:text-primary transition-colors flex items-center gap-2 ${location.pathname === '/favoritos' ? 'text-primary' : ''}`}
            >
              <Heart className="h-4 w-4" />
              Favoritos
              {favoriteIds.length > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
                  {favoriteIds.length}
                </span>
              )}
            </Link>
            <Link 
              to="/vender-moto" 
              className={`hover:text-primary transition-colors ${location.pathname === '/vender-moto' ? 'text-primary' : ''}`}
            >
              Vender Moto
            </Link>
            <Link 
              to="/financiamento" 
              className={`hover:text-primary transition-colors ${location.pathname === '/financiamento' ? 'text-primary' : ''}`}
            >
              Financiamento
            </Link>
            <Link 
              to="/sobre" 
              className={`hover:text-primary transition-colors ${location.pathname === '/sobre' ? 'text-primary' : ''}`}
            >
              Sobre
            </Link>

          </nav>

          <div className="flex items-center gap-4">
            <Link to="/catalogo">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </Link>
            
            {/* Theme Toggle Button */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleTheme}
              className="transition-all duration-300 hover:scale-105"
              title={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            
            <Button className="bg-gradient-primary border-0 shadow-glow">
              Fale Conosco
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t space-y-2">
            <Link 
              to="/" 
              className={`block py-2 hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/catalogo" 
              className={`block py-2 hover:text-primary transition-colors ${location.pathname === '/catalogo' ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Catálogo
            </Link>
            <Link 
              to="/favoritos" 
              className={`block py-2 hover:text-primary transition-colors flex items-center gap-2 ${location.pathname === '/favoritos' ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="h-4 w-4" />
              Favoritos
              {favoriteIds.length > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
                  {favoriteIds.length}
                </span>
              )}
            </Link>
            <Link 
              to="/vender-moto" 
              className={`block py-2 hover:text-primary transition-colors ${location.pathname === '/vender-moto' ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Vender Moto
            </Link>
            <Link 
              to="/financiamento" 
              className={`block py-2 hover:text-primary transition-colors ${location.pathname === '/financiamento' ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Financiamento
            </Link>
            
            {/* Mobile Theme Toggle */}
            <div className="pt-2 border-t mt-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleTheme}
                className="w-full transition-all duration-300 hover:scale-105"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="h-4 w-4 mr-2" />
                    Tema Escuro
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4 mr-2" />
                    Tema Claro
                  </>
                )}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;