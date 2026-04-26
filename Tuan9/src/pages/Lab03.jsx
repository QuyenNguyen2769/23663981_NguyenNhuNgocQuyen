import React from 'react';
import { Search, SlidersHorizontal, ChevronRight, ChevronLeft, Heart } from 'lucide-react';

export default function Lab03() {
  const recipes = [
    { name: "Italian-style tomato salad", time: "14 minutes", img: "italian_style_tomato_salad.png" },
    { name: "Vegetable and shrimp spaghetti", time: "15 minutes", img: "Vegetable and shrimp spaghetti.png" },
    { name: "Lotus delight salad", time: "20 minutes", img: "lotus_delight_salad.png" },
    { name: "Snack cakes", time: "21 minutes", img: "Snack cakes.png" },
    { name: "Salad with cabbage and shrimp", time: "32 minutes", img: "salad_with_cabbage_and_shrimp.png" },
    { name: "Bean, shrimp, and potato salad", time: "32 minutes", img: "Bean, shrimp, and potato salad.png" },
    { name: "Sunny-side up fried eggs", time: "32 minutes", img: "Sunny-side up fried eggs.png" },
    { name: "Lotus delight salad", time: "32 minutes", img: "Lotus delight salad.png" }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4 w-1/3">
          <h1 className="text-xl font-bold text-primary">Chefify</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md border border-primary">
            <Search className="w-5 h-5 text-primary" />
            <input type="text" defaultValue="Salad" className="bg-transparent border-none outline-none ml-2 w-full text-sm font-medium" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-6 w-1/3">
          <nav className="flex gap-4 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-primary">Recipes</a>
            <a href="#" className="hover:text-primary">Ingredients</a>
            <a href="#" className="hover:text-primary">About Us</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-primary font-medium bg-red-50 rounded-lg">Recipe Box</button>
            <img src="/img/Lab_03/avatar.png" alt="User" className="w-10 h-10 rounded-full" onError={(e) => e.target.style.display='none'} />
          </div>
        </div>
      </header>

      <div className="flex px-8 py-8">
        {/* Filters Sidebar */}
        <aside className="w-64 pr-8 border-r border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <SlidersHorizontal className="w-5 h-5 text-gray-700" />
            <h2 className="font-bold text-gray-900 text-lg">Filters</h2>
          </div>
          
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4 flex justify-between items-center">
              Type
              <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
            </h3>
            <div className="space-y-3">
              {['Pan-fried', 'Grilled', 'Sauteed', 'Steamed', 'Roasted', 'Baked'].map((type, idx) => (
                <label key={type} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border ${idx === 4 ? 'border-primary' : 'border-gray-300'} flex items-center justify-center`}>
                      {idx === 4 && <div className="w-3 h-3 bg-primary rounded-sm"></div>}
                    </div>
                    <span className="text-gray-600 text-sm">{type}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4 flex justify-between items-center">
              Time
              <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
            </h3>
            <div className="px-2">
              <div className="w-full h-1 bg-gray-200 rounded-full relative">
                <div className="absolute left-0 top-0 h-full bg-primary rounded-full w-[60%]"></div>
                <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer"></div>
                <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>30 mins</span>
                <span>50 mins</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4 flex justify-between items-center">
              Rating
              <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
            </h3>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map(rating => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-primary">
                    {rating === 5 && <div className="w-3 h-3 bg-primary rounded-sm"></div>}
                  </div>
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          <button className="w-full mt-4 bg-primary text-white font-medium py-3 rounded-xl hover:bg-red-600 transition-colors shadow-sm">
            Apply
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            32 <span className="font-medium text-gray-500">results found for</span> 'Salad'
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <img 
                    src={`/img/Lab_03/${recipe.img}`} 
                    alt={recipe.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                       e.target.onerror = null; 
                       e.target.src = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white shadow-sm transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2 leading-tight">{recipe.name}</h4>
                  <div className="flex items-center gap-2 mb-3">
                     <span className="text-yellow-400 text-xs">★★★★☆</span>
                     <span className="text-xs text-gray-500">(1.2k)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"></path></svg>
                      {recipe.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-black text-white font-medium">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-700 font-medium">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-700 font-medium">3</button>
            <span className="text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
