import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Resume from "@/components/resume"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Chamod Kavinda | Software Engineer",
  description: "Full Stack Software Engineer specializing in modern web technologies",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  )
}
