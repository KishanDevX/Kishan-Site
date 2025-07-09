import React, { useState } from "react";
import SectionHead from "../components/common/SectionHead";
import Lottie from "lottie-react";
import searchingAnimation from "../assets/Animations/searchingAnimation.json";

// common
const ProjectType = ({ type, referencePara, icon, projects }) => {
  return (
    <section className="mb-15 p-4">
      <h2 className="text-2xl font-bold text-prime">
        <i className={icon}></i> {type}
      </h2>
      <div className="flex py-4 overflow-x-auto no-scrollbar">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      <p>{referencePara}</p>
    </section>
  );
};

const Project = ({
  title,
  image,
  description,
  features,
  previewLink,
  sourceCodeLink,
}) => {
  return (
    <div
      data-ui="project"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="px-4 mx-2 mr-10 py-4 bg-white shadow-md shadow-gray-300/50 shrink-0 rounded-2xl"
    >
      <div
        data-ui="image-display"
        className="rounded-2xl h-40 bg-gray-300/70 mb-3"
      >
        <img src={image} alt={title} className="" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-sm text-gray-600">{description}</p>
      <span className="font-semibold text-prime mt-3 block">Features:</span>
      <ul className="text-text-800 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-prime text-2xl pr-1">&bull;</span>
            <span className="text-gray-800/80">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-4">
        <a
          href={sourceCodeLink}
          className="text-blue-600 border-blue-600 border-2 px-2 py-1 rounded-lg"
        >
          <i className="ri-code-s-slash-line"></i> Source Code
        </a>
        <a
          href={previewLink}
          className="text-white bg-blue-600 px-2  py-1 rounded-lg"
        >
          <i className="ri-eye-fill"></i> Live Demo
        </a>
      </div>
    </div>
  );
};

// main projects Section
const Projects = () => {
  const uiClones = [
    {
      title: "UI Clone 1",
      image: "#",
      description: "A pixel-perfect clone of a popular UI design.",
      features: ["Responsive", "Accessible", "Cross-browser compatible"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "UI Clone 1",
      image: "#",
      description: "A pixel-perfect clone of a popular UI design.",
      features: ["Responsive", "Accessible", "Cross-browser compatible"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "UI Clone 1",
      image: "#",
      description: "A pixel-perfect clone of a popular UI design.",
      features: ["Responsive", "Accessible", "Cross-browser compatible"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
  ];

  const problemSolvingApps = [
    {
      title: "Problem Solving App 1",
      image: "#",
      description: "An app that solves a specific problem effectively.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "Problem Solving App 2",
      image: "#",
      description: "An app that solves a specific problem effectively.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
  ];

  const clientProjects = [
    {
      title: "Business Template 1",
      image: "#",
      description: "A template designed for business use.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "Business Template 1",
      image: "#",
      description: "A template designed for business use.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
  ];

  const explainPara = {
    uiCloning:
      "Clean, pixel-perfect recreations of real-world interfaces — these projects demonstrate my ability to replicate complex layouts and responsive designs with precision. They show you how closely I can match any visual idea you bring.",
    prblmSolving:
      "Built from scratch to solve real needs — these apps showcase my logical thinking, feature planning, and coding depth. From utilities to tools, each one reflects how I approach problems and create useful digital solutions.",
    clientTemplates:
      "Professionally designed templates tailored for businesses — whether it's a landing page, portfolio, or service site, these templates show how I structure clean, functional websites that are ready to convert and impress.",
  };

  return (
    <div id="projects" className="w-full bg-gray-50 mt-10 pb-30">
      <SectionHead title="My Projects" icon="ri-folder-fill" />
      <p className="text-gray-700/90 p-3 mb-5">
        A curated set of projects categorized to highlight different strengths —
        from pixel-perfect UI clones and original problem-solving apps to
        business-ready templates built for real-world use.
      </p>
      <ProjectType
        type="UI/UX Clones"
        icon="ri-layout-3-line"
        projects={uiClones}
        referencePara={explainPara.uiCloning}
      />
      <ProjectType
        type="Personal Ideas & Mini Apps"
        icon="ri-lightbulb-line"
        projects={problemSolvingApps}
        referencePara={explainPara.prblmSolving}
      />
      <ProjectType
        type="Client Projects"
        icon="ri-briefcase-2-line"
        projects={clientProjects}
        referencePara={explainPara.clientTemplates}
      />
      <Lottie
        animationData={searchingAnimation}
        loop={true}
        className="w-full max-w-md"
      />
      <p className="px-5 text-gray-600 text-md pb-10">
        Still browsing through different website styles and have a{" "}
        <span className="bg-yellow-200/100 text-black px-1">custom idea</span>{" "}
        in mind?
        <br />
        <br />
        <a href="#contact" className="text-blue-600 font-medium">
          Let's talk
        </a>{" "}
        and bring your unique vision to life.
      </p>
      <a
        href="#offerSet"
        className="bg-emerald-500 hover:bg-emerald-600 transition px-4 py-2 ml-10 rounded-md font-semibold text-white"
      >
        View Packages
      </a>
    </div>
  );
};

export default Projects;
