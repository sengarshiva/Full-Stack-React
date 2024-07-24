import React from 'react'

function ResponsiveDesign() {
    return (
        <>
            {/* sm	640px	@media (min-width: 640px)
            md	768px	@media (min-width: 768px)
            lg	1024px	@media (min-width: 1024px)
            xl	1280px	@media (min-width: 1280px)
            2xl	1536px	@media (min-width: 1536px) */}

            <div className='w-full h-40 bg-black sm:bg-yellow-500 md:bg-green-700 lg:bg-blue-600'>
                Hello
            </div>
        </>
    )
}

export default ResponsiveDesign