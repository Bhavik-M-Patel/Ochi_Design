import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 px-20 flex gap-5 items-center justify-center'>
        <div className='cardcontainer h-[60vh] w-1/2'>
            <div className='card relative w-full h-full bg-[#397a71] rounded-xl flex items-center justify-center'>
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-3 py-1 border-2 border-[#93a552] rounded-full left-10 bottom-10 text-[#CDEA68] font-semibold'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer h-[60vh] w-1/2 flex gap-5'>
            <div className='card relative w-1/2 h-full bg-[#585858] rounded-xl flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-3 py-2 border-2 rounded-full left-10 bottom-10 uppercase'>rating 5.0 on clutch</button>
            </div>
            <div className='card relative w-1/2 h-full bg-[#585858] rounded-xl flex items-center justify-center'>
                <img className='w-32' src="src\assets\logo003-removebg-preview.png" alt="" />
                <button className='absolute px-3 py-2 border-2 rounded-full left-10 bottom-10 uppercase'>business bootcamp alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards