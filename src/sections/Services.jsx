import React, { useState } from "react";
import SectionHead from "../components/common/SectionHead";

//common
const Packages = ({ gig, type }) => {
  const colors = {
    basic: {
      bg: "bg-blue-300",
      text: "text-blue-500",
    },
    standard: {
      bg: "bg-amber-400",
      text: "text-amber-400",
    },
    premium: {
      bg: "bg-violet-700",
      text: "text-violet-700",
    },
  };

  const [gigFeatures, setgigFeatures] = useState(false);

  return (
    <div
      data-ui="packageGig"
      data-aos="zoom-in"
      className="shadow-xl  rounded-2xl mx-5 mb-15"
    >
      <div
        data-ui="screen"
        className={`${colors[type].bg} h-50 rounded-t-2xl m-1 flex flex-col justify-center items-center`}
      >
        <span className="text-2xl text-white capitalize">{type}</span>
        <span className="text-4xl text-white py-1 font-bold text-shadow-2xs">
          {gig.price}
        </span>
        <h2 className="text-white/80">{gig.title}</h2>
      </div>
      <div data-ui="textPart" className="p-4">
        <span className="text-gray-600/90">
          <b className="text-gray-600">For:</b> {gig.for}
        </span>
        <br />
        <span className="text-gray-600/90">
          <b className="text-gray-600">Perfect for:</b> {gig.perfectFor}
        </span>
        <br />
        <button
          className={`pt-6 ${colors[type].text} capitalize font-semibold flex items-center `}
          onClick={() => {
            setgigFeatures((prev) => !prev);
          }}
        >
          <span>what you get</span>
          {gigFeatures ? (
            <i className="ri-arrow-drop-down-line text-2xl"></i>
          ) : (
            <i className="ri-arrow-drop-right-line text-2xl"></i>
          )}
        </button>
        {gigFeatures && (
          <ul className="text-gray-800/90 pb-4">
            {gig.gives.map((give, index) => {
              return (
                <li
                  key={index}
                  data-aos="zoom-in-up"
                  data-aos-delay={`${index * 100}`}
                  className="mb-3"
                >
                  <i
                    className={`${colors[type].text} ri-check-line`}
                    key={index}
                  ></i>{" "}
                  <span key={`${index} part`}>{give}</span>
                </li>
              );
            })}
          </ul>
        )}
        <h5 className="text-gray-900/90 my-4">
          <span className={`font-semibold ${colors[type].text}`}>
            Introductory Price:
          </span>{" "}
          {gig.originPrice && (
            <span className="text-gray-400 line-through">
              {gig.originPrice}
            </span>
          )}{" "}
          <span className="text-gray-800/80">{gig.price}</span>
        </h5>
        <br />
        <span className="text-red-500/70 text-sm">
          only {gig.leftSlots} slots left
        </span>
        <div className="flex justify-center py-5">
          <a
            href={gig.link}
            className={`${colors[type].bg} text-white text-shadow-2xs px-15 mt-10 rounded-full py-2`}
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

// about section components
const IntroPara = () => {
  return (
    <>
      <p className="p-5 text-lg text-gray-700/90">
        As a young developer specializing in modern web solutions, I help
        <b> small businesses, creators, and professionals</b> establish their
        digital presence with <b>fast, affordable, and conversion-focused</b>{" "}
        websites.
        <br /> <br />
        Unlike agencies that charge premium rates, I deliver{" "}
        <b>hand-coded websites with unlimited revisions</b>—ensuring you get
        exactly what you need without breaking the bank.
      </p>
    </>
  );
};

const PackagesTable = () => {
  const [IsTable, setIsTable] = useState(false);
  return (
    <>
      <div className="text-sm text-gray-600 py-2 mb-4 text-center ">
        Want a quick comparison?{" "}
        <button
          onClick={() => {
            setIsTable((prev) => !prev);
          }}
        >
          <span
            className={`${
              !IsTable ? "text-blue-600" : "text-blue-600/70"
            } font-semibold `}
          >
            see feature table
          </span>
        </button>
      </div>
      {IsTable && (
        <div className="overflow-x-auto no-scrollbar pb-5 px-5">
          <table
            data-aos="zoom-in"
            className="w-full shadow-xs border-collapse overflow-hidden"
          >
            <thead className=" bg-prime/80 text-white">
              <tr>
                <th className="text-left py-3 px-4 font-semibold border-b">
                  Features
                </th>
                <th className="text-center py-3 px-4 font-semibold border-b">
                  Basic
                </th>
                <th className="text-center py-3 px-4 bg-prime/70 font-semibold border-b">
                  Standard{" "}
                </th>
                <th className="text-center py-3 px-4 font-semibold border-b">
                  Advanced
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 font-medium">Pages</td>
                <td className="text-center py-3 px-4">1</td>
                <td className="text-center py-3 px-4 bg-blue-50">3-4</td>
                <td className="text-center py-3 px-4">6+</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Revisions</td>
                <td className="text-center py-3 px-4">∞</td>
                <td className="text-center py-3 px-4 bg-blue-50">∞</td>
                <td className="text-center py-3 px-4">∞</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Support</td>
                <td className="text-center py-3 px-4">1 month</td>
                <td className="text-center py-3 px-4 bg-blue-50">2 months</td>
                <td className="text-center py-3 px-4">3 months</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Best For</td>
                <td className="text-center py-3 px-4">Portfolios</td>
                <td className="text-center py-3 px-4 bg-blue-50">
                  Small Businesses
                </td>
                <td className="text-center py-3 px-4">Startups</td>
              </tr>
              <tr className="border-t-2 border-gray-300">
                <td className="py-3 px-4 font-bold">From</td>
                <td className="text-center py-3 px-4 font-bold text-lg">
                  ₹500
                </td>
                <td className="text-center py-3 px-4 font-bold text-lg bg-blue-50 text-blue-600">
                  ₹800
                </td>
                <td className="text-center py-3 px-4 font-bold text-lg">
                  ₹1200
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

const FAQSection = () => {
  const faqList = [
    {
      que: "1) what if i don't get responses from you?",
      ans: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facil dolore magni debitis libero unde vitae, perferendis nam ab quisquam nihil sunt dolor, deserunt laborum ",
    },
    {
      que: "2) what if i don't get responses from you?",
      ans: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facil dolore magni debitis libero unde vitae, perferendis nam ab quisquam nihil sunt dolor, deserunt laborum ",
    },
    {
      que: "3) what if i don't get responses from you?",
      ans: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facil dolore magni debitis libero unde vitae, perferendis nam ab quisquam nihil sunt dolor, deserunt laborum ",
    },
    {
      que: "4) what if i don't get responses from you?",
      ans: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facil dolore magni debitis libero unde vitae, perferendis nam ab quisquam nihil sunt dolor, deserunt laborum ",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div data-ui="FAQs" className="">
      {faqList.map((pair, idx) => {
        return (
          <div key={`pair${idx}`}>
            <button
              onClick={() => {
                toggleAnswer(idx);
              }}
            >
              {pair.que}
            </button>
            <br />
            {openIndex === idx && (
              <p className="mt-2 text-gray-700 text-sm">{pair.ans}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

const LimitedOffer = () => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
      <h3 className="font-bold text-lg">🚀 Special Launch Offer</h3>
      <p>
        <b>Only 3 slots left</b> at these prices! As my skills grow, rates will
        increase—but if you order now, you're <b>locked into current pricing</b>{" "}
        with priority support.
      </p>
      <p className="mt-2">
        ⏳ <b>Deadline</b>:{" "}
        {new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
        })}{" "}
        or until slots fill up.
      </p>
    </div>
  );
};

const Testimonial = ({ pic, name, feedback, rating }) => {
  return (
    <div className="testimonial">
      <img src={pic} alt={name} />
      <h4>{name}</h4>
      <p>{feedback}</p>
      <div className="rating">
        {Array.from({ length: rating }, (_, i) => (
          <i key={i} className="ri-star-fill"></i>
        ))}
      </div>
    </div>
  );
};

// main services Section
const Services = () => {
  const basicPack = {
    title: "Essential Starter Package",
    for: "Individuals needing a simple, professional online presence",
    perfectFor: "Portfolios, resumes, event pages, or small service providers",
    gives: [
      " 1-page responsive website (Mobile + Desktop optimized)",
      "4+ standard sections (Hero, About, Services, Contact)",
      "Basic SEO setup (Google-friendly structure)",
      "1-round of content integration (You provide text/images)",
      "Unlimited revisions within 7 days of delivery",
      "1-month free support for minor fixes",
    ],
    price: "₹500",
    leftSlots: 3,
    link: "#",
  };

  const standardPack = {
    title: "Business Growth Package",
    for: "Small businesses needing credibility and lead generation",
    perfectFor: "Local services, freelancers, or startups",
    gives: [
      "3-4 page website (Home, About, Services, Contact)",
      "Built with React + Tailwind CSS (Faster load times)",
      "Custom design matching your brand (Colors/fonts)",
      "Interactive elements (Dropdowns, hover effects)",
      "Basic contact form (Email integration)",
      "Google Maps integration (For local businesses)",
      "Unlimited revisions + 2-month support",
    ],
    price: "₹800",
    originPrice: "₹1,499",
    leftSlots: 7,
    link: "#",
  };

  const premiumPack = {
    title: "Premium Web App Package",
    for: "Startups or creators needing advanced functionality",
    perfectFor: "Blogs, membership sites, or API-driven projects",
    gives: [
      "6+ pages with dynamic content structure",
      "API integrations (Contact forms, newsletter signup)",
      "Advanced animations (Framer Motion)",
      "Role-based access (Admin/user views if needed)",
      "Database setup (Firebase/MongoDB for data storage)",
      "3-month priority support",
    ],
    price: "₹1,200",
    originPrice: "₹2,499",
    leftSlots: 5,
    link: "#",
  };

  const testimonialData = [
    {
      pic: "#",
      name: "John Doe",
      feedback: "Kishan did an amazing job on my website!",
      rating: 5,
    },
    {
      pic: "#",
      name: "Jane Smith",
      feedback: "Highly recommend! Professional and quick.",
      rating: 4,
    },
    {
      pic: "#",
      name: "Alice Johnson",
      feedback: "Great service, very satisfied with the results.",
      rating: 5,
    },
  ];

  return (
    <div
      id="services"
      className="bg-gradient-to-b from-gray-100 to-white w-full"
    >
      <SectionHead title="Services" icon="ri-briefcase-fill" />
      <IntroPara />
      <div data-ui="packages" className="">
        <h3 id="offerSet" className="p-3 mt-4 text-prime/85 text-lg font-black">
          <i className="ri-price-tag-3-line"></i> <span>Website Packages</span>
          <br />
          <span className="text-2xl px-4 underline text-prime">
            Tailored for You
          </span>
        </h3>
        <Packages gig={basicPack} color={"blue-200"} type={"basic"} />
        <Packages gig={standardPack} color={"amber-400"} type={"standard"} />
        <Packages gig={premiumPack} color={"violet-700"} type={"premium"} />
      </div>
      <p className="px-4 text-gray-700/90">
        All packages include{" "}
        <b>
          mobile-friendly designs, SEO basics, and 1-month post-delivery support
        </b>
        . Need something custom? <a href="#contact">Just ask!</a>
      </p>
      <PackagesTable />
      <FAQSection />
      <div data-ui="testimonials" className="">
        <h2>What My Clients Say</h2>
        {testimonialData.map((testimonial, index) => (
          <Testimonial
            key={index}
            pic={testimonial.pic}
            name={testimonial.name}
            feedback={testimonial.feedback}
            rating={testimonial.rating}
          />
        ))}
      </div>
      <LimitedOffer />
    </div>
  );
};

export default Services;
