import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { SearchFilters } from "@/hooks/useMotorcycleSearch";

interface SearchFormProps {
  filters: SearchFilters;
  onUpdateFilter: (key: keyof SearchFilters, value: string | number) => void;
  onClearFilters: () => void;
  onSearch: () => void;
  hasActiveFilters: boolean;
}

const SearchForm = ({ 
  filters, 
  onUpdateFilter, 
  onClearFilters, 
  onSearch, 
  hasActiveFilters 
}: SearchFormProps) => {
  return (
    <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-premium max-w-md w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Encontre sua Moto</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Limpar
          </Button>
        )}
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Marca</label>
          <Select 
            value={filters.brand} 
            onValueChange={(value) => onUpdateFilter('brand', value === 'all' ? '' : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Todas as marcas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as marcas</SelectItem>
              <SelectItem value="Honda">Honda</SelectItem>
              <SelectItem value="Yamaha">Yamaha</SelectItem>
              <SelectItem value="Suzuki">Suzuki</SelectItem>
              <SelectItem value="Kawasaki">Kawasaki</SelectItem>
              <SelectItem value="Ducati">Ducati</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Tipo</label>
          <Select 
            value={filters.type} 
            onValueChange={(value) => onUpdateFilter('type', value === 'all' ? '' : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Todos os tipos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os tipos</SelectItem>
              <SelectItem value="esportiva">Esportiva</SelectItem>
              <SelectItem value="naked">Naked</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
              <SelectItem value="scooter">Scooter</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Condição</label>
          <Select 
            value={filters.condition} 
            onValueChange={(value) => onUpdateFilter('condition', value === 'all' ? '' : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Todas as condições" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as condições</SelectItem>
              <SelectItem value="nova">Nova</SelectItem>
              <SelectItem value="seminova">Seminova</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Preço Min</label>
            <Select 
              value={filters.priceMin.toString()} 
              onValueChange={(value) => onUpdateFilter('priceMin', parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="R$ 0" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">R$ 0</SelectItem>
                <SelectItem value="5000">R$ 5.000</SelectItem>
                <SelectItem value="10000">R$ 10.000</SelectItem>
                <SelectItem value="20000">R$ 20.000</SelectItem>
                <SelectItem value="30000">R$ 30.000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Preço Max</label>
            <Select 
              value={filters.priceMax.toString()} 
              onValueChange={(value) => onUpdateFilter('priceMax', parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sem limite" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Sem limite</SelectItem>
                <SelectItem value="20000">R$ 20.000</SelectItem>
                <SelectItem value="30000">R$ 30.000</SelectItem>
                <SelectItem value="50000">R$ 50.000</SelectItem>
                <SelectItem value="100000">R$ 100.000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          className="w-full bg-gradient-primary border-0 shadow-glow"
          onClick={onSearch}
        >
          <Search className="mr-2 h-5 w-5" />
          Buscar Motos ({filters ? Object.values(filters).filter(v => v !== '' && v !== 0).length : 0} filtros ativos)
        </Button>
      </div>
    </Card>
  );
};

export default SearchForm;