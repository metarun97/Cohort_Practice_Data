import React, { useEffect, useState } from 'react';

const Api = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '0567c70b21126eb12b5cc516bb7e2750';

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const fetchWeather = async (e) => {
    e?.preventDefault();

    try {
      /* If city not provided */
      if (!city) return;

      const res = await fetch(URL);

      /* If URL failed in fetching */
      if (!res.ok) {
        throw new Error('City not found');
      }
      /* If URL fetched data successfully */
      const data = await res.json();
      setWeather(data);
      setCity('');
    } catch (err) {
      setError(err.message);
    }
  };

  /* UseEffect hook */
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-sky-400-600 to-sky-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Search Form */}
        <form onSubmit={fetchWeather} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter city name..."
            className="flex-1 px-4 py-3 rounded-xl bg-white text-gray-800 outline-none focus:ring-2 focus:ring-white"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <button
            type="submit"
            className="px-5 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
          >
            Search
          </button>
        </form>

        {/* Weather Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl text-white">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">New Delhi</h2>
              <p className="text-sm text-gray-300">Thursday, 18 June</p>
            </div>

            <img
              src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
              alt="Weather Icon"
              className="w-16 h-16"
            />
          </div>

          {/* Temperature */}
          <div className="mt-6">
            <h1 className="text-6xl font-bold">32°</h1>
            <p className="text-lg text-gray-300">Partly Cloudy</p>
          </div>

          {/* Extra Details */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-sm text-gray-300">Humidity</p>
              <p className="font-semibold">65%</p>
            </div>

            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-sm text-gray-300">Wind</p>
              <p className="font-semibold">12 km/h</p>
            </div>

            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-sm text-gray-300">Feels Like</p>
              <p className="font-semibold">35°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;
