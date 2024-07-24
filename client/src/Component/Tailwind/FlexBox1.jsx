import React from 'react'

function FlexBox1() {
    return (
        <>
            {/* <nav className='flex justify-between items-center bg-blue-700 h-[60px] px-10 '>
                <div className='logo'>
                    <img src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg" alt="" />

                </div>
                <div className='menu'>
                    <ul className='flex space-x-3 text-white font-bold uppercase '>
                        <li>Home</li>
                        <li>About</li>
                        <li>About</li>
                        <li>About</li>
                        <li>About</li>
                        <li>About</li>

                    </ul>

                </div>

            </nav> */}

<div className="flex justify-between items-center px-2 py-3 bg-blue-800">

{/* left  */}
<div className="left">
    {/* Logo  */}
    <div className="">
        <h2 className='font-bold text-2xl text-white'>PNINFOSYS</h2>
    </div>
</div>

{/* mid  */}
<div className="mid">
    <ul className='flex space-x-10 font-bold text-white cursor-pointer'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
    </ul>
</div>

{/* right  */}
<div className="right">
    {/* Input  */}
    <input
        type="text"
        placeholder='Search here...'
        className=' bg-gray-100 py-2.5 px-2 w-72 outline-none rounded-l-lg'
    />
    {/* Button  */}
    <button
        className=' bg-gray-300 py-2.5 px-5 rounded-r-lg'>
        Search
    </button>

</div>
</div>


        </>
    )
}

export default FlexBox1