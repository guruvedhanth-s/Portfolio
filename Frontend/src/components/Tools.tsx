import Flutter from "../assets/flutter.png"
import MongoDB from "../assets/mongodb.png"
import Python from "../assets/py.png"
import Cpp from "../assets/c-.png"
import React from "../assets/react.png"

function Tools() {
  return (
    <div className='text-white flex flex-col gap-y-16'>
        <div className='font-bold text-2xl'>Some Languages and tools I use:</div>
        <div className="flex gap-x-10">
            <img src={Python} alt="" className="h-16 w-16"/>
            <img src={Cpp} alt=""className="h-16 w-16" />
            <img src={React} alt="" className="h-16 w-16"/>
            <img src={Flutter} alt="" className="h-16 w-16"/>
            <img src={MongoDB} alt="" className="h-16 w-16"/>
        </div>
    </div>
  )
}

export default Tools