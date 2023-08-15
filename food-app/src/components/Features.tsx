import React from 'react'
import Dash from './Dash'
import Image from 'next/image'



const Features = () => {
  return (
    <div className='container pt-40'>
        <h2 className='text-6xl font-bold'>Our</h2>
        <h3 className='text-6xl font-bold pt-2'>Featured <span className='text-yellow'>Food</span></h3>
    
       <p className='max-w-[550px] pt-10 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dicta tempora sequi, in dolores, eaque aspernatur deleniti eveniet nam, natus esse optio officia eius ipsam?</p>
    <Dash></Dash>
     <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
       <div className="w-fit mx-auto self-end ">
         <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl border-l-4 border-b-4 border-accent" src="/grid_1.png " alt='food_img' 
         width={300} 
         height={600}/>

        <div className="sapace-y-4">
            <Dash/>
            <h2 className='font-medium text-xl'>Shrimp Salad</h2>
            <p className='text-gray-600 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
       </div>

       <div className="w-fit mx-auto self-end">
         <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl border-r-4 border-t-4 border-accent " src="/grid_2.png"  alt='food_img'
         width={500} 
         height={800}/>

        <div className="sapace-y-4">
            <Dash/>
            <h2 className='font-medium text-xl'>Baked Apples</h2>
            <p className='text-gray-600 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
       </div>




       <div className="w-fit mx-auto self-end">
         <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl border-l-4 border-b-4 border-accent " src="/grid_3.png" alt='food_img'
         width={400} 
         height={600}/>

        <div className="sapace-y-4">
            <Dash/>
            <h2 className='font-medium text-xl'>Shrimp Salad</h2>
            <p className='text-gray-600 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
       </div>


     </div>
    </div>
  )
}

export default Features