import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../context/StoreContext'
import axios from 'axios'
import {assets} from '../assets/assets'

const MyOrders = () => {

  const {url, token} = useContext(storeContext)
  const [data, setData] = useState([])

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, {headers:{token}})
    setData(response.data.data)
    
  }

  useEffect(() => {
    if (token) {
      fetchOrders()
    }
  }, [token])


  return (
    <div className='app pt-21 pb-14'>
      <h2 className='text-2xl font-bold'>My Orders</h2>
      <div className="flex flex-col gap-5 mt-7.5">
        {
          data.map((order, index) => {
            return (
              <div 
                key={index} 
                className='grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center text-[14px] px-5 py-2.5 text-[#454545] border border-[tomato] max-[900px]:grid-cols-[1fr_2fr_1fr] max-[900px]:gap-y-1.25 max-[900px]:text-[12px]'
              >
                <img className='w-12.5' src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item, index)=>{
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else{
                    return item.name + " X " + item.quantity + ", "
                  }
                })}</p>
                <p>${order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p><span className='text-[tomato] animate-ping'>&#x25cf;</span> <b className='font-bold text-[#454545]'>{order.status}</b></p>
                <button onClick={fetchOrders} className='border-0 py-3 rounded-sm bg-[#ffe1e1] cursor-pointer text-[#454545] max-[900px]:text-[10px]'>
                  Track Order
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MyOrders