import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full px-20 py-20 bg-[#CDEA68] rounded-tl-xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, 
            sell products, explain complex ideas, and hire great people. 
        </h1>
        <div className='w-full flex gap-5 mt-20 border-t-[2px] border-[#a1b562] pt-10'>
            <div className='w-1/2'>
                <h1 className='text-2xl'>What you can expect:</h1>
            </div>
            <div className='w-1/2 flex gap-40'>
                <div className='w-2/3 text-[1.1vw] tracking-tight'>
                    <h1>We create tailored presentations to help you persuade your colleagues, clients, 
                        or investors. Whether it's live or digital, delivered for one or a hundred people.
                    </h1>
                    <h1 className='pt-7'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message 
                        clear, convincing, and captivating.
                    </h1>
                </div>
                <div className='w-1/3 flex'>
                    <h1 className='text-[1.5vw] pt-16'>
                        S: <br/> Instgram <br /> Facebook <br /> Linkedin 
                    </h1>
                </div>
            </div>
        </div>
        <div className='w-full mt-20 border-t-[2px] border-[#a1b562] pt-10 flex gap-5'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 text-1xl uppercase'>Read More
                    <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-cover rounded-3xl'>
            </div>
        </div>
    </div>
  )
}

export default About