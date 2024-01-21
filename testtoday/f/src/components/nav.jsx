import React from 'react'
import {Link} from 'react-router-dom'
const nav = () => {
  return (
    <ul>
        <li>
            <Link className='border-2 rounded font-bold  border-solid border-red-800 m-8 p-2 bg-red-800 text-white hover:bg-blue-800' to='/'>Home</Link>
            <Link className='border-2 rounded font-bold border-solid border-red-800 m-8 p-2 bg-red-800 text-white hover:bg-blue-800' to='/product'>Product</Link>
            <Link className='border-2 rounded font-bold border-solid border-red-800 m-8 p-2 bg-red-800 text-white hover:bg-blue-800' to='/contact'>Contact</Link>
        </li>
    </ul>
  )
}

export default nav
