import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-blue-100 text-blue-600 text-xs sm:text-sm font-semibold px-3 py-1 rounded-md mb-4">
              New Season Arrivals
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
              Discover Style That
              <span className="block text-blue-600">Fits Your Life</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
              Shop the latest collection of premium products curated just for
              you. Quality, comfort, and style — all in one place.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                <ShoppingBag className="w-4 h-4" />
                Shop Now
              </button>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-800 font-medium px-6 py-3 rounded-md border border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 sm:gap-10">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  10K+
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>
              <div className="h-10 w-px bg-gray-300" />
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  500+
                </p>
                <p className="text-xs sm:text-sm text-gray-500">Products</p>
              </div>
              <div className="h-10 w-px bg-gray-300" />
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  4.9★
                </p>
                <p className="text-xs sm:text-sm text-gray-500">Avg Rating</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 bg-blue-200 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 bg-purple-200 rounded-full blur-2xl opacity-60" />
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Featured product"
                className="relative z-10 w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
