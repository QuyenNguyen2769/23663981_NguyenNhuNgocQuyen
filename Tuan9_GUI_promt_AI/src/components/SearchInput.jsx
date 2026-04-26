import { Search } from 'lucide-react'

function SearchInput({ variant = 'hero' }) {
  const isNavbar = variant === 'navbar'

  return (
    <div className={`relative group ${isNavbar ? 'w-full' : 'w-full max-w-lg'}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Search 
          size={isNavbar ? 16 : 20} 
          className="text-gray-400 group-focus-within:text-chefify-pink transition-colors duration-200" 
        />
      </div>
      <input
        type="text"
        placeholder={isNavbar ? 'What would you like to cook?' : 'Search for recipes...'}
        className={`
          w-full bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-chefify-pink/30 focus:border-chefify-pink focus:bg-white
          transition-all duration-300 
          ${isNavbar 
            ? 'pl-10 pr-4 py-2 text-sm rounded-lg' 
            : 'pl-12 pr-6 py-4 text-base rounded-xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-chefify-pink/10'
          }
        `}
      />
    </div>
  )
}

export default SearchInput
