import SearchInput from './SearchInput'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-chefify-bg to-chefify-pink-light/30">
      {/* Decorative background blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-chefify-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-chefify-pink/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text + Search */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-chefify-pink/10 text-chefify-pink px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-chefify-pink rounded-full animate-pulse"></span>
              #1 Recipe Platform
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              <span className="text-chefify-pink">Discover</span>
              <br />
              <span className="bg-gradient-to-r from-chefify-pink to-chefify-pink-dark bg-clip-text text-transparent">
                Chefify
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-md animation-delay-200 animate-fade-in-up">
              Easy and delicious cooking instructions right here. 
              Start exploring now! Find thousands of recipes from world-class chefs.
            </p>

            {/* Search Input */}
            <div className="animation-delay-400 animate-fade-in-up">
              <SearchInput variant="hero" />
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 animation-delay-600 animate-fade-in-up">
              <div>
                <p className="text-2xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-500">Recipes</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Chefs</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-500">Users</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative animate-fade-in-right animation-delay-200">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-chefify-pink/15 group">
              <img
                src="/img/Image 93.png"
                alt="Delicious food dishes arranged beautifully on a marble table"
                className="w-full h-[350px] sm:h-[420px] lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-xl p-4 animate-scale-in animation-delay-600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-chefify-pink">
                  <img 
                    src="/img/Image 72.png" 
                    alt="Featured recipe" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Today's Pick</p>
                  <p className="text-xs text-gray-500">Asian Noodle Bowl</p>
                </div>
              </div>
            </div>

            {/* Floating rating badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-xl shadow-xl px-4 py-3 animate-scale-in animation-delay-400">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-sm font-bold text-gray-900">4.9</span>
              </div>
              <p className="text-xs text-gray-500">Top Rated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
