import React from 'react'

function FontSize() {
    return (
        <>


            <h1 className='font-sans'>Hello Gwalior</h1>
            <h1 className='font-serif'>Hello Gwalior</h1>

            {/* font size */}
            <div className="">
                <h1 className='text-xs'>
                    xs
                </h1>
                <h1 className='text-sm'>
                    sm
                </h1>
                <h1 className='text-base'>
                    base
                </h1>
                <h1 className='text-lg'>
                    lg
                </h1>
                <h1 className='text-xl'>
                    xl
                </h1>
                <h1 className='text-2xl'>
                    2xl
                </h1>
                <h1 className='text-3xl'>
                    3xl
                </h1>
                <h1 className='text-4xl'>
                    4xl
                </h1>
                <h1 className='text-5xl'>
                    5xl
                </h1>
                <h1 className='text-6xl'>
                    6xl
                </h1>
                <h1 className='text-7xl'>
                    7xl
                </h1>
                <h1 className='text-8xl'>
                    8xl
                </h1>
                <h1 className='text-9xl'>
                    9xl
                </h1>
            </div>


            {/* Font Style */}
            <div>
                <h1 className='italic'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, id.
                </h1>
                <h1 className='not-italic'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, illo?
                </h1>
            </div>


            {/* Font Weight : Controlling the font weight of an element. */}
            <div className="">
                <h1 className='font-thin'>
                    thin
                </h1>
                <h1 className='font-extralight'>
                    extralight
                </h1>
                <h1 className='font-light'>
                    light
                </h1>
                <h1 className='font-normal'>
                    normal
                </h1>
                <h1 className='font-medium'>
                    medium
                </h1>
                <h1 className='font-semibold'>
                    semibold
                </h1>
                <h1 className='font-bold'>
                    bold
                </h1>
                <h1 className='font-extrabold'>
                    extrabold
                </h1>
                <h1 className='font-black'>
                    black
                </h1>
            </div>


            {/* Text-Align: controlling the alignment of text. */}
            <div className="">
                {/* text-left */}
                <p className='text-left bg-red-400 mb-2 w-80 h-20'>
                    LEFT
                </p>
                {/* text-center */}
                <p className='text-center bg-blue-800 mb-2 w-80 h-20'>
                    CENTER
                </p>
                {/* text-right */}
                <p className='text-right text-white bg-black mb-2 w-80 h-20'>
                    RIGHT
                </p>
                {/* text-justify */}
                <p className='text-justify bg-green-800 mb-2 w-80 h-20'>
                    JUSTIFY Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    In commodi nostrum maxime optio tempore quod.
                </p>
                {/* text-start */}
                <p className='text-start bg-emerald-300 mb-2 w-full h-20'>
                    START
                </p>
                {/* text-end */}
                <p className='text-end bg-violet-600 mb-2 w-1/2 h-20'>
                    END
                </p>
            </div>


        </>
    )
}

export default FontSize