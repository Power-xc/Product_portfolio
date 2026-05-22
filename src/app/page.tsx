import { AIWorkflow } from "@/components/home/AIWorkflow"
import { BehindTheOneOne } from "@/components/home/BehindTheOneOne"
import { ContactSection } from "@/components/home/ContactSection"
import { Hero } from "@/components/home/Hero"
import { Manifesto } from "@/components/home/Manifesto"
import { Process } from "@/components/home/Process"
import { SelectedQuestions } from "@/components/home/SelectedQuestions"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <SelectedQuestions />
        <BehindTheOneOne />
        <Process />
        <AIWorkflow />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
