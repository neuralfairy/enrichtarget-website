"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Enrichtarget</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/demo" className="text-black hover:bg-gray-50">
                Book Demo
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-800 hover:shadow-lg transition-all">
              <Link href="/trial">Start Free Trial</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/features" className="text-gray-700 hover:text-purple-600">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-purple-600">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-purple-600">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" asChild>
                  <Link href="/demo" className="text-black">
                    Book Demo
                  </Link>
                </Button>
                <Button asChild className="bg-black text-white hover:bg-gray-800">
                  <Link href="/trial">Start Free Trial</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
