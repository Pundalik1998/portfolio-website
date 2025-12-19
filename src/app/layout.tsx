import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/site-header";
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
  title: "Pundalik Masurkar | Software Developer",
  description:
    "Portfolio of Pundalik Masurkar, Software Developer specializing in React, Java, Spring Boot, REST APIs, and full‑stack web applications.",
  metadataBase: new URL("https://your-portfolio-domain.com"),
  openGraph: {
    title: "Pundalik Masurkar | Software Developer",
    description:
      "Full‑stack developer building Java & Spring Boot backends with React frontends.",
    url: "/",
    siteName: "Pundalik Masurkar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pundalik Masurkar | Software Developer",
    description:
      "Full‑stack developer building Java & Spring Boot backends with React frontends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <div className="min-h-screen gradient-shell text-slate-100">
          <SiteHeader />

          <main className="mx-auto max-w-5xl px-6 py-12 fade-in-up">
            {children}
          </main>

          <section className="border-t border-white/10 bg-slate-950/70">
            <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-slate-200 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Work together
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  Have a role, project, or idea in mind? I&apos;m open to new
                  opportunities and collaborations.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2 text-xs font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Contact me
              </a>
            </div>
          </section>

          <footer className="border-t border-white/10 bg-slate-950/80">
            <div className="mx-auto max-w-5xl px-6 py-6 text-xs text-slate-500">
              © {new Date().getFullYear()} Pundalik Masurkar. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
