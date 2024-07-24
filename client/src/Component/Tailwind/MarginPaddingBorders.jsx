import React from 'react'

function MarginPaddingBorders() {
  return (
    <>
   
            <div>
                {/* Margin */}
                <h1
                    className='bg-slate-500 m-20'>
                    Margin
                </h1>

                {/* Margin Top */}
                <h1
                    className=' bg-yellow-300 mt-20'>
                    Margin Top
                </h1>

                {/* Margin Bottom */}
                <h1
                    className='bg-orange-600 mb-20'>
                    Margin Bottom
                </h1>

                {/* Margin Left */}
                <h1
                    className='bg-red-400 ml-20'>
                    Margin Left
                </h1>

                {/* Margin Right */}
                <h1
                    className='bg-yellow-400 mr-20'>
                    Margin Right
                </h1>
            </div>


            {/* Add horizontal and vertical margin */}
            <div>
                {/* Horizontal margin */}
                <h1 className='mx-20'>
                    Horizontal margin [mx-20]
                </h1>

                {/* Vertical margin */}
                <h1 className='my-20'>
                    Vertical margin [my-20]
                </h1>
            </div>


            {/* Using negative values */}

            <div>
                {/* Horizontal margin */}
                <h1 className='-mx-14 text-2xl'>
                    Horizontal margin [mx-20]
                </h1>
                {/* Vertical margin */}
                <h1 className='-my-5 text-2xl mb-20'>
                    Vertical margin [my-20]
                </h1>
            </div>


            {/* Padding */}
            <div>
                {/* Padding */}
                <h1
                    className='bg-yellow-400 p-20'>
                    Padding
                </h1>

                {/* Padding Top */}
                <h1
                    className='pt-20 bg-green-400'>
                    Padding Top
                </h1>

                {/* Padding Bottom */}
                <h1
                    className='pb-20 bg-blue-700'>
                    Padding Bottom
                </h1>

                {/* Padding Left */}
                <h1
                    className='pl-20 bg-sky-800'>
                    Padding Left
                </h1>

                {/* Padding Right */}
                <h1
                    className=' pr-20 bg-teal-800'>
                    Padding Right
                </h1>
            </div>



            {/* Add horizontal and vertical padding */}

            <div>
                {/* Horizontal padding */}
                <h1 className='px-20'>
                    Horizontal padding [px-20]
                </h1>

                {/* Vertical padding */}
                <h1 className='py-20'>
                    Vertical padding [py-20]
                </h1>
            </div>


            {/* Border */}

            <div>
                {/* Border */}
                <div className='border-8 w-80 h-80 border-lime-300'>
                    <h1>hello</h1>
                </div>
                <div>
                    <div className='bg-black text-white w-3 h-20 m-5 text-center border-2'>
                        Border
                    </div>
                </div>

                {/* Border Top */}
                <div>
                    <div className=' bg-black  text-white w-20 h-20 m-5 text-center border-t-2'>
                        Border Top
                    </div>
                </div>

                {/* Border Bottom */}
                <div>
                    <div className=' bg-black  text-white w-20 h-20 m-5 text-center border-b-2'>
                        Border Bottom
                    </div>
                </div>

                {/* Border Left */}
                <div>
                    <div className=' bg-black  text-white w-20 h-20 m-5 text-center border-l-2'>
                        Border Left
                    </div>
                </div>

                {/* Border Right */}
                <div>
                    <div className=' bg-black  text-white w-20 h-20 m-5 text-center border-r-2'>
                        Border Right
                    </div>
                </div>

                {/* Border Radius */}
                <div>
                    <div className=' bg-black  text-white w-20 h-20 m-5 text-center border-2 rounded-lg'>
                        Border Radius
                    </div>
                </div>

                {/* Border Style And Color */}
                <div className="flex">
                    {/* border-solid */}
                    <div>
                        <div className=' bg-black w-20 h-20 m-5 text-center border-2 border-red-500 border-solid'>
                            Border Solid
                        </div>
                    </div>

                    {/* border-dotted */}
                    <div>
                        <div className=' bg-black w-20 h-20 m-5 text-center border-2 border-red-500 border-dotted'>
                            Border Dotted
                        </div>
                    </div>

                    {/* border-dashed */}
                    <div>
                        <div className=' bg-black w-20 h-20 m-5 text-center border-2 border-red-500 border-dashed'>
                            Border Dashed
                        </div>
                    </div>

                    {/* border-double */}
                    <div>
                        <div className=' bg-black w-20 h-20 m-5 text-center border-2 border-red-500 border-double'>
                            Border Double
                        </div>
                    </div>
                </div>
            </div>


     
    </>
  )
}

export default MarginPaddingBorders