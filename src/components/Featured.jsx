import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation()];

    const handleHover = (index) =>{
        cards[index].start({y: "0"})
    };
    const handleHoverEnd = (index) =>{
        cards[index].start({y: "100%"})
    };
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-600 p-14'>
            <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">Featured projects</h1>
        </div>
        <div className='px-20 pb-10'>
            <div className='cards w-full flex gap-10 mt-10'>
                <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] font-["Neue_Montreal"] left-full -translate-x-1/2 top-[60%] -translate-y-1/2 z-[9] text-8xl leading-none tracking-tight uppercase'>
                    {"CARDBOARD_SPACESHIP".split("").map((item, index) => (
                            <motion.span 
                                initial={{y: "100%"}}
                                animate={cards[0]}
                                transition={{ease: [0.22,1,0.36,1], delay: index*.02}}
                                className='inline-block'>
                            {item}</motion.span>
                        ))}
                    </h1>
                    <div className='flex gap-5 items-center pb-5'>
                        <div className='w-3 h-3 bg-zinc-200 rounded-full'></div>
                        <h1 className="text-1xl font-['Neue_Montreal'] tracking-wide uppercase">Cardboard Spaceship</h1>
                    </div>
                    <div className='card w-full h-full rounded-xl  overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                    <div className='flex pt-3 gap-2'>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>branded templates</button>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>social media templates</button>
                    </div>
                </motion.div>

                <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] font-["Neue_Montreal"] right-full translate-x-1/2 top-[60%] -translate-y-1/2 z-[9] text-8xl leading-none tracking-tight uppercase'>
                    {"AH2&MATTHORN".split("").map((item, index) => (
                            <motion.span 
                            initial={{y: "100%"}}
                            animate={cards[1]}
                            transition={{ease: [0.22,1,0.36,1], delay: index*.02}}
                            className='inline-block'>
                        {item}</motion.span>
                        ))}
                    </h1>
                    <div className='flex gap-5 items-center pb-5'>
                        <div className='w-3 h-3 bg-zinc-200 rounded-full'></div>
                        <h1 className="text-1xl font-['Neue_Montreal'] tracking-wide uppercase">AH2 & Matt Horn</h1>
                    </div>
                    <div className='card w-full h-full rounded-xl  overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="src\assets\Frame-481692-1-663x551-removebg-preview.png" alt="" />
                    </div>
                    <div className='flex pt-3 gap-2'>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>pitch desk</button>
                    </div>
                </motion.div>
            </div>

            <div className='cards w-full flex gap-10 mt-32 mb-10 '>
                <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleHoverEnd(2)} className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] font-["Neue_Montreal"] left-full -translate-x-1/2 top-[60%] -translate-y-1/2 z-[9] text-9xl leading-none tracking-tight uppercase'>
                    {"FYDE".split("").map((item, index) => (
                            <motion.span 
                            initial={{y: "100%"}}
                            animate={cards[2]}
                            transition={{ease: [0.22,1,0.36,1], delay: index*.1}}
                            className='inline-block'>
                        {item}</motion.span>
                        ))}
                    </h1>
                    <div className='flex gap-5 items-center pb-5'>
                        <div className='w-3 h-3 bg-zinc-200 rounded-full'></div>
                        <h1 className="text-1xl font-['Neue_Montreal'] tracking-wide uppercase">fyde</h1>
                    </div>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                    <div className='flex pt-3 gap-2'>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>copywriting</button>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>slides design</button>
                    </div>
                </motion.div>

                <motion.div onHoverStart={() => handleHover(3)} onHoverEnd={() => handleHoverEnd(3)} className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] font-["Neue_Montreal"] right-full translate-x-1/2 top-[60%] -translate-y-1/2 z-[9] text-9xl leading-none tracking-tight uppercase'>
                        {"VISE".split("").map((item, index) => (
                        <motion.span 
                           initial={{y: "100%"}}
                           animate={cards[3]}
                           transition={{ease: [0.22,1,0.36,1], delay: index*.1}}
                           className='inline-block'>
                       {item}</motion.span>
                        ))}
                    </h1>
                    <div className='flex gap-5 items-center pb-5'>
                        <div className='w-3 h-3 bg-zinc-200 rounded-full'></div>
                        <h1 className="text-1xl font-['Neue_Montreal'] tracking-wide uppercase">vise</h1>
                    </div>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="src\assets\Vise_front2-663x551-removebg-preview.png" alt="" />
                    </div>
                    <div className='flex pt-3 gap-2'>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>agency</button>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>company presentation</button>
                    </div>
                </motion.div>
            </div>

            <div className='cards w-full flex gap-10 mt-32 mb-10 '>
                <motion.div onHoverStart={() => handleHover(4)} onHoverEnd={() => handleHoverEnd(4)} className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] font-["Neue_Montreal"] left-full -translate-x-1/2 top-[60%] -translate-y-1/2 z-[9] text-8xl leading-none tracking-tight uppercase'>
                    {"TRAWA".split("").map((item, index) => (
                            <motion.span 
                            initial={{y: "100%"}}
                            animate={cards[4]}
                            transition={{ease: [0.22,1,0.36,1], delay: index*.07}}
                            className='inline-block'>
                        {item}</motion.span>
                        ))}
                    </h1>
                    <div className='flex gap-5 items-center pb-5'>
                        <div className='w-3 h-3 bg-zinc-200 rounded-full'></div>
                        <h1 className="text-1xl font-['Neue_Montreal'] tracking-wide uppercase">trawa</h1>
                    </div>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                    </div>
                    <div className='flex pt-3 gap-2'>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>brand identity</button>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>investores desk</button>
                    </div>
                </motion.div>

                <motion.div onHoverStart={() => handleHover(5)} onHoverEnd={() => handleHoverEnd(5)} className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] font-["Neue_Montreal"] right-full translate-x-1/2 top-[60%] -translate-y-1/2 z-[9] text-8xl leading-none tracking-tight uppercase'>
                        {"PREMIUM_BLEND".split("").map((item, index) => (
                            <motion.span 
                            initial={{y: "100%"}}
                            animate={cards[5]}
                            transition={{ease: [0.22,1,0.36,1], delay: index*.04}}
                            className='inline-block'>
                        {item}</motion.span>
                        ))}
                    </h1>
                    <div className='flex gap-5 items-center pb-5'>
                        <div className='w-3 h-3 bg-zinc-200 rounded-full'></div>
                        <h1 className="text-1xl font-['Neue_Montreal'] tracking-wide uppercase">premium Blend</h1>
                    </div>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="src\assets\PB-Front-4-663x551-removebg-preview.png" alt="" />
                    </div>
                    <div className='flex pt-3 gap-2'>
                        <button className=' px-2 py-1 border-[1px] rounded-full left-10 bottom-10 uppercase'>branded template</button>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mt-10'>
            <button className='flex gap-10 items-center px-10 py-4 rounded-full bg-white text-black border-2 border-zinc-100 mt-10 text-[1.2vw] uppercase'>view all case studies
                <div className='w-3 h-3 bg-zinc-900 rounded-full'></div>
            </button>
        </div>
    </div>
  )
}

export default Featured