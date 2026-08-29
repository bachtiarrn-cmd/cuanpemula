import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdSense from "@/components/AdSense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monetized Blog - Earn Passive Income",
  description: "A blog designed for earning through Google AdSense and affiliate marketing",
  verification: {
  google: "h4ebcGIaVJju5BbULRK9NePTz_mcN3YjF5s_j0JaSec",
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <AdSense />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
