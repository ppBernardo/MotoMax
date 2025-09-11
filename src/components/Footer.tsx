import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              MotoMax
            </h3>
            <p className="text-gray-300 mb-6">
              Sua concessionária de confiança há mais de 15 anos. 
              Oferecemos as melhores motos com financiamento facilitado.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Motos Novas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Motos Seminovas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Financiamento</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Seguros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Peças e Acessórios</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Revisão</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Manutenção</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vistoria</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garantia Estendida</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p>(11) 9999-9999</p>
                  <p className="text-sm">WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p>vendas@motomax.com.br</p>
                  <p className="text-sm">Segunda a Sábado</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p>Av. Paulista, 1000</p>
                  <p>São Paulo - SP</p>
                  <p className="text-sm">Segunda a Sábado: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MotoMax. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;