import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddFlight from './pages/AddFlight'
import AllFlights from './pages/AllFlights'
import SearchFlight from './pages/SearchFlight'
import SearchByPrice from "./pages/SearchByPrice";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/passenger-plane-flight-blue-background-vector-illustration-airplane-passenger-plane-flight-blue-background-218517696.jpg')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10">

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddFlight />} />
          <Route path='/flights' element={<AllFlights />} />
          <Route path='/search' element={<SearchFlight />} />
          <Route path="/search-price" element={<SearchByPrice />} />
        </Routes>

      </div>
    </div>
  )
}

export default App