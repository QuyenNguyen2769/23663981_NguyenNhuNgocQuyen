import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import accountImg from '../../img/account.png';

export default function Lab01() {
  const [modalState, setModalState] = useState('discover'); // 'discover', 'create', 'login', 'signup'

  return (
    <div className="relative w-full min-h-screen bg-white font-sans">
      {/* Background Page (Lab 6_7 Landing Page Mock) */}
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 z-20 relative">
        <div className="flex items-center gap-2">
          <img src="/img/Lab_01/Group 9.png" alt="Logo" className="h-8" onError={(e) => e.target.style.display='none'} />
          <span className="text-xl font-bold text-primary">Chefify</span>
        </div>
        <div className="flex items-center bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 w-80">
          <Search className="w-4 h-4 text-gray-400" />
          <input type="text" placeholder="What would you like to cook?" className="bg-transparent border-none outline-none ml-2 w-full text-sm font-medium" />
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-primary">What to cook</a>
          <a href="#" className="hover:text-primary">Recipes</a>
          <a href="#" className="hover:text-primary">Ingredients</a>
          <a href="#" className="hover:text-primary">Occasions</a>
          <a href="#" className="hover:text-primary">About Us</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => setModalState('login')} className="px-6 py-2.5 text-primary font-semibold bg-red-50 rounded-lg hover:bg-red-100 transition-colors">Login</button>
          <button onClick={() => setModalState('signup')} className="px-6 py-2.5 text-white font-semibold bg-primary rounded-lg hover:bg-red-600 shadow-sm shadow-red-200 transition-colors">Subscribe</button>
        </div>
      </header>
      
      <main className="flex-1 relative w-full h-[calc(100vh-73px)]">
        <img src="/img/Lab_01/Image 73.png" alt="Hero Background" className="w-full h-full object-cover" onError={(e) => {
             e.target.onerror = null; 
             e.target.src = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
          }} />
        
        {/* Floating Recipe Card */}
        <div className="absolute top-1/2 left-32 -translate-y-1/2 w-[380px] bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center">
          <div className="absolute -top-4 bg-yellow-400 text-white font-bold text-[10px] uppercase px-6 py-2 rounded shadow-md tracking-widest border border-yellow-500">
            --- Recipe of the day ---
          </div>
          <h2 className="text-2xl font-bold text-primary mt-4 mb-3">Salad Caprese</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 px-4">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer
          </p>
          <div className="flex flex-col items-center gap-2 mb-8">
            <img src="/img/Lab_02/avatar.png" alt="Chef" className="w-12 h-12 rounded-full border-2 border-pink-100" onError={(e) => e.target.style.display='none'} />
            <span className="text-xs font-medium text-gray-700">Salad Caprese</span>
          </div>
          <button className="bg-primary hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-red-200 transition-all transform hover:-translate-y-0.5">
            View now
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </main>

      {/* This Summer Recipes */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">This Summer Recipes</h2>
          <p className="text-gray-500">We have all your Independence Day sweets covered.</p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "italian_style_tomato_salad.png", title: "Italian-style tomato salad", time: "14 minutes" },
            { img: "Vegetable and shrimp spaghetti.png", title: "Spaghetti with vegetables and shrimp", time: "12 minutes" },
            { img: "lotus_delight_salad.png", title: "Lotus delight salad", time: "20 minutes" },
            { img: "Snack cakes.png", title: "Snack cakes", time: "21 minutes" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={`/img/Lab_03/${item.img}`} alt={item.title} className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
              </div>
              <div className="p-4 flex flex-col justify-between h-32 relative">
                <h3 className="font-bold text-gray-900 leading-tight pr-10">{item.title}</h3>
                <div className="text-primary text-xs font-medium">{item.time}</div>
                <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-pink-200 flex items-center justify-center text-primary hover:bg-pink-50">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes With Videos */}
      <section className="py-10 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">Recipes With Videos</h2>
          <p className="text-gray-500">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "salad_with_cabbage_and_shrimp.png", title: "Salad with cabbage and shrimp", time: "32 minutes" },
            { img: "Bean, shrimp, and potato salad.png", title: "Salad of cow peas, shrimp and potatoes", time: "32 minutes" },
            { img: "Sunny-side up fried eggs.png", title: "Sunny-side up fried eggs", time: "32 minutes" },
            { img: "Lotus delight salad.png", title: "Lotus delight salad", time: "32 minutes" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img src={`/img/Lab_03/${item.img}`} alt={item.title} className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
              </div>
              <div className="p-4 flex flex-col justify-between h-32 relative">
                <h3 className="font-bold text-gray-900 leading-tight pr-10">{item.title}</h3>
                <div className="text-primary text-xs font-medium">{item.time}</div>
                <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-pink-200 flex items-center justify-center text-primary hover:bg-pink-50">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's pick */}
      <section className="py-20 px-8 max-w-7xl mx-auto mb-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">Editor's pick</h2>
          <p className="text-gray-500">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500", title: "Stuffed sticky rice ball", time: "14 minutes", author: "Jennifer King", desc: "Stuffed sticky rice balls. A delightful Asian treat with chewy glutinous rice and a flavorful surprise filling..." },
            { img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500", title: "Strawberry smoothie", time: "10 minutes", author: "Matthew Martinez", desc: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers..." },
            { img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500", title: "Latte Art", time: "15 minutes", author: "Sarah Hill", desc: "Latte art is the skillful craft of creating captivating designs on the surface of a latte..." },
            { img: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500", title: "Butter fried noodles", time: "10 minutes", author: "Julia Lopez", desc: "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal..." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex">
              <div className="w-2/5 h-48 overflow-hidden shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col relative">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                <div className="text-gray-400 text-xs font-medium mb-4">{item.time}</div>
                <div className="flex items-center gap-2 mb-4">
                  <img src="/img/Lab_02/avatar.png" className="w-6 h-6 rounded-full" alt="author" onError={(e) => e.target.style.display='none'} />
                  <span className="text-xs font-bold text-gray-800">{item.author}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pr-8">{item.desc}</p>
                <button className="absolute top-6 right-6 w-8 h-8 rounded-full border border-pink-200 flex items-center justify-center text-primary hover:bg-pink-50">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-16">
        <div className="max-w-7xl mx-auto flex gap-16 justify-between mb-16">
          <div className="w-1/3">
            <h4 className="font-bold mb-4">About Us</h4>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="bg-white rounded-lg px-4 py-2 text-sm text-gray-900 outline-none w-64" />
              <button className="bg-primary hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg transition-colors text-sm">Send</button>
            </div>
          </div>
          <div className="flex gap-16 w-1/2 justify-between text-sm">
            <div>
              <h4 className="font-bold mb-6">Learn More</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white">Our Cooks</a></li>
                <li><a href="#" className="hover:text-white">See Our Features</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
              <h4 className="font-bold mt-8 mb-6">Shop</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white">Gift Subscription</a></li>
                <li><a href="#" className="hover:text-white">Send Us Feedback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Recipes</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white">What to Cook This Week</a></li>
                <li><a href="#" className="hover:text-white">Pasta</a></li>
                <li><a href="#" className="hover:text-white">Dinner</a></li>
                <li><a href="#" className="hover:text-white">Healthy</a></li>
                <li><a href="#" className="hover:text-white">Vegetarian</a></li>
                <li><a href="#" className="hover:text-white">Vegan</a></li>
                <li><a href="#" className="hover:text-white">Christmas</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <img src="/img/Lab_04/white_chefify.png" alt="Logo" className="h-6 opacity-50" onError={(e) => e.target.style.display='none'} />
            <span className="font-bold opacity-50">Chefify</span>
          </div>
          <p className="text-xs text-gray-500">2023 Chefify Company</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>

      {/* Dark Overlay */}
      {modalState && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && setModalState(null)}>
          
          {/* Lab 01 a: Discover Chefify Modal */}
          {modalState === 'discover' && (
            <div className="bg-white rounded-2xl overflow-hidden w-[600px] shadow-2xl relative flex flex-col p-8 items-center text-center animate-fade-in">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-800" onClick={() => setModalState(null)}>
                <X className="w-5 h-5" />
              </button>
            <h2 className="text-3xl font-bold text-primary mb-2 mt-4">Discover Chefify</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-sm">
              Easy and delicious cooking instructions right here. Start exploring now!
            </p>
            <div className="w-full h-64 mb-6 rounded-xl overflow-hidden">
              <img src="/img/Lab_01/Image 93.png" alt="Plates" className="w-full h-full object-cover" onError={(e) => {
                 e.target.onerror = null; 
                 e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
              }} />
            </div>
            <div className="flex gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
            <button className="w-3/4 bg-primary hover:bg-red-600 text-white font-semibold py-3 rounded-xl mb-4 transition-all" onClick={() => setModalState('create')}>
              Next
            </button>
            <button className="text-primary font-medium text-sm hover:underline" onClick={() => setModalState(null)}>
              Skip
            </button>
          </div>
        )}

        {/* Create Account Modal */}
        {modalState === 'create' && (
          <div className="bg-white rounded-2xl overflow-hidden w-[800px] flex shadow-2xl animate-fade-in h-[500px]">
            <div className="w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create an account</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-white" />
                <input type="email" placeholder="Email\nexample.email@gmail.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:ring-1 focus:ring-primary outline-none transition-all text-sm" />
                <div className="relative">
                  <input type="password" placeholder="Password\nEnter at least 8+ characters" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:ring-1 focus:ring-primary outline-none transition-all text-sm" />
                </div>
                <button className="w-full bg-primary hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all mt-4" onClick={() => setModalState('login')}>
                  Sign In
                </button>
                <div className="text-center mt-6">
                  <p className="text-xs text-gray-400 mb-3">Or sign in with</p>
                  <div className="flex justify-center gap-4">
                    <button className="w-16 h-10 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 text-red-600 font-bold">
                      G
                    </button>
                    <button className="w-16 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 text-blue-700 font-bold">
                      f
                    </button>
                    <button className="w-16 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-600 font-bold text-xl">
                      
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-primary relative flex items-center justify-center p-8">
              <img src={accountImg} alt="Illustration" className="w-full h-auto object-contain" onError={(e) => {
                 e.target.style.display = 'none';
              }} />
            </div>
          </div>
        )}

        {/* Lab 01 b: Login Modal */}
        {modalState === 'login' && (
          <div className="bg-white rounded-2xl overflow-hidden w-[850px] flex shadow-2xl animate-fade-in h-[550px] relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 z-20 bg-white rounded-full p-1" onClick={() => setModalState(null)}>
              <X className="w-5 h-5" />
            </button>
            <div className="w-[45%] relative">
              <img src="/img/Lab_01/Image 72.png" alt="Food" className="w-full h-full object-cover" onError={(e) => {
                 e.target.onerror = null; 
                 e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
              }} />
              <div className="absolute inset-0 bg-teal-900/30"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <h2 className="text-3xl font-bold text-white drop-shadow-md">
                  "Embrace the art of cooking, where flavors come alive!"
                </h2>
              </div>
            </div>
            <div className="flex-1 p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Login</h2>
              <p className="text-gray-500 text-sm mb-6">Enter your email to log in.</p>
              
              <div className="space-y-4">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:ring-1 focus:ring-primary outline-none transition-all text-sm" />
                
                <button className="w-full bg-primary hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all mt-2">
                  Continue
                </button>

                <div className="relative flex py-6 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">OR</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <p className="text-[10px] text-gray-400 text-center mb-4 px-4 leading-relaxed">
                  By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
                </p>

                <div className="space-y-3">
                  <button className="w-full bg-red-50 text-red-500 font-medium py-2.5 rounded-lg hover:bg-red-100 transition-all flex items-center justify-center gap-3 text-sm">
                    <span className="font-bold">G</span> Continue with Google
                  </button>
                  <button className="w-full bg-blue-50 text-blue-600 font-medium py-2.5 rounded-lg hover:bg-blue-100 transition-all flex items-center justify-center gap-3 text-sm">
                    <span className="font-bold">f</span> Continue with Facebook
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-3 text-sm">
                    <span className="font-bold text-lg"></span> Continue with Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sign Up Modal */}
        {modalState === 'signup' && (
          <div className="bg-white rounded-2xl overflow-hidden w-[450px] shadow-2xl relative flex flex-col p-10 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign up</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">First name</label>
                  <input type="text" placeholder="Input first name" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:ring-1 focus:ring-primary outline-none transition-all text-sm" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Last name</label>
                  <input type="text" placeholder="Input last name" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:ring-1 focus:ring-primary outline-none transition-all text-sm" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
                <input type="email" placeholder="example.email@gmail.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:ring-1 focus:ring-primary outline-none transition-all text-sm" />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Password</label>
                <input type="password" placeholder="Enter at least 8+ characters" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:ring-1 focus:ring-primary outline-none transition-all text-sm" />
              </div>

              <label className="flex items-start gap-2 mt-4 cursor-pointer">
                <input type="checkbox" className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                <span className="text-xs text-gray-600">
                  By signing up, I agree with the <a href="#" className="text-primary hover:underline">Terms of Use</a> & <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </span>
              </label>

              <button className="w-full bg-primary hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all mt-4">
                Sign up
              </button>

              <div className="text-center text-xs text-gray-500 mt-4">
                Already have an account? <a href="#" className="text-primary hover:underline font-medium">Log in</a>
              </div>

              <div className="relative flex py-4 items-center">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">OR</span>
                  <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <div className="flex justify-center gap-4">
                <button className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:opacity-90 font-bold text-sm">
                  G
                </button>
                <button className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:opacity-90 font-bold text-sm">
                  f
                </button>
                <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 font-bold text-sm">
                  A
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      )}
    </div>
  );
}
