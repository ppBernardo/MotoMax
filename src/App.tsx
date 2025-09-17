import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import MotorcycleDetails from "./pages/MotorcycleDetails";
import Favorites from "./pages/Favorites";
import SellMotorcycle from "./pages/SellMotorcycle";
import Financing from "./pages/Financing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/moto/:id" element={<MotorcycleDetails />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/vender-moto" element={<SellMotorcycle />} />
            <Route path="/financiamento" element={<Financing />} />
            <Route path="/sobre" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
