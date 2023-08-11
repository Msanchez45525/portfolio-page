import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realestate from '../assets/realestate.jpg'
import backgroundImage from '../assets/oj.jpg'; // Add below -line-19--> style={backgroundStyle}

const Work = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "100.25vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(10, 25, 47, 0.9)", // Set the background color with transparency
  };

return (
  <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]" style={backgroundStyle}>
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-[#0c090a] border-[#FFFFF7]">
          Projects
        </p>
        <p className="py-6"> Check out some of my recent work</p>
      </div>

      {/* container for projects */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Gird Item */}

        
        <div
          //key={index}
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
        >
          {/* Hover effect for images */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              React JS
            </span>
            <div className="pt-8 text-center ">
              {/* eslint-disable-next-line */}
              <a>
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
              {/* eslint-disable-next-line */}
              <a>
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        

        <div
          //key={index}
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
        >
          {/* Hover effect for images */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              React JS
            </span>
            <div className="pt-8 text-center ">
              {/* eslint-disable-next-line */}
              <a>
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
              {/* eslint-disable-next-line */}
              <a>
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          //key={index}
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
        >
          {/* Hover effect for images */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              React JS
            </span>
            <div className="pt-8 text-center ">
              {/* eslint-disable-next-line */}
              <a>
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
              {/* eslint-disable-next-line */}
              <a>
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          //key={index}
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
        >
          {/* Hover effect for images */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              React JS
            </span>
            <div className="pt-8 text-center ">
              {/* eslint-disable-next-line */}
              <a>
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
              {/* eslint-disable-next-line */}
              <a>
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Work;
