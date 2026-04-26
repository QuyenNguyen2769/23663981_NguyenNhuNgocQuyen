import { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'
import SearchInput from './SearchInput'

const navLinks = [
  { name: 'What to cook', href: '#' },
  { name: 'Recipes', href: '#' },
  { name: 'Ingredients', href: '#' },
  { name: 'Occasions', href: '#' },
  { name: 'About Us', href: '#' },
]

function Navbar({ onSignupClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="/img/Group 9.png" 
              alt="Chefify Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Search bar - visible on md+ */}
          <div className="hidden md:block ml-4 lg:ml-6 flex-shrink-0 w-48 lg:w-64">
            <SearchInput variant="navbar" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 xl:px-4 py-2 text-sm font-medium text-gray-600 hover:text-chefify-pink rounded-lg hover:bg-chefify-pink/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side: Login + Subscribe */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-semibold text-chefify-pink hover:text-chefify-pink-dark transition-colors duration-200"
            >
              Login
            </a>
            <button onClick={onSignupClick} className="flex items-center gap-2 bg-chefify-pink hover:bg-chefify-pink-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-chefify-pink/25 hover:shadow-lg hover:shadow-chefify-pink/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
              <BookOpen size={16} />
              Subscribe
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-chefify-pink hover:bg-chefify-pink/5 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search - visible on sm, hidden on md+ */}
        <div className="md:hidden pb-3">
          <SearchInput variant="navbar" />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-scale-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-chefify-pink hover:bg-chefify-pink/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a href="#" className="px-4 py-3 text-base font-semibold text-chefify-pink">
                Login
              </a>
              <button onClick={onSignupClick} className="flex items-center justify-center gap-2 bg-chefify-pink text-white px-5 py-3 rounded-lg text-base font-semibold shadow-md">
                <BookOpen size={18} />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
