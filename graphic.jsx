import React, { useState } from "react";
import BG from "../services/s1.png";
import G1 from "../graphic/3dm.png";
import G2 from "../graphic/ad.png";
import G3 from "../graphic/ai.png";
import G4 from "../graphic/am.png";
import G5 from "../graphic/ap.png";
import G6 from "../graphic/b.png";
import G7 from "../graphic/c.png";
import G8 from "../graphic/c4d.png";
import G9 from "../graphic/cd.png";
import G10 from "../graphic/f.png";
import G11 from "../graphic/i.png";
import G12 from "../graphic/pc.png";
import G13 from "../graphic/s.png";
import S2 from "../services/s2.png";
import S3 from "../services/s3.png";
import S4 from "../services/s4.png";
import {
  faCheckCircle,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faLightbulb,
  faTrophy,
  faClipboardCheck,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import Vue from "../tech/vue.png";
import react from "../tech/react.png";
import Ang from "../tech/ang.png";
import Node from "../tech/node.png";
import Django from "../tech/django.png";
import Spring from "../tech/spring.png";
import Php from "../tech/php.png";
import Java from "../tech/java.png";
import Flask from "../tech/flask.png";
import Mongo from "../tech/mongo.png";
import Psql from "../tech/psql.png";
import Oracle from "../tech/oracle.png";
import Sqls from "../tech/sqls.png";
import Plsql from "../tech/plsql.png";
import Aws from "../tech/aws.png";
import Azure from "../tech/azure.png";
import Gcloud from "../tech/gcloud.png";
import Kub from "../tech/kub.png";
import Docker from "../tech/docker.png";
import Apache from "../tech/apache.png";

const logos = [G1,G2,G3,G4,G5,G6,G7,G8,G9,G10,G11,G12,G13];

const Graphic = () => {
  const [selectedOption, setSelectedOption] = useState("Frontend");

  const sections = {
    Frontend: {
      heading: "Frontend",
      description:
        "Redefine your website front end with tech stacks that help build smooth user interfaces for seamless user experiences.",
      icons: [{ src: Vue }, { src: react }, { src: Ang }],
    },
    Backend: {
      heading: "Backend",
      description:
        "Build powerful backend systems that ensure seamless data handling, performance, and scalability for your applications.",
      icons: [
        { src: Node },
        { src: Django },
        { src: Spring },
        { src: Flask },
        { src: Java },
        { src: Php },
      ],
    },
    Database: {
      heading: "Database",
      description:
        "Manage your data efficiently with robust database systems designed for performance and reliability.",
      icons: [
        { src: Mongo },
        { src: Psql },
        { src: Oracle },
        { src: Sqls },
        { src: Plsql },
      ],
    },
    Cloud: {
      heading: "Cloud",
      description:
        "Scale your infrastructure with secure, reliable, and cost-effective cloud solutions.",
      icons: [{ src: Aws }, { src: Azure }, { src: Gcloud }],
    },
    DevOps: {
      heading: "DevOps",
      description:
        "Streamline your development process with efficient DevOps practices and tools.",
      icons: [
        { src: Docker },
        { src: Kub },
        { src: Apache },
        { src: Aws },
        { src: Azure },
        { src: Gcloud },
      ],
    },
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const faqContent = [
    {
      question: "How much do your AI solutions services cost?",
      answer:
        "Our AI solutions services are tailored to your specific needs and goals. Please contact us for a detailed quote.",
    },
    {
      question: "Do you offer AI-driven voice bot integration?",
      answer:
        "Yes, we offer AI-driven voice bot integration to enhance your customer support and automate inbound calls. Please contact us for more details.",
    },
    {
      question: "Can you manage my email marketing campaigns with AI?",
      answer:
        "Yes, we offer AI-powered email marketing solutions to automate and optimize your campaigns. Please contact us to learn more.",
    },
    {
      question: "How often will I be speaking with my AI Solutions Manager?",
      answer:
        "You will have regular meetings with your AI Solutions Manager to discuss progress and strategies. The frequency of these meetings can be customized to your preferences.",
    },
    {
      question:
        "I have some other requirements to automate. Can you help me with that?",
      answer:
        "Absolutely! We specialize in custom AI solutions tailored to your unique needs. Please contact us to discuss your specific requirements and how we can assist you.",
    },
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the currently active accordion if clicked again
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  const [selectedHeading, setSelectedHeading] = useState("Logo Design");

  const headings = [
    "Logo Design",
    "Branding",
    "Web Design",
    "Digital Design",
    "Print Collateral & Corporate Stationery",
    "Animation & Video",
    "Company Statements & Annual Reports",
    "A+ Content for Amazon Sellers",
  ];

  const content = {
    "Logo Design": (
      <>
        Your Logo Design is usually the first impression a custoer has of your
        business, and it can be just the thing needed to set you apart from your
        competition.
        <br />
        <br />
        Logos have the potential to become an iconic identifier if your brand,
        so we take the time to get it right. Our graphic designers have the
        eperience, vision and expertise to create a unique logo that truly
        captures the essence of your business.
      </>
    ),
    Branding: (
      <>
        Your branding is one og your business most valuable assets because it
        shows your customers and target market who you are.
        <br />
        <br />
        We help businesses to create, plan,launch and refresh their brand
        design, and devise growth-oriented brand strategies.
      </>
    ),
    "Web Design": (
      <>
        As a leading digital agency in Perth, we design and build websites to
        accurately represent brands, and increase conversions. <br />
        <br /> Through an expert page structure built for search engine
        optimisation(SEO) and using well-placed calls to action, you can sit
        back and relax while your website works for you.
      </>
    ),
    "Digital Design": (
      <>
        It refers to the interactivity, behaviour flow, and UX of online
        platforms such as your website or social media. We design eye-catching
        Google banner ads and much more.
      </>
    ),
    "Print Collateral & Corporate Stationery": (
      <>
        Maintaining your brand image across all mediums helps to keep your
        business at the forefront of your audience's minds. <br />
        <br /> We will help you apply your branding cohesively to corporate
        stationery and print collateral such as brochures, letterheads, etc.
      </>
    ),
    "Animation & Video": (
      <>
        Image, videos and animations are excellent tools of engagement designed
        to capture attention.
        <br />
        <br /> Our graphic designers can assist you with post-production video
        editing, or create branded illustrations to enhance your digital
        content.
      </>
    ),
    "Company Statements & Annual Reports": (
      <>
        Traditionally corporate documents are serious and somewhat tedious.
        <br />
        <br />
        Why not give your shareholders and employees the important information
        they need, in a more interesting and engaging format ? We create branded
        digital annual reports for web-based viewing that include infographics
        and videos, to more effectively commnicate your intended message.
      </>
    ),
    "A+ Content for Amazon Sellers": (
      <>
        For Amazon sellers who need content for their A section, we charge per
        module and design our modules in the following sizes.
      </>
    ),
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center bg-black px-4">
        <img
          src={BG}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-[8px]"
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Faster builds.
              <br />
              Enterprise scale.
              <br />
              Real results.
            </h1>
            <p className="text-lg mb-8">
              Webflow Enterprise empowers your team to visually build, manage,
              and optimize sophisticated web experiences at scale — all backed
              by enterprise-grade security.
            </p>
            <button
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold"
              onClick={handleOpen}
            >
              Schedule a demo
            </button>

            {/* Modal - Popup Form */}
            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="lg:w-1/2 p-8 rounded-lg shadow-lg bg-gray-900 relative">
                  {/* Close Icon */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white text-2xl"
                  >
                    &times;
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">
                        BUSINESS EMAIL
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">
                        TITLE
                      </label>
                      <input
                        type="text"
                        placeholder="What is your job title?"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        placeholder="Where do you work?"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">
                        HOW CAN WE BEST SUPPORT YOU?
                      </label>
                      <select
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select an option...
                        </option>
                        <option value="technical-support">
                          Provide Technical Support
                        </option>
                        <option value="product-questions">
                          Answer Product Questions
                        </option>
                        <option value="schedule-demo">Schedule a Demo</option>
                        <option value="pricing-info">
                          Offer Pricing Information
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">
                        COUNTRY
                      </label>
                      <select
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a country...
                        </option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                        <option value="in">India</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-500 text-sm mb-2">
                        DESCRIPTION
                      </label>
                      <textarea
                        className="w-full p-3 bg-gray-800 text-white rounded-lg resize-none overflow-auto"
                        rows="1"
                        placeholder="Write your description here..."
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold mt-10 w-full"
                  >
                    Contact sales
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  LAST NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  BUSINESS EMAIL
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  TITLE
                </label>
                <input
                  type="text"
                  placeholder="What is your job title?"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  PHONE NUMBER
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  COMPANY
                </label>
                <input
                  type="text"
                  placeholder="Where do you work?"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  HOW CAN WE BEST SUPPORT YOU?
                </label>
                <select
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option...
                  </option>
                  <option value="technical-support">
                    Provide Technical Support
                  </option>
                  <option value="product-questions">
                    Answer Product Questions
                  </option>
                  <option value="schedule-demo">Schedule a Demo</option>
                  <option value="pricing-info">
                    Offer Pricing Information
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  COUNTRY
                </label>
                <select
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a country...
                  </option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="in">India</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-500 text-sm mb-2">
                  DESCRIPTION
                </label>
                <textarea
                  className="w-full p-3 bg-gray-800 text-white rounded-lg resize-none overflow-auto"
                  rows="1"
                  placeholder="Write your description here..."
                ></textarea>
              </div>
            </div>
            <div className="mt-6 text-gray-400 text-sm">
              By submitting this form, you agree to Webflow’s{" "}
              <a href="/terms-of-service" className="text-blue-500">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-blue-500">
                Privacy Policy
              </a>
              .
            </div>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold mt-4 w-full">
              Contact sales
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-16">
        <div className="flex animate-marquee space-x-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-50 flex justify-center items-center transition-all duration-300 filter grayscale hover:grayscale-0"
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

      <div className="p-6 sm:p-8 flex flex-col lg:flex-row items-start gap-10 sm:gap-20">
        {/* Heading Section */}
        <h1 className="font-source-code-pro text-xl sm:text-2xl lg:text-3xl flex-shrink-0 lg:ml-20 mt-2 text-center lg:text-left">
          The need for
          <br />
          eCommerce
          <br />
          Development
        </h1>

        {/* Content Section */}
        <div className="lg:ml-40">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-green-500">
              eCommerce web design solutions
            </span>{" "}
            that
            <br className="hidden lg:block" />
            captivate and engage users, ensuring
            <br className="hidden lg:block" />
            customer retention
          </h2>

          <p className="text-gray-700 mb-4 text-base sm:text-lg text-center lg:text-left">
            Statistics reveal that 88% of online consumers reconsider returning
            to a website after a negative experience,
            <br className="hidden sm:block" />
            and 38% will disengage if the content or layout is unappealing. With
            2.14 billion people shopping online, these
            <br className="hidden lg:block" />
            figures underscore the importance of a compelling digital presence.
          </p>

          <p className="text-gray-700 mb-4 text-base sm:text-lg text-center lg:text-left">
            As a premier eCommerce website design company, we bring extensive
            industry experience to the table and seamlessly
            <br className="hidden lg:block" />
            blend brand vision with a robust tech stack to create your ideal
            digital e-commerce solution platform. Our eCommerce
            <br className="hidden lg:block" />
            web developers conduct a thorough analysis of your needs, define
            objectives and challenges, and decide on the
            <br className="hidden lg:block" />
            scope of your website development project.
          </p>

          <p className="text-gray-700 text-base sm:text-lg text-center lg:text-left">
            <a href="/contact" className="text-purple-600 underline">
              Contact us today
            </a>{" "}
            to start transforming your eCommerce presence and drive your online
            success.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 mt-10">
        <h1 className="text-5xl font-bold mb-6 font-[Roboto]">
          Our eCommerce Development Solutions
        </h1>
        <div className="flex flex-col md:flex-row mt-10">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src={S2}
              alt="Shopping cart with colorful bags and a laptop in the background"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-6 md:mb-0 border-r border-black">
                <ul className="space-y-6 text-2xl font-bold">
                  {headings.map((heading, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer ${
                        selectedHeading === heading ? "text-purple-500" : ""
                      }`}
                      onClick={() => setSelectedHeading(heading)}
                    >
                      {heading}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 md:pl-6">
                {selectedHeading ? (
                  <>
                    <h2 className="text-3xl font-[Roboto] mb-4">
                      {selectedHeading}
                    </h2>
                    <p className="mb-4 text-lg">{content[selectedHeading]}</p>
                  </>
                ) : (
                  <p className="text-lg text-gray-500">
                    Select a heading to see the details.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto p-6 bg-black mt-10">
        <div className="md:flex md:space-x-8 mt-10">
          <div className="md:w-[30%] md:ml-40 md:mr-4">
            <h2 className="text-lg font-semibold mb-2 text-white">
              The Unified Advantage
            </h2>
            <h1 className="text-4xl font-bold mb-6 text-white">
              Why choose us as your ecommerce web design agency?
            </h1>
            <p className="mb-4 text-white">
              We create powerful, conversion-optimized, and
              search-engine-friendly eCommerce solutions. Our omnichannel,
              seamless, and mobile-friendly{" "}
              <a href="/website-development" className="text-yellow-400">
                website design and development services
              </a>{" "}
              are designed to boost conversion rates and drive online sales
              growth.
            </p>
            <p className="mb-6 text-white">
              Curious about how our eCommerce web development agency delivers
              industry-leading services? Let’s delve into the key capabilities
              that drive our developers and solidify our reputation in the
              field.
            </p>
            <img
              src={S3}
              alt="Person looking at an eCommerce website on a laptop"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-[40%] md:mr-auto md:ml-4 space-y-8 mt-10 md:mt-0">
            <div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faCogs}
                  className="text-purple-500 text-2xl mr-3"
                />
                <h3 className="text-xl font-bold text-white">Our Process</h3>
              </div>
              <p className="text-white">
                We leverage DevOps best practices to streamline different stages
                and build high-performing e-commerce websites.
              </p>
              <p className="text-white">
                Implementing DevSecOps further ensures the security of the
                payment gateway integration within our custom ecommerce
                solutions.
              </p>
            </div>
            <hr className="border-gray-700" />
            <div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-purple-500 text-2xl mr-3"
                />
                <h3 className="text-xl font-bold text-white">
                  Proactive Consulting
                </h3>
              </div>
              <p className="text-white">
                Lead market competition with our data-driven ecommerce
                consultancy services. We combine experience with precision
                technology and expertise to create accurate checklists for your
                ecommerce apps.
              </p>
              <p className="text-white">
                Leverage our know-how to develop business-focused ecommerce
                solutions for value-driven success.
              </p>
            </div>
            <hr className="border-gray-700" />
            <div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-purple-500 text-2xl mr-3"
                />
                <h3 className="text-xl font-bold text-white">
                  Best-in-Class Technology
                </h3>
              </div>
              <p className="text-white">
                Our technical expertise drives our success as a premium
                ecommerce website design company.
              </p>
              <p className="text-white">
                We cover all latest tech options including open-source platforms
                like Magento,{" "}
                <a href="/woocommerce" className="text-yellow-400">
                  WooCommerce
                </a>
                , Shopify or enterprise platforms like Adobe, Oracle, or
                Salesforce Commerce.
              </p>
            </div>
            <hr className="border-gray-700" />
            <div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  className="text-purple-500 text-2xl mr-3"
                />
                <h3 className="text-xl font-bold text-white">Testing</h3>
              </div>
              <p className="text-white">
                Applying automated and manual ecommerce website testing
                practices to meet quality assurance and security standards, we
                build eCommerce platform solutions equipped to handle
                performance stressors and consistently deliver optimal
                functionality.
              </p>
              <p className="text-white">
                Our experts implement continuous testing following industry
                best-practices within the SDLC for a seamless deployment.
              </p>
            </div>
            <hr className="border-gray-700" />
            <div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-purple-500 text-2xl mr-3"
                />
                <h3 className="text-xl font-bold text-white">
                  Support & Maintenance
                </h3>
              </div>
              <p className="text-white">
                Continuous monitoring results in proactive plugging of
                vulnerabilities and ensures your ecommerce website and apps keep
                performing 24/7.
              </p>
              <p className="text-white">
                Prioritizing resilience, we implement improvements gathered
                through continuous feedback to keep your ecommerce solutions
                up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen p-8 bg-black">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
            Schedule a product demo
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-white">
            We’re invested in your success
          </h2>
          <p className="text-lg mb-6 text-white">
            From implementation support to in-the-moment troubleshooting, we’re
            here to help you build, scale, and optimize your sites.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center text-white">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-2"
              />
              Onboarding and training
            </li>
            <li className="flex items-center text-white">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-2"
              />
              Technical consulting
            </li>
            <li className="flex items-center text-white">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-2"
              />
              Personalized help from a dedicated CSM
            </li>
            <li className="flex items-center text-white">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-2"
              />
              On-demand phone support
            </li>
            <li className="flex items-center text-white">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-2"
              />
              Certified Webflow Partners
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
            </li>
          </ul>
          <a
            href="contact"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Contact sales
          </a>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={S4}
            alt="Screenshot of Jasper product demo"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-8 mt-10">
        {/* Left Section */}
        <div className="w-full md:w-1/3 bg-gray-200 p-8 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Technologies We Use</h2>
          <div className="space-y-3">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg border-2 ${
                  selectedOption === key
                    ? "bg-teal-500 text-white border-yellow-500"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => setSelectedOption(key)}
              >
                <span className="flex items-center">
                  <span
                    className={`w-2.5 h-2.5 rounded-full mr-2 ${
                      selectedOption === key ? "bg-white" : "bg-gray-400"
                    }`}
                  ></span>
                  {key}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 p-8">
          <h1 className="text-3xl font-bold mb-4">
            Explore the driving forces behind our eCommerce web development
            expertise
          </h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            {sections[selectedOption].heading}
          </h2>
          <p className="text-gray-600 mb-6">
            {sections[selectedOption].description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sections[selectedOption].icons.map((icon, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-2 rounded-lg"
              >
                <img
                  src={icon.src}
                  alt={`${icon.name} logo`}
                  className="mb-2"
                />
                <span className="text-teal-500">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 ml-5 mr-5 mb-10">
          {faqContent.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <div
                className="flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h4>
                <span className="text-xl text-gray-600">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graphic;
