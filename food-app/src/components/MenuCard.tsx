import React from 'react'
import Image from 'next/image';
 interface propTypes{
    img:string;
    title:string;
    desc:string;
    price:string;
 }


const MenuCard:React.FC<propTypes> = ({img,title,desc,price}) => {
  return (
    <div className='flex gap-2'>
        <Image
        className="w-[80px] h-[80px]"
        src={img}
        width={80}
        height={80}
        alt="dish"
        
        />
        <div className="space-y-2">
            <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            </div>
            <p>{price}</p>
           
        </div>
    </div>
  )
}

export default MenuCard