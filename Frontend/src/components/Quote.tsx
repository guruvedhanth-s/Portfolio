import React from 'react'

function Quote() {
  return (
    <div className='text-white flex flex-col gap-y-10'>
        <div className='text-2xl font-bold' >Favourite Quote</div>
        <div className='border h-40 rounded-xl flex flex-col gap-y-2 justify-center p-5 m-7'>
            <p className='text-xl' >I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as  champion.</p>
            <p className='text-end px-10'>- Muhammad Ali</p>
        </div>
    </div>
  )
}

export default Quote