import { Heart, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  'Recipes': ['Quick & Easy', 'Healthy', 'Vegetarian', 'Desserts', 'Breakfast'],
  'Company': ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
  'Support': ['FAQ', 'Help Center', 'Privacy Policy', 'Terms of Service'],
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img src="/img/Group 9.png" alt="Chefify" className="h-8 brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Discover thousands of easy and delicious recipes. Start your culinary journey with Chefify today.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={14} className="text-chefify-pink" />
                <span>hello@chefify.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={14} className="text-chefify-pink" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-chefify-pink" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-chefify-pink transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Chefify. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart size={14} className="text-chefify-pink fill-chefify-pink" /> by Chefify Team
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
