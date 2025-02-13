"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
      <div className="relative bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2970&auto=format&fit=crop"
            alt="Team collaboration"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Building the future of design</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-8">
            We're a team of designers, developers, and creators passionate about making the web more beautiful.
          </p>
          <Button className="bg-white text-black hover:bg-white/90">
            Join our team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe in making design accessible to everyone. Our platform provides the tools and resources needed to create beautiful, functional interfaces that delight users and drive business growth.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">4K+</h3>
                  <p className="text-gray-600">Active customers</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">600+</h3>
                  <p className="text-gray-600">Design resources</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
                  <p className="text-gray-600">Team members</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
                  <p className="text-gray-600">Customer support</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2970&auto=format&fit=crop"
                alt="Office space"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet our team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're a diverse team of talented individuals passionate about creating exceptional user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2970&auto=format&fit=crop"
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2970&auto=format&fit=crop"
              },
              {
                name: "Emily Parker",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2970&auto=format&fit=crop"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
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