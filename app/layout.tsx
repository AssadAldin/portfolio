import Header from "@/components/header";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export const metadata: Metadata = {
  title: "Assadaldin | Software Developer",
  description:
    "A web programmer with a practical understanding of computers, programming languages, and related technologies, enabling the effective resolution of complex problems. With 6 years of experience,including 5 years dedicated to programming",
};

const raleway = localFont({
  src: "./fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
