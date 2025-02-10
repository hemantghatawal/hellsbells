import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/navigation/scrollToTop";

const degular = localFont({
  src: "./DegularVariable.ttf",
  variable: "--font-degular",
  weight: "100 900", // Adjust if needed
  style: "normal",
});

export const metadata: Metadata = {
  title: "Hells Bells",
  description: "The Musical keep you humming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hidden">
      <head>
        <link rel="icon" href="/riffwavesstudiologo.svg" sizes="any" />
      </head>
      <body className={`${degular.variable} antialiased`}>
        <Navigation />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
