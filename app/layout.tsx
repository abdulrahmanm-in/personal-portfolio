import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://portfolio.icqs.fyi";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Abdul Rahman | Software Engineer",
    template: "%s | Abdul Rahman",
  },

  description:
    "Abdul Rahman is a Software Engineer specializing in Python, FastAPI, PostgreSQL, REST APIs, Docker, testing, and cloud-ready backend systems.",

  applicationName: "Abdul Rahman Portfolio",

  authors: [
    {
      name: "Abdul Rahman",
      url: siteUrl,
    },
  ],

  creator: "Abdul Rahman",
  publisher: "Abdul Rahman",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Abdul Rahman | Software Engineer",
    description:
      "Software Engineer specializing in Python, FastAPI, PostgreSQL, REST APIs, Docker, testing, and cloud-ready backend systems.",
    siteName: "Abdul Rahman Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Rahman — Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdul Rahman | Software Engineer",
    description:
      "Software Engineer specializing in Python, FastAPI, PostgreSQL, REST APIs, Docker, testing, and cloud-ready backend systems.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050a12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Rahman",
    url: siteUrl,
    jobTitle: "Software Engineer",

    description:
      "Software Engineer specializing in Python, FastAPI, PostgreSQL, REST APIs, Docker, testing, and cloud-ready backend systems.",

    sameAs: [
      "https://github.com/abdulrahmanm-in",
      "https://www.linkedin.com/in/abdul-rahman-m-660158206",
    ],

    knowsAbout: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "GitHub Actions",
      "Pytest",
      "MongoDB",
      "Angular",
      "TypeScript",
      "Linux",
      "AWS",
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}