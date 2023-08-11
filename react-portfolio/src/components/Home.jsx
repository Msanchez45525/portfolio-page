import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'



import backgroundImage from '../assets/oj.jpg'; // Add below -line-19--> style={backgroundStyle}

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: '98vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(10, 25, 47, 0.9)', // Set the background color with transparency
  };
  return (
    <div name='home' className='w-full h-screen ] 'style={backgroundStyle}> 

      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
        <p className='text-[#f5f5f5]'>Hello, I'm</p>
            <h1 className='text-4xl sm:text-7xl font-extrabold text-[#0c090a]'>Matt Sanchez</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>Father</h2>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>Full Stack Developer</h2>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>Slayer of Dragons</h2>
            <span></span>
            <p className='text-[#ffffff] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building (and ocassionally designing)
            exceptional digital experiences. Currently, Im focused on building responsive full-stack web applications.</p>
            <Link to="work" smooth={true} duration={500}>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#01F9C6] hover:border-[#01F9C6]'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
            
          </Link>
      </div>

    </div>
  )
}

export default Home
