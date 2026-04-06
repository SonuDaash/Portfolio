"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, FileText, X, ZoomIn, ZoomOut, RotateCw, Printer, Loader2 } from "lucide-react"
import ResumeContent from "./resume-content"

interface PDFViewerProps {
  children: React.ReactNode
  title: string
}

export default function PDFViewer({ children, title }: PDFViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [isDownloading, setIsDownloading] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // Reset zoom when dialog opens/closes
  useEffect(() => {
    if (!isOpen) {
      setZoom(100)
    } else {
      // When dialog opens, focus on content for keyboard scrolling
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.focus()
        }
      }, 100)
    }
  }, [isOpen])

  const handleZoomIn = () => {
    setZoom((prev: number) => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom((prev: number) => Math.max(prev - 25, 50))
  }

  const handleReset = () => {
    setZoom(100)
    // Reset scroll position when resetting zoom
    if (contentRef.current) {
      contentRef.current.scrollTop = 0
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = async () => {
    if (isDownloading) return

    setIsDownloading(true)
    const prevZoom = zoom
    
    // Temporarily reset zoom to 100% for proper PDF generation
    setZoom(100)
    
    // Wait for the DOM to update to un-zoomed state
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      // Create a temporary script element to load html2pdf
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"

      const loadScript = new Promise((resolve, reject) => {
        script.onload = resolve
        script.onerror = reject
      })

      document.body.appendChild(script)
      await loadScript

      if (contentRef.current) {
        // Find the paper element to print
        const element = contentRef.current.querySelector(".bg-white")

        if (element && typeof window !== "undefined" && (window as any).html2pdf) {
          const opt = {
            margin: 0,
            filename: "Sonu_Das_Resume.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
          }

          await (window as any).html2pdf().set(opt).from(element).save()
        }
      }

      // Cleanup script
      document.body.removeChild(script)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Failed to generate PDF. Please try printing instead.")
    } finally {
      setZoom(prevZoom)
      setIsDownloading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-6xl w-[95vw] h-[95vh] p-0 bg-[#323639] border-none shadow-2xl overflow-hidden flex flex-col rounded-xl">
        <DialogHeader className="px-6 py-3 border-b border-black/30 bg-[#2b2d30] flex flex-row items-center justify-between shadow-sm z-10">
          <DialogTitle className="flex items-center gap-3 text-gray-200 font-medium">
            <FileText className="h-5 w-5 text-orange-500" />
            <span className="text-sm tracking-wide">{title}</span>
          </DialogTitle>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-black/20 rounded-md p-1 border border-white/5">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomOut}
                className="h-8 w-8 rounded-sm text-gray-400 hover:text-white hover:bg-white/10"
              >
                <ZoomOut className="h-4 w-4" />
                <span className="sr-only">Zoom Out</span>
              </Button>
              <span className="text-xs font-medium w-14 text-center text-gray-300">{zoom}%</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomIn}
                className="h-8 w-8 rounded-sm text-gray-400 hover:text-white hover:bg-white/10"
              >
                <ZoomIn className="h-4 w-4" />
                <span className="sr-only">Zoom In</span>
              </Button>
              <div className="w-[1px] h-4 bg-white/10 mx-1" />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleReset}
                className="h-8 w-8 rounded-sm text-gray-400 hover:text-white hover:bg-white/10"
                title="Reset Zoom"
              >
                <RotateCw className="h-4 w-4" />
                <span className="sr-only">Reset Zoom</span>
              </Button>
            </div>
            <div className="flex items-center gap-2 border-l border-white/10 pl-3">
               <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-white/10 h-9"
                onClick={handlePrint}
              >
                <Printer className="h-4 w-4 mr-2 text-orange-500" />
                Print
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-white/10 h-9 relative"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 text-orange-500 animate-spin" />
                    Preparing PDF...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2 text-orange-500" />
                    Download
                  </>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-9 w-9 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white ml-2 transition-colors"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        {/* PDF Viewer Background Surface */}
        <div
          ref={contentRef}
          className="flex-1 overflow-auto bg-[#525659] p-8 scroll-smooth focus:outline-none relative shadow-inner"
          tabIndex={0}
        >
          <div className="flex justify-center min-h-full pb-12">
            {/* The Document Paper */}
            <div
              className="bg-white rounded-sm transition-all duration-300 ease-out flex-shrink-0"
              style={{
                transform: `scale(${zoom / 100})`,
                transformOrigin: "top center",
                width: "8.5in",
                minHeight: "11in",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              <ResumeContent />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

