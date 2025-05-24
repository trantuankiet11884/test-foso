import type { Product } from "@/types";

export const mockProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Lọc gió động cơ Air Filter Chevrolet Colorado, Trailblazer ${i + 1}`,
  price: 299000,
  originalPrice: 329000,
  discount: 10,
  image: "/images/locgio.jpg",
  category:
    i % 4 === 0
      ? "air-filter"
      : i % 4 === 1
      ? "oil-filter"
      : i % 4 === 2
      ? "fuel-filter"
      : "cabin-filter",
  brand: i % 3 === 0 ? "Bosch" : i % 3 === 1 ? "Mann" : "Mahle",
  year: 2020 + (i % 5),
  origin: i % 2 === 0 ? "Germany" : "Japan",
  isHot: i % 5 === 0,
  isBestSeller: i % 7 === 0,
}));

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: "/images/locgio.jpg",
    category: "air-filter",
    brand: "Bosch",
  },
  {
    id: 2,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: "/images/locgio.jpg",
    category: "air-filter",
    brand: "Bosch",
  },
  {
    id: 3,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: "/images/locgio.jpg",
    category: "air-filter",
    brand: "Bosch",
  },
  {
    id: 4,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: "/images/locgio.jpg",
    category: "air-filter",
    brand: "Bosch",
  },
  {
    id: 5,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: "/images/locgio.jpg",
    category: "air-filter",
    brand: "Bosch",
  },
  {
    id: 6,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: "/images/locgio.jpg",
    category: "air-filter",
    brand: "Bosch",
  },
  {
    id: 7,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: "/images/locgio.jpg",
    category: "air-filter",
    brand: "Bosch",
  },
  {
    id: 8,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: "/images/locgio.jpg",
    category: "air-filter",
    brand: "Bosch",
  },
];
