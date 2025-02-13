"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold">Untitled UI</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground/80 hover:text-foreground">Home</Link>
              <Link href="/blog" className="text-foreground/80 hover:text-foreground">Blog</Link>
              <Link href="/about" className="text-foreground/80 hover:text-foreground">About us</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Insights, updates, and stories from the Untitled UI team.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index}>
              <div className="group cursor-pointer">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {post.category && (
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                    {post.category}
                  </span>
                )}
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{post.author}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  {post.readTime && (
                    <>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="text-xl font-semibold">Untitled UI</Link>
              <p className="text-white/60 text-sm max-w-sm">
                Beautiful design and development resources for creating modern, intuitive interfaces.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">About</Link>
                <Link href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link>
                <Link href="/careers" className="text-white/60 hover:text-white transition-colors">Careers</Link>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect</h4>
              <div className="flex space-x-4">
                <Link href="https://twitter.com" className="text-white/60 hover:text-white transition-colors">
                  Twitter
                </Link>
                <Link href="https://github.com" className="text-white/60 hover:text-white transition-colors">
                  GitHub
                </Link>
                <Link href="https://linkedin.com" className="text-white/60 hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">© 2024 Untitled UI. All rights reserved.</p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}