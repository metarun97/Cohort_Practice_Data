function App() {

 const pets = [
  {
    id: 1,
    name: "Golden Retriever",
    description: "Friendly and intelligent dog, great for families.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d"
  },
  {
    id: 2,
    name: "Persian Cat",
    description: "Calm and affectionate cat with long fluffy fur.",
    price: 12000,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
  },
  {
    id: 3,
    name: "Parrot",
    description: "Colorful and talkative bird, very playful.",
    price: 3000,
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d"
  },
  {
    id: 4,
    name: "Rabbit",
    description: "Small, cute and gentle pet, easy to maintain.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308"
  },
  {
    id: 5,
    name: "German Shepherd",
    description: "Loyal and protective dog, good for security.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16"
  }
];
  return (
    <>
      {pets.map((pet,idx) => {
        return <div key={idx} class="card">

          <img
            src={pet.image}
            alt="Golden Retriever"
            class="image"
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{pet.name}</h2>

            <p className="text-gray-600 text-sm mb-3">
              {pet.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">₹{pet.price}</span>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      })}
    </>
  );
}

export default App;
