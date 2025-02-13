
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">About Us</h4>
            <p className="text-white/60">
              We are dedicated to providing the best content and experience for our users.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/about" className="text-white/60 hover:text-white transition-colors">About</Link>
              <Link href="/careers" className="text-white/60 hover:text-white transition-colors">Careers</Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white">Twitter</a>
              <a href="#" className="text-white/60 hover:text-white">LinkedIn</a>
              <a href="#" className="text-white/60 hover:text-white">GitHub</a>
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
  );
}
