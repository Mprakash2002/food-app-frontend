import React, { useContext } from 'react'
import { storeContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(storeContext)

  return (
    <div className='app'>
      <h2 className='text-[max(2vw,24px)] font-bold mb-4'>Top dishes near you</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-7.5 row-gap-[50px]'>
        this is the end
        {
          food_list.map((item, index) => {
            if (category==="All" || category === item.category) {
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }
          })
        }
      </div>
    </div>
  )
}

export default FoodDisplay
