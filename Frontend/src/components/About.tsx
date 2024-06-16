import React from 'react'
import about from "../assets/about.png"

function About() {
  return (
    <div className='text-white '>
        <div className='text-2xl font-bold'>About</div>
        <div className='flex justify-between w-full gap-x-10'>
            <img src={about} alt="" className='h-96 w-96'/>
            <div className='flex flex-col justify-center items-center gap-y-5'>
                <div className='text-center'>Welcome to my portfolio! I’m Guruvedhanth S, a tech enthusiast driven by the challenge of solving complex problems. I stay updated with the latest tech trends and strive to keep my skills cutting-edge. While design isn't my forte, I excel at working with designers to create functional and attractive solutions. My ultimate goal is to make a significant impact in the tech industry. Thank you for visiting my portfolio; I look forward to future opportunities and collaborations.</div>
            </div>
        </div>
    </div>
  )
}

export default About