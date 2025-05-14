import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/navigation/scrollToTop";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const degular = localFont({
  src: "../fonts/DegularVariable.ttf",
  variable: "--font-degular",
  weight: "100 900",
  style: "normal",
});

const beni = localFont({
  src: "../fonts/BeniBold.woff2",
  variable: "--font-beni",
  weight: "500 900",
  style: "bold",
});

const footlight = localFont({
  src: "../fonts/FootlightMTProLight.otf",
  variable: "--font-footlight",
  weight: "100",
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
      <body
        className={`${degular.variable} ${beni.variable} ${footlight.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Toaster />
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
