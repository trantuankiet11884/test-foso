"use client";

import { Button } from "@/components/ui/button";
import { Clock, Menu, RefreshCcw, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaTruck,
  FaUser,
} from "react-icons/fa";
import { CategoryDropdown } from "./category-dropdown";

const categoryItems = [
  { id: "oil-filter", name: "Bộ Lọc Dầu" },
  { id: "air-filter", name: "Bộ Lọc Không Khí" },
  { id: "fuel-filter", name: "Bộ Lọc Nhiên Liệu" },
  { id: "cabin-filter", name: "Bộ Lọc Trong Cabin" },
  { id: "engine-filter", name: "Bộ Lọc Động Cơ" },
  { id: "air-filter-special", name: "Bộ Lọc Đặc Biệt" },
];

export function Navigation() {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setShowCategoryMenu(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowCategoryMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCategoryMenu(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container mx-auto relative">
      <div className="hidden md:flex items-center justify-between">
        <div ref={categoryRef} className="relative">
          <Button
            className="flex items-center text-white rounded-lg bg-blue-main border-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaBars className="h-4 w-4 mr-1" />
            <span className="mr-1">Danh Mục Sản Phẩm</span>
            {showCategoryMenu ? (
              <FaChevronUp className="h-2 w-2" />
            ) : (
              <FaChevronDown className="h-2 w-2" />
            )}
          </Button>

          {showCategoryMenu && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute left-0 right-0 z-50"
            >
              <CategoryDropdown />
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/about"
            className="py-4 text-black hover:text-blue-main hover:underline transition-all duration-300"
          >
            Về Chúng Tôi
          </Link>
          <Link
            href="/blog"
            className="py-4 text-black hover:text-blue-main hover:underline transition-all duration-300"
          >
            Bài Viết
          </Link>
          <Link
            href="/catalog"
            className="py-4 text-black hover:text-blue-main hover:underline transition-all duration-300"
          >
            Catalog
          </Link>
          <Link
            href="/contact"
            className="py-4 text-black hover:text-blue-main hover:underline transition-all duration-300"
          >
            Liên Hệ
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <div className="rounded-full p-2">
              <Clock className="h-4 w-4 text-blue-main" />
            </div>
            <span className="text-sm text-black">Hỗ trợ 24/7</span>
          </div>

          <div className="flex items-center">
            <div className="rounded-full p-2">
              <FaUser className="h-4 w-4 text-blue-main" />
            </div>
            <span className="text-sm text-black">Miễn Phí Vận Chuyển</span>
          </div>

          <div className="flex items-center">
            <div className="rounded-full p-2">
              <FaTruck className="h-4 w-4 text-blue-main" />
            </div>
            <span className="text-sm text-black">Giao Hàng Nhanh 2h</span>
          </div>

          <div className="flex items-center">
            <div className="rounded-full p-2">
              <RefreshCcw className="h-4 w-4 text-blue-main" />
            </div>
            <span className="text-sm text-black">30 Ngày Đổi Trả</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center justify-between py-2">
        <Button
          className="flex items-center text-white rounded-lg bg-blue-main border-0"
          onClick={() => setShowCategoryMenu(!showCategoryMenu)}
        >
          <FaBars className="h-4 w-4 mr-1" />
          <span className="mr-1">Danh Mục</span>
          {showCategoryMenu ? (
            <FaChevronUp className="h-2 w-2" />
          ) : (
            <FaChevronDown className="h-2 w-2" />
          )}
        </Button>

        <Button
          className="p-2 text-blue-main"
          variant="ghost"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Category Menu */}
      {showCategoryMenu && (
        <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg z-50 rounded-b-lg">
          <div className="p-2">
            {categoryItems.slice(0, 6).map((category) => (
              <Link
                key={category.id}
                href="#"
                className="flex items-center justify-between p-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-gray-700">{category.name}</span>
                <FaChevronDown className="h-3 w-3 text-gray-400" />
              </Link>
            ))}
            <Link
              href="/categories"
              className="flex items-center justify-center p-3 text-blue-main font-medium"
            >
              Xem tất cả danh mục
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={toggleMobileMenu}
        >
          <div
            ref={mobileMenuRef}
            className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold">Menu</h2>
              <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-4 space-y-4">
              <Link
                href="/about"
                className="block py-2 border-b border-gray-100 text-black"
                onClick={toggleMobileMenu}
              >
                Về Chúng Tôi
              </Link>
              <Link
                href="/blog"
                className="block py-2 border-b border-gray-100 text-black"
                onClick={toggleMobileMenu}
              >
                Bài Viết
              </Link>
              <Link
                href="/catalog"
                className="block py-2 border-b border-gray-100 text-black"
                onClick={toggleMobileMenu}
              >
                Catalog
              </Link>
              <Link
                href="/contact"
                className="block py-2 border-b border-gray-100 text-black"
                onClick={toggleMobileMenu}
              >
                Liên Hệ
              </Link>
            </div>

            <div className="p-4 bg-gray-50 mt-4">
              <h3 className="font-medium text-sm mb-3">Dịch vụ khách hàng</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="rounded-full p-2 bg-blue-50">
                    <Clock className="h-4 w-4 text-blue-main" />
                  </div>
                  <span className="ml-2 text-sm">Hỗ trợ 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full p-2 bg-blue-50">
                    <FaUser className="h-4 w-4 text-blue-main" />
                  </div>
                  <span className="ml-2 text-sm">Miễn Phí Vận Chuyển</span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full p-2 bg-blue-50">
                    <FaTruck className="h-4 w-4 text-blue-main" />
                  </div>
                  <span className="ml-2 text-sm">Giao Hàng Nhanh 2h</span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full p-2 bg-blue-50">
                    <RefreshCcw className="h-4 w-4 text-blue-main" />
                  </div>
                  <span className="ml-2 text-sm">30 Ngày Đổi Trả</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
