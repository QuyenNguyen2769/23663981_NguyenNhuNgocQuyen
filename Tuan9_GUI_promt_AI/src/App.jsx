import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContentSection from './components/ContentSection'
import EditorsPick from './components/EditorsPick'
import Footer from './components/Footer'
import DiscoverModal from './components/DiscoverModal'
import CreateAccount from './components/CreateAccount'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [currentPage, setCurrentPage] = useState('home') // 'home' | 'signup'

  /* ── Trang đăng ký ── */
  if (currentPage === 'signup') {
    return <CreateAccount onBackToHome={() => setCurrentPage('home')} />
  }

  /* ── Trang chính (Landing Page) ── */
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onSignupClick={() => setCurrentPage('signup')} />
      <main>
        <Hero />
        <ContentSection />
        <EditorsPick />
      </main>
      <Footer />

      {/* Discover Chefify Modal - shows on page load */}
      <DiscoverModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default App
