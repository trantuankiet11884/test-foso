"use client";

import { Button } from "@/components/ui/button";
import { defaultImage } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product?: Product;
  variant?: "default" | "mini";
  onAddToCart?: (productId: number) => void;
}

export function ProductCard({
  product,
  variant = "default",
  onAddToCart,
}: ProductCardProps) {
  const mockProduct: Product = {
    id: 1,
    name: "Lọc gió động cơ Air Filter Chevrolet Colorado, Trailblazer",
    price: 299000,
    originalPrice: 329000,
    discount: 10,
    image: "/placeholder.svg?height=200&width=200",
    category: "air-filter",
    brand: "Bosch",
    isHot: true,
  };

  const productData = product || mockProduct;

  if (variant === "mini") {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden group relative transition-all duration-300 hover:shadow-md hover:shadow-blue-shadow cursor-pointer">
        <div className="relative">
          <Link href={`/product/${productData.id}`}>
            <Image
              src={productData.image || defaultImage}
              alt={productData.name}
              width={150}
              height={150}
              className="w-full h-32 object-contain p-2 transition-transform duration-300"
            />
          </Link>
        </div>
        <div className="p-2 flex flex-col gap-1">
          <p className="bg-gradient-warning text-error px-1 py-0.5 rounded-full text-[10px] w-fit flex items-center gap-1">
            <Image
              src="/images/products/Left.png"
              alt="warning"
              width={12}
              height={12}
            />
            Giá cực sốc
          </p>
          <Link href={`/product/${productData.id}`}>
            <h3 className="text-xs font-medium line-clamp-2 text-textPrimary">
              {productData.name}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-errorDark text-sm">
                {formatCurrency(productData.price)}
              </p>
              <div className="flex items-center gap-1">
                <p className="text-[10px] text-disabled line-through">
                  {formatCurrency(productData.originalPrice)}
                </p>
                <span className="text-errorDark text-[10px]">
                  -{productData.discount}%
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full mt-1 text-blue-main bg-brand-50 border-none hover:bg-brand-50 hover:text-blue-main transition-colors text-xs h-8"
            onClick={() => onAddToCart?.(productData.id)}
          >
            Mua ngay
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group relative transition-all duration-300 hover:shadow-md hover:shadow-blue-shadow cursor-pointer">
      <div className="relative">
        <Link href={`/product/${productData.id}`}>
          <Image
            src={productData.image || defaultImage}
            alt={productData.name}
            width={200}
            height={200}
            className="w-full h-48 object-contain p-4 transition-transform duration-300"
          />
        </Link>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <p className="bg-gradient-warning text-error px-2 py-1 rounded-full text-xs w-fit flex items-center gap-1">
          <Image
            src="/images/products/Left.png"
            alt="warning"
            width={16}
            height={16}
          />
          Giá cực sốc
        </p>
        <Link href={`/product/${productData.id}`}>
          <h3 className="text-sm font-medium line-clamp-2 text-textPrimary">
            {productData.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-errorDark">
              {formatCurrency(productData.price)}
            </p>
            <div className="flex items-center gap-1">
              <p className="text-xs text-disabled line-through">
                {formatCurrency(productData.originalPrice)}
              </p>
              <span className="text-errorDark text-xs">
                -{productData.discount}%
              </span>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full mt-3 text-blue-main bg-brand-50 border-none hover:bg-brand-50 hover:text-blue-main transition-colors"
          onClick={() => onAddToCart?.(productData.id)}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  );
}
