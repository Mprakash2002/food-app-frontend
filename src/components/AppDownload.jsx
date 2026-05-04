import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='mx-auto mt-15 text-[max(2.5vw,20px)] text-center font-bold' id='app-download'>
      <p>For Better Experience Download <br />Tomato App</p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10">
        <img className='w-[max(30vw,120px)] max-w-45 cursor-pointer transition duration-500 hover:scale-105' src={assets.play_store} alt="" />
        <img className='w-[max(30vw,120px)] max-w-45 cursor-pointer transition duration-500 hover:scale-105' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
