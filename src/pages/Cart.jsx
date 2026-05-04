import React, { useContext } from 'react'
import { storeContext } from '../context/StoreContext'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(storeContext)

  const navigate = useNavigate()

  return (
    <div className='app relative top-10'>
      <div className='rounded-2xl border border-black/10 bg-white/90 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)]'>
        {/* Header */}
        <div className='grid grid-cols-6 items-center gap-x-4 text-[#6b7280] text-[14px] font-medium'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <div className='my-4 h-px bg-gradient-to-r from-transparent via-[#e2e2e2] to-transparent' />

        {/* Cart rows */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className='grid grid-cols-6 gap-x-4 rounded-lg bg-white/80 p-3.5 text-[14px] text-[#111827] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]'>
                  <img
                    className='w-12 rounded-lg border border-black/5 object-cover'
                    src={url + '/images/' + item.image}
                    alt={item.name}
                  />

                  <p className='truncate'>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p className='font-medium text-[#374151]'>
                    {cartItems[item._id]}
                  </p>
                  <p className='font-semibold text-[#111827]'>
                    ₹{item.price * cartItems[item._id]}
                  </p>

                  <div className='flex items-center justify-center'>
                    <MdRemoveShoppingCart
                      onClick={() => removeFromCart(item._id)}
                      className='h-4.5 w-4.5 cursor-pointer text-[#9ca3af] transition-colors duration-300 hover:text-[#ff6b57]'
                    />
                  </div>
                </div>

                <div className='my-3 h-px bg-gradient-to-r from-transparent via-[#e2e2e2] to-transparent' />
              </React.Fragment>
            )
          }
          return null
        })}

        {getTotalCartAmount() === 0 && (
          <div className='flex flex-col items-center gap-4 py-12 text-center text-[#6b7280]'>
            <MdRemoveShoppingCart className='h-14 w-14 opacity-40' />
            <p className='text-[16px] font-medium'>Your cart is empty</p>
            <p className='text-[14px]'>Add some delicious dishes to continue.</p>
          </div>
        )}
      </div>

      <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
        {/* Cart totals */}
        <div className='flex flex-col gap-5 rounded-2xl border border-black/10 bg-white/90 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)]'>
          <h2 className='text-[18px] font-semibold text-[#111827]'>
            Cart Totals
          </h2>

          <div className='space-y-3'>
            <div className='flex justify-between text-[14px] text-[#555]'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>

            <div className='flex justify-between text-[14px] text-[#555]'>
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 49}</p>
            </div>

            <div className='my-2.5 h-px bg-gradient-to-r from-transparent via-[#e2e2e2] to-transparent' />

            <div className='flex justify-between text-[15px] font-semibold text-[#111827]'>
              <p>Total</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 49}</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/order')}
            disabled={getTotalCartAmount() === 0}
            className='w-full rounded-xl bg-[#ff6b57] py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#ff513d] hover:shadow-[0_10px_30px_rgba(255,107,87,0.32)] disabled:bg-[#f3f4f6] disabled:text-[#9ca3af] disabled:shadow-none'
          >
            {getTotalCartAmount() === 0
              ? 'Your cart is empty'
              : 'PROCEED TO CHECKOUT'}
          </button>
        </div>

        {/* Promo code */}
        <div className='flex flex-col gap-5 rounded-2xl border border-black/10 bg-white/90 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)]'>
          <h3 className='text-[16px] font-semibold text-[#111827]'>
            Have a promo code?
          </h3>

          <p className='text-[14px] text-[#6b7280]'>
            If you have a promo code, enter it here.
          </p>

          <div className='flex gap-2.5 rounded-xl border border-black/10 bg-white p-1 transition-all duration-300 focus-within:border-[#ff6b57] focus-within:shadow-[0_8px_24px_rgba(255,107,87,0.12)]'>
            <input
              className='flex-1 rounded-lg bg-transparent px-3 py-2.5 text-[14px] outline-none placeholder:text-[#9ca3af]'
              type='text'
              placeholder='Promo code'
            />
            <button
              className='shrink-0 rounded-xl bg-[#111827] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#1f2937]'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart