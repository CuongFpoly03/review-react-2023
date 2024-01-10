/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'

const nav = () => {
  return (
    <ul>
        <li>
            <Link className='border-2 border-solid border-black bg-black text-white rounded mr-20 p-2' to="/">Home</Link>
            <Link className='border-2 border-solid border-black bg-black text-white rounded mr-20 p-2' to="/products" >Poducts</Link>
        </li>
    </ul>
  )
}

export default nav