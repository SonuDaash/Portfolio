"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import PDFViewer from "@/components/pdf-viewer"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 border-b",
        scrolled ? "bg-black/40 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-white/5" : "bg-transparent py-5 border-transparent",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
          >
            Sonu Das
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-orange-500 relative",
                pathname === item.href ? "text-orange-500" : "text-muted-foreground",
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-orange-500"
                />
              )}
            </Link>
          ))}
          <PDFViewer title="Sonu Das - Resume">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-1">
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </PDFViewer>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X className="h-6 w-6 text-orange-500" /> : <Menu className="h-6 w-6 text-orange-500" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg"
        >
          <nav className="container flex flex-col py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base py-2 font-medium transition-colors hover:text-orange-500",
                  pathname === item.href ? "text-orange-500" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <PDFViewer title="Sonu Das - Resume">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full flex items-center justify-center gap-2">
                <FileText className="h-4 w-4" />
                View Resume
              </Button>
            </PDFViewer>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

