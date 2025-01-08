import React from 'react'

const CreateTask = () => {
  return (
    <div>
       <form className='flex items-center justify-between w-full bg-[#1c1c1c] rounded-xl mt-9'>
        <div className='p-5 '>
          
          <div className='p-2'>
          <h3>Task Title</h3>
          <input type="text" placeholder='Make a UI Design' className='rounded-md w-[575px] bg-black' />
          </div>

          <div className='p-2'>
            <h3>Date</h3>
            <input type="date" name="" id="" className='rounded-md w-[575px] bg-black' />
          </div>

          <div className='p-2'>
            <h3>Assign To</h3>
            <input type="text" placeholder='Eployee Name' className='rounded-md w-[575px] bg-black' />
          </div>

          <div className='p-2'>
            <h3>Category</h3>
            <input type="text" placeholder='design, dev, etc' className='rounded-md w-[575px] bg-black'/>
          </div>

        </div>

        <div className='p-5'>

          <div>
            <h3>Description</h3>
            <textarea name="" id="" cols='80' rows='10' className='rounded-md bg-black border-2' ></textarea>
          </div>

          <div>
            <button className='bg-emerald-600 w-full h-[40px] rounded-md mt-3'>Create Task</button>
          </div>

        </div>
        
       </form>
      </div>
  )
}

export default CreateTask