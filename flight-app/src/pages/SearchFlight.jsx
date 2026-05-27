import { useState } from 'react'
import API from '../services/api'
import FlightCard from '../components/FlightCard'

function SearchFlight() {

  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')
  const [flights, setFlights] = useState([])

  const searchFlights = async () => {

    try {
      const response = await API.get(
        `/route/${source}/${destination}`
      )

      setFlights(response.data)

    } catch (error) {
      console.log(error)
      alert('No Flights Found')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-[85vh] px-4'>

     
      <div className='bg-white/85 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-6xl'>

        <h1 className='text-4xl font-bold text-center text-blue-700 mb-8'>
          Search Flights
        </h1>

     
        <div className='flex flex-col md:flex-row gap-4 justify-center mb-10'>

          <input
            type='text'
            placeholder='Source'
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className='border border-gray-300 p-3 rounded-lg w-full md:w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          <input
            type='text'
            placeholder='Destination'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className='border border-gray-300 p-3 rounded-lg w-full md:w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          <button
            onClick={searchFlights}
            className='bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition duration-300'
          >
            Search
          </button>
        </div>

        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {
            flights.map((flight) => (
              <div
                key={flight.id}
                className='bg-white rounded-2xl shadow-lg p-5 border border-gray-200 hover:scale-105 transition duration-300'
              >
                <FlightCard flight={flight} />
              </div>
            ))
          }

        </div>

      </div>
    </div>
  )
}

export default SearchFlight