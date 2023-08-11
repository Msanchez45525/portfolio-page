import React from 'react'
import backgroundImage from '../assets/oj.jpg'; // Add below -line-19--> style={backgroundStyle}

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "97.25vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(10, 25, 47, 0.9)", // Set the background color with transparency
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' style={backgroundStyle}> 
    <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FFFFF7] text-[#0c090a]'>Contact</p>
            <p className='text-gray-300 py-4'> Submit the form below or shoot me an email</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#8B0000] hover:border-[#FFFFF7] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
</div>
  )
}

export default Contact
  