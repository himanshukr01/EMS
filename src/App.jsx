import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect, useState } from'react'
import { AuthContext } from './context/AuthProvider'
import TaskContext from './context/TaskContext'
import { useContext } from'react'

const App = () => {

    const [user, setUser] = useState(null)
    const [loggedInUserData, setLoggedInUserData] = useState(null)
    const authData = useContext (AuthContext)

    // useEffect(() => {
    //   if(authData){
    //     const loggedInUser = localStorage.getItem('loggedInUser')
    //     if(loggedInUser){
    //       setUser(loggedInUser.role)
    //     }
    //   }

    // }, [authData])
    


    const handleLogin = (email, password)=> {
      if (email=='admin@me.com' && password=='123'){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
      } else if(authData){
        const employee = authData.employees.find((e) => email == e.email && e.password == password)
        if(employee){
          setUser('Employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'employees'}))
        }
        }
      else{
        alert("Invalid credentials")
      }
    }

    

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user== 'admin' ? <AdminDashboard /> : (user == 'employee' ?<EmployeeDashboard data={loggedInUserData} />:null) } 
    </>
  )
}

export default App