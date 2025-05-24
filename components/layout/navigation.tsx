"use client";

import { Button } from "@/components/ui/button";
import { Clock, RefreshCcw } from "lucide-react";
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

export function Navigation() {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setShowCategoryMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  return (
    <nav className="container mx-auto">
      <div className="flex items-center justify-between">
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

        <div className="flex items-center space-x-4">
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
    </nav>
  );
}
