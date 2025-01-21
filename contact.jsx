import React, { useEffect } from "react";
import A1 from "../assets/a1.png";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-white p-8 md:p-16 space-y-12 md:space-y-0">
        <div className="max-w-lg text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold font-['Roboto'] leading-tight">
            Are you ready to
            <span className="block italic font-['Playfair_Display'] text-blue-600" data-aos="fade-left">
              start something
            </span>
            new?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-['Roboto'] leading-relaxed">
            If you'd like to discuss a project, we would love to hear from you!
            Feel free to complete the form below or drop us a line on 1300 170
            908.
          </p>
        </div>

        <div className="w-full md:w-1/2 max-w-3xl">
          <img
            src={A1}
            alt="Start Something New"
            className="rounded-lg shadow-lg h-[400px] md:h-[500px] w-full object-cover hover:shadow-2xl transition-all duration-300"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="p-8 md:p-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-left">
          Indicates required fields
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              First Name
            </label>
            <input
              type="text"
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="First Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Last Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Business Name
            </label>
            <input
              type="text"
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Business Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Phone
            </label>
            <input
              type="tel"
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Phone"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-lg font-medium text-gray-700 text-left">
              Preferred Contact Method
            </label>
            <div className="flex items-center mt-2 space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Email</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Phone</span>
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-lg font-medium text-gray-700 text-left">
              Relevant Services
            </label>
            <div className="flex flex-wrap items-center mt-2 space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Website Development</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>AI Automation</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Graphics Designing</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>E-Commerce</span>
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-lg font-medium text-gray-700 text-left">
              Tell us about your project
            </label>
            <textarea
              className="mt-1 p-3 w-full h-40 border rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Describe your project here..."
              required
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="mt-4 px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-semibold shadow-md transition-all duration-300" data-aos="fade-right"
            >
              Contact Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
