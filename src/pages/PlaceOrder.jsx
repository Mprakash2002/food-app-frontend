import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { storeContext } from '../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {

  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(storeContext)

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const  onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data, [name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault()
    let orderItems = []
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 49
    }
    let response = await axios.post(url + "/api/order/place", orderData, {headers:{token}})
    if (response.data.success) {
      const {session_url} = response.data
      window.location.replace(session_url)
    }
    else{
      alert("Something went wrong")
    }
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/cart")
    }
    else if(getTotalCartAmount() === 0){
      navigate("/cart")
    }
  }, [token])

  return (
    <form onSubmit={placeOrder} className='app flex items-start justify-between gap-12.5'>
      <div className="mt-25 w-full max-w-[max(30%,500px)]">
        <p className="text-[30px] font-bold mb-12.5">Delivery Information</p>
        <div className="flex gap-2.5">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[tomato]' type="text" placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[tomato]' type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[tomato]' type="email" placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[tomato]' type="text" placeholder='Street' />
        <div className="flex gap-2.5">
          <input required name='city' onChange={onChangeHandler} value={data.city} className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[tomato]' type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[tomato]' type="text" placeholder='State' />
        </div>
        <div className="flex gap-2.5">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[tomato]' type="text" placeholder='Zip code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[tomato]' type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[tomato]' type="text" placeholder='Phone' />
      </div>
      <div className="mt-25 w-full max-w-[max(40%,500px)]">
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className='text-[20px] font-bold text-black/80'>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className='my-2.5' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 49}</p>
            </div>
            <hr className='my-2.5' />
            <div className='flex justify-between'>
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 49}</b>
            </div>
          </div>
          <button type='submit' className='w-full rounded-xl bg-[#ff6b57] py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#ff513d] hover:shadow-[0_10px_30px_rgba(255,107,87,0.32)] disabled:bg-[#f3f4f6] disabled:text-[#9ca3af] disabled:shadow-none'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
