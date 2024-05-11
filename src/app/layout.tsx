import type { Metadata } from "next";
import { Inter , IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { logo } from "@/assets";

const inter = Inter({ subsets: ["latin"] , variable : '--font-inter' });
const ibmPLexSerif = IBM_Plex_Serif({subsets : ['latin'] , weight : ['400' , '700'] , variable : '--font-ibm-plex-serif'})

export const metadata: Metadata = {
  title: "Horizon",
  description: "A modern banking platform with finance management dashboard",
  icons : {
    icon : logo
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPLexSerif.variable}`}>{children}</body>
    </html>
  );
}
