
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Untitled UI
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground">Home</Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground">About us</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <span className="text-sm font-medium hover:text-primary">Sign in</span>
            </Link>
            <Link href="/signup">
              <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
