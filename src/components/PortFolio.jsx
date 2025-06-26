import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javaScript from "../../public/java-script.png";
import django from "../assets/Django-logo.png";
import reactjs from "../../public/reactjs.png";
import tailwind from "../../public/Tailwind CSS.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      link: "https://github.com/VickyKumar001/calculator",
      description: "A calculator built with HTML, CSS and JavaScript",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      link: "https://github.com/VickyKumar001/calculator",
      description: "A calculator built with HTML, CSS and JavaScript",
    },
    {
      id: 3,
      logo: javaScript,
      name: "JavaScript",
      link: "https://github.com/VickyKumar001/Live-Weather-Update",
      description:
        "A Live Weather Update built with HTML, CSS and JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
      link: "https://github.com/VickyKumar001/ShopHere",
      description:
        "An E-commerce WebApp called ShopHere built with ReactJS for frontend and Django for backend",
    },
    {
      id: 5,
      logo: django,
      name: "Django",
      link: "https://github.com/VickyKumar001/ShopStroll-Shoping-WebApp",
      description: "A Shopping WebApp built with Django",
    },
    {
      id: 6,
      logo: tailwind,
      name: "Tailwind",
      link: "https://github.com/VickyKumar001/PasswordGenerator-WebApp",
      description: "A Password Generator WebApp built with Tailwind CSS",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
          {cardItem.map(({ id, logo, name, link, description }) => (
            <div
              key={id}
              className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col items-center">
                <img
                  src={logo}
                  className="w-[100px] h-[100px] mb-3 rounded-full border-2 object-cover"
                  alt={name}
                />
                <div className="text-center">
                  <h2 className="font-bold text-xl mb-1">{name}</h2>
                  <p className="text-gray-700 text-sm">{description}</p>
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
