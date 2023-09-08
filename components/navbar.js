"use client";

import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(props) {
  return (
    <Container className="border-b border-gray-200">
      <nav>
        <div className="dark flex justify-center gap-10">
          <div className="flex">
            <Link href="/" className="w-48 dark:hidden">
              {props.logo ? (
                <Image
                  {...props.logo}
                  alt="Bee Blogit"
                  priority={true}
                  sizes="(max-width: 640px) 100vw, 200px"
                />
              ) : (
                <span className="block text-center">Magna Blogit</span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </Container>
  );
}
