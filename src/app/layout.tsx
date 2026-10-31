import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import { localeBootScript } from "@/lib/locale";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOKAngel Crystal",
  description: "Hong Kong crystals and accessories. Each piece is unique.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" data-locale="zh-Hant" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: localeBootScript }} />
      </head>
      <body className="bg-bg text-ink antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
