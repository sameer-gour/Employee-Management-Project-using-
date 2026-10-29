import React, { Component, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashbord/EmployeDashboard'
import AdminDeshboard from './Components/Dashbord/AdminDeshboard'
import { setLocalStorage } from './Utils/LocalStorage'


function App() {
  const [User, setUser] = useState(null)

  const handelLogin = (email,password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');  
    }else if (email === 'user@me.com' && password === '123') {
      setUser('employee');
      
    }else{
      alert("invalid user")
    }
  }
  
  
  return (
    <>
    {!User ? <Login  handelLogin={handelLogin}/> : " "}
    {User === 'admin' ? <AdminDeshboard /> : <EmployeDashboard/>}
    </>
  )
}

export default App