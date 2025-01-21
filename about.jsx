import React, { useState, useEffect } from "react";
import A1 from "../assets/a1.png";
import AA1 from "../assets/aa1.png";
import AA2 from "../assets/aa2.png";
import AA3 from "../assets/aa3.png";
import AA4 from "../assets/aa4.png";
import A6 from "../company/google.png";
import A7 from "../company/meta.png";
import A8 from "../company/instagram.png";
import A9 from "../company/google-analytics.png";
import A10 from "../company/wordpress.png";
import A11 from "../company/instapage.png";
import A12 from "../company/shopify.png";
import A13 from "../company/klaviyo.png";
import A14 from "../company/Mailchimp.png";
import AL from "../assets/al.png";
import BG from "../services/s1.png";

const logos = [A6, A7, A8, A9, A10, A11, A12, A13, A14];

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const animateCount = (setCount, target) => {
      let start = 0;
      const step = target / 100;
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 30);
    };

    animateCount(setCount1, 190);
    animateCount(setCount2, 250); // Represent 250M as 250
    animateCount(setCount3, 85); // Represent 85K as 85
    animateCount(setCount4, 17);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeText = (text, delayFactor) => {
    return text.split("").map((char, index) => {
      const opacity = Math.min((scrollPosition - delayFactor * index) / 300, 1);
      return (
        <span
          key={index}
          style={{
            color: `rgba(0, 0, 0, ${Math.max(0, opacity)})`,
            transition: "color 0.5s ease",
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-black text-white min-h-screen">
        <img
          src={A1}
          alt="Creative workspace at CoderDesign"
          className="w-full h-screen object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            We are Coder Design.
          </h1>
          <h2 className="text-xl md:text-3xl mt-10 text-white">
            Building digital solutions for the future, one creative step at a
            time.
          </h2>
        </div>
      </div>

      {/* Mission Section */}
      <div className="p-8 bg-white font-roboto">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
          <div className="flex items-center space-x-2 md:w-1/4">
            <div className="w-6 h-6 bg-black"></div>
            <span className="text-black font-bold text-2xl">OUR MISSION</span>
          </div>

          <div className="p-4 md:w-3/4">
            <p className="text-2xl md:text-5xl leading-tight font-['Playfair_Display'] tracking-wide">
              {fadeText(
                "Whether you're a business owner, a creator, an agency, or an enterprise, we're dedicated to bringing you a complete solution for building professional websites, managing your business and growing without limits. At CoderDesign, we strive to stay ahead of the curve, always evolving to give you the most efficient and innovative tools to help you succeed at every stage in your journey.",
                1.5
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="p-20 space-y-8">
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-black mr-2"></div>
          <h1 className="text-lg font-bold">NUMBERS & FIGURES</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-center border-t border-gray-300 py-8 group relative">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-6xl md:text-9xl font-bold">{count1}</div>
            <div className="text-md md:text-lg mt-2">
              Countries around the world
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0 relative">
            <img
              src={AA1}
              alt="People walking in a modern office building"
              className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out md:absolute md:right-0"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-300 py-8 group relative">
          <div className="text-lg md:text-left">Users Worldwide</div>
          <img
            src={AA2}
            alt="Global user network"
            className="w-full md:w-1/3 mx-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          />
          <div className="text-9xl font-bold">{count2.toLocaleString()}M+</div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-300 py-8 group">
          <div className="text-9xl font-bold">{count3.toLocaleString()}K+</div>
          <div className="text-lg mt-4 md:mt-0 md:mx-4 text-center">
            Sites created per day
          </div>
          <img
            src={AA3}
            alt="Website building process"
            className="w-full md:w-1/3 mx-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          />
        </div>

        <div className="relative border-t border-gray-300 py-8 group">
          <div className="flex flex-col md:flex-row items-center justify-center space-x-6">
            <img
              src={AA4}
              alt="Hidden"
              className="w-full md:w-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="text-center">
              <div className="text-9xl font-bold">{count4}</div>
              <div className="text-lg mt-2">Countries around the world</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 opacity-50 blur-md -z-10"></div>
        <div className="flex items-center mb-4 ml-10">
          <div className="w-2 h-2 bg-black mr-2"></div>
          <h1 className="text-lg font-bold">OUR MILESTONES</h1>
        </div>
        <div className="flex items-center justify-between min-w-[1200px] py-20 px-10">
          {/* 2006 */}
          <div className="text-center mb-20">
            <div className="text-9xl font-semibold">2018</div>
            <div className="text-sm font-semibold mt-40">FOUNDED</div>
            <div className="mt-2 text-sm">
              Wix was founded by Avishai Abrahami,
              <br /> Nadav Abrahami and Giora Kaplan.
            </div>
          </div>
          {/* 2008 */}
          <div className="text-center">
            <div className="mt-4 text-sm font-semibold">
              FLASH EDITOR LAUNCHED
            </div>
            <div className="mt-2 text-sm">Wix launches its Flash Editor.</div>
            <div className="text-9xl font-semibold mt-40">2019</div>
          </div>
          {/* 2009 */}
          <div className="text-center mb-20">
            <div className="text-9xl font-semibold">2021</div>
            <div className="text-sm font-semibold mt-40">1 MILLION USERS</div>
            <div className="mt-2 text-sm">
              Wix reaches 1 million users worldwide.
            </div>
          </div>
          {/* 2012 */}
          <div className="text-center">
            <div className="mt-4 text-sm font-semibold">
              HTML5 EDITOR LAUNCHED
            </div>
            <div className="mt-2 text-sm">APP MARKET IS LAUNCHED</div>
            <div className="text-9xl font-semibold mt-40">2023</div>
          </div>
          {/* 2013 */}
          <div className="text-center mb-20">
            <div className="text-9xl font-semibold">2024</div>
            <div className="text-sm font-semibold mt-40">IPO ON NASDAQ</div>
            <div className="mt-2 text-sm">
              November 6th, CoderDesign goes public on the NASDAQ global market.
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-[1510px] border-t border-black"></div>
        <div className="absolute top-1/2 left-[26%] w-2 h-2 bg-black rounded-full transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-[54%] w-2 h-2 bg-black rounded-full transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-[74%] w-2 h-2 bg-black rounded-full transform -translate-y-1/2"></div>
      </div>

      <div className="py-12 bg-black px-4">
        {/* Centered Container */}
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            {/* Heading Section */}
            <div className="md:w-1/2 flex flex-col items-start mb-12 md:mb-0">
              <h1 className="text-5xl md:text-5xl italic font-bold mb-12 text-white">
                Our Core Values to Live By
              </h1>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:w-1/2">
              {/* Card 1 */}
              <div className="flex flex-col items-start bg-transparent p-6 rounded-lg shadow-lg">
                <div className="text-6xl font-bold text-blue-600 mb-4">1</div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Love Your Craft
                </h2>
                <p className="text-base text-white">
                  We’re here because we love what we do. It’s our passion,
                  hobby, career, and vocation. We’re looking for others who feel
                  the same way.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-start bg-transparent p-6 rounded-lg shadow-lg">
                <div className="text-6xl font-bold text-blue-600 mb-4">2</div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Be Bold. Be Humble.
                </h2>
                <p className="text-base text-white">
                  There is no top-down. We lead from the bottom and the edges.
                  Everyone drives. We celebrate ideas over egos, where the best
                  idea wins, regardless of who or where it comes from.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-start bg-transparent p-6 rounded-lg shadow-lg">
                <div className="text-6xl font-bold text-blue-600 mb-4">3</div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Be Better. Always Push Forward
                </h2>
                <p className="text-base text-white">
                  We’re on a tireless pursuit to become better and expect those
                  around us to do the same.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-start bg-transparent p-6 rounded-lg shadow-lg">
                <div className="text-6xl font-bold text-blue-600 mb-4">4</div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Be a Professional
                </h2>
                <p className="text-base text-white">
                  There’s important work to be done. Speak up. Be present.
                  Provide value, with honesty and candour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-16">
        <h1 className="text-4xl md:text-7xl font-bold text-center mb-12">
          Our technology partners and <br /> certifications
        </h1>
        <div className="flex animate-marquee space-x-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 flex justify-center items-center transition-all duration-300 filter grayscale hover:grayscale-0"
            >
              <img
                src={logo}
                alt={`Technology Partner ${index + 1}`}
                className="h-16 md:h-20"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-40 flex justify-center items-center transition-all duration-300 filter grayscale hover:grayscale-0"
            >
              <img
                src={logo}
                alt={`Technology Partner Duplicate ${index + 1}`}
                className="h-16 md:h-20"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${BG})`, 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
        <div className="flex items-center justify-center space-x-10 relative z-10">
          <div className="relative">
            <img
              src={AL} // Replace with the actual path to your image
              alt="A person walking in front of a building with the logo 'Squarespace'"
              className="w-96 h-auto transform -rotate-6"
            />
          </div>
          <div className="text-white">
            <a href="/contact" className="text-5xl font-bold">Contact Us</a>
            <hr className="w-1/2 mb-6 border-white mt-5" />

            <a
              href="/website-development"
              className="block text-4xl font-semibold mb-4 hover:underline"
            >
              Website Development
            </a>
            <a
              href="/graphic-designing"
              className="block text-4xl font-semibold mb-4 hover:underline"
            >
              Graphics Designing
            </a>
            <a
              href="/automation-tools"
              className="block text-4xl font-semibold mb-4 hover:underline"
            >
              Automation Tools
            </a>
            <a
              href="/e-commerce"
              className="block text-4xl font-semibold hover:underline"
            >
              E-Commerce
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
