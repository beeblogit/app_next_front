import "@/styles/tailwind.css";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "highlight.js/styles/vs2015.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = {
    title: "title",
    url: "test",
    description: "description",
    logo: {
      src: "/img/logo.png",
      height: 100,
      width: 300,
    },
  };
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}
    >
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Bee Blogit</title>
      </head>
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <>
          <Navbar {...settings} />

          <div>{children}</div>

          <Footer {...settings} />
        </>
        <Analytics />
      </body>
    </html>
  );
}
