"use client";

import Image from "next/image";

export function PromotionBanner() {
  return (
    <div className="relative overflow-hidden rounded-t-lg">
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-18IiNA9ZljW4tDGfv7zSXkdK6Pt4kO.png"
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
