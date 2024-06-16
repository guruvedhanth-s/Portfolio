
import TechBuddy from "../assets/sample.jpg"
function Projects() {
  return (
    <div className='text-white flex flex-col gap-y-10 '>
        <div className='text-2xl font-bold'>Featured Projects</div>
        <div className='grid grid-cols-2 p-10 gap-x-10'>
            <div className='rounded-xl h-60 w-full   flex gap-x-2 border justify-self-start items-center justify-around px-3'>
                    <div className='flex flex-col gap-y-2'>
                        <p className='font-bold text-2xl flex flex-col'>TechBuddy</p>
                        <p>CodeShare is a platform for developers to share code snippets, ask questions, and provide answers</p>
                    </div>
                    <img src={TechBuddy} alt="" className='h-32 w-52 rounded-xl border'/>

            </div>
            <div className='rounded-xl h-60 w-full border flex gap-x-2 border justify-self-end items-center justify-around px-3'> 
            <div className='flex flex-col gap-y-2'>
                        <p className='font-bold text-2xl flex flex-col'>TechBuddy</p>
                        <p>CodeShare is a platform for developers to share code snippets, ask questions, and provide answers</p>
                    </div>
                    <img src={TechBuddy} alt="" className='h-32 w-52 rounded-xl border'/> 
            </div>
        </div>

    </div>
  )
}

export default Projects