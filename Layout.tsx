import { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header className="shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:py-6">
          <Link href="/">
            <span className="text-3xl font-bold md:text-4xl">Forefront IFA</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/team">Team</Link>
            <Link href="/articles">Articles</Link>
            <a
              href="https://portal.cashcalc.co.uk/forefront"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Portal
            </a>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
