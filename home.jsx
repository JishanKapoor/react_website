import React, { useEffect, useState } from "react";
import Bg2 from "../assets/bg2.mp4";
import "aos/dist/aos.css";
import AOS from "aos";
import A2 from "../assets/a2.png";
import A3 from "../assets/a3.png";
import A4 from "../assets/a4.png";
import A5 from "../assets/a5.png";
import A6 from "../company/google.png";
import A7 from "../company/meta.png";
import A8 from "../company/instagram.png";
import A9 from "../company/google-analytics.png";
import A10 from "../company/wordpress.png";
import A11 from "../company/instapage.png";
import A12 from "../company/shopify.png";
import A13 from "../company/klaviyo.png";
import A14 from "../company/Mailchimp.png";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaShoppingCart,
  FaDesktop,
  FaPaintBrush,
  FaCogs,
  FaArrowRight,
  FaChartLine,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";

const StepItem = ({ count, pretext, headline, summary }) => (
  <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8 mx-auto">
    <div className="flex-grow md:w-1/3">
      <span className="block text-lg md:text-xl text-black font-semibold ml-4 md:ml-20">
        {pretext}
      </span>
      <h4 className="text-2xl md:text-4xl font-bold mt-2 ml-4 md:ml-20">
        {headline}
      </h4>
    </div>
    <div className="relative flex flex-col items-center">
      <div
        className="step__count bg-blue-600 text-white font-bold text-3xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full animate-glow"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {count}
      </div>
      <div
        className={`absolute top-full h-[200%] w-1 bg-blue-600 hidden md:block`}
      />
    </div>
    <div className="w-full md:w-1/2">
      <p className="text-gray-700 text-lg mt-2">{summary}</p>
    </div>
  </div>
);

const words = ["SEO", "Google Ads", "Website Optimization", "Content Creation"];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [isOpenDemo, setIsOpenDemo] = useState(false);

  const handleOpenDemo = () => setIsOpenDemo(true);
  const handleCloseDemo = () => setIsOpenDemo(false);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Word changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

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

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <main className="relative">
        <video
          src={Bg2}
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-50 text-white">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            DREAM IT. BUILD IT. GROW IT
          </h1>
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl">
            A brand + experience design agency for those with ambition.
          </p>
          <div className="flex space-x-12">
            <button
              className="bg-black text-white py-4 px-8 rounded-xl shadow-lg hover:bg-gray-800 text-xl font-medium flex items-center"
              onClick={handleOpen}
            >
              Free Audit
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 text-2xl"
              />
            </button>

            {isOpen && (
              <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                <div className="lg:w-1/2 p-8 rounded-lg shadow-lg bg-gray-900 relative">
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white text-2xl"
                  >
                    &times;
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm mb-2">
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        BUSINESS EMAIL
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        TITLE
                      </label>
                      <input
                        type="text"
                        placeholder="What is your job title?"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        placeholder="Where do you work?"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
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
                      <label className="block text-white text-sm mb-2">
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
                      <label className="block text-white text-sm mb-2">
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

            <a
              href="/contact"
              className="bg-white text-black py-4 px-8 rounded-xl shadow-lg hover:bg-gray-200 text-xl font-medium flex items-center"
            >
              Instant Price
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 text-2xl"
              />
            </a>
          </div>
        </div>
      </main>

      <div className="mx-auto px-4 py-16 bg-black w-full" data-aos="fade-up">
        <div className="text-center mb-16">
          <p className="text-3xl italic text-gray-200 mt-10">
            A slice of our digital marketing solutions & tactics
          </p>
          <h1 className="text-7xl font-bold text-white mt-5">
            Tools we use to{" "}
            <span className="text-blue-400">Create Business</span>
          </h1>
        </div>

        {/* E-Commerce Section */}
        <div
          className="container grid md:grid-cols-2 gap-16 mt-16 mx-8 ml-4 md:ml-40"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start text-left w-full md:w-4/5 lg:w-3/4">
            <FaShoppingCart className="text-blue-400 text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-white">E-Commerce</h2>
            <p className="text-gray-400 mb-8">
              Elevate your business with robust e-commerce platforms tailored to
              deliver seamless user experiences and secure transactions. Our
              solutions empower businesses to thrive in competitive online
              marketplaces by integrating custom payment gateways, intuitive
              product catalogs, and personalized user journeys that turn
              visitors into loyal customers.
            </p>
            <a
              href="/E-Commerce"
              className="text-blue-400 font-bold flex items-center"
            >
              Learn More <FaArrowRight className="ml-2" />
            </a>
          </div>

          {/* Web Design Section */}
          <div
            className="flex flex-col items-start text-left w-full md:w-4/5 lg:w-3/4"
            data-aos="fade-up"
          >
            <FaDesktop className="text-blue-400 text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-white">Web Design</h2>
            <p className="text-gray-400 mb-8">
              Captivate your audience with beautifully designed websites crafted
              for performance and conversion. Our web design services combine
              cutting-edge UI/UX principles with responsive layouts and sleek
              visuals to ensure an engaging user experience. We deliver sites
              optimized for speed, accessibility, and cross-platform
              compatibility.
            </p>
            <a
              href="/website-development"
              className="text-blue-400 font-bold flex items-center"
            >
              Explore Web Design <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Graphic Design and Automation Tools Sections */}
        <div
          className="container grid md:grid-cols-2 gap-16 mt-16 mx-8 ml-4 md:ml-40"
          data-aos="fade-up"
        >
          {/* Graphic Design Section */}
          <div className="flex flex-col items-start text-left w-full md:w-4/5 lg:w-3/4">
            <FaPaintBrush className="text-blue-400 text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-white">
              Graphic Design
            </h2>
            <p className="text-gray-400 mb-8">
              Stand out from the crowd with custom graphic design solutions that
              resonate with your brand identity. From stunning visuals to
              compelling marketing materials, our design services encompass logo
              creation, social media graphics, brochures, and infographics
              tailored to captivate your audience and elevate your brand.
            </p>
            <a
              href="/graphic-designing"
              className="text-blue-400 font-bold flex items-center"
            >
              See Our Work <FaArrowRight className="ml-2" />
            </a>
          </div>

          {/* Automation Tools Section */}
          <div
            className="flex flex-col items-start text-left w-full md:w-4/5 lg:w-3/4"
            data-aos="fade-up"
          >
            <FaCogs className="text-blue-400 text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-white">
              Automation Tools
            </h2>
            <p className="text-gray-400 mb-8">
              Maximize productivity and efficiency with our advanced automation
              solutions designed to streamline business operations. From
              automated customer engagement to workflow optimization, our tools
              empower your organization to reduce manual tasks, enhance
              accuracy, and stay ahead of market demands.
            </p>
            <a
              href="/automation-tools"
              className="text-blue-400 font-bold flex items-center"
            >
              Discover Automation <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <div className="text-center">
          <p className="text-4xl italic font-playfair mt-10">
            Digital marketing services done better
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Driving growth for brands & <br /> businesses online.
          </h1>
        </div>

        {/* Word Loader Section */}
        <div
          className="mt-16 flex flex-col lg:flex-row items-center lg:justify-between"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start text-left lg:w-1/2">
            <p className="text-2xl font-bold italic">
              Digital Marketing is more than just...
            </p>
            <div className="relative text-6xl font-bold text-blue-600 mt-10 h-40 overflow-hidden whitespace-nowrap pr-4 animate-blink">
              <span className="inline-block animate-typewriter">
                {words[currentWordIndex].split(" ").map((word, index) => (
                  <span
                    key={index}
                    className="block sm:inline-block" // Ensure break on mobile
                  >
                    {word}
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div
            className="mt-8 lg:mt-0 text-md leading-relaxed lg:w-1/2 ml-10 font-semibold"
            data-aos="fade-up"
          >
            <p>
              Who are we at CoderDesign? We’re a passionate team of{" "}
              <span className="italic">
                web developers, designers, and digital solution architects
              </span>{" "}
              dedicated to crafting cutting-edge applications and user-focused
              experiences. With years of experience collaborating with brands
              both locally and globally, we specialize in turning ideas into
              scalable, high-performance digital products.
            </p>
            <p className="mt-4">
              As a technology-driven development agency, we offer tailored
              solutions to meet your unique business needs—whether it's
              responsive web applications, seamless user interfaces, or back-end
              systems that drive performance. Building lasting relationships and
              delivering measurable success is at the heart of everything we do.
              Curious to see if we’re the{" "}
              <span className="italic">digital solution partner</span> you've
              been searching for? Learn{" "}
              <a href="/coderdesign" className="text-blue-600">
                more about CoderDesign
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center min-h-screen p-4 bg-black"
        data-aos="fade-up"
      >
        <h1 className="text-7xl font-bold text-white mt-5">
          WHY <span className="text-blue-400">CHOOSE US ?</span>
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left lg:px-8 mt-20"
          data-aos="fade-up"
        >
          <div className="max-w-md mx-auto px-4">
            <FaChartLine className="text-blue-400 text-6xl mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-white">
              Bespoke, Comprehensive Digital Strategies
            </h2>
            <p className="text-gray-400 text-lg">
              Every business is unique, and so are its digital challenges. We
              craft tailored strategies that empower your brand to thrive in
              today’s ever-evolving digital landscape, delivering growth that
              aligns perfectly with your goals.
            </p>
          </div>

          <div className="max-w-md mx-auto px-4" data-aos="fade-up">
            <FaBullseye className="text-blue-400 text-6xl mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-white">
              Results-Driven and Performance Focused
            </h2>
            <p className="text-gray-400 text-lg">
              Our focus is simple: delivering measurable results that matter.
              From boosting conversions to enhancing customer engagement, we
              drive strategies that speak directly to your business’s success
              metrics.
            </p>
          </div>

          <div className="max-w-lg mx-auto px-4" data-aos="fade-up">
            <FaLightbulb className="text-blue-400 text-6xl mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-white">
              In-House Creative Production
            </h2>
            <p className="text-gray-400 text-lg">
              Leave the creative juggling act to us. From strategy to design and
              production, we handle every creative element under one roof,
              ensuring seamless and impactful execution for your brand.
            </p>
          </div>
        </div>

        <div className="mt-40 text-center" data-aos="fade-up">
          <p className="text-white mb-4 text-3xl">
            Free advice. No obligation. Let's collaborate and build something
            great together.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start p-8 md:p-16">
        <div className="md:w-3/5 w-full ml-4 mr-4 p-4" data-aos="fade-up">
          <h1 className="text-xl md:text-4xl font-bold mb-4">
            One of the things we hear most often in the discovery phase is...
          </h1>
          <blockquote className="text-2xl md:text-5xl italic font-playfair mb-4 mt-10">
            “my current agency doesn’t understand my business—and{" "}
            <span className="text-blue-600">
              doesn’t get the bigger picture
            </span>
            ”
          </blockquote>
        </div>

        <div className="md:w-3/5 w-full ml-4 mr-4 p-4" data-aos="fade-up">
          <p className="text-lg md:text-base mb-4">
            It’s <span className="font-bold">easy</span> to focus solely on code
            complexity and technical execution while losing sight of the{" "}
            <span className="font-bold">broader user experience</span>. Clean
            syntax and optimal load times are{" "}
            <span className="font-bold">important</span>, but they’re just part
            of the bigger picture. Building intuitive, scalable digital
            solutions starts with a solid strategy rooted in both creativity and
            logic.
          </p>

          <p className="text-lg md:text-base mb-4 mt-8">
            At <span className="font-bold">CoderDesign</span>, we approach each
            project with a comprehensive understanding of your needs,
            challenges, and goals. Our process merges{" "}
            <span className="font-bold">cutting-edge technologies</span> and{" "}
            <span className="font-bold">agile development practices</span> to
            craft solutions that not only meet your current demands but also
            anticipate future growth. By leveraging a balance of meticulous
            planning and rapid iteration, we deliver solutions that are{" "}
            <span className="text-blue-600">functional</span>,{" "}
            <span className="text-blue-600">scalable</span>, and built for{" "}
            <span className="text-blue-600">success</span>.
          </p>
        </div>
      </div>

      <div className="text-center p-6" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black leading-tight">
          We’re not unrealistic
          <br />
          over-promisers—we’re practised,
          <br />
          creative marketers{" "}
          <span className="text-blue-600">
            hell-bent on
            <br />
            growing your business.
          </span>
        </h1>
      </div>

      <section
        id="comp_web_design_steps_1"
        className="relative bg-white py-20 text-gray-800"
        data-aos="fade-up"
      >
        <div className="row flex flex-wrap justify-between items-start px-8 md:px-16 mb-12">
          <div className="left max-w-md">
            <h2 className="text-3xl md:text-4xl font-semibold">
              What your first 90 days of digital marketing with us looks like
            </h2>
          </div>
          <div className="right max-w-2xl">
            <h3 className="text-4xl md:text-5xl font-bold">
              An engineered campaign-launch process designed to get
              results—fast.
            </h3>
          </div>
        </div>

        <div
          className="row row__steps relative px-8 md:px-16"
          data-aos="fade-up"
        >
          <div className="steps__wrapper space-y-16">
            <StepItem
              count="1"
              pretext="Phase One"
              headline="Discover"
              summary="Your journey with CoderDesign begins with Discovery. We dive deep into understanding your goals, challenges, and vision for success. Whether you're launching a new platform or enhancing an existing one, we want to know what drives your business and how technology can elevate it. In this phase, we assess how our development expertise and creative solutions can deliver long-term value tailored specifically to your needs."
            />
            <StepItem
              count="2"
              pretext="Weeks 1 & 2"
              headline="Build"
              summary="In this phase, we carefully assemble the perfect team of designers, developers, and strategists to bring your project to life. Our experts craft a development roadmap aligned with your goals, focusing on functionality, scalability, and user experience. We analyze your current infrastructure and implement a solid technical foundation. You'll be involved in key discussions as we present prototypes, wireframes, and innovative solutions tailored for your digital success."
            />
            <StepItem
              count="3"
              pretext="Weeks 3 & 4"
              headline="Launch"
              summary="With the strategy finalized and groundwork complete, we enter the launch phase. Our team brings your platform to life by integrating features, refining user interfaces, and performing rigorous testing for optimal performance. We ensure seamless deployment across platforms, with your input guiding final adjustments. As your solution goes live, we provide a comprehensive rollout plan and ensure everything is positioned for success."
            />
            <StepItem
              count="4"
              pretext="Week 5 and Beyond"
              headline="Grow"
              summary="Launching is just the beginning. The growth phase is where we fine-tune performance, monitor analytics, and continuously optimize your platform for user engagement and business impact. We identify opportunities for enhancement and introduce new features as your business evolves. With ongoing reports and regular check-ins, we ensure your solution stays innovative, scalable, and aligned with your strategic goals."
            />
          </div>
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="/contact"
            className="inline-block px-12 py-4 bg-blue-600 text-white font-bold text-lg rounded hover:bg-blue-500 transition ml-[-10%] md:ml-30"
          >
            Let's Talk
          </a>
        </div>
      </section>

      <div className="flex flex-col items-center px-4 py-8 md:px-16 lg:px-32 bg-black h-[20%]">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mt-10"
          data-aos="fade-up"
        >
          Book a free discovery call, <br />
          and <span className="text-blue-500">let’s get growing.</span>
        </h1>
        <div
          className="mt-6 text-lg md:text-xl lg:text-sm text-center max-w-3xl text-gray-200 font-semibold"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p>
              The journey to exceptional digital success starts with a simple
              conversation. We invite you to book a consultation—no strings
              attached. At <em>CoderDesign</em>, we believe in understanding
              your unique needs and goals before making any commitments. Our
              initial discussion isn’t about selling services; it’s about
              discovering whether our expertise aligns with your vision for
              growth and success.
            </p>

            <p>
              If we feel your project requires a different approach or isn't
              aligned with our solutions, we won't hesitate to be upfront.
              Honesty and transparency are the cornerstones of our
              relationships. Whether we partner with you directly or point you
              toward new opportunities, we’re dedicated to supporting your
              journey. Many of our long-term collaborations started from these
              genuine, insightful conversations.
            </p>
          </div>
        </div>
        <a
          href="/contact"
          className="mt-8 px-8 py-5 bg-blue-500 text-black font-bold rounded-full text-lg"
        >
          Let's Talk
        </a>
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          <img src={A2} alt="Person 1" className="rounded-lg" />
          <img src={A3} alt="Person 2" className="rounded-lg" />
          <img src={A4} alt="Person 3" className="rounded-lg" />
          <img src={A5} alt="Person 3" className="rounded-lg" />
        </div>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl md:text-7xl font-bold mb-12" data-aos="fade-up">
          Our technology partners and <br /> certifications
        </h1>
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 px-4 md:px-16"
          data-aos="fade-up"
        >
          {[A6, A7, A8, A9, A10, A11, A12, A13, A14].map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center transition-all duration-300 filter grayscale hover:grayscale-0"
            >
              <img
                src={logo}
                alt={`Technology Partner ${index + 1}`}
                className="h-16 md:h-20"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 px-6 lg:px-20">
        <h2
          className="text-center text-4xl font-bold text-gray-800 mb-12"
          data-aos="fade-up"
        >
          Questions & Answers
        </h2>

        <div
          className="bg-white shadow-lg rounded-lg p-6 space-y-6"
          data-aos="fade-up"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <h3 className="text-center text-2xl font-medium text-gray-600 mb-6">
            Questions About Our AI Solutions Services
          </h3>
          <p className="text-center text-lg text-gray-500 mb-8">
            Our team understands how the complex nuances of AI, machine
            learning, and automation build on one another to gain momentum and
            position a brand for levels of success that aren’t accessible
            without a unified approach. See why we are the best fit.
          </p>
          <div className="text-center">
            <button
              className="bg-blue-600 text-white py-3 px-8 rounded-full text-xl font-medium hover:bg-blue-700 transition-all duration-300"
              onClick={handleOpenDemo}
            >
              Book a free demo
            </button>

            {isOpenDemo && (
              <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                <div className="lg:w-1/2 p-8 rounded-lg shadow-lg bg-gray-900 relative">
                  <button
                    onClick={handleCloseDemo}
                    className="absolute top-4 right-4 text-white text-2xl"
                  >
                    &times;
                  </button>

                  {/* Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm mb-2">
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        BUSINESS EMAIL
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        TITLE
                      </label>
                      <input
                        type="text"
                        placeholder="What is your job title?"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        placeholder="Where do you work?"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">
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
                      <label className="block text-white text-sm mb-2">
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
                      <label className="block text-white text-sm mb-2">
                        DESCRIPTION
                      </label>
                      <textarea
                        className="w-full p-3 bg-gray-800 text-white rounded-lg resize-none overflow-auto"
                        rows="4"
                        placeholder="Write your description here..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Contact sales button */}
                  <div className="mt-6 text-center">
                    <a
                      href="/contact"
                      className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold"
                    >
                      Contact sales
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 space-y-4 mb-10">
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

export default Home;
