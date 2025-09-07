import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import ClientEffects from "./components/ClientEffects";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "AI & Data Science Specialist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="site-header">
          <div className="container nav-container">
            <Link className="logo" href="/">
              <div className="logo-content">
                <Image className="logo-avatar" src="/profile.jpeg" alt="Abdulrhman Mohammed Badr" width={40} height={40} />
                <div className="logo-text-content">
                  <span className="logo-text">Abdulrhman Mohammed Badr</span>
                  <span className="logo-subtitle">AI & Data Science Specialist</span>
                </div>
              </div>
            </Link>
            <nav className="nav">
              <ul className="menu">
                <li><Link className="nav-link" href="/">Home</Link></li>
                <li><Link className="nav-link" href="/about">About</Link></li>
                <li><Link className="nav-link" href="/projects">Projects</Link></li>
                <li><Link className="nav-link" href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} ZBDA · All rights reserved.</p>
          </div>
        </footer>
        <button id="backToTop" className="btn btn-ghost" style={{position:'fixed', right:16, bottom:16, display:'none'}}>up</button>
        <ClientEffects />
        <style>{`[data-reveal]{ opacity:0; transform: translateY(12px); transition: opacity .4s ease, transform .4s ease; } .reveal-in{ opacity:1 !important; transform: translateY(0) !important; }`}</style>
      </body>
    </html>
  );
}
