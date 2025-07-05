import React from "react";
import Lottie from "lottie-react";
import codingAnimation from "../assets/Animations/codingAnimation.json";

const SocialLink = ({ url, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

const Home = () => {
  const socialData = [
    { url: "https://github.com/KishanDevX", icon: "ri-github-fill" },
    {
      url: "https://www.linkedin.com/in/kishan-kumar-7057a831a/",
      icon: "ri-linkedin-box-fill",
    },
    { url: "https://x.com/KishanDevX", icon: "ri-twitter-x-line" },
  ];

  return (
    <div
      id="home"
      className="w-[90%] lg:w-[80%] h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-10"
    >
      {/* Temporary responsive check */}
      <div
        data-ui="resCheck"
        className="bg-red-400 sm:bg-orange-400 md:bg-yellow-400 lg:bg-green-400 xl:bg-blue-400 fixed bottom-10 right-10 h-16 w-16 rounded-full flex items-center justify-center border-2 text-black/80 text-lg sm:text-xl font-bold opacity-80 shadow-lg"
      >
        R
      </div>

      <div
        data-ui="animation"
        className="h-60 w-76 md:h-70 md:w-86 lg:h-80 lg:w-96 mb-10"
      >
        <Lottie animationData={codingAnimation} loop={true} />
      </div>

      <div
        data-ui="intro"
        className="w-[90%] sm:w-[70%] md:w-[60%] flex flex-col justify-center"
      >
        <p className="text-base sm:text-lg text-prime/80">Hello</p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900/90">
          I am <span className="text-prime font-black">Kishan Kumar</span>
        </h1>

        <p className="ml-4 text-sm sm:text-base mt-2 lg:mt-5 text-black/80">
          @Web Developer
        </p>

        <p className="text-black/70 text-sm sm:text-base md:text-lg lg:w-[80%]">
          I'm a passionate frontend web developer focused on building clean,
          responsive, and modern websites. <br /> This portfolio highlights my
          skills, design approach, and the value I bring to freelance projects.
        </p>

        <ul
          data-ui="socials"
          className="ml-4 flex gap-3 text-3xl sm:text-3xl text-prime mt-4"
        >
          {socialData.map((link, i) => (
            <SocialLink key={i} url={link.url} icon={link.icon} />
          ))}
        </ul>

        <button className="mt-6 shadow-md px-6 py-1 self-center bg-prime text-white rounded-lg">
          Reach Out
        </button>
      </div>
    </div>
  );
};

export default Home;
