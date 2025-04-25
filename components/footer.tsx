"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const { dictionary } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/ChamodKavinda", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/chamod-kavinda-70271a266/", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:kavindachamod100@gmail.com", label: "Email" },
  ]

  return (
    <footer className="border-t py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-bold mb-2">
              <span className="text-primary">Chamod </span>Kavinda
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {dictionary.footer.copyright}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
