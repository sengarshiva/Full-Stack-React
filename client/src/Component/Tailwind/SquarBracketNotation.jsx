import React from 'react'

function SquarBracketNotation() {
  return (
    <>
      
    <div>
      {/* margin  */}
      <h1 className='m-[64px] border-[20px] border-blue-900'>
        I'm Margin m-[20px]
      </h1>

      {/* padding  */}
      <h1 className='p-[20px]'>
        I'm Margin p-[20px]
      </h1>

      {/* border  */}
      <h1 className='border-[8px] mb-4'>
        I'm Border m-[20px]
      </h1>

      {/* background */}
      <div className='bg-[red] w-[200px] h-[100px] mb-4'>
        I'm background bg-[red]
      </div>

      {/* background Image */}
      <div className=" bg-[url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80')] w-80 h-80">
        
      </div>
    </div>

        <div>
          <button className="m-4 bg-blue-800 py-2 px-4 text-gray-400
            text-sm rounded-lg border-l-8 border-blue-700">Submit
          </button>
        </div>

        <div>
          <button className="m-4 bg-indigo-200 border-b-4 border-t-4
        border-indigo-800 px-4 py-1">Submit
          </button>
        </div>

        <div>
          <button class="m-4 rounded-full border-4 px-16 py-3
        border-orange-800">Submit
          </button>
        </div>
  
    </>
  )
}

export default SquarBracketNotation