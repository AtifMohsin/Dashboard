import React from 'react'
import checked from "./checked.png"
import inprogress from "./inprogress.png"
import upcomming from "./upcomming.png"
const Stats = () => {
  return (
    <div className='container p-10 bg-gray-50'>
        <div className='flex '>
            
            {/* Creating Card component */}
            <div className='flex flex-col text-center justify-center item-center border bg-white p-16 gap-4 mx-auto'>

            <img src={checked} className='h-10 w-10 mx-auto ' />
            <h1 className='font-bold text-4xl text-black'> 200</h1>
            <p className='text-xl'>Completed Projects</p>


            </div>

            {/* Second Card */}
            <div className='flex flex-col text-center justify-center item-center border bg-white p-16 gap-4 mx-auto'>

            <img src={inprogress} className='h-10 w-10 mx-auto' />
            <h1 className='font-bold text-4xl text-black'> 10</h1>
            <p className='text-xl'>In-progress Projects</p>


            </div>

            {/* up comming projects */}
            <div className='flex flex-col text-center justify-center item-center border bg-white p-16 gap-4 mx-auto'>

            <img src={upcomming} className='h-10 w-10 mx-auto' />
            <h1 className='font-bold text-4xl text-black'> 5</h1>
            <p className='text-xl'>Up-Comming Projects</p>


</div>
        
        </div>
    </div>
  )
}

export default Stats