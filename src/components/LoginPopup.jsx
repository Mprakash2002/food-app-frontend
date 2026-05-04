import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { storeContext } from '../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {

  const {url, setToken} = useContext(storeContext)

  const [currentState, setCurrentState] = useState("Login")
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onchangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data, [name]:value}))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url
    if (currentState === "Login") {
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data)
    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <div className='absolute w-full h-full z-1000 bg-[#00000090] grid'>
      <form onSubmit={onLogin} className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6.25 py-6.25 px-7.5 rounded-lg text-[14px] fade-in">
        <div className='flex justify-between items-center text-black font-bold text-[20px]'>
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='w-4 cursor-pointer' />
        </div>
        <div className='flex flex-col gap-5'>
          {currentState === "Login" ? <></> : <input name='name' onChange={onchangeHandler} value={data.name} className="outline-none border border-[#c9c9c9] p-2.5 rounded" type="text" placeholder='Your name' required />}
          <input name='email' onChange={onchangeHandler} value={data.email} className="outline-none border border-[#c9c9c9] p-2.5 rounded" type="email" placeholder='Your email' required />
          <input name='password' onChange={onchangeHandler} value={data.password} className="outline-none border border-[#c9c9c9] p-2.5 rounded" type="password" placeholder='Your password' required />
        </div>
        <button type='submit' className='border-0 p-2.5 rounded-sm bg-[tomato] text-white text-[15px] cursor-pointer'>{currentState === "Sign up" ? "Create account" : "Login"}</button>
        <div className='flex items-start gap-2 -mt-3.75'>
          <input className='mt-1.25' type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? <p>Create a new account? <span className='text-[tomato] font-medium cursor-pointer' onClick={()=>setCurrentState("Sign up")}>Click here</span></p> : <p>Already have an account? <span className='text-[tomato] font-medium cursor-pointer' onClick={()=>setCurrentState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
