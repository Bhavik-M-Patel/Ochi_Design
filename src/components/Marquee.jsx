import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className='w-full py-14 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap overflow-hidden font-custom1'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease:"linear", duration: 5}} className='pr-10  text-[24vw] uppercase leading-none font-semibold pt-10 -mb-[6vw]'>We are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease:"linear", duration: 5}} className='pr-10  text-[24vw] uppercase leading-none font-semibold pt-10 -mb-[6vw]'>We are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease:"linear", duration: 5}} className='pr-10  text-[24vw] uppercase leading-none font-semibold pt-10 -mb-[6vw]'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee