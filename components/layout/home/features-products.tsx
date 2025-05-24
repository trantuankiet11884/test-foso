"use client";

import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/data/products";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = Math.max(0, featuredProducts.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  return (
    <div className="mb-6">
      <div className="bg-blue-main rounded-b-lg p-4 md:p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-main">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700"></div>
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-white font-bold text-lg mb-4 pl-2">
            Sản phẩm nổi bật
          </h2>

          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20 rounded-full p-2 md:p-3"
            disabled={featuredProducts.length <= itemsPerPage}
          >
            <FaChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20 rounded-full p-2 md:p-3"
            disabled={featuredProducts.length <= itemsPerPage}
          >
            <FaChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>

          <div className="overflow-hidden mx-10">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-2 md:gap-4"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / itemsPerPage)
                }%)`,
                width: `${(featuredProducts.length / itemsPerPage) * 100}%`,
              }}
            >
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-full"
                  style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {featuredProducts.length > itemsPerPage && (
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
