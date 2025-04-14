"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          
          {/* Site Branding */}
          <div className="flex flex-1 items-center">
              <Logo />
              <span className="text-lg px-3 font-semibold">EquiRights</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-3">
            <li>
              <Link
                href="/about"
                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 py-[5px] px-4 rounded-md hover:bg-[length:100%_150%]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 text-white py-[5px] px-4 rounded-md hover:bg-[length:100%_150%]"
              >
                How it Works
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
