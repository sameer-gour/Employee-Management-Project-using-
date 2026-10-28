import React from 'react'
import Header from '../../Others/Header'
import Tasklistnumber from '../../Others/Tasklistnumber'
import TaskList from '../TaskList/TaskList'

function EmployeDashboard() {
  return (
    <>
    <div className='p-5 bg-zinc-800'>
      <Header /> 
    </div>
      <Tasklistnumber />
      <div className='m-10'>
        <TaskList />
      </div>
    
    </>

  )
}

export default EmployeDashboard