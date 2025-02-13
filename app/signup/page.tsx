"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [randomImage, setRandomImage] = useState("");

  // Array of professional workspace images from Unsplash
  const images = [
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2969&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2970&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2969&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600494603989-9650cf6dad51?q=80&w=2970&auto=format&fit=crop"
  ];

  useEffect(() => {
    // Select a random image on the client side only
    setRandomImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Sign up attempt with:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Random Image */}
      <div className="hidden lg:block relative w-1/2">
        {randomImage && (
          <>
            <Image
              src={randomImage}
              alt="Modern Office"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
                <p className="text-xl text-white/80 max-w-md">
                  Create an account and start your journey with us today.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold">
              Untitled UI
            </Link>
            <h2 className="mt-6 text-3xl font-bold">Create your account</h2>
            <p className="mt-2 text-muted-foreground">
              Enter your details to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

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
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:text-primary/80"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:text-primary/80"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Create account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:text-primary/80">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}