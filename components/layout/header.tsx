import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BadgePercent, Book, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaCamera, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

export function Header() {
  return (
    <>
      <div className="bg-gradient-brand text-white py-1 flex justify-between items-center text-xs">
        <div className="container mx-auto w-full flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-1 sm:mb-0">
            <BadgePercent className="h-4 w-4 mr-2" />
            <span className="text-center sm:text-left">
              Nhập mã NEWBIE giảm ngay 10% cho lần đầu mua hàng.
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <p className="hidden sm:block">
                Hotline:
                <span className="text-yellow-main"> 0283 760 7607</span>
              </p>
              <a href="tel:02837607607" className="sm:hidden text-yellow-main">
                Gọi ngay
              </a>
            </div>
            <div className="flex items-center">
              <Book className="h-3 w-3 mr-1" />
              <span>Tải ứng dụng</span>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white py-4 border-b">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo_sunfil1.png"
                alt="Sunfil Logo"
                width={80}
                height={80}
                className="md:w-[100px] md:h-[100px]"
              />
            </Link>

            <div className="flex items-center space-x-4 md:hidden">
              <Link href="/#" className="flex items-center">
                <div className="relative">
                  <FaShoppingCart className="h-6 w-6 text-blue-main" />
                  <Badge className="absolute -top-2 -right-2 bg-errorMain text-white h-5 w-5 flex items-center justify-center p-0 rounded-full text-xs">
                    12
                  </Badge>
                </div>
              </Link>

              <Link href="/#">
                <div className="bg-blue-main text-white rounded-full p-2">
                  <FaUser className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex-grow w-full md:mx-8 md:max-w-2xl">
            <div className="relative flex items-center bg-gray-50 rounded-full border border-gray-200">
              <Input
                type="text"
                placeholder="Tìm sản phẩm"
                className="w-full bg-transparent border-0 rounded-full pl-4 pr-16 py-2 focus:outline-none focus:ring-0 text-sm"
              />
              <div className="absolute right-1 flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full p-1 hover:bg-gray-200 hidden sm:flex"
                >
                  <FaCamera className="h-3 w-3 text-gray-500" />
                </Button>
                <Button className="rounded-full bg-blue-main hover:bg-blue-700 px-3 py-1">
                  <FaSearch className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/ico-vietnam.png"
                alt="Vietnamese Flag"
                width={36}
                height={36}
              />
              <span className="text-sm font-medium">VI</span>
            </div>

            <Link
              href="/#"
              className="flex items-center text-sm hover:bg-blue-shadowBrand rounded-full p-2 transition-all duration-300"
            >
              <div className="relative">
                <FaShoppingCart className="h-6 w-6 text-blue-main" />
                <Badge className="absolute -top-2 -right-2 bg-errorMain text-white h-5 w-5 flex items-center justify-center p-0 rounded-full text-xs">
                  12
                </Badge>
              </div>
              <span className="ml-2 text-gray-700">Giỏ hàng</span>
            </Link>

            <Link href="/#" className="flex items-center text-sm">
              <div className="bg-blue-main text-white rounded-full p-2">
                <FaUser className="h-4 w-4" />
              </div>
              <span className="ml-2 text-gray-700">Tài khoản</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
