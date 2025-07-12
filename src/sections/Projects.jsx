import React from "react";
import SectionHead from "../components/common/SectionHead";
import Lottie from "lottie-react";
import searchingAnimation from "../assets/Animations/searchingAnimation.json";
import SubHeading from "../components/common/SubHeading";

// common
const ProjectType = ({ type, referencePara, icon, projects }) => {
  return (
    <section className="mb-15 p-4">
      <SubHeading text={type} icon={icon} />
      <div className="flex py-4 overflow-x-auto no-scrollbar">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      <p className="text-gray-700/90">{referencePara}</p>
    </section>
  );
};

const Project = ({
  title,
  thumbnail,
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
      className="px-4 mx-2 w-90 mr-10 py-4 bg-white shadow-md shadow-gray-300/50 shrink-0 rounded-2xl"
    >
      <div data-ui="image-display" className="rounded-2xl h-40 flex gap-2 mb-3">
        <img
          src={thumbnail.mobileView}
          alt={`${title} thumbnail 1`}
          className="w-[30%] h-full object-cover bg-gray-300 rounded-md shadow-sm"
        />
        <img
          src={thumbnail.desktopView}
          alt={`${title} thumbnail 2`}
          className="w-[70%] h-full object-cover bg-gray-300 rounded-md shadow-sm"
        />
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

const ServicesIntroducer = () => {
  return (
    <div
      data-ui="services-introducer"
      className="flex flex-col items-center text-center px-6 gap-4"
    >
      <Lottie
        animationData={searchingAnimation}
        loop={true}
        className="w-full max-w-sm"
      />
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Exploring project ideas or have a <br />
        <span className="bg-yellow-300/70 px-1 text-black font-medium rounded">
          custom vision
        </span>{" "}
        in mind? Let's shape it into reality—your dream design is just a
        conversation away.
      </p>
      <div className="flex gap-4">
        <a href="#contact" className="p-1 text-blue-600">
          start a conversation
        </a>
        <a
          href="#offerSet"
          className="py-1 px-4 bg-emerald-400 rounded-md text-white"
        >
          view packages
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
      thumbnail: {
        mobileView: "#",
        desktopView: "#",
      },
      description: "A pixel-perfect clone of a popular UI design.",
      features: ["Responsive", "Accessible", "Cross-browser compatible"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "UI Clone 1",
      thumbnail: {
        mobileView: "#",
        desktopView: "#",
      },
      description: "A pixel-perfect clone of a popular UI design.",
      features: ["Responsive", "Accessible", "Cross-browser compatible"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "UI Clone 1",
      thumbnail: {
        mobileView: "#",
        desktopView: "#",
      },
      description: "A pixel-perfect clone of a popular UI design.",
      features: ["Responsive", "Accessible", "Cross-browser compatible"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
  ];

  const problemSolvingApps = [
    {
      title: "Problem Solving App 1",

      thumbnail: {
        mobileView: "#",
        desktopView: "#",
      },
      description: "An app that solves a specific problem effectively.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "Problem Solving App 2",

      thumbnail: {
        mobileView: "#",
        desktopView: "#",
      },
      description: "An app that solves a specific problem effectively.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
  ];

  const clientProjects = [
    {
      title: "Business Template 1",
      thumbnail: {
        mobileView: "#",
        desktopView: "#",
      },
      description: "A template designed for business use.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      previewLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "Business Template 1",
      thumbnail: {
        mobileView: "#",
        desktopView: "#",
      },
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
    <div id="projects" className="w-full bg-gray-100 pb-30">
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
      {/* <ServicesIntroducer /> */}
    </div>
  );
};

export default Projects;
