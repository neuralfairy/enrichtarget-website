"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Gift } from "lucide-react"
import Link from "next/link"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} className="absolute top-4 right-4">
          <X className="w-4 h-4" />
        </Button>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Wait! Don't Miss Out</h3>

          <p className="text-gray-600 mb-6">
            Get an exclusive 30% discount on your first month of AI Hunter Pro. Limited time offer for new users!
          </p>

          <div className="space-y-3">
            <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
              <Link href="/trial?discount=30">Claim 30% Discount</Link>
            </Button>

            <Button variant="ghost" onClick={() => setIsVisible(false)} className="w-full text-gray-500">
              No thanks, I'll pay full price
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
