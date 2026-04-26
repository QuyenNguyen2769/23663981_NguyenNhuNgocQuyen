import { Clock, Heart } from 'lucide-react'

const recipes = [
  {
    title: 'Asian Noodle Bowl',
    description: 'Stir-fried noodles with seasonal vegetables, topped with a fried egg.',
    time: '25 min',
    likes: 342,
    image: '/img/Image 72.png',
    tag: 'Popular',
  },
  {
    title: 'Gourmet Platter',
    description: 'Exquisite gourmet dishes with caviar, fresh herbs, and artisan bread.',
    time: '45 min',
    likes: 528,
    image: '/img/Image 93.png',
    tag: "Editor's Pick",
  },
  {
    title: "Chef's Special",
    description: "Seasonal specialties with house-made sauces and fresh ingredients.",
    time: '35 min',
    likes: 415,
    image: '/img/Image 73.png',
    tag: 'Trending',
  },
]

function EditorsPick() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-chefify-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-chefify-pink font-semibold text-sm uppercase tracking-wider">Curated For You</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Editor's <span className="text-chefify-pink">Picks</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">Hand-selected recipes that our community loves.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-chefify-pink/10 transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src={recipe.image} alt={recipe.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-chefify-pink text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">{recipe.tag}</div>
                <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-chefify-pink hover:text-white transition-all duration-200 text-gray-500">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-chefify-pink transition-colors">{recipe.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{recipe.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-400"><Clock size={14} /><span className="text-xs font-medium">{recipe.time}</span></div>
                  <div className="flex items-center gap-1.5 text-gray-400"><Heart size={14} className="text-chefify-pink" /><span className="text-xs font-medium">{recipe.likes}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-chefify-pink text-chefify-pink hover:bg-chefify-pink hover:text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-chefify-pink/25">View All Recipes</button>
        </div>
      </div>
    </section>
  )
}

export default EditorsPick
