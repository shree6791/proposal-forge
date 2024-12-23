import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import { ClientLayout } from "@/components/layouts/client-layout";
import { SupabaseProvider } from "@/components/providers/supabase-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <SupabaseProvider>
          <ClientLayout>{children}</ClientLayout>
        </SupabaseProvider>
      </body>
    </html>
  );
}