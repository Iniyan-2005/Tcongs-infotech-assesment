import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Tcongs Infotech — Digital systems for ambitious teams",
  description:
    "Tcongs Infotech builds high-performing websites, apps, commerce experiences and growth systems for modern businesses worldwide.",
  keywords: ["web development", "software development", "digital marketing", "Tcongs Infotech"],
  openGraph: {
    title: "Tcongs Infotech — Digital systems for ambitious teams",
    description: "From first idea to measurable growth, we turn complex digital work into a competitive advantage.",
    url: "https://tcongsinfotech.com/",
    siteName: "Tcongs Infotech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tcongs Infotech — Digital systems for ambitious teams",
    description: "Web, app, commerce and growth systems for modern businesses.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
