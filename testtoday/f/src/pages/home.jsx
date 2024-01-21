import React from 'react'
import Footer from './footer'
import Header from './header'
import Nav from '../components/nav'
const home = () => {
  return (
    <div>
        <Nav/>
        <Header/>
        <div className='border-2 border-solid border-black'>
            <p className='m-10'>Home</p>
        </div>
        <Footer/>
    </div>
  )
}

export default home