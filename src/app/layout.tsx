import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import localFont from "next/font/local";
import Footer from "@/components/footer";

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
    <html lang="en">
      <body className={`${degular.variable} antialiased scrollbar-hide`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
