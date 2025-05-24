import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[url('/images/footer/bground.jpg')] bg-cover bg-center pt-8 pb-4 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="col-span-3">
            <h3 className="font-bold text-sm uppercase mb-4 text-brand-800">
              Viet Hung Auto Production Trading Joint Stock Company
            </h3>
            <div className="text-sm space-y-2 text-textSecondary">
              <p>
                Tax code: <span className=" font-bold">0309094342</span>
              </p>
              <p>
                Address:{" "}
                <span className=" font-bold">
                  13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet
                  Nam.
                </span>
              </p>
              <p>
                Hotline: <span className=" font-bold">0283 760 7607</span>
              </p>
              <p>
                Opening hour:{" "}
                <span className=" font-bold">09:00 - 22:00 from Mon - Fri</span>
              </p>
            </div>
            <div className="mt-4">
              <Image
                src="/images/footer/bo cong thuong.png"
                alt="Bộ Công Thương"
                width={120}
                height={40}
              />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4 text-brand-800">Sitemap</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#" className="text-textSecondary ">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-textSecondary ">
                  Article
                </Link>
              </li>
              <li>
                <Link href="#" className="text-textSecondary ">
                  Cart
                </Link>
              </li>

              <li>
                <Link href="#" className="text-textSecondary ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4 text-brand-800">Legal</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#" className="text-textPrimary ">
                  _Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-textSecondary ">
                  Cookie policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-textSecondary ">
                  Delivery policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-textSecondary ">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="font-bold text-sm mb-4 text-brand-800 ml-4">
                Download App
              </h3>
            </div>
            <div className="flex flex-col justify-end items-end gap-2">
              <Link href="#">
                <Image
                  src="/images/footer/button-gg.png"
                  alt="Google Play"
                  width={140}
                  height={40}
                  className="h-10"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/footer/button-as.png"
                  alt="App Store"
                  width={140}
                  height={40}
                  className="h-10"
                />
              </Link>

              <div className="flex items-center justify-end gap-2">
                <Image
                  src="/images/ico-vietnam.png"
                  alt="Vietnamese Flag"
                  width={36}
                  height={36}
                />
                <span className="text-sm font-medium">VI</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
