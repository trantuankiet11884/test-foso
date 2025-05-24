export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  category: string;
  brand: string;
  year?: number;
  origin?: string;
  isHot?: boolean;
  isBestSeller?: boolean;
}

export interface FilterOption {
  id: string;
  label: string;
  count: number;
  checked: boolean;
}

export interface FilterSection {
  id: string;
  title: string;
  isOpen: boolean;
  options: FilterOption[];
  type?: "checkbox" | "price-range";
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  categories: FilterOption[];
  brands: FilterOption[];
  years: FilterOption[];
  origins: FilterOption[];
  priceRange: PriceRange;
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  subcategories?: string[];
}
