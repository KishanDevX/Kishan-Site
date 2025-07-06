import React from "react";
import SectionHead from "../components/common/SectionHead";

//common
const Packages = ({ gig }) => {
  return (
    <div data-ui="packageGig" className="py-5">
      <h2>{gig.title}</h2>
      <span>
        <b>For:</b>
        {gig.for}
      </span>
      <span>
        <b>Perfect for:</b>
        {gig.perfectFor}
      </span>
      <h3>what you get:</h3>
      <ul>
        {gig.gives.map((give, index) => (
          <li key={index}>{give}</li>
        ))}
      </ul>
      <span>Introductory Price: {gig.price}</span>
      <span>only {gig.leftSlots} slots left</span>
      <a href={gig.link}>Order Now</a>
    </div>
  );
};

// about section components
const IntroPara = () => {
  return (
    <>
      <p>
        As a young developer specializing in modern web solutions, I help
        <b> small businesses, creators, and professionals</b> establish their
        digital presence with <b>fast, affordable, and conversion-focused</b>{" "}
        websites. Unlike agencies that charge premium rates, I deliver{" "}
        <b>hand-coded websites with unlimited revisions</b>—ensuring you get
        exactly what you need without breaking the bank.
      </p>
      <PackagesTable />
      <p>
        All packages include{" "}
        <b>
          mobile-friendly designs, SEO basics, and 1-month post-delivery support
        </b>
        . Need something custom? <a href="#contact">Just ask!</a>
      </p>
    </>
  );
};

const PackagesTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Features</th>
          <th>Basic</th>
          <th>Standard</th>
          <th>Advanced</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pages</td>
          <td>1</td>
          <td>3-4</td>
          <td>6+</td>
        </tr>
        <tr>
          <td>Revisions</td>
          <td>unlimited</td>
          <td>unlimited</td>
          <td>unlimited</td>
        </tr>
        <tr>
          <td>Support Period</td>
          <td>1 month</td>
          <td>2 month</td>
          <td>3 month</td>
        </tr>
        <tr>
          <td>Best For</td>
          <td>portfolios</td>
          <td>small businesses</td>
          <td>startups</td>
        </tr>
        <tr>
          <td>starting from</td>
          <td>₹500</td>
          <td>₹800</td>
          <td>₹1200</td>
        </tr>
      </tbody>
    </table>
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
      "Advanced animations (Framer Motion/GSAP)",
      "Role-based access (Admin/user views if needed)",
      "Database setup (Firebase/MongoDB for data storage)",
      "3-month priority support",
    ],
    price: "₹1,200",
    leftSlots: 5,
    link: "#",
  };

  return (
    <div id="services" className="w-full">
      <SectionHead title="Services" icon="ri-briefcase-fill" />
      <IntroPara />
      <div data-ui="packages" className="">
        <Packages gig={basicPack} />
        <Packages gig={standardPack} />
        <Packages gig={premiumPack} />
      </div>
      <LimitedOffer />
    </div>
  );
};

export default Services;
