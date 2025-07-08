import React from "react";
import SectionHead from "../components/common/SectionHead";
import Lottie from "lottie-react";
import searchingAnimation from "../assets/Animations/searchingAnimation.json";

// common
const ProjectType = ({ type, icon, projects }) => {
  return (
    <section className="mb-15 p-4">
      <h2 className="text-2xl font-bold text-prime mb-4">
        <i className={icon}></i> {type}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
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
      data-aos-delay="400"
      className="mx-1 px-4 py-8 shadow-xl rounded-2xl"
    >
      <img
        src={image}
        alt={title}
        className="rounded-2xl h-40 bg-gray-300/70 mb-3"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-sm text-gray-600">{description}</p>
      <span className="font-semibold mt-3 block">Features:</span>
      <ul className="list-disc list-inside text-prime text-sm">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
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

  return (
    <div id="projects" className="w-full py-10 mb-30">
      <SectionHead title="My Projects" icon="ri-folder-fill" />
      <p className="text-gray-700/90 p-3">
        A curated set of projects categorized to highlight different strengths —
        from pixel-perfect UI clones and original problem-solving apps to
        business-ready templates built for real-world use.
      </p>
      <ProjectType
        type="UI/UX Clones"
        icon="ri-layout-3-line"
        projects={uiClones}
      />
      <ProjectType
        type="Personal Ideas & Mini Apps"
        icon="ri-lightbulb-line"
        projects={problemSolvingApps}
      />
      <ProjectType
        type="Client Projects"
        icon="ri-briefcase-2-line"
        projects={clientProjects}
      />
      <Lottie
        animationData={searchingAnimation}
        loop={true}
        className="w-full max-w-md"
      />
      <p className="p-4 text-gray-600 text-xl pb-10">
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
