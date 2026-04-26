import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

function CreateAccount({ onBackToHome }) {
  /* ── State quản lý form ── */
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign up:', { fullName, email, password })
  }

  return (
    <div className="min-h-screen flex">

      {/* ============================== */}
      {/* CỘT TRÁI – Form đăng ký       */}
      {/* ============================== */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md space-y-8">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBackToHome}>
            <img src="/img/Group 9.png" alt="Chefify Logo" className="h-8 w-auto" />
          </div>

          {/* Tiêu đề */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
            <p className="mt-2 text-sm text-gray-500">
              Already have an account?{' '}
              <a href="#" className="text-[#F15E87] font-medium hover:underline">
                Log in
              </a>
            </p>
          </div>

          {/* ── Form ── */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full name */}
            <div>
              <input
                id="fullName"
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15E87]/30 focus:border-[#F15E87] transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <input
                id="email"
                type="email"
                placeholder="examplename@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15E87]/30 focus:border-[#F15E87] transition-all duration-200"
              />
            </div>

            {/* Password + toggle Eye */}
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15E87]/30 focus:border-[#F15E87] transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Nút Sign up */}
            <button
              type="submit"
              className="w-full bg-[#F15E87] hover:bg-[#e04d78] active:scale-[0.98] text-white font-semibold py-3 rounded-full shadow-md shadow-pink-200 hover:shadow-lg transition-all duration-300"
            >
              Sign up
            </button>
          </form>

          {/* ── Divider: Or sign up with ── */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400 whitespace-nowrap">Or sign up with</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* ── Social login buttons ── */}
          <div className="flex items-center justify-center gap-4">
            {/* Google */}
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#F15E87] hover:bg-pink-50 transition-all duration-200">
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.6 33.4 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 5.7 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z"/>
                <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.5 15.5 18.8 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 5.7 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.6 13.4-4.4l-6.2-5.2C29.2 36 26.7 36.8 24 36.8c-5.1 0-9.5-3.3-11.1-7.9l-6.5 5C9.5 40.1 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.7 39.4 44 34 44 24c0-1.3-.2-2.7-.4-3.9z"/>
              </svg>
            </button>

            {/* Facebook */}
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#F15E87] hover:bg-pink-50 transition-all duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>

            {/* Apple */}
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#F15E87] hover:bg-pink-50 transition-all duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ============================== */}
      {/* CỘT PHẢI – Graphic hồng       */}
      {/* ============================== */}
      <div className="hidden md:flex w-1/2 bg-[#F15E87] items-center justify-center relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-16 left-10 w-40 h-40 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/10 rounded-full"></div>

        {/* Illustration placeholder – thay src bằng ảnh thật */}
        <div className="text-center z-10 px-10">
          <img
            src="/img/Image 93.png"
            alt="Cooking illustration"
            className="w-80 h-80 object-cover rounded-3xl shadow-2xl shadow-black/20 mx-auto"
          />
          <h2 className="text-white text-2xl font-bold mt-8">Welcome to Chefify</h2>
          <p className="text-white/80 text-sm mt-2 max-w-xs mx-auto">
            Discover easy and delicious cooking instructions right here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
