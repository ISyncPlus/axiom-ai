import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axiom AI | The AI Operating System for Modern Teams",
  description:
    "Automate repetitive work, organize knowledge, generate content, and collaborate seamlessly with AI-powered workflows designed for growing businesses.",
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
