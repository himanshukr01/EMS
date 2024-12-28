import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />

      <div>
       <form className='flex items-center justify-between w-[90%] bg-emerald-700 rounded-xl'>
        <div className='p-5 '>
          
          <div className='p-2'>
          <h3>Task Title</h3>
          <input type="text" placeholder='Make a UI Design' className='rounded-md w-[450px]' />
          </div>

          <div className='p-2'>
            <h3>Date</h3>
            <input type="date" name="" id="" className='rounded-md w-[450px]' />
          </div>

          <div className='p-2'>
            <h3>Assign To</h3>
            <input type="text" placeholder='Eployee Name' className='rounded-md w-[450px]' />
          </div>

          <div className='p-2'>
            <h3>Category</h3>
            <input type="text" placeholder='design, dev, etc' className='rounded-md w-[450px]'/>
          </div>

        </div>

        <div className='p-5'>

          <div>
            <h3>Description</h3>
            <textarea name="" id="" cols='65' rows='10' className='rounded-md' ></textarea>
          </div>

          <div>
            <button className='bg-emerald-600 w-full rounded-md'>Create Task</button>
          </div>

        </div>
        
       </form>
      </div>
    </div>
  )
}

export default AdminDashboard