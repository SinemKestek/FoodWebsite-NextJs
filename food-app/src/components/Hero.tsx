import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

type Props = {}

const Hero = () => {
  return (
    <div className='relative min-h-screen'>
      <Image src="/hero2.png" width={1000}  alt='banner'
      height={600} 
      className='lg:w-[580px] xl:w-[620px] absolute right-0 top-0 -z-10'></Image>

        <Navbar/>

      <div className="container h-[calc(100vh-120px)] grid items-center">
      <div className="space-y-4 bg-[#ffff] w-fit p-4">
        <p className='uppercase font-medium'>Wide Options of choice</p>
        <h2 className='text-4xl sm:text-6xl font-bold'>Delisicous <span className='text-accent'>Food</span> </h2> 
        <p className='text-gray-700 text-[14px] sm:text-[16px]'>Delisicous  food ,aroma and taste.. <br />
        What are you waiting?</p>
       <button className='bg-accent text-white rounded-3xl px-6 py-3'>View More</button>

      </div>

      </div>



    </div>
  )
}

export default Hero