import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='app flex flex-col gap-6 py-30' id='explore-menu'>
      <div className='flex flex-col gap-3'>
        <span className='w-fit rounded-full border border-black/5 bg-black/3 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#6b7280]'>
          Curated Selection
        </span>

        <h1 className='mt-2 text-[clamp(2rem,3vw,3.25rem)] font-semibold tracking-[-0.04em] text-[#111827]'>
          Explore our menu
        </h1>

        <p className='max-w-180 text-[15px] leading-7 text-[#6b7280] max-[1050px]:max-w-full max-[1050px]:text-[14px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste necessitatibus dolore deserunt eaque in minus praesentium aut laborum excepturi.
        </p>
      </div>

      <div
        className="flex gap-5 overflow-x-auto py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        id='explore-menu'
      >
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
            key={index}
            className="group min-w-32.5 shrink-0 cursor-pointer text-center"
          >
            <div className={`rounded-[28px] border p-3 transition-all duration-300 ${
              category === item.menu_name
                ? "border-[#ff6b57]/30 bg-[#fff7f5] shadow-[0_12px_30px_rgba(255,107,87,0.12)]"
                : "border-black/5 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
            }`}>
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`mx-auto aspect-square w-[7.2vw] min-w-20.5 rounded-full object-cover transition-all duration-300 ${
                  category === item.menu_name
                    ? "ring-4 ring-[#ff6b57] ring-offset-4 ring-offset-[#fff7f5]"
                    : "group-hover:scale-[1.04]"
                }`}
              />

              <p className={`mt-4 text-[14px] font-medium capitalize transition-colors duration-300 ${
                category === item.menu_name ? "text-[#111827]" : "text-[#6b7280] group-hover:text-[#111827]"
              }`}>
                {item.menu_name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className='mt-2 h-px border-0 bg-linear-to-r from-transparent via-black/10 to-transparent' />
    </div>
  )
}

export default ExploreMenu