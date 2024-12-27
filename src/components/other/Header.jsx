import React from 'react'

const Header = () => {
  return (
    <div className='flex itmes-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> Himanshu </span> </h1>
        <button className='bg-red-600 text-2xl font-medium text-white px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header