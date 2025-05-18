import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F7FA] dark:bg-[#0F172A] text-[#0F172A] dark:text-[#F1F5F9]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}
