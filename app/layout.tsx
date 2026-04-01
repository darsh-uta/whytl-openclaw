import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Whytl — Premium Domain Names & Digital Keys",
  description:
    "Whytl offers premium domain names and digital keys from the Orphilia ecosystem. Find your perfect digital identity today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'><rect width='22' height='22' rx='4' fill='%231A1A1E'/><path d='M7 11C7 9.34315 8.34315 8 10 8V8C11.6569 8 13 9.34315 13 11V14H10C8.34315 14 7 12.6569 7 11V11Z' fill='%23F8F7F4'/><rect x='7' y='14' width='6' height='2' rx='1' fill='%23E5484D'/></svg>"
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
