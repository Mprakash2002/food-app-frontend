import React, { useContext, useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { storeContext } from '../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("menu")
  const [openProfile, setOpenProfile] = useState(false)

  const { getTotalCartAmount, token, setToken } = useContext(storeContext)

  const navigate = useNavigate()
  const profileRef = useRef()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  // ✅ close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className='app sticky top-4 z-50'>
      <div className='flex items-center justify-between rounded-[24px] border border-black/5 bg-white/75 px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl max-[1050px]:px-5 max-[1050px]:py-3.5 max-[900px]:px-4 max-[900px]:py-3'>
        
        <Link to='/' className='shrink-0'>
          <img
            src={assets.logo}
            alt="Logo"
            className='w-40 object-contain transition duration-300 hover:scale-[1.02] max-[1050px]:w-36 max-[900px]:w-30'
          />
        </Link>

        <ul className='flex list-none items-center gap-2 rounded-full border border-black/5 bg-black/[0.03] p-1 text-[15px] font-medium text-[#4b5563] max-[1050px]:gap-1.5 max-[1050px]:text-[14px] max-[900px]:text-[13px] max-[750px]:hidden'>
          
          <Link to='/' onClick={() => setMenu("home")}
            className={`rounded-full px-4 py-2 transition-all duration-300 ${
              menu==="home" ? "bg-white text-[#111827] shadow" : "hover:bg-white/70"
            }`}
          >home</Link>

          <a href='#explore-menu' onClick={() => setMenu("menu")}
            className={`rounded-full px-4 py-2 ${menu==="menu" ? "bg-white text-[#111827] shadow" : "hover:bg-white/70"}`}
          >menu</a>

          <a href='#app-download' onClick={() => setMenu("mobile-app")}
            className={`rounded-full px-4 py-2 ${menu==="mobile-app" ? "bg-white text-[#111827] shadow" : "hover:bg-white/70"}`}
          >mobile-app</a>

          <a href='#footer' onClick={() => setMenu("contact-us")}
            className={`rounded-full px-4 py-2 ${menu==="contact-us" ? "bg-white text-[#111827] shadow" : "hover:bg-white/70"}`}
          >contact us</a>
        </ul>

        <div className='flex items-center gap-4'>

          {/* Search */}
          <button className='flex h-11 w-11 items-center justify-center rounded-full border bg-white/70 hover:scale-[1.04]'>
            <img src={assets.search_icon} className='w-5' />
          </button>

          {/* Cart */}
          <div className='relative'>
            <Link to='/cart' className='flex h-11 w-11 items-center justify-center rounded-full border bg-white/70 hover:scale-[1.04]'>
              <img src={assets.basket_icon} className='w-5' />
            </Link>
            <div className={`absolute right-0 top-0 h-3 w-3 bg-[#ff6b57] animate-pulse rounded-full ${getTotalCartAmount() ? "" : "hidden"}`} />
          </div>

          {/* Auth */}
          {!token ? (
            <button onClick={() => setShowLogin(true)}
              className='rounded-full bg-[#111827] px-6 py-3 text-white'>
              sign in
            </button>
          ) : (
            <div ref={profileRef} className="relative">

              {/* Profile Icon */}
              <div
                onClick={() => setOpenProfile(prev => !prev)}
                className='flex h-11 w-11 items-center justify-center rounded-full border bg-white cursor-pointer'
              >
                <img src={assets.profile_icon} className='w-[20px]' />
              </div>

              {/* Dropdown */}
              {openProfile && (
                <ul className="absolute right-0 top-[120%] z-20 w-48 flex flex-col gap-2 rounded-[20px] border bg-white p-3 shadow-lg">

                  <li onClick={() => {
                      navigate("/myorders")
                      setOpenProfile(false)
                    }}
                    className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-xl"
                  >
                    <img src={assets.bag_icon} className="w-5" />
                    <p>Orders</p>
                  </li>

                  <hr />

                  <li onClick={logout}
                    className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-red-100 hover:rounded-xl"
                  >
                    <img src={assets.logout_icon} className="w-5" />
                    <p>Logout</p>
                  </li>

                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar