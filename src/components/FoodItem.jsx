import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { storeContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(storeContext)

  return (
    <div className='w-full m-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] transition duration-300 fade-in'>
      <div className='relative'>
        <img src={url+"/images/"+image} alt="" className='w-full rounded-t-[15px]' />
        {!cartItems[id]
          ? <img className='w-8.75 absolute bottom-3.75 right-3.75 cursor-pointer rounded-full' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className='absolute bottom-3.75 right-3.75 flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white'>
            <img className='w-7.5' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div> 
        }
      </div>
      <div className='p-5'>
        <div className='flex justify-between items-center mb-2.5'>
          <p className='text-[18px] font-bold'>{name}</p>
          <img src={assets.rating_starts} alt="" className='w-17.5' />
        </div>
        <p className='text-[#676767] text-[14px]'>{description}</p>
        <p className='text-[tomato] text-[22px] font-bold my-2.5'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
