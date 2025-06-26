import React from "react";

import pic from "../assets/pic2.jpg";
import djangoLogo from '../assets/Django-logo.png';
import htmllogo from "../assets/html.png";

import JavaScriptlogo from "../assets/java-script.png";
import csslogo from "../assets/css.jpg";


import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";


import { FaReact } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello, I'm a passionate developer and problem solver. I specialize in writing clean, efficient code and love to create innovative solutions that bring ideas to life. Whether it's building complex systems, crafting intuitive user interfaces, or diving into new technologies, I enjoy the process of learning and building every day. I'm always looking for new challenges and opportunities to learn and grow as a developer.
              My expertise includes HTML, CSS, JavaScript, ReactJs, Django, Django Rest Framework, SQL and I strive to stay ahead of the curve in this ever-evolving field. Let's collaborate and code the future together!
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <img
                    src={htmllogo}
                    alt="html"
                    className="w-8 md:w-10 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                  />
                  <img
                    src={csslogo}
                    alt="css"
                    className="w-8 md:w-10 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                  />
                  <img
                    src={JavaScriptlogo}
                    alt="javaScript"
                    className="w-8 md:w-10 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                  />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <img
                    src={djangoLogo}
                    alt="Django"
                    className="w-8 md:w-10 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                  />

                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full "
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
