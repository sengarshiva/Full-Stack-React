import React from 'react'

function Backgroundcolor() {
  return (
   <>
     <div className="">
                {/* Background Red  */}
                <div className="w-36 h-36 m-4 bg-red-500" />

                {/* Background Green  */}
                <div className="w-36 h-36 m-4 bg-green-500" />

                {/* Background Yellow  */}
                <div className="w-36 h-36 m-4 bg-yellow-500" />

                {/* Background Orange  */}
                <div className="w-36 h-36 m-4 bg-orange-500" />

                {/* Background Blue  */}
                <div className="w-36 h-36 m-4 bg-blue-500" />
            </div>

            {/* bg-repeat	       background-repeat: repeat;
            bg-no-repeat	   background-repeat: no-repeat;
            bg-repeat-x	     background-repeat: repeat-x;
            bg-repeat-y	     background-repeat: repeat-y;
            bg-repeat-round	 background-repeat: round;
            bg-repeat-space	 background-repeat: space; */}

            <div className="">
                {/* Background Repeat */}
                <h1 className='text-2xl'>Background Repeat</h1>

                <div className="w-80 h-80 mb-5"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80)' }}
                />

                {/* Background No Repeat */}
                <h1 className='text-2xl'>Background No Repeat</h1>

                <div className="w-80 h-80 bg-no-repeat"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80)' }}
                />
            </div>

            {/* bg-auto	    background-size: auto;
            bg-cover    background-size: cover;
            bg-contain	background-size: contain; */}

            <div>
                {/* background auto  */}
                <h1 className='text-2xl text-center my-2'>Background Auto</h1>

                <div className="w-full h-48 bg-green-500 border-2 bg-auto bg-no-repeat bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80)' }}>
                </div>

                {/* background Cover  */}
                <h1 className='text-2xl text-center my-2'>Background Cover</h1>

                <div className="w-full h-48 bg-green-500 border-2 bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80)' }}>
                </div>

                {/* background Contain  */}
                <h1 className='text-2xl text-center my-2'>Background Contain</h1>

                <div className="w-full h-48 bg-green-500 border-2 bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80)' }}>
                </div>
            </div>


            {/* bg-none	              background-image: none;
            bg-gradient-to-t	    background-image: linear-gradient(to top, var(--tw-gradient-stops));
            bg-gradient-to-tr	    background-image: linear-gradient(to top right, var(--tw-gradient-stops));
            bg-gradient-to-r	    background-image: linear-gradient(to right, var(--tw-gradient-stops));
            bg-gradient-to-br	    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
            bg-gradient-to-b	    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
            bg-gradient-to-bl	    background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
            bg-gradient-to-l	    background-image: linear-gradient(to left, var(--tw-gradient-stops));
            bg-gradient-to-tl	    background-image: linear-gradient(to top left, var(--tw-gradient-stops)); */}



    <div>
      {/* Background Gradient TOP */}
      <h1 className='text-xl py-2'>Background Gradient TOP</h1>
      <div className="h-14 bg-gradient-to-t from-red-500 to-blue-500" />

      {/* Background Gradient BOTTOM */}
      <h1 className='text-xl py-2'>Background Gradient BOTTOM</h1>
      <div className="h-14 bg-gradient-to-b from-red-500 to-blue-500" />

      {/* Background Gradient LEFT */}
      <h1 className='text-xl py-2'>Background Gradient LEFT</h1>
      <div className="h-14 bg-gradient-to-l from-indigo-500 to-pink-500" />

      {/* Background Gradient RIGHT */}
      <h1 className='text-xl py-2'>Background Gradient RIGHT</h1>
      <div className="h-14 bg-gradient-to-r from-indigo-500 to-pink-500" />

      {/* Background Gradient TOP-LEFT */}
      <h1 className='text-xl py-2'>Background Gradient TOP-LEFT</h1>
      <div className="h-14 bg-gradient-to-tl from-purple-500 to-orange-500" />

      {/* Background Gradient TOP-RIGHT */}
      <h1 className='text-xl py-2'>Background Gradient TOP-RIGHT</h1>
      <div className="h-14 bg-gradient-to-tr from-purple-500 to-orange-500" />

      {/* Background Gradient BOTTOM-LEFT */}
      <h1 className='text-xl py-2'>Background Gradient BOTTOM-LEFT</h1>
      <div className="h-14 bg-gradient-to-bl from-indigo-500 to-pink-500" />
      
      {/* Background Gradient BOTTOM-RIGHT */}
      <h1 className='text-xl py-2'>Background Gradient BOTTOM-RIGHT</h1>
      <div className="h-14 bg-gradient-to-br from-indigo-500 to-pink-500" />
    </div>
   </>
  )
}

export default Backgroundcolor