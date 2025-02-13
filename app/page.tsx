"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Exclude the first post (featured post) from the list
  const nonFeaturedPosts = blogPosts.slice(1);
  const totalPages = Math.ceil(nonFeaturedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = nonFeaturedPosts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-background">
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
                <span className="text-sm text-white/60">
                  {blogPosts[0].date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl font-semibold mb-8">All blog posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
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
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
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
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-white/90"
            >
              Chat to us
            </Button>
            <Button className="bg-white text-black hover:bg-white/90">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
