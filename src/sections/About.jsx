import React from "react";
import SectionHead from "../components/common/SectionHead";
import SubHeading from "../components/common/SubHeading";

// about section components
const IntroductionSection = () => (
  <div className=" px-2 py-4 w-full">
    <SubHeading text="Who am I?" icon="ri-user-3-line" />
    <p
      data-aos="fade-right"
      className="text-gray-700/90 leading-relaxed dark:text-white/80"
    >
      I'm a 17 years old <b>frontend specialist</b> building modern websites for
      small businesses and creators.
      <br /> While I excel at crafting responsive UIs, I'm also passionate about{" "}
      <b>system programming</b>—giving me unique insight into performance
      optimization.
    </p>
  </div>
);

const WhatIDoSection = () => (
  <div className="px-2 py-4 w-full">
    <SubHeading text="My Approach" icon="ri-flask-line" />
    <ul>
      {[
        "Mobile-first designs that work flawlessly on all devices",
        "Semantic HTML + CSS for better SEO and accessibility",
        "React-based components for maintainable code",
        "Performance optimization as standard practice",
      ].map((item, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-delay={`${i * 200}`}
          className="text-gray-700/90 dark:text-white/90 mb-2"
        >
          <i className="ri-checkbox-circle-fill text-prime"></i> {item}
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  const skillGroups = [
    {
      name: "Core Technologies",
      items: [
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3", icon: "devicon-css3-plain" },
        { name: "JavaScript (ES6+)", icon: "devicon-javascript-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
      ],
      description: "The essential languages that make your website work",
    },
    {
      name: "Frameworks & Libraries",
      items: [
        { name: "React", icon: "devicon-react-original" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
        { name: "Framer Motion", icon: "devicon-framermotion-original" },
        { name: "React Router", icon: "devicon-reactrouter-plain" },
      ],
      description: "Powerful tools to build modern, interactive designs",
    },
    {
      name: "Development Tools",
      items: [
        { name: "Git/GitHub", icon: "devicon-git-plain" },
        { name: "VS Code", icon: "devicon-vscode-plain" },
        { name: "Figma", icon: "devicon-figma-plain" },
        { name: "Vite", icon: "devicon-vitejs-plain" },
        { name: "NPM", icon: "devicon-npm-original-wordmark" },
      ],
      description: "My go-to toolkit for creating and managing your project",
    },
    {
      name: "Deployment Platforms",
      items: [
        { name: "Netlify", icon: "devicon-netlify-plain" },
        { name: "Vercel", icon: "devicon-vercel-original" },
        { name: "GitHub Pages", icon: "devicon-github-original" },
      ],
      description: "Where your website goes live for the world to see",
    },
  ];

  return (
    <div className="px-2 col-start-2 row-start-1 py-4 h-full w-full">
      <SubHeading text="My Toolkit" icon="ri-tools-line" />

      <div className="space-y-5 md:space-y-20">
        {skillGroups.map((group) => (
          <div key={group.name} className="p-4 border-b border-gray-200">
            <div className="mb-1">
              <h4 className="font-bold dark:text-white/90 text-gray-800">
                {group.name}
              </h4>
              <p className="text-md text-gray-600 pb-2 dark:text-gray-200/70">
                {group.description}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, idx) => (
                <li
                  key={item.name}
                  data-aos="zoom-out-up"
                  data-aos-delay={`${idx * 300}`}
                  className="bg-white dark:bg-gray-200 shadow-xs  px-3 py-1 rounded-full text-sm"
                >
                  <span className="flex text-prime items-center gap-1">
                    <i className={item.icon}></i>
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const BioCard = () => (
  <div className=" grid-cols-start-1  w-full " data-aos="fade-up">
    <div className="flex flex-col items-center">
      <div
        data-ui="myself-pic"
        className="border-3 bg-gray-200/60 m-4 relative border-prime/70 rounded-full h-30 w-30 flex justify-center items-center"
      >
        <i className="ri-user-line"></i>
        <span className="absolute text-shadow-2xs -bottom-2 -right-6 rounded-full text-sm bg-prime text-white px-4 py-1">
          For Hire
        </span>
      </div>

      <div>
        <h3 className="text-center dark:text-white text-gray-900 dar font-bold text-xl ">
          Kishan Kumar
        </h3>
        <p className="text-gray-700/90 dark:text-gray-200/80">
          Frontend Web Developer
        </p>
      </div>
    </div>

    <div
      data-ui="tags"
      className="flex overflow-x-hidden flex-wrap justify-center mt-2"
    >
      {[
        "Client-First Approach",
        "Freelance Ready",
        "Fast Delivery",
        "Unlimited Revisions",
        "Self-Taught",
      ].map((tag, idx) => (
        <span
          data-aos="fade-left"
          data-aos-delay={idx * 200}
          className="bg-white dark:bg-white/30 px-3 py-1 text-gray-800/80 dark:text-white/80 shadow-sm rounded-2xl m-1"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="w-full flex justify-center my-4">
      <a className="bg-prime text-white px-4 py-1 rounded-xl" href="#projects">
        <i className="ri-folder-5-line"></i> View Projects
      </a>
    </div>
  </div>
);

// main about section
const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-700"
    >
      <div>
        <SectionHead title="About Me" icon="ri-id-card-fill" />

        <div className="sm:grid flex flex-col gap-10 grid-cols-2 sm:py-20 sm:gap-5 lg:gap-30">
          <div className="sm:px-10 flex flex-col gap-10">
            <IntroductionSection />
            <WhatIDoSection />
            <BioCard />
          </div>
          <SkillsSection />
        </div>
      </div>
    </section>
  );
};

export default About;
