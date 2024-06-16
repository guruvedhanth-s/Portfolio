import React from 'react'
import download from  "../assets/download.png"

function Navbar() {
  return (
    <div className='text-white flex justify-between text-lg font-semibold items-center'>
        <div className='border p-1'>
          <img src="" alt="" />
          logo
        </div>
        <div className='flex justify-between w-96 items-center'>
          <div>Projects</div>
          <div>About</div>
          <div>Contact</div>
          <div className='h-10 w-32 bg-white rounded-2xl flex items-center justify-evenly'>
            <p className='text-black '>Resume</p>
            <img src={download} alt="" className='h-5'/>
          </div>
        </div>
    </div>
  )
}

export default Navbar