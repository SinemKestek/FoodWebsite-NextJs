import React from 'react'
import Image from 'next/image'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='container pt-6'>
  <div className="flex justify-between items-center">
    <Image src="/logo.png" width={50} height={50} alt='logo'></Image>
    <ul className='md:flex hidden gap-8 items-cente font-semibold text-[14px]'>
       <li>Home</li>
       <li>About</li>
       <li>Footer</li>
       <li>Dish</li>
       <li>Contact</li>

       <button className='bg-accent text-white px-6 py-2 rounded-3xl'>Sign Up</button>

    </ul>

    <MdOutlineRestaurantMenu size={30} className="md:hidden text-accent"/>




  </div>

    </div>
  )
}

export default Navbar