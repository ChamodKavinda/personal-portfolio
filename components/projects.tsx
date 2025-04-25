"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { ProjectCard } from "./project-card"

export default function Projects() {
  const { dictionary } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Backend for an e-commerce web application, built using Java Spring Boot and MySQL. It provides a RESTful API for managing products, orders, and user authentication using JSON Web Tokens (JWT).",
      image: "/ecommerce.jpg?height=600&width=800",
      tags: ["Java", "Spring boot", "MySQL", "JWT"],
      category: "backend",
      github: "https://github.com/ChamodKavinda/e-commerce_backend-springboot",
      demo: "https://demo.com",
    },
    {
      id: 2,
      title: "Book Social Network (Ongoing)",
      description: "Book Social Network is a modern full-stack application designed for book lovers to organize their personal libraries and connect with fellow readers.",
      image: "/book.jpg?height=600&width=800",
      tags: ["Spring boot","Angular"],
      category: "fullstack",
      github: "https://github.com/ChamodKavinda/book-social-network",
      demo: "https://demo.com",
    },
    {
      id: 3,
      title: "Dental Management System",
      description: "An interactive dashboard for managing a dental clinic's operations, including patient appointments,records,employees,dentists and other related functionalities.",
      image: "/dental.jpg?height=600&width=800",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      category: "fullstack",
      github: "https://github.com/ChamodKavinda/Dental-clinic-management-system_Client-side",
      demo: "https://demo.com",
    },
    {
      id: 4,
      title: "Text to Image Generator AI ",
      description: "Using simple prompt you can generate any image as you want. generate images using clipboard.",
      image: "/image.jpg?height=600&width=800",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      category: "fullstack",
      github: "https://github.com/ChamodKavinda/IMAGIFY",
      demo: "https://demo.com",
    },

  ]

  const filters = [
    { id: "all", label: dictionary.projects.filters.all },
    { id: "frontend", label: dictionary.projects.filters.frontend },
    { id: "backend", label: dictionary.projects.filters.backend },
    { id: "fullstack", label: dictionary.projects.filters.fullstack },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.projects.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">{dictionary.projects.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
