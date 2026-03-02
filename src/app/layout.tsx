import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vismay Valsaraj | Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, and scalable UI architecture. Explore my projects and technical insights on building performant web applications.",
  keywords: ['frontend', 'react', 'nextjs', 'javascript', 'typescript'],
  openGraph: {
    title: "Vismay Valsaraj | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and scalable UI architecture.",
    url: "https://portfolio-mu-navy-2vw80c7f17.vercel.app/",
    images: '/images/vismay_portrait.jpeg',
    siteName: "Vismay Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main id="main" className="min-h-screen" role="main">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
