import React from "react";
import SectionHead from "../components/common/SectionHead";

// common
const ProjectType = ({ type, icon, projects }) => {
  return (
    <section className="mb-15 p-4">
      <h2 className="text-2xl font-bold text-prime mb-4">
        <i class={icon}></i> {type}
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
    <div data-ui="project" className="mx-1 px-4 py-8 shadow-xl rounded-lg">
      <img
        src={image}
        alt={title}
        className="rounded-lg h-40 bg-gray-300/70 mb-3"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-sm text-gray-600">{description}</p>
      <span className="font-semibold mt-3 block">Features:</span>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-4">
        <a
          href={sourceCodeLink}
          className="text-blue-600 border-blue-600 border-2 px-2 py-1 rounded-lg"
        >
          <i class="ri-code-s-slash-line"></i> Source Code
        </a>
        <a
          href={previewLink}
          className="text-white bg-blue-600 px-2  py-1 rounded-lg"
        >
          <i class="ri-eye-fill"></i> Live Demo
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
    <div id="projects" className="w-full">
      <SectionHead title="My Projects" icon="ri-folder-fill" />
      <p className="text-gray-700/90 p-2">
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
      <p>
        “Looking for a custom website like these? Let's connect and build
        something great.”
      </p>
      <a href="#services">Explore Services</a>
    </div>
  );
};

export default Projects;
