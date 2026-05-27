import { useEffect, useState } from 'react'
import API from '../services/api'
import FlightCard from '../components/FlightCard'

function AllFlights() {

  const [flights, setFlights] = useState([])

  useEffect(() => {
    fetchFlights()
  }, [])

  const fetchFlights = async () => {
    try {
      const response = await API.get('/all')
      setFlights(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-10'>

      <h1 className='text-4xl font-bold text-center text-blue-700 mb-10'>
        All Flights
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {
          flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        }

      </div>
    </div>
  )
}

export default AllFlights