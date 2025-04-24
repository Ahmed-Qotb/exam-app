import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Providers from "@/components/providers";
import { Toaster } from "sonner";

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Exam App",
  description: "Test exam app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <main className="max-w-7xl m-auto min-h-[80vh] flex justify-center items-center">
          <Providers>
            {/* main content */}
            {children}
            {/* toaster */}
            <Toaster />
          </Providers>
        </main>
      </body>
    </html>
  );
}
