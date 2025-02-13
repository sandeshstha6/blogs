"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Untitled UI</h1>
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

      {/* Featured Post */}
      <Link href={`/blog/${blogPosts[0].slug}`} className="block">
        <div className="relative h-[600px] w-full">
          <Image
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <div className="max-w-7xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm mb-4">
                {blogPosts[0].category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg md:text-xl mb-6 max-w-3xl text-white/90">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm">{blogPosts[0].author}</span>
                <span className="text-sm text-white/60">•</span>
                <span className="text-sm text-white/60">{blogPosts[0].date}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Recent Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl font-semibold mb-8">Recent blog posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
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
                <h4 className="text-xl font-semibold mb-2 group-hover:text-primary">
                  {post.title}
                </h4>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{post.author}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's get started on something great
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="bg-white text-black hover:bg-white/90">
              Chat to us
            </Button>
            <Button className="bg-white text-black hover:bg-white/90">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
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