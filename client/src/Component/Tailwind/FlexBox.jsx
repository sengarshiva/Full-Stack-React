import React from 'react'

function FlexBox() {
  return (
   <>
   {/* Main  */}
   <div className="flex justify-between items-center bg-yellow-800 h-[300px]">

<div className=" bg-orange-500 w-40 h-40 m-5">
  Box 1
</div>

{/* Box 2 */}
<div className=" bg-gray-500  w-40 h-40 m-5">
  Box 2
</div>

{/* Box 3 */}
<div className=" bg-green-500  w-40 h-40 m-5">
  Box 3
</div>

{/* Box 4 */}
<div className=" bg-yellow-500  w-40 h-40 m-5">
  Box 4
</div>

{/* Box 5 */}
<div className=" bg-purple-500  w-40 h-40 m-5">
  Box 5
</div>

</div>
   </>
  )
}

export default FlexBox