import "@/styles/tailwind.css";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
      src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
      height: 100,
      width: 200,
    },
  };
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}
    >
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <>
          <Navbar {...settings} />

          <div>{children}</div>

          <Footer {...settings} />
        </>
      </body>
    </html>
  );
}
