import { useState } from 'react'
import API from '../services/api'

function AddFlight() {

  const [flight, setFlight] = useState({
    code: '',
    carrier: '',
    source: '',
    destination: '',
    cost: ''
  })

  const handleChange = (e) => {
    setFlight({
      ...flight,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
         await API.post('/save', flight)

      alert('Flight Added Successfully')

      setFlight({
        code: '',
        carrier: '',
        source: '',
        destination: '',
        cost: ''
      })

    } catch (error) {
      console.log(error)
      alert('Error Adding Flight')
    }
  }


 return (
    <div className='flex justify-center mt-10'>

      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-xl shadow-lg w-[450px]'
      >

        <h2 className='text-3xl font-bold text-center text-blue-700 mb-6'>
          Add Flight
        </h2>

        <input
          type='text'
          name='code'
          placeholder='Flight Code'
          value={flight.code}
          onChange={handleChange}
          className='w-full border p-3 rounded mb-4'
        />

        <input
          type='text'
          name='carrier'
          placeholder='Carrier'
          value={flight.carrier}
          onChange={handleChange}
          className='w-full border p-3 rounded mb-4'
        />

        <input
          type='text'
          name='source'
          placeholder='Source'
          value={flight.source}
          onChange={handleChange}
          className='w-full border p-3 rounded mb-4'
        />

        <input
          type='text'
          name='destination'
          placeholder='Destination'
          value={flight.destination}
          onChange={handleChange}
          className='w-full border p-3 rounded mb-4'
        />
         <input
          type='number'
          name='cost'
          placeholder='Cost'
          value={flight.cost}
          onChange={handleChange}
          className='w-full border p-3 rounded mb-4'
        />

        <button className='bg-blue-700 text-white w-full py-3 rounded hover:bg-blue-800'>
          Add Flight
        </button>
      </form>
    </div>
  )
}

export default AddFlight