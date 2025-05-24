"use client";

import { mockProducts } from "@/data/products";
import type { Product } from "@/types";
import { useCallback, useEffect, useState } from "react";

export function useProducts() {
  const [allProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState<any>({});
  const [sortBy, setSortBy] = useState<string>("newest");

  const ITEMS_PER_PAGE = 6;

  const filterProducts = useCallback((products: Product[], filters: any) => {
    let filtered = [...products];

    if (filters.categories && filters.categories.length > 0) {
      const categoryIds = filters.categories.map((f: any) => f.id);
      filtered = filtered.filter((product) =>
        categoryIds.includes(product.category)
      );
    }

    if (filters.brands && filters.brands.length > 0) {
      const brandIds = filters.brands.map((f: any) => f.id);
      filtered = filtered.filter((product) =>
        brandIds.includes(product.brand.toLowerCase())
      );
    }

    if (filters.price && filters.price.length > 0) {
      filtered = filtered.filter((product) => {
        return filters.price.some((priceRange: any) => {
          switch (priceRange.id) {
            case "under-200k":
              return product.price < 200000;
            case "200k-500k":
              return product.price >= 200000 && product.price <= 500000;
            case "500k-1m":
              return product.price >= 500000 && product.price <= 1000000;
            case "over-1m":
              return product.price > 1000000;
            default:
              return true;
          }
        });
      });
    }

    if (filters.years && filters.years.length > 0) {
      const years = filters.years.map((f: any) => Number.parseInt(f.id));
      filtered = filtered.filter(
        (product) => product.year && years.includes(product.year)
      );
    }

    if (filters.origins && filters.origins.length > 0) {
      const originIds = filters.origins.map((f: any) => f.id);
      filtered = filtered.filter((product) => {
        const originMap: { [key: string]: string } = {
          germany: "Germany",
          japan: "Japan",
          korea: "Korea",
          usa: "USA",
        };
        return (
          product.origin &&
          originIds.some((id: string) => originMap[id] === product.origin)
        );
      });
    }

    return filtered;
  }, []);

  const sortProducts = useCallback((products: Product[], sortBy: string) => {
    const sorted = [...products];

    switch (sortBy) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "name-asc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "newest":
      default:
        return sorted.sort((a, b) => b.id - a.id);
    }
  }, []);

  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newProducts = filteredProducts.slice(startIndex, endIndex);

    if (newProducts.length === 0) {
      setHasMore(false);
    } else {
      setDisplayedProducts((prev) => [...prev, ...newProducts]);
      setPage((prev) => prev + 1);

      if (endIndex >= filteredProducts.length) {
        setHasMore(false);
      }
    }

    setLoading(false);
  }, [loading, hasMore, page, filteredProducts]);

  const applyFilters = useCallback(
    (filters: any) => {
      setActiveFilters(filters);
      setLoading(true);

      setTimeout(() => {
        const filtered = filterProducts(allProducts, filters);
        const sorted = sortProducts(filtered, sortBy);

        setFilteredProducts(sorted);
        setDisplayedProducts(sorted.slice(0, ITEMS_PER_PAGE));
        setPage(2);
        setHasMore(sorted.length > ITEMS_PER_PAGE);
        setLoading(false);
      }, 500);
    },
    [allProducts, filterProducts, sortProducts, sortBy]
  );

  const applySorting = useCallback(
    (newSortBy: string) => {
      setSortBy(newSortBy);
      setLoading(true);

      setTimeout(() => {
        const sorted = sortProducts(filteredProducts, newSortBy);
        setFilteredProducts(sorted);
        setDisplayedProducts(sorted.slice(0, (page - 1) * ITEMS_PER_PAGE));
        setLoading(false);
      }, 300);
    },
    [filteredProducts, sortProducts, page]
  );

  const resetFilters = useCallback(() => {
    setActiveFilters({});
    setFilteredProducts(allProducts);
    setDisplayedProducts(allProducts.slice(0, ITEMS_PER_PAGE));
    setPage(2);
    setHasMore(allProducts.length > ITEMS_PER_PAGE);
  }, [allProducts]);

  const getFilterSummary = useCallback(() => {
    const totalFilters = Object.values(activeFilters).reduce(
      (acc: number, filterArray: any) =>
        acc + (Array.isArray(filterArray) ? filterArray.length : 0),
      0
    );
    return {
      totalFilters,
      totalProducts: filteredProducts.length,
      displayedProducts: displayedProducts.length,
    };
  }, [activeFilters, filteredProducts.length, displayedProducts.length]);

  useEffect(() => {
    const loadInitialProducts = async () => {
      setInitialLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      const sorted = sortProducts(allProducts, sortBy);
      setFilteredProducts(sorted);
      setDisplayedProducts(sorted.slice(0, ITEMS_PER_PAGE));
      setPage(2);
      setHasMore(sorted.length > ITEMS_PER_PAGE);
      setInitialLoading(false);
    };

    loadInitialProducts();
  }, [allProducts, sortProducts, sortBy]);

  return {
    products: displayedProducts,
    loading,
    initialLoading,
    hasMore,
    activeFilters,
    sortBy,
    loadMoreProducts,
    applyFilters,
    applySorting,
    resetFilters,
    getFilterSummary,
  };
}
