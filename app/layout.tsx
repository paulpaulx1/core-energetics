import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Institute of Core Energetics",
  description: "Body-centered psychotherapy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-stone-900 text-white">{children}</body>
    </html>
  );
}
