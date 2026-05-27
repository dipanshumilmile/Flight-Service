import { useState } from "react";
import { getFlightsByPrice } from "../services/api";

export default function SearchByPrice() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [flights, setFlights] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await getFlightsByPrice(min, max);
      setFlights(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] px-4">
      
      {/* White Glass Box */}
      <div className="bg-white/85 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-4xl">

        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Search Flights by Price
        </h1>

        {/* Search Inputs */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          
          <input
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Min Price"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />

          <input
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Max Price"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Search
          </button>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {flights.map((f) => (
            <div
              key={f.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {f.code}
              </h2>

              <p className="text-lg text-gray-700 mt-2">
                {f.source} → {f.destination}
              </p>

              <p className="text-xl font-semibold text-green-600 mt-2">
                ₹{f.cost}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}