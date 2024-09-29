import { motion } from 'framer-motion';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
    motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["we create","eye-opening","presentations"].map((item, index) => {
                return <div className='masker'>
                    <div className="w-fit flex items-end overflow-hidden">
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}}  className='mr-[1vw] w-[9vw] h-[6vw] -top-[1.2vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover rounded-lg'></motion.div>)}
                        <h1 className="pt-[2.2vw] -mb-[2vw] uppercase text-[9vw] tracking-widest leading-[.75] font-custom2 font-bold">{item}</h1>
                    </div>            
                </div>
            })}
        </div>

        <div className="border-t-2 border-zinc-700 mt-[3.5vw] flex justify-between items-center py-5 px-20">
            {["For public & private companies","From the first pitch to IPO"].map((item, index) => ( 
                <p className='text-lg font-light tracking-tight leading-none capitalize'>{item}</p>
            ))}
            <div className='start flex items-center gap-2'>
                <div className='px-5 py-2 border-[1px] border-zinc-500 font-light rounded-full text-md uppercase'>start the project</div>
                <div className='w-12 h-12 flex items-center justify-center rounded-full border-[1px] border-zinc-500 font-light'>
                    <MdArrowOutward/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage