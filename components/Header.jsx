import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";
import { siteConfig } from "../data/siteConfig";

const Header = () => {
  return (
    <header className="absolute z-30 w-full px-5 sm:px-8 xl:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 py-5 sm:py-7 xl:h-[90px] xl:py-0">
          <Link
            href="/"
            aria-label="Go to home page"
            className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(241,48,36,0.18)] sm:h-12 sm:w-12">
              <Image
                src="/logo-mark.webp"
                alt=""
                fill
                priority
                sizes="48px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </span>
            <span className="hidden leading-none sm:block">
              <span className="block text-xl font-semibold tracking-wide text-white">
                {siteConfig.name}
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.28em] text-white/45">
                Portfolio
              </span>
            </span>
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
