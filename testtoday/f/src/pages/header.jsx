import React from 'react'
import Img from '../assets/348-536x354.jpg'
const header = () => {
  return (
    <div>
        <img className='mt-10' src={Img} alt="" />
        <div className='border-2 border-solid border-black'>
            <p className='m-10'>Header</p>
        </div>
    </div>
  )
}

export default header