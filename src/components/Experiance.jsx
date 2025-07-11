import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import django from '../assets/Django-logo.png';
import tailwind from "../assets/Tailwind CSS.png";
import javascript from "../assets/javascript.png";
import react from "../assets/reactjs.png"
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "ReactJS",
    },
    {
      id:5,
      logo:tailwind,
      name:"Tailwind"
    },
    {
      id: 6,
      logo: django,
      name: "Django",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 6 months of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
