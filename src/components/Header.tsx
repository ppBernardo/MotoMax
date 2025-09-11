import { Button } from "@/components/ui/button";
import { Search, Menu, Phone, MapPin, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
            <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MotoMax
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
              to="/sobre" 
              className={`hover:text-primary transition-colors ${location.pathname === '/sobre' ? 'text-primary' : ''}`}
            >
              Sobre
            </Link>
            <a href="#" className="hover:text-primary transition-colors">Financiamento</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
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
              to="/sobre" 
              className={`block py-2 hover:text-primary transition-colors ${location.pathname === '/sobre' ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <a href="#" className="block py-2 hover:text-primary transition-colors">Financiamento</a>
            <a href="#" className="block py-2 hover:text-primary transition-colors">Contato</a>
            
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