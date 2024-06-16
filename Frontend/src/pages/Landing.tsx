import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Tools from "../components/Tools"
import About from '../components/About'

function Landing() {
  return (
    <div  className='bg-black min-h-screen px-52 py-20 flex flex-col gap-y-16'>
        <Navbar/>
        <HeroBanner/>
        <Tools/>
        <About/>
    </div>
  )
}

export default Landing