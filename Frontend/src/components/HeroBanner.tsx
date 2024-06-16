import React from 'react'
import Herobanner from "../assets/Herobanner.png"
import Insta from "../assets/instagram.png"
import Twitter from "../assets/twitter.png"
import Discord from "../assets/discord.png"
import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"

function HeroBanner() {
  return (
    <div className='text-white flex flex-row justify-between items-center'>
      <div className="flex flex-col gap-y-8">
        <p className='text-3xl font-extrabold'>Guruvedhanth S</p>
        <p className='text-xl font-bold'>I'm a full stack developer where looking for innovative projects. </p>
        <div className='flex gap-x-10'>
          <img src={Github} alt="" className='h-8 w-8'/>
          <img src={Linkedin} alt="" className='h-8 w-8'/>
          <img src={Discord} className='h-8 w-8'/>
          <img src={Twitter} alt="" className='h-8 w-8 p-1'/>
          <img src={Insta} alt="" className='h-8 w-8 p-1'/>
        </div>
      </div>
      <div className="h-4/5 w-3/5">
        <img src={Herobanner} alt="" className='h-4/5  w-full'/>
      </div>
        
    </div>
  )
}

export default HeroBanner