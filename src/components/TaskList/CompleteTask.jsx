import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>
                    Make a YouTube Video
                </h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sunt repellat saepe aliquid placeat necessitatibus.</p>
                <div className='mt-2'>
                    <button className='w-full bg-blue-500'>Completed</button>
                </div>

            </div>
  )
}

export default CompleteTask