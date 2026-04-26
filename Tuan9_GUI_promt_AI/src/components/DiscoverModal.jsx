import { X } from 'lucide-react'

function DiscoverModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F15E87] mb-3">
            Discover Chefify
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 mb-6 max-w-sm">
            Easy and delicious cooking instructions right here. Start exploring now!
          </p>

          {/* Image */}
          <div className="w-full rounded-xl overflow-hidden mb-6">
            <img
              src="/img/Image 93.png"
              alt="Delicious food dishes"
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F15E87]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
          </div>

          {/* Next Button */}
          <button
            onClick={onClose}
            className="w-3/4 bg-[#F15E87] hover:bg-[#e04d78] text-white font-semibold py-3 rounded-full shadow-md shadow-pink-200 hover:shadow-lg transition-all duration-300 mb-3"
          >
            Next
          </button>

          {/* Skip Link */}
          <button
            onClick={onClose}
            className="text-[#F15E87] text-sm font-medium hover:underline cursor-pointer transition-colors duration-200"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiscoverModal
