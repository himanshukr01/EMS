import React from 'react'

const Header = ({data}) => {

  const logOutUser = () => {
    localStorage.removeItem('ems')
    window.location.href = '/'
  }
  return (
    <div className='flex itmes-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstName}</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 text-2xl font-medium text-white px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header