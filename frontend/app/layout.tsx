import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erna Berbić",
  description:
    "Portfolio of Erna Berbić - Software Engineer and Web Developer. Full-stack development, interactive UIs, and building smooth experiences for the web.",

  keywords: [
    "Erna Berbić",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
  ],

  authors: [{ name: "Erna Berbić" }],
  creator: "Erna Berbić",

  metadataBase: new URL("https://ernaberbic.com"),

  openGraph: {
    title: "Erna Berbić | Software Engineer",
    description:
      "Full-stack software engineer focused on React, Next.js, and modern web technologies.",
    url: "https://ernaberbic.com",
    siteName: "Erna Berbić Portfolio",
    images: [
      {
        url: "/og.png", 
        width: 1200,
        height: 630,
        alt: "Erna Berbić – Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Erna Berbić | Software Engineer",
    description:
      "Software Engineer building modern, performant web applications with React and Next.js.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
