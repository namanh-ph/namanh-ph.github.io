import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <WorkExperience />
      </main>
      <Footer />
    </div>
  )
}
