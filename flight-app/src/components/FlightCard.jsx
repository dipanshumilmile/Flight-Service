function FlightCard({ flight }) {
  return (
    <div className='bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition'>

      <h2 className='text-2xl font-bold text-blue-700'>
        {flight.code}
      </h2>

      <p className='mt-2 text-gray-700'>
        Carrier: {flight.carrier}
      </p>

      <p className='text-gray-700'>
        Route: {flight.source} → {flight.destination}
      </p>

      <p className='text-green-600 font-bold mt-3'>
        ₹ {flight.cost}
      </p>
          </div>
  )
}

export default FlightCard