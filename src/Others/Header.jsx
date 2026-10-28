import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center'>
        <h1>hello <br />
        Sameer 👋 </h1>
        <button className='bg-red-500 p-3 rounded-xl'>Logout</button>
    </div>
  )
}

export default Header