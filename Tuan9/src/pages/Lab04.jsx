import React from 'react';
import { Check, CreditCard, ChevronRight } from 'lucide-react';

export default function Lab04() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2 w-1/3">
          <img src="/img/Lab_04/chefify.png" alt="Logo" className="h-8" onError={(e) => e.target.style.display='none'} />
          <h1 className="text-xl font-bold text-primary">Chefify</h1>
        </div>
        <div className="flex items-center justify-end gap-6 flex-1">
          <nav className="flex gap-4 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-primary">Recipes</a>
            <a href="#" className="hover:text-primary">Ingredients</a>
            <a href="#" className="hover:text-primary">About Us</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-primary font-medium bg-red-50 rounded-lg">Recipe Box</button>
            <img src="/img/Lab_04/avatar.png" alt="User" className="w-10 h-10 rounded-full" onError={(e) => e.target.style.display='none'} />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12 flex items-center gap-16">
        {/* Left column - Content */}
        <div className="w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Join Chefify pro for<br />
            unlimited access
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Upgrade your cooking experience with our premium features. 
            Get access to exclusive recipes, ad-free browsing, and more.
          </p>

          <div className="space-y-4 mb-10">
            {['10k+ premium recipes', 'No ads', 'Offline access', 'Weekly meal plans'].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Yearly Subscription</h3>
                <p className="text-sm text-gray-500">Billed annually at $12.99</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">$0.25</div>
                <div className="text-sm text-gray-500">/ week</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-white border border-gray-200 rounded-xl py-3 px-4 flex items-center gap-3 hover:border-primary transition-colors cursor-pointer group">
                <img src="/img/Lab_04/radio_check.png" alt="selected" className="w-5 h-5" onError={(e) => e.target.style.display='none'} />
                <img src="/img/Lab_04/wallet.png" alt="wallet" className="w-6 h-6" onError={(e) => e.target.style.display='none'} />
                <span className="font-medium text-gray-800">Credit Card</span>
              </button>
              <button className="flex-1 bg-white border border-gray-200 rounded-xl py-3 px-4 flex items-center gap-3 hover:border-primary transition-colors cursor-pointer group">
                <img src="/img/Lab_04/radio_uncheck.png" alt="unselected" className="w-5 h-5" onError={(e) => e.target.style.display='none'} />
                <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="#003087" d="M21.1 6.8c-.3-1.6-1.5-2.7-3.4-3.1-2.1-.4-6-.4-6-.4h-.2s-3.9 0-6 .4C3.6 4.1 2.4 5.2 2.1 6.8 1.9 8.1 1.9 12 1.9 12s0 3.9.2 5.2c.3 1.6 1.5 2.7 3.4 3.1 2.1.4 6 .4 6 .4h.2s3.9 0 6-.4c1.9-.4 3.1-1.5 3.4-3.1.2-1.3.2-5.2.2-5.2s0-3.9-.2-5.2z"/><path fill="#009CDE" d="M10.9 15.6V8.4L16.2 12l-5.3 3.6z"/></svg>
                <span className="font-medium text-gray-800">PayPal</span>
              </button>
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-200 transition-all flex items-center justify-center gap-2">
            Subscribe Now
            <ChevronRight className="w-5 h-5" />
          </button>
          <p className="text-center text-xs text-gray-400 mt-4">Cancel anytime. Terms and conditions apply.</p>
        </div>

        {/* Right column - Image Collage */}
        <div className="w-1/2 relative h-[600px] flex items-center justify-center">
           <div className="absolute inset-0 bg-red-50 rounded-full blur-3xl opacity-50 transform -translate-y-10 scale-90"></div>
           <img 
              src="/img/Lab_04/dish.png" 
              alt="Food Collage" 
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
              onError={(e) => {
                 e.target.onerror = null; 
                 e.target.src = "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
              }}
           />
        </div>
      </main>
    </div>
  );
}
