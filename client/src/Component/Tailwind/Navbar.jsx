import React from 'react'

const navlist  = (
    
        <ul className='flex gap-7 text-white font-bold font-serif text-[19px] uppercase '>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
     
)

function Navbar() {
  return (
    <>
   <nav className='lg:                                                                                                                                                                                   
   
   flex justify-between bg-slate-700 px-3 py-1 items-center' >
        <div className='logo'>
          <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" className='w-[65px]' />

          {/* mobile icon */}
          <button className='lg:hidden md:hidden sm:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

        </div>
        {/* logo div end */}
        <div className='menu hidden sm:block'>
          {navlist}

        </div>
        {/* menu dev end */}

      </nav>

    </>
  )
}

export default Navbar