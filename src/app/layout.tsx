import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "MD Jariful Rahman | Backend Software Engineer & Developer",
  description:
    "Portfolio of MD Jariful Rahman — Software Developer with a strong backend focus specializing in scalable REST APIs, real-time systems, PostgreSQL optimization, and resilient server architectures.",
  keywords: [
    "MD Jariful Rahman",
    "Backend Developer",
    "Software Engineer",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "REST API",
    "University of Dhaka"
  ],
  authors: [{ name: "MD Jariful Rahman" }],
  openGraph: {
    title: "MD Jariful Rahman | Backend Software Engineer",
    description:
      "Backend developer building scalable APIs, real-time collaboration engines, and reliable database architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
