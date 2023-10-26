"use client";

import Link from "next/link";
import Image from "next/image";
import ModeButton from "@/components/modeButton";
import "@/styles/font.css";
export default function Navbar(props) {
  return (
    <div className="container mx-auto max-w-screen-lg border-b border-gray-200 px-2 dark:border-gray-500 xl:px-0">
      <nav className="left-0 top-0 z-20 w-full">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-2">
          <Link href="/" className="flex items-center">
            {props.logo && (
              <Image
                {...props.logo}
                alt="Bee Blogit"
                priority={true}
                sizes="(max-width: 640px) 100vw, 200px"
                className="w-12 md:w-14"
              />
            )}
            <span className="beeblogit-font ml-2 block text-center text-2xl dark:text-white md:text-3xl">
              BEE BLOGIT
            </span>
          </Link>
          <div className="flex md:order-2">
            <ModeButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
