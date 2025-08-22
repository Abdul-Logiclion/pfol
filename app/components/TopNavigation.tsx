'use client'
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function TopNavigation() {
  const sectionIds = [
    "about",
    "skills",
    "projects",
    "experience",
    "achievements",
    "certifications",
  ]

  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0  w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 md:hidden">
      <div className="flex justify-between items-center px-4 py-3">
        <h1 className="text-lg font-semibold">Portfolio</h1>
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col space-y-2 px-4 pb-4">
          {sectionIds.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="hover:text-blue-600"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
