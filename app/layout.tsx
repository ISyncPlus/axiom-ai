import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://axiom-ai.vercel.app"
  ),
  title: "Axiom AI | The AI Operating System for Modern Teams",
  description:
    "Automate repetitive work, organize knowledge, generate content, and collaborate seamlessly with AI-powered workflows designed for growing businesses.",
  keywords: [
    "AI",
    "automation",
    "workflow automation",
    "team collaboration",
    "AI assistants",
    "productivity",
  ],
  authors: [{ name: "Ebube Ezedimbu" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axiom-ai.com",
    siteName: "Axiom AI",
    title: "Axiom AI | The AI Operating System for Modern Teams",
    description:
      "Automate repetitive work, organize knowledge, generate content, and collaborate seamlessly with AI-powered workflows designed for growing businesses.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Axiom AI - The AI Operating System for Modern Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiom AI | The AI Operating System for Modern Teams",
    description:
      "Automate repetitive work, organize knowledge, generate content, and collaborate seamlessly with AI-powered workflows designed for growing businesses.",
    images: ["/og-image.svg"],
    creator: "@axiom_ai",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const axisSansFont =
  "var(--font-inter), ui-sans-serif, system-ui, sans-serif";

export default function AxisTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-background font-light w-full text-foreground`}
        style={{ fontFamily: axisSansFont }}
      >
        <div
          className={`${inter.variable} min-h-screen w-full bg-background font-light text-foreground`}
          style={{ fontFamily: axisSansFont }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
