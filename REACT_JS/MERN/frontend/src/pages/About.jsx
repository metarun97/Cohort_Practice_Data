import { FaBullseye, FaHeart, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "8+" },
    { label: "Happy Customers", value: "10K+" },
    { label: "Products Sold", value: "50K+" },
    { label: "Team Members", value: "30+" },
  ];

  const values = [
    {
      icon: FaBullseye,
      title: "Our Mission",
      description: "To deliver quality products that fit seamlessly into your everyday life, without compromise.",
    },
    {
      icon: FaHeart,
      title: "Our Passion",
      description: "We genuinely care about what we sell and the experience we create for every single customer.",
    },
    {
      icon: FaUsers,
      title: "Our Community",
      description: "Built by people, for people — we listen to our customers and grow together with them.",
    },
    {
      icon: FaAward,
      title: "Our Promise",
      description: "Consistent quality, honest pricing, and support that actually shows up when you need it.",
    },
  ];

  const team = [
    {
      name: "Aarav Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    },
    {
      name: "Priya Verma",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    },
    {
      name: "Rohan Mehta",
      role: "Operations Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            We're on a mission to make
            <span className="block text-blue-600">shopping simple & joyful</span>
          </h1>
          <p className="mt-5 text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            ShopMart started with a simple idea — bring quality products to people
            without the hassle. Today, we're proud to serve thousands of happy customers worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 w-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                alt="Our story"
                className="w-full h-[280px] sm:h-[360px] object-cover rounded-3xl shadow-md"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                It all began in a small garage with a big idea: shopping shouldn't feel
                complicated. What started as a side project quickly grew into a brand
                trusted by thousands of customers across the country.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Today, our team works tirelessly to source the best products, build
                lasting relationships with our customers, and continuously improve
                the way we do business — all while staying true to our roots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              These core values guide everything we do, from product sourcing to customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-full mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Meet the Team
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              The people behind the scenes, working hard to bring you the best experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to explore our products?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-6">
            Browse our latest collection and find something you'll love.
          </p>
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
