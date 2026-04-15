import AppWrapper from "@/components/AppWrapper/AppWrapper";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThantZH | Senior Software Engineer | .NET & SQL Specialist",
  description: "Portfolio of ThantZH - Senior Software Engineer with 16+ years of experience specializing in .NET, MSSQL, ERP & HRMS systems. Expert in C#, ASP.NET Core, Enterprise Solutions, and AI Integration.",
  keywords: ["Software Engineer", ".NET Developer", "C# Expert", "MSSQL Database", "ERP Systems", "HRMS", "Enterprise Solutions", "Full Stack Developer", "Malaysia", "ThantZH"],
  authors: [{ name: "ThantZH" }],
  creator: "ThantZH",
  openGraph: {
    title: "ThantZH | Senior Software Engineer | .NET & SQL Specialist",
    description: "16+ years of experience in Enterprise Systems, ERP & HRMS solutions using C# and MSSQL",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="theme-color" content="#1478b6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>  
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
