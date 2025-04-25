"use client"

import { useState } from "react"
import { Skill } from "@/lib/types"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const skills: Skill[] = [
    { name: "HTML5", icon: "🌐", category: "frontend" },
    { name: "CSS3",  icon: "🎨", category: "frontend" },
    { name: "JavaScript", icon: "JS", category: "frontend" },
    { name: "TypeScript", icon: "TS", category: "frontend" },
    { name: "React",  icon: "⚛️", category: "frontend" },
    { name: "Angular",  icon: "A", category: "frontend" },
    { name: "Next.js",  icon: "V", category: "frontend" },
    { name: "Node.js",  icon: "N", category: "backend" },
    { name: "Express",  icon: "Ex", category: "backend" },
    { name: "Spring Boot", icon: "🍃", category: "backend" },
    { name: "MongoDB",  icon: "M", category: "database" },
    { name: "PostgreSQL",  icon: "🐘", category: "database" },
    { name: "MySQL",  icon: "SQL", category: "database" },
    { name: "Git",  icon: "G", category: "other" }
  ]

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Databases" },
    { id: "other", name: "DevOps & Tools" },
  ]

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="bg-muted/30 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 hover:bg-secondary/70"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-6 flex flex-col items-center text-center shadow-md bg-background rounded-2xl border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center text-2xl mb-4 bg-primary/10 rounded-full">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
     
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
