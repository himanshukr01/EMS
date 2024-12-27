import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Email is',email);
    console.log('Password is',password);

    setEmail('')
    setPassword('')
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        
        
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className='flex flex-col items-center justify-center'>
          
          
          <input
          value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 rounded-full text-xl'
            type="email"
            placeholder='Enter your Email' />
          
          
          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            required className='mt-4 outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 rounded-full text-xl'
            type="password"
            placeholder='Enter Password' />
          
          
          <button 
          className='text-white mt-5 outline-none placeholder:text-white border-none border-2 bg-emerald-600 py-3 px-5 rounded-full text-xl'>Log in</button>
        
        
        </form>
      </div>
    </div>
  )
}

export default Login