import React from "react";
import SectionHead from "../components/common/SectionHead";

// Common Components
const SectionTitle = ({ text }) => {
  return <h2 className="text-2xl font-bold">{text}</h2>;
};

const CategoryList = ({ label, items }) => {
  return (
    <>
      <h4 className="text-xl font-semibold">{label}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-md">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

// About Section Components
const IntroductionSection = () => {
  return (
    <div>
      <SectionTitle text="Who am I?" />
      <p>
        I'm a <b>17-year-old frontend web developer</b> and student with a
        strong passion for creating clean, responsive, and modern websites.
        While web development is my primary focus, I'm also deeply interested in{" "}
        <b>system programming</b> as a side pursuit—exploring how things work
        under the hood.
      </p>
    </div>
  );
};

const WhatIDoSection = () => {
  return (
    <div>
      <SectionTitle text="What I Do?" />
      <ul>
        <li>
          Build modern and responsive websites using HTML, CSS, JavaScript (and
          TypeScript)
        </li>
        <li>
          Create well-structured UI layouts and maintainable components for
          better UX
        </li>
        <li>Plan and structure clean, scalable frontends</li>
        <li>
          Continuously learn, upgrade, and refactor to follow the best practices
          and new trends
        </li>
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const languages = ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"];
  const frameworksAndLibs = [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "AOS",
    "Axios",
    "React Router",
  ];
  const toolsAndTech = [
    "Git",
    "GitHub",
    "VS Code",
    "Vite",
    "NPM",
    "Chrome DevTools",
    "Figma",
  ];
  const deploymentAndHosting = ["Netlify", "Vercel", "GitHub Pages", "ngrok"];
  const familiarSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Postman",
    "bash",
    "Python",
    "C",
  ];

  return (
    <div>
      <SectionTitle text="Where I'm Skilled In" />
      <CategoryList label="Core Languages" items={languages} />
      <CategoryList label="Frameworks & Libraries" items={frameworksAndLibs} />
      <CategoryList label="Tools & Technologies" items={toolsAndTech} />
      <CategoryList label="Deployment & Hosting" items={deploymentAndHosting} />
      <CategoryList
        label="Familiar With (Not Offering Yet)"
        items={familiarSkills}
      />
    </div>
  );
};

const WhyMeSection = () => {
  return (
    <div>
      <SectionTitle text="Why Choose Me?" />
      <ul>
        <li>Clean, semantic code</li>
        <li>Fully responsive design for all screen sizes</li>
        <li>Uses the latest and stable technologies</li>
        <li>Unlimited revisions and open to your feedback</li>
        <li>Quick responses and fast delivery</li>
        <li>Affordable pricing for high-quality work</li>
        <li>
          No need to be tech-savvy—I'll guide you step by step throughout the
          process
        </li>
      </ul>
    </div>
  );
};

const BioCard = () => {
  const bioTags = [
    "Freelance Ready",
    "Responsive UI",
    "Fast Delivery",
    "Self-Taught",
    "Open to Feedback",
  ];
  return (
    <div data-ui="bioCard" className="">
      <div data-ui="myPic" className="">
        {/* <img src="" alt="" /> */}
        <div data-ui="highlight">For Hire</div>
      </div>
      <div data-ui="job" className="">
        Frontend Web Developer
      </div>
      <ul data-ui="tags" className="flex flex-wrap gap-2">
        {bioTags.map((tag, index) => (
          <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
            {tag}
          </li>
        ))}
      </ul>
      <a href="#projects">View Projects</a>
    </div>
  );
};

// Main About Section
const About = () => {
  return (
    <div id="about" className="w-full">
      <SectionHead title="About Me" icon="ri-id-card-fill px-2" />
      <IntroductionSection />
      <WhatIDoSection />
      <SkillsSection />
      <WhyMeSection />
      <BioCard />
    </div>
  );
};

export default About;
