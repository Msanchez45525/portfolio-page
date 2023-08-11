import React, { useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

import backgroundImage from '../assets/white-wall-texture.jpg'; // Add below -line-19--> style={backgroundStyle}

const Navbar = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: '8vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-black-bold border-b-4 border-[#0c090a]" style={backgroundStyle} >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: 0,
          padding: 0,
        }}
      >

      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500} style={{ color: 'black', fontWeight: 'bold' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} style={{ color: 'black', fontWeight: 'bold' }}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} style={{ color: 'black', fontWeight: 'bold' }}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} style={{ color: 'black', fontWeight: 'bold' }}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} style={{ color: 'black', fontWeight: 'bold' }}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      {/*md means that as soon as its over medium it'll hide */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobil menu */}
      {/* below is ternary.. if nav = true then its hidden or display */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="home" onClick={handleClick} smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link to="about" onClick={handleClick} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="skills" onClick={handleClick} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="work" onClick={handleClick} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="contact" onClick={handleClick} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="border border-black w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/-sanchez/" // Linkedin Link
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // security and performance
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="border border-black w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Msanchez45525" // Linkedin Link
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // security and performance
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="border border-black w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="border border-black w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
              download="resume.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
