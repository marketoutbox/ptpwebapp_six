"use client"

import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-600 to-navy-700 bg-fixed">
      <nav className="bg-navy-500/70 backdrop-blur-md border-b border-navy-200/20 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-gold-400 font-bold text-xl">PairTrade</span>
              </Link>
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/" current={router.pathname === "/"}>
                  Home
                </NavLink>
                <NavLink href="/stocks" current={router.pathname === "/stocks"}>
                  Stocks
                </NavLink>
                <NavLink href="/backtest" current={router.pathname === "/backtest"}>
                  Ratio Backtest
                </NavLink>
                <NavLink href="/backtest-spread" current={router.pathname === "/backtest-spread"}>
                  Spread Backtest
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{children}</main>
    </div>
  )
}

function NavLink({ href, current, children }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        current ? "bg-navy-300/50 text-gold-400" : "text-foreground hover:bg-navy-300/30 hover:text-gold-300"
      }`}
    >
      {children}
    </Link>
  )
}
