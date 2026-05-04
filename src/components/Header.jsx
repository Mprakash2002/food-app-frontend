import React from 'react'

const Header = () => {
  return (
    <div className="app relative top-10 my-8 mx-auto h-[38vw] min-h-105 max-h-190 overflow-hidden rounded-4xl border border-white/10 bg-[url('/header_img.png')] bg-cover bg-center bg-no-repeat shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      
      <div className="absolute inset-0 bg-black/35" />
      
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,12,0.88)_0%,rgba(8,8,12,0.62)_34%,rgba(8,8,12,0.18)_62%,rgba(8,8,12,0.05)_100%)]" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_32%)]" />

      <div className="absolute top-5 left-5 z-10 fade-in flex max-w-[46%] flex-col items-start gap-5 rounded-[28px] border border-white/15 bg-white/8 px-8 py-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.22)] max-[1050px]:max-w-[55%] max-[750px]:left-[5%] max-[750px]:right-[5%] max-[750px]:max-w-full max-[750px]:px-5 max-[750px]:py-6">
        
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/80">
          Premium Dining Experience
        </span>

        <h2 className="max-w-[12ch] text-[clamp(2rem,4.8vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
          Order your favorite food here
        </h2>

        <p className="max-w-[60ch] text-[clamp(0.95rem,1.08vw,1.08rem)] leading-7 text-white/78 max-[750px]:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt ea illo rerum soluta libero, nostrum ad sint. Nesciunt, itaque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit nihil facere similique eum quibusdam.
        </p>

        <button className="group mt-2 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white px-6 py-3 text-[max(0.95vw,14px)] font-semibold text-zinc-900 shadow-[0_10px_30px_rgba(255,255,255,0.18)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#f5f1e8] hover:shadow-[0_14px_40px_rgba(255,255,255,0.24)] max-[750px]:px-5 max-[750px]:py-3">
          View Menu
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  )
}

export default Header