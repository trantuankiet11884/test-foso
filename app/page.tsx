"use client";

import { FilterSidebar } from "@/components/filter/filter-sidebar";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PromotionBanner } from "@/components/layout/home/banner";
import { FeaturedProducts } from "@/components/layout/home/features-products";
import { Navigation } from "@/components/layout/navigation";
import { ProductGrid } from "@/components/product/product-grid";
import { useProducts } from "@/hooks/use-products";
import {
  BoxIcon,
  ChevronRight,
  Headphones,
  MapPinned,
  Phone,
  TruckIcon,
} from "lucide-react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
  const { products, loading, hasMore, loadMoreProducts, applyFilters } =
    useProducts();

  const handleAddToCart = (productId: number) => {
    console.log("Add to cart:", productId);
    // Implement cart logic here
  };

  const handleFiltersChange = (filters: any) => {
    console.log("Filters changed:", filters);
    applyFilters(filters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-2 px-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/">Trang chủ</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-brand-700">Sản phẩm</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow bg-gray-50 py-4">
        <div className="container mx-auto">
          <PromotionBanner />
          <FeaturedProducts />
          {/* Product Grid */}
          <div className="flex flex-col md:flex-row gap-6">
            <FilterSidebar onFiltersChange={handleFiltersChange} />
            <ProductGrid
              products={products}
              loading={loading}
              hasMore={hasMore}
              onLoadMore={loadMoreProducts}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </main>

      {/* Service Features */}
      <div className="py-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md shadow-z8">
              <div className="bg-brand-50 p-3 rounded-full mr-3">
                <Phone className="h-5 w-5 text-brand-500" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Miễn phí vận chuyển</h3>
                <p className="text-xs text-gray-500">Cho đơn hàng từ 1 triệu</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-md shadow-z8">
              <div className="bg-brand-50 p-3 rounded-full mr-3">
                <Headphones className="h-5 w-5 text-brand-500" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Hỗ trợ 24/7</h3>
                <p className="text-xs text-gray-500">
                  Gọi ngay khi bạn cần tư vấn
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-md shadow-z8">
              <div className="bg-brand-50 p-3 rounded-full mr-3">
                <TruckIcon className="h-5 w-5 text-brand-500" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Giao hàng nhanh 2h</h3>
                <p className="text-xs text-gray-500">
                  Áp dụng cho đơn hàng trong phạm vi 5km
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-md shadow-z8">
              <div className="bg-brand-50 p-3 rounded-full mr-3">
                <BoxIcon className="h-5 w-5 text-brand-500" />
              </div>
              <div>
                <h3 className="font-medium text-sm">30 ngày đổi trả</h3>
                <p className="text-xs text-gray-500">
                  Đổi trả miễn phí trong 30 ngày
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-brand-50 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPinned className="h-5 w-5 text-brand-600" />
            <span className="text-sm font-medium text-textPrimary">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </span>
          </div>
          <Link
            href="#"
            className="text-brand-600 text-sm flex items-center bg-white rounded-full p-2"
          >
            Xem ngay
            <FaChevronRight className="h-4 w-4 ml-1 text-brand-600" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
