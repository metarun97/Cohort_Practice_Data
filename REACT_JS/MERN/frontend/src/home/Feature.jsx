import { FiShield, FiRotateCcw, FiTruck, FiHeadphones } from "react-icons/fi";

const Feature = () => {
  const features = [
    {
      icon: FiShield,
      title: "Secure Payment",
      description: "100% secure payment with encrypted transactions and trusted gateways.",
    },
    {
      icon: FiRotateCcw,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days, no questions asked.",
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping right to your doorstep.",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Support",
      description: "Our support team is here to help you anytime, anywhere.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center sm:items-start sm:text-left p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-full mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
