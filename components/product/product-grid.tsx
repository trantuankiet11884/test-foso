"use client";

import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import type { Product } from "@/types";
import { ArrowUpDown, BoxIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "./product-card";
import { ProductGridSkeleton } from "./produuct-skeleton";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  initialLoading?: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  onAddToCart?: (productId: number) => void;
  onSortChange?: (sortBy: string) => void;
  sortBy?: string;
  filterSummary?: {
    totalFilters: number;
    totalProducts: number;
    displayedProducts: number;
  };
}

export function ProductGrid({
  products,
  loading,
  initialLoading = false,
  hasMore,
  onLoadMore,
  onAddToCart,
  onSortChange,
  sortBy = "newest",
  filterSummary,
}: ProductGridProps) {
  const [activeTab, setActiveTab] = useState("Liên quan");
  const [showDropdown, setShowDropdown] = useState(false);

  const tabs = [
    { id: "related", label: "Liên quan", active: true },
    { id: "newest", label: "Mới nhất", active: false },
    { id: "fastest", label: "Bán chạy", active: false },
    { id: "popular", label: "Nổi bật", active: false },
  ];

  const sortOptions = [
    { value: "low-to-high", label: "Thấp → Cao" },
    { value: "high-to-low", label: "Cao → Thấp" },
  ];
  const lastElementRef = useInfiniteScroll(loading, hasMore, onLoadMore);

  if (initialLoading) {
    return (
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-4">
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 w-40 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <ProductGridSkeleton />
      </div>
    );
  }

  return (
    <div className="flex-grow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-primary-dark">Danh sách sản phẩm</div>
        <div className="flex items-center gap-4 p-4">
          <span className="text-primary-dark text-sm font-medium whitespace-nowrap">
            Sắp xếp theo
          </span>

          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.label)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.label
                    ? "bg-white text-brand-500 border border-brand-500"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative ml-auto">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span>Giá: Thấp → Cao</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between"
                      onClick={() => setShowDropdown(false)}
                    >
                      <span>{option.label}</span>
                      <ArrowUpDown className="w-3 h-3 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {products.length === 0 && !loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-gray-400 mb-4">
            <BoxIcon className="w-12 h-12" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Không tìm thấy sản phẩm
          </h3>
          <p className="text-gray-500">
            Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => {
            if (index === products.length - 1 && hasMore) {
              return (
                <div key={`${product.id}-${index}`} ref={lastElementRef}>
                  <ProductCard product={product} onAddToCart={onAddToCart} />
                </div>
              );
            } else {
              return (
                <div key={`${product.id}-${index}`}>
                  <ProductCard product={product} onAddToCart={onAddToCart} />
                </div>
              );
            }
          })}
        </div>
      )}

      {loading && products.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-center mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-main"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-48 w-full"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!hasMore && products.length > 0 && (
        <div className="text-center py-6 text-gray-500">
          <p>Đã hiển thị tất cả sản phẩm</p>
        </div>
      )}
    </div>
  );
}
