import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'

function Landing() {
  return (
    <div  className='bg-black min-h-screen px-52 py-10 flex flex-col gap-y-16'>
        <Navbar/>
        <HeroBanner/>
    </div>
  )
}

export default Landing