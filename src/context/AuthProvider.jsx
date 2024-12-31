import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const {employee, admin} = getLocalStorage()
    setUserData({employee, admin}) 
  }, [])
  

  return (
    <div>
      <AuthProvider value={[userData]}>
        {children}
      </AuthProvider>
    </div>
  )
}

export default AuthProvider