import { Link } from 'react-router-dom'
import { Plane } from 'lucide-react'

function Navbar() {
  return (
    <nav className='bg-black/30 backdrop-blur-md text-white px-8 py-4 shadow-xl border-b border-white/20 sticky top-0 z-50'>

      <div className='flex justify-between items-center max-w-7xl mx-auto'>

        {/* Logo Section */}
        <Link
          to='/'
          className='flex items-center gap-3'
        >
          <div className='bg-blue-600 p-2 rounded-full shadow-lg'>
            <Plane className='w-6 h-6 text-white' />
          </div>

          <h1 className='text-3xl font-extrabold tracking-wide'>
            Flight Service
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className='flex gap-8 text-lg font-medium'>

          <Link
            to='/'
            className='hover:text-yellow-300 transition duration-300'
          >
            Home
          </Link>

          <Link
            to='/add'
            className='hover:text-yellow-300 transition duration-300'
          >
            Add Flight
          </Link>

          <Link
            to='/flights'
            className='hover:text-yellow-300 transition duration-300'
          >
            All Flights
          </Link>

          <Link
            to='/search'
            className='hover:text-yellow-300 transition duration-300'
          >
            Search
          </Link>

          <Link
            to='/search-price'
            className='hover:text-yellow-300 transition duration-300'
          >
            Search by Price
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar