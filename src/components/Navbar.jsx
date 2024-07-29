import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  
    return (
    <div className="flex dark:bg-gray-600 bg-amber-600 p-4 lg:text-lg justify-center gap-4">
        <NavbarItem title="Trnding" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar