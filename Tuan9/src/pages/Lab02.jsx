import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronRight } from 'lucide-react';

export default function Lab02() {
  const [activeTab, setActiveTab] = useState('search');

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4 w-1/3">
          <h1 className="text-xl font-bold text-primary">Chefify</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md">
            <Search className="w-5 h-5 text-gray-400" />
            <input type="text" value={activeTab === 'search' ? 'cakescassa' : ''} readOnly className="bg-transparent border-none outline-none ml-2 w-full text-sm" />
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
            <img src="/img/Lab_02/avatar.png" alt="User" className="w-10 h-10 rounded-full" onError={(e) => e.target.style.display='none'} />
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 px-8">
        <button 
          className={`py-4 px-6 font-medium text-sm ${activeTab === 'search' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setActiveTab('search')}
        >
          Search Empty State (Lab 02 a)
        </button>
        <button 
          className={`py-4 px-6 font-medium text-sm ${activeTab === 'profile' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setActiveTab('profile')}
        >
          User Profile & Recipe Box (Lab 02 b)
        </button>
      </div>

      {activeTab === 'search' && (
        <div className="flex px-8 py-8">
          {/* Filters Sidebar */}
          <aside className="w-64 pr-8 border-r border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5 text-gray-700" />
              <h2 className="font-bold text-gray-900">Filters</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 flex justify-between items-center">
                Type
                <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
              </h3>
              <div className="space-y-3">
                {['Pan-fried', 'Grilled', 'Sauteed', 'Steamed'].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-primary">
                      {type === 'Pan-fried' && <div className="w-3 h-3 bg-primary rounded-sm"></div>}
                    </div>
                    <span className="text-gray-600 text-sm">{type}</span>
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
                  <div className="absolute left-0 top-0 h-full bg-primary rounded-full w-[40%]"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer"></div>
                  <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>10 mins</span>
                  <span>1 hour</span>
                </div>
              </div>
            </div>

            <div>
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
                    <img src={`../img/Lab_02/rating_${rating}.png`} alt={`${rating} stars`} className="h-4 object-contain" onError={(e) => {
                       e.target.style.display='none';
                       e.target.insertAdjacentHTML('afterend', `<span class="text-yellow-400 text-sm">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</span>`);
                    }} />
                  </label>
                ))}
              </div>
            </div>
            
            <button className="w-full mt-8 bg-primary text-white font-medium py-3 rounded-xl hover:bg-red-600 transition-colors">
              Apply
            </button>
          </aside>

          {/* Main Content - Empty State */}
          <main className="flex-1 flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-12">
              Sorry, no results were found for "cakescassa"
            </h2>
            <img src="/img/Lab_02/nothing.png" alt="No results" className="w-64 h-auto opacity-80" onError={(e) => {
               e.target.onerror = null; 
               e.target.src = "https://images.unsplash.com/photo-1584824486509-112e4181f1ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
            }} />
            <p className="mt-8 text-gray-500 max-w-md text-center">
              We couldn't find any recipes matching your search. Try searching for something else or browse our categories.
            </p>
          </main>
        </div>
      )}

      {activeTab === 'profile' && (
        <div className="px-8 py-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <img src="/img/Lab_02/avatar.png" alt="Emma Gonzalez" className="w-32 h-32 rounded-full mb-4 shadow-md border-4 border-white" onError={(e) => e.target.style.display='none'} />
            <h2 className="text-3xl font-bold text-gray-900">Emma Gonzalez</h2>
            <p className="text-gray-500 mt-2 max-w-lg">
              Food enthusiast, amateur chef, and lover of all things Italian. I enjoy experimenting with new ingredients and creating simple yet delicious meals.
            </p>
            <div className="flex gap-8 mt-6 text-sm font-medium">
              <div className="flex flex-col"><span className="text-2xl font-bold text-gray-900">12</span><span className="text-gray-500">Subscribers</span></div>
              <div className="flex flex-col"><span className="text-2xl font-bold text-gray-900">1.4k</span><span className="text-gray-500">Saves</span></div>
              <div className="flex flex-col"><span className="text-2xl font-bold text-gray-900">8</span><span className="text-gray-500">Recipes</span></div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Emma's Recipe Box</h3>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Filter</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Sort</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {/* Mock Recipes Grid */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sig=${i}`} 
                    alt="Recipe" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2 truncate">Italian-style risotto {i}</h4>
                  <div className="flex items-center gap-2 mb-3">
                     <span className="text-yellow-400 text-xs">★★★★☆</span>
                     <span className="text-xs text-gray-500">(1.2k)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"></path></svg>
                      30 mins
                    </div>
                    <span>Easy</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
