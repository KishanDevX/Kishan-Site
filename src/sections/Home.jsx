import React from "react";
import Lottie from "lottie-react";
import codingAnimation from "../assets/Animations/codingAnimation.json";

// common
const SocialLink = ({ url, icon }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={icon}></i>
    </a>
  </li>
);

// home section components
const AnimationSection = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center">
      <Lottie
        animationData={codingAnimation}
        loop={true}
        className="w-full max-w-md"
      />
    </div>
  );
};

// main Home component
const Home = () => {
  const socialData = [
    { url: "https://github.com/KishanDevX", icon: "ri-github-fill" },
    {
      url: "https://linkedin.com/in/kishan-kumar",
      icon: "ri-linkedin-box-fill",
    },
    { url: "https://x.com/KishanDevX", icon: "ri-twitter-x-line" },
  ];

  return (
    <section
      id="home"
      className="w-[90%] lg:w-[80%] min-h-screen  mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 py-20"
    >
      <AnimationSection />

      {/* Text Content (Right) */}
      <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
        <div className="space-y-2">
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="200"
            className="text-lg text-prime/80"
          >
            Hey there!
          </p>
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white/90 text-gray-900">
            I'm <span className="text-prime">Kishan Kumar</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-white/60">
            Frontend Developer • Freelancer
          </p>
        </div>

        {/* Value Proposition */}
        <p className="text-gray-700 dark:text-white/80 md:text-lg leading-relaxed">
          I build{" "}
          <span className="font-semibold text-prime">
            fast, responsive websites
          </span>{" "}
          that help small businesses and creators stand out online. Currently
          accepting select freelance projects.
        </p>

        {/* Social Links */}
        <ul className="flex gap-4 text-4xl text-prime mt-6">
          {socialData.map((link, i) => (
            <SocialLink key={i} url={link.url} icon={link.icon} />
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="flex items-center w-full gap-5 mt-6">
          <a
            href="#projects"
            className="px-6 py-1 bg-prime text-white rounded-lg shadow-md hover:bg-prime/90 transition"
          >
            See my Work
          </a>
          <a
            href="#contact"
            className="px-6 py-1 border-2 border-prime text-prime rounded-lg hover:bg-prime/10 transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
