import React from 'react'
import {Link} from 'react-router-dom'
const nav = () => {
  return (
    <ul>
        <li>
            <Link className='border-solid border-2 border-black p-2 bg-black text-white font-bold m-4 rounded' to='/'>Home</Link>
            <Link className='border-solid border-2 border-red p-2 bg-red-800 text-white font-bold m-4 rounded' to='/about'>About</Link>
            <Link className='border-solid border-2 border-blue-800 p-2 bg-blue-800 text-white font-bold m-4 rounded' to='/contact'>Contact</Link>
        </li>
    </ul>
  )
}

export default nav