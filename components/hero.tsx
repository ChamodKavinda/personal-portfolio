"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { ArrowDown, Download } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const { dictionary } = useLanguage()

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

      <div className="container flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">{dictionary.hero.greeting}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">Chamod Kavinda</h1>
          <div className="text-xl md:text-3xl font-medium text-primary h-[40px] md:h-[60px]">
            <TypeAnimation
              sequence={[
                "Full Stack Software Engineer",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "I build web applications",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mb-10"
        >
          <p className="text-muted-foreground text-lg md:text-xl">{dictionary.hero.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild>
            <a href="#projects">
              {dictionary.hero.cta} <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a 
              href="/L.K.C Kavinda-intern-software_engineer.pdf"  
              download="L.K.C Kavinda-intern-software_engineer.pdf"  
              target="_blank"  
              rel="noopener noreferrer"
            >
              {dictionary.hero.resume} <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10"
      >
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border animate-bounce"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  )
}
