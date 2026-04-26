import { ChefHat, Clock, Users, Sparkles } from 'lucide-react'

const features = [
  {
    icon: ChefHat,
    title: 'Professional Recipes',
    description: 'Access thousands of recipes curated by professional chefs from around the world.',
  },
  {
    icon: Clock,
    title: 'Quick & Easy',
    description: 'Find recipes that match your schedule, from 15-minute meals to weekend projects.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join a community of food lovers, share your creations and get inspired.',
  },
  {
    icon: Sparkles,
    title: 'Personalized',
    description: 'Get recommendations tailored to your taste preferences and dietary needs.',
  },
]

function ContentSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Image + Text side by side */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Chef Image */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50">
              <img
                src="/img/Image 73.png"
                alt="A chef preparing delicious food in a modern kitchen"
                className="w-full h-[350px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-chefify-pink/10"></div>
          </div>

          {/* Right: About Text */}
          <div className="space-y-6">
            <span className="text-chefify-pink font-semibold text-sm uppercase tracking-wider">
              About Chefify
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Cooking Made
              <span className="text-chefify-pink"> Simple</span> &
              <span className="text-chefify-pink"> Enjoyable</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Chefify brings you the best recipes from professional chefs and home cooks. 
              Whether you're a beginner or a seasoned cook, our platform helps you discover 
              new flavors and master cooking techniques with step-by-step instructions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make cooking accessible, fun, and rewarding for everyone. 
              With a vast library of recipes, detailed instructions, and a supportive community, 
              your culinary journey starts here.
            </p>
            <button className="inline-flex items-center gap-2 bg-chefify-pink hover:bg-chefify-pink-dark text-white px-8 py-3.5 rounded-xl text-base font-semibold shadow-lg shadow-chefify-pink/25 hover:shadow-xl hover:shadow-chefify-pink/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 mt-2">
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-12">
          <span className="text-chefify-pink font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Everything You Need to
            <span className="text-chefify-pink"> Cook Better</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-chefify-pink/10 hover:border-chefify-pink/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-chefify-pink/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-chefify-pink group-hover:scale-110 transition-all duration-300">
                  <Icon size={24} className="text-chefify-pink group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContentSection
