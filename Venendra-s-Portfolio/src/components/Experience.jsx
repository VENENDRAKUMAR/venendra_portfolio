import React from "react";
import { Button } from "./ui/moving-border";
import exp1 from "../assets/exp1.svg"
import exp2 from "../assets/exp2.svg";
import exp3 from "../assets/exp3.svg";
import exp4 from "../assets/exp4.svg";

const workExperience = [
  {
    id: 1,
    title: "Web Application Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: exp4,
  },
    {
      id: 2,
      title: "Frontend Engineer",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: exp1,
    },
    
    {
      id: 3,
      title: "Freelance Web Developer",
      desc: "Led the dev of a Web app for a client, from initial concept to deployment.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail:exp3 ,
    },
    {
      id: 4,
      title: "Founder",
      desc: "Led the dev of a Web app for a client, from initial concept to deployment.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail:exp3 ,
    },
    
    
  ];

const Experience = () => {
  return (
    <div id="Experience" className=" md:py-20 py-10 w-full">
      <h1 className="text-4xl md:text-6xl flex text-white gap-3 justify-center font-bold">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
                
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                width={40}
                height={40}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
