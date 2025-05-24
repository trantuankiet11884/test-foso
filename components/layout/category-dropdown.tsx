import { defaultImage } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { ProductCard } from "../product/product-card";
import { bestSellingProducts, categoryItems } from "@/data/categories";

export function CategoryDropdown() {
  return (
    <div className="absolute left-0 top-full z-50 bg-white shadow-xl w-full lg:w-[1200px] flex flex-col md:flex-row rounded-b-lg overflow-hidden">
      <div className="w-full md:w-72 bg-gray-50 border-r">
        {categoryItems.map((category) => (
          <CategoryMenuItem
            key={category.id}
            icon={category.icon}
            title={category.name}
          />
        ))}
      </div>

      <div className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              key={index}
              href="#"
              className="p-3 md:p-4 border border-gray-200 rounded-lg flex items-center hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <Image
                src={defaultImage}
                alt="Bộ lọc gió"
                width={40}
                height={40}
                className="mr-2 md:mr-3 group-hover:scale-105 transition-transform"
              />
              <span className="text-sm text-gray-700 group-hover:text-blue-main font-medium">
                Bộ lọc gió
              </span>
            </Link>
          ))}
        </div>

        <div className="border-t pt-4 md:pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base md:text-lg font-bold mb-4 text-textPrimary">
              Sản phẩm bán chạy
            </h3>
            <div className="flex items-center gap-2 cursor-pointer">
              <p className="text-sm text-brand-500">Xem tất cả</p>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-brand-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 w-full">
            {bestSellingProducts.map((product) => (
              <ProductCard product={product} variant="mini" key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryMenuItem({ icon, title }: { icon: string; title: string }) {
  return (
    <Link
      href="#"
      className="flex items-center justify-between p-3 md:p-4 hover:bg-blue-50 border-b border-gray-200 last:border-b-0 group transition-colors"
    >
      <div className="flex items-center">
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          width={24}
          height={24}
          className="mr-2 md:mr-3 md:w-8 md:h-8 group-hover:scale-105 transition-transform"
        />
        <span className="text-sm text-gray-700 group-hover:text-blue-main font-medium">
          {title}
        </span>
      </div>
      <FaAngleRight className="text-gray-400 group-hover:text-blue-main transition-colors" />
    </Link>
  );
}
