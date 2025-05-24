"use client";

import Image from "next/image";

export function PromotionBanner() {
  return (
    <div className="relative overflow-hidden rounded-t-lg">
      <div className="relative cursor-pointer">
        <Image
          src="/images/banner.png"
          alt="Tải app nhận quà - Tích điểm ngay trên app SUNFIL1"
          width={1200}
          height={300}
          className="w-full h-auto object-cover rounded-t-lg"
          priority
        />
      </div>
    </div>
  );
}
