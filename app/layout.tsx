import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Rahman | Software Engineer",
  description:
    "Software Engineer focused on Python, FastAPI, PostgreSQL, REST APIs and cloud technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050a12" />
        <meta property="og:title" content="Abdul Rahman | Software Engineer" />
        <meta property="og:description" content="Python backend engineer — FastAPI, PostgreSQL, Docker, testing." />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
