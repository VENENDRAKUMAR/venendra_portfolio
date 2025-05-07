"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import eventX from "../assets/EventX.png"
import Ecoavenstra from "../assets/Ecoavenstra.png"
import PortFolio from "../assets/Portfolio.png"
import JobPortal from "../assets/JobPortal.png"

// Dummy data for projects
const projects = [
  {
    id: 1,
    title: "EventX",
    description: "EventX is an event management platform that helps businesses and organizations streamline event planning, registration, and virtual or in-person attendee engagement. It offers features like ticketing, live streaming, networking tools, and analytics to enhance event experiences.",
    imageUrl: eventX
  },
  {
    id: 2,
    title: "Ecoavenstra",
    description: "Ecoavenstra is a sustainability-focused company that provides eco-friendly solutions and content management system (CMS) services for businesses and individuals. It aims to streamline digital experiences while promoting sustainability. With a mission to create a greener future.",
    imageUrl: Ecoavenstra
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A portfolio website is a personal or professional website that showcases an individual's work, skills, and achievements. It is commonly used by designers, developers, photographers, and creatives to highlight their projects and attract potential clients or employers.",
    imageUrl: PortFolio
  },
  {
    id: 4,
    title: "Job Portal",
    description: "A job portal is an online platform that connects job seekers with employers by listing job openings across various industries. It allows candidates to upload resumes, apply for jobs, and receive alerts, while employers can post vacancies and screen potential hires.",
    imageUrl: JobPortal
  },
  // Add more projects as needed
];

export function ThreeDCardDemo() {
  return (
    <div id="Projects" className=" flex flex-col md:pt-20 pt-0 justify-center items-center">
      <div className="text-white md:text-6xl text-3xl font-bold pb-4 md:pb-14">My Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2  w-full max-w-7xl mx-auto gap-4">
        {projects.map((project) => (
          <CardContainer key={project.id} className="inter-var my-4 ">
            <CardBody
              className="bg-[#04071d] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                {project.title}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.imageUrl}
                  height="1000"
                  width="1000"
                  className=" w-full object-cover rounded-xl group-hover:card:shadow-xl"
                  alt="thumbnail" />
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {project.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
