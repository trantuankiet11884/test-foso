import { defaultImage } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { ProductCard } from "../product/product-card";

const categoryItems = [
  {
    id: "oil-filter",
    name: "Bộ Lọc Dầu",
    icon: defaultImage,
  },
  {
    id: "air-filter",
    name: "Bộ Lọc Không Khí",
    icon: defaultImage,
  },
  {
    id: "fuel-filter",
    name: "Bộ Lọc Nhiên Liệu",
    icon: defaultImage,
  },
  {
    id: "cabin-filter",
    name: "Bộ Lọc Trong Cabin",
    icon: defaultImage,
  },
  {
    id: "air-filter-2",
    name: "Bộ Lọc Không Khí",
    icon: defaultImage,
  },
  {
    id: "cabin-filter-2",
    name: "Bộ Lọc Trong Cabin",
    icon: defaultImage,
  },
  {
    id: "fuel-filter-2",
    name: "Bộ Lọc Nhiên Liệu",
    icon: defaultImage,
  },
  {
    id: "air-filter-3",
    name: "Bộ Lọc Không Khí",
    icon: defaultImage,
  },
];

const bestSellingProducts = [
  {
    id: 1,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: defaultImage,
    category: "oil-filter",
    brand: "Chevrolet",
  },
  {
    id: 2,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: defaultImage,
    category: "oil-filter",
    brand: "Chevrolet",
  },
  {
    id: 3,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: defaultImage,
    category: "oil-filter",
    brand: "Chevrolet",
  },
  {
    id: 4,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: defaultImage,
    category: "oil-filter",
    brand: "Chevrolet",
  },
  {
    id: 5,
    name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: defaultImage,
    category: "oil-filter",
    brand: "Chevrolet",
  },
];

export function CategoryDropdown() {
  return (
    <div className="absolute left-0 top-full z-50 bg-white shadow-xl w-[1200px] flex rounded-b-lg overflow-hidden">
      <div className="w-72 bg-gray-50 border-r">
        {categoryItems.map((category) => (
          <CategoryMenuItem
            key={category.id}
            icon={category.icon}
            title={category.name}
          />
        ))}
      </div>

      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              key={index}
              href="#"
              className="p-4 border border-gray-200 rounded-lg flex items-center hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <Image
                src={defaultImage}
                alt="Bộ lọc gió"
                width={50}
                height={50}
                className="mr-3 group-hover:scale-105 transition-transform"
              />
              <span className="text-gray-700 group-hover:text-blue-main font-medium">
                Bộ lọc gió
              </span>
            </Link>
          ))}
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold mb-4 text-textPrimary">
              Sản phẩm bán chạy
            </h3>
            <div className="flex items-center gap-2 cursor-pointer">
              <p className="text-brand-500">Xem tất cả</p>
              <ChevronRight className="w-4 h-4 text-brand-500" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 w-full">
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
      className="flex items-center justify-between p-4 hover:bg-blue-50 border-b border-gray-200 last:border-b-0 group transition-colors"
    >
      <div className="flex items-center">
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          width={32}
          height={32}
          className="mr-3 group-hover:scale-105 transition-transform"
        />
        <span className="text-gray-700 group-hover:text-blue-main font-medium">
          {title}
        </span>
      </div>
      <FaAngleRight className="text-gray-400 group-hover:text-blue-main transition-colors" />
    </Link>
  );
}
