import AppWrapper from "@/components/AppWrapper/AppWrapper";
import type { Metadata } from "next";
import { Jim_Nightshade, Salsa } from "next/font/google";

const geistSans = Jim_Nightshade({
  weight: "400",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Salsa({
  weight: "400",
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ThantZH The Dev | Home",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>  
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
