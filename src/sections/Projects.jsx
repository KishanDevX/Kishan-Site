import React from "react";
import SectionHead from "../components/common/SectionHead";

// common
const ProjectType = ({ type, projects }) => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-semibold mb-4">{type}</h2>
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
    <div data-ui="project" className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <img src={image} alt={title} className="rounded mb-3" />
      <p className="text-sm text-gray-600">{description}</p>
      <span className="font-semibold mt-3 block">Features:</span>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4">
        <a href={previewLink} className="text-blue-500 underline">
          Live Demo
        </a>
        <a href={sourceCodeLink} className="text-gray-600 underline">
          Source Code
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

  const businessTemplates = [
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
      <p>
        A curated set of projects categorized to highlight different strengths —
        from pixel-perfect UI clones and original problem-solving apps to
        business-ready templates built for real-world use.
      </p>
      <ProjectType type="UI Clones" projects={uiClones} />
      <ProjectType type="Problem Solving" projects={problemSolvingApps} />
      <ProjectType type="Business Templates" projects={businessTemplates} />
    </div>
  );
};

export default Projects;
