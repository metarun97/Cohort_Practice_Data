import React from 'react'

function Card({ name, btntext = "visit me" }) {

  // console.log("props", props);

  return (
    <div className="flex flex-col md:flex-row max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200">
      {/* Left Side - Image */}
      <div className="md:w-2/5">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
          alt="Team working on computers"
          className="h-56 w-full object-cover md:h-full"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col items-start justify-center p-6 md:w-3/5">
        <span className="mb-3 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {name}
        </span>

        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          Build Something Amazing
        </h2>

        <p className="mb-5 leading-relaxed text-gray-600">
          Explore new technologies, improve your skills, and turn your
          creative ideas into real-world projects with modern web
          development.
        </p>

        <button
          type="button"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95"
        >
          {btntext}
        </button>
      </div>
    </div>
  )
}

export default Card
