import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer
      className='text-[#d9d9d9] bg-[#323232] border-t border-white/10 pt-16 pb-8 mt-20'
      id='footer'
    >
      <div className='app pb-5 grid grid-cols-1 gap-10 md:grid-cols-[2.2fr_1fr_1fr] w-full max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-8'>
        
        {/* Brand & Social */}
        <div className='flex flex-col gap-5'>
          <img
            src={assets.logo}
            alt="Tomato Food Delivery"
            className='w-36 object-contain'
          />

          <p className='text-[15px] leading-7 text-[#d1d5db] max-w-[420px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            asperiores eos quidem soluta suscipit nostrum tempora consequuntur
            aut accusamus dolore.
          </p>

          <div className='flex gap-4'>
            <img
              className='w-10 opacity-70 transition-opacity duration-300 hover:opacity-100'
              src={assets.facebook_icon}
              alt="Facebook"
            />
            <img
              className='w-10 opacity-70 transition-opacity duration-300 hover:opacity-100'
              src={assets.twitter_icon}
              alt="Twitter / X"
            />
            <img
              className='w-10 opacity-70 transition-opacity duration-300 hover:opacity-100'
              src={assets.linkedin_icon}
              alt="LinkedIn"
            />
          </div>
        </div>

        {/* Company Links */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-[16px] font-bold text-[#f9fafb] tracking-[0.1em] uppercase'>
            Company
          </h2>

          <ul className='space-y-3 text-[14px] text-[#d1d5db]'>
            <li className='cursor-pointer transition-colors duration-300 hover:text-white'>
              <a href="/">Home</a>
            </li>
            <li className='cursor-pointer transition-colors duration-300 hover:text-white'>
              About us
            </li>
            <li className='cursor-pointer transition-colors duration-300 hover:text-white'>
              Delivery
            </li>
            <li className='cursor-pointer transition-colors duration-300 hover:text-white'>
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-[16px] font-bold text-[#f9fafb] tracking-[0.1em] uppercase'>
            Get in touch
          </h2>

          <ul className='space-y-3 text-[14px] text-[#d1d5db]'>
            <li className='transition-colors duration-300 hover:text-white'>
              +91 9876543210
            </li>
            <li className='transition-colors duration-300 hover:text-white'>
              contact@tomato.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className='app my-8 h-px border-0 bg-gradient-to-r from-transparent via-white/15 to-transparent' />

      {/* Copyright */}
      <p className='pt-5 text-[13px] text-[#9ca3af] text-center max-[750px]:text-[12px]'>
        Copyright 2026 © Tomato.com - All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer