import React, { useState } from "react";
import SectionHead from "../components/common/SectionHead";
import SubHeading from "../components/common/SubHeading";

//common
const Package = ({ gig, type }) => {
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

const Testimonial = ({ pic, name, feedback, rating }) => {
  return (
    <div
      data-ui="testimonial"
      className=" bg-white rounded-lg mx-8 mt-2 p-3 shadow-xs"
    >
      <div data-ui="clientPic" className="flex justify-center items-center">
        <img
          src={pic}
          alt={name}
          className="rounded-full border-2 border-black h-15 w-15 m-3"
        />
      </div>
      <div data-ui="clientsTextData" className="flex flex-col items-center">
        <h4 className="text-prime font-bold">{name}</h4>
        <p className="px-3 text-gray-800/90 text-center mt-2">{feedback}</p>
        <div className="rating">
          {Array.from({ length: rating }, (_, i) => (
            <i
              key={i}
              className="ri-star-fill text-yellow-300 text-shadow-2xs"
            ></i>
          ))}
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
      que: "Do I need to buy hosting or a domain separately?",
      ans: "If you don't have them already, I'll guide you step-by-step on how and where to buy them affordably. I don't sell hosting myself, but I help set it up for you as part of the service.",
    },
    {
      que: "I don't understand tech stuff, can I still get a website?",
      ans: "Yes, absolutely! You don't need to know anything technical. Just tell me what your business or goal is, and I'll take care of the rest—design, setup, and even minor edits.",
    },
    {
      que: "Will I be able to update the website myself later?",
      ans: "I usually build hand-coded websites. If you want to make changes later (like updating text or images), I can either help you or guide you with easy instructions.",
    },
    {
      que: "Are there any hidden or extra charges later?",
      ans: "Nope! Everything is clearly mentioned in the package. You only pay once. If you ask for something totally new outside the package later, we'll discuss it first.",
    },
    {
      que: "What if I don't like the first version you send?",
      ans: "That's okay! You get unlimited revisions within the support period. I'll keep tweaking it until you're fully satisfied—your happiness comes first.",
    },
    {
      que: "Can I see some samples before ordering?",
      ans: "Yes! Just message me and I'll share live examples or previews of websites I've made before, so you can feel confident in what you'll get.",
    },
    {
      que: "What if I already have a design idea or sketch?",
      ans: "Perfect! You can share any references, sketches, or ideas you have. I'll convert your vision into a real website exactly how you imagined it.",
    },
    {
      que: "Will my website show up on Google?",
      ans: "Yes, your site will be structured in a Google-friendly way. For basic packages, I include SEO-ready code. For deeper SEO help, I can guide you separately too.",
    },
    {
      que: "What happens after you deliver the website?",
      ans: "You get full access to your files. I also provide free support for a few weeks, depending on the package, in case you need help or minor changes.",
    },
    {
      que: "Can you make it look good on mobile too?",
      ans: "Of course! Every site I build is fully mobile-friendly. It'll work smoothly on phones, tablets, and desktops.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const [faqLimit, setfaqLimit] = useState(4);

  return (
    <div data-ui="FAQs" className="px-5 my-7">
      <SubHeading text={"FAQs"} icon={"ri-questionnaire-line"} />
      {faqList.map((pair, idx) => {
        if (idx < faqLimit) {
          return (
            <div
              data-ui="faq-Pair"
              data-aos="zoom-in-right"
              data-aos-duration={`${idx * 200}`}
              className="w-full flex flex-col justify-center mb-2"
              key={`pair${idx}`}
            >
              <button
                onClick={() => {
                  toggleAnswer(idx);
                }}
                className="bg-gradient-to-r flex z-3 backdrop-blur-6xl text-left from-prime to-prime/60 py-2 text-white shadow-xs w-full"
              >
                <span className="w-[90%] px-4">{pair.que}</span>
                <span className="w-[10%] flex items-center">
                  {openIndex === idx ? (
                    <i className="ri-arrow-down-s-fill"></i>
                  ) : (
                    <i className="ri-arrow-right-s-fill"></i>
                  )}
                </span>
              </button>
              {openIndex === idx && (
                <p
                  data-aos="fade-down"
                  className="px-5 py-2 text-gray-500 bg-white shadow-sm text-sm"
                >
                  {pair.ans}
                </p>
              )}
            </div>
          );
        }
      })}
      <button>
        {faqLimit < faqList.length ? (
          <span
            className="text-prime/80"
            onClick={() => {
              setfaqLimit(faqLimit + 4);
            }}
          >
            show more...
          </span>
        ) : (
          <span className="text-gray-500/80" onClick={() => setfaqLimit(4)}>
            ...show less
          </span>
        )}
      </button>
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

const TestimonialSection = () => {
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
    <div data-ui="testimonials" className="px-5">
      <SubHeading text="testimonials" icon="ri-question-answer-fill" />
      <h2 className="text-gray-600/90">(What My Clients Say)</h2>
      <div data-ui="feedBackBox" className="">
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
        <Package gig={basicPack} type={"basic"} />
        <Package gig={standardPack} type={"standard"} />
        <Package gig={premiumPack} type={"premium"} />
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
      <TestimonialSection />
      <LimitedOffer />
    </div>
  );
};

export default Services;
