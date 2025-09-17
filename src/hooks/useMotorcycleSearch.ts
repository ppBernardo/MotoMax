import { useState, useMemo } from 'react';

export interface MotorcycleData {
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
  type: "esportiva" | "naked" | "custom" | "scooter" | "adventure";
}

export interface SearchFilters {
  searchText: string;
  brand: string;
  type: string;
  priceMin: number;
  priceMax: number;
  condition: string;
}

const defaultFilters: SearchFilters = {
  searchText: '',
  brand: '',
  type: '',
  priceMin: 0,
  priceMax: 0,
  condition: ''
};

export const useMotorcycleSearch = (motorcycles: MotorcycleData[]) => {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);

  const filteredMotorcycles = useMemo(() => {
    return motorcycles.filter((moto) => {
      // Filtro por texto de busca (nome, marca, features)
      if (filters.searchText) {
        const searchLower = filters.searchText.toLowerCase();
        const matchesSearch = 
          moto.name.toLowerCase().includes(searchLower) ||
          moto.brand.toLowerCase().includes(searchLower) ||
          moto.features.some(feature => feature.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) {
          return false;
        }
      }

      // Filtro por marca
      if (filters.brand && moto.brand.toLowerCase() !== filters.brand.toLowerCase()) {
        return false;
      }

      // Filtro por tipo
      if (filters.type && moto.type.toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }

      // Filtro por preço mínimo
      if (filters.priceMin > 0 && moto.price < filters.priceMin) {
        return false;
      }

      // Filtro por preço máximo
      if (filters.priceMax > 0 && moto.price > filters.priceMax) {
        return false;
      }

      // Filtro por condição
      if (filters.condition && moto.condition !== filters.condition) {
        return false;
      }

      return true;
    });
  }, [motorcycles, filters]);

  const updateFilter = (key: keyof SearchFilters, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  const hasActiveFilters = useMemo(() => {
    return Object.values(filters).some(value => 
      typeof value === 'string' ? value !== '' : value > 0
    );
  }, [filters]);

  return {
    filters,
    filteredMotorcycles,
    updateFilter,
    clearFilters,
    hasActiveFilters
  };
};