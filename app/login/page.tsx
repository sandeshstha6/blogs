"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [randomImage, setRandomImage] = useState("");

  // Array of professional workspace images from Unsplash
  const images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2969&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2969&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2970&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2974&auto=format&fit=crop",
  ];

  useEffect(() => {
    // Select a random image on the client side only
    setRandomImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Random Image */}
      <div className="hidden lg:block relative w-1/2">
        {randomImage && (
          <>
            <Image
              src={randomImage}
              alt="Office Space"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
                <p className="text-xl text-white/80 max-w-md">
                  Sign in to access your account and continue your journey with us.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold">
              Untitled UI
            </Link>
            <h2 className="mt-6 text-3xl font-bold">Sign in to your account</h2>
            <p className="mt-2 text-muted-foreground">
              Enter your details to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-muted-foreground"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-primary hover:text-primary/80"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign in
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:text-primary/80">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}