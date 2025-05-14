import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const nunito = localFont({
  src: "./fonts/nunito-variable.ttf", 
  variable: "--font-nunito",
  weight: "100 900",
});
const nunitoSans = localFont({
  src: "./fonts/nunito-sans-variable.ttf", 
  variable: "--font-nunito-sans",
  weight: "100 900",
});
const firaCodeMono = localFont({
  src: "./fonts/firacode-variable.ttf", 
  variable: "--font-firaCode-mono",
  weight: "100 400",
});

export const metadata: Metadata = {
  title: "ACM UTA Website",
  description: "Website for the Association for Computing Machinery at UT Arlington",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunitoSans.variable} ${firaCodeMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
