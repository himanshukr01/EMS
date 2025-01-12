import React from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){setUserName('Admin')}
  // else{data.firstName}

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }
  return (
    <div className='flex itmes-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props?.firstName || 'User'}</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 text-2xl font-medium text-white px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header