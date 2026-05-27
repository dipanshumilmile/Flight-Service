import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  return (
    <div
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/passenger-plane-flight-blue-background-vector-illustration-airplane-passenger-plane-flight-blue-background-218517696.jpg')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Flight Management System
        </h1>

        <p className="text-xl mt-6 text-gray-200">
          Manage flights professionally using React + Spring Boot
        </p>

        <button
          onClick={() => navigate("/flights")}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition"
        >
          Explore Flights
        </button>
      </div>
    </div>
  )
}

export default Home