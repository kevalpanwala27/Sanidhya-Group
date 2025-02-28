"use client";

import { useState, useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "commercial",
    title: "Commercial",
    image: "/image1.jpeg", // Replace with actual image path
  },
  {
    id: "residential",
    title: "Residential",
    image: "/image2.jpeg", // Replace with actual image path
  },
  {
    id: "plots",
    title: "Plots",
    image: "/image3.jpeg", // Replace with actual image path
  },
];

export default function HeroSection() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isVisible, setIsVisible] = useState({
    whoWeAre: false,
    services: false,
    commercial: false,
    numbers: false,
    residential: false,
    vision: false,
  });

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-screen flex items-center justify-center text-white"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Building Tomorrow
          </h1>
          <p className="font-montserrat text-xl md:text-2xl max-w-2xl mx-auto">
            Crafting spaces that inspire and endure
          </p>
        </motion.div>
      </motion.section>

      {/* Who We Are Section */}
      <section
        id="whoWeAre"
        className="animate-section flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-16 bg-white overflow-hidden"
      >
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeIn}
          initial="hidden"
          animate={isVisible.whoWeAre ? "visible" : "hidden"}
        >
          <img
            src="/image1.jpeg"
            alt="Sanidhya Group Building"
            className="rounded-2xl shadow-lg w-full h-auto transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16"
          variants={slideIn}
          initial="hidden"
          animate={isVisible.whoWeAre ? "visible" : "hidden"}
        >
          <h3 className="font-montserrat text-xl font-semibold text-gray-500">
            Who We Are
          </h3>
          <h2 className="font-playfair text-4xl font-bold text-gray-900 mt-2">
            Trust in Sanidhya, Build Your Future
          </h2>
          <p className="font-montserrat text-gray-600 mt-4 leading-relaxed">
            Sanidhya Group, a real estate company driven by quality, integrity,
            and authenticity, has earned recognition as one of the top builders.
            We are known for undertaking diverse projects, fostering innovation,
            and embracing emerging technologies. Our projects help to house
            people's ambitions.
          </p>
          <p className="font-montserrat text-gray-600 mt-4 leading-relaxed">
            Founded in [YEAR], Sanidhya Group started with a small land
            acquisition and has since grown into a trusted brand shaping the
            skyline. It was the first to develop projects in prime locations and
            continues to pioneer strategic real estate developments.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/about"
            className="font-montserrat mt-6 inline-flex items-center px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition duration-300"
          >
            About Us{" "}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* Our Services Section */}
      <section
        id="services"
        className="animate-section max-w-7xl mx-auto py-16 px-6"
      >
        <motion.div
          className="mb-6"
          variants={fadeIn}
          initial="hidden"
          animate={isVisible.services ? "visible" : "hidden"}
        >
          <h3 className="font-playfair text-3xl font-semibold text-gray-800">
            Our Services
          </h3>
          <div className="w-16 h-1 bg-gray-400 mt-1"></div>
        </motion.div>
        <motion.p
          className="font-montserrat text-xl text-gray-600 mb-8"
          variants={fadeIn}
          initial="hidden"
          animate={isVisible.services ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          Best Solutions In Residential, Commercial, And Plotting Segments
        </motion.p>
        <div className="flex flex-col md:flex-row gap-6">
          <motion.div
            className="flex-1"
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.services ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={selectedService.id}
            >
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                width={800}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible.services ? "visible" : "hidden"}
          >
            {services.map((service) => (
              <motion.button
                key={service.id}
                variants={popIn}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(service)}
                className={`relative w-32 md:w-40 h-48 flex items-center justify-center text-white text-lg font-medium rounded-lg overflow-hidden transition-all ${
                  selectedService.id === service.id
                    ? "brightness-100 ring-2 ring-offset-2 ring-black"
                    : "brightness-50 hover:brightness-75"
                }`}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="absolute inset-0 bg-black/40"></span>
                <span className="relative z-10 font-montserrat">
                  {service.title}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="mt-6"
          variants={fadeIn}
          initial="hidden"
          animate={isVisible.services ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="font-montserrat bg-gray-700 text-white flex items-center justify-between px-6 py-3 rounded-md text-lg w-64 group"
          >
            {selectedService.title}
            <FaArrowUpRightFromSquare className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </motion.div>
      </section>

      {/* Commercial Projects Section */}
      <section
        id="commercial"
        className="animate-section bg-gray-100 py-16 px-6 lg:px-20"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isVisible.commercial ? "visible" : "hidden"}
        >
          <h3 className="font-montserrat text-center text-gray-500 uppercase tracking-wide text-lg">
            Commercial
          </h3>
          <h2 className="font-playfair text-center text-4xl font-bold text-gray-900 mt-2">
            Workspaces Designed For Your Success
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.commercial ? "visible" : "hidden"}
        >
          {/** Project 1 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image1.jpeg"
              alt="Shilp Centrica"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Centrica
            </h3>
            <p className="font-montserrat text-gray-500">
              DTA, Gift City Gandhinagar
            </p>
            <p className="font-montserrat text-gray-700">1326-3538 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>

          {/** Project 2 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image2.jpeg"
              alt="Shilp Twin Towers"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Twin Towers
            </h3>
            <p className="font-montserrat text-gray-500">
              SEZ, Gift City Gandhinagar
            </p>
            <p className="font-montserrat text-gray-700">1725-7835 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>

          {/** Project 3 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image3.jpeg"
              alt="Shilp Business Gateway"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Business Gateway
            </h3>
            <p className="font-montserrat text-gray-500">
              Vaishnodevi, S.G Highway Ahmedabad
            </p>
            <p className="font-montserrat text-gray-700">2303-5082 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>

          {/** Project 4 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image3.jpeg"
              alt="Shilp Business Gateway"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Business Gateway
            </h3>
            <p className="font-montserrat text-gray-500">
              Vaishnodevi, S.G Highway Ahmedabad
            </p>
            <p className="font-montserrat text-gray-700">2303-5082 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>

          {/** Project 5 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image3.jpeg"
              alt="Shilp Business Gateway"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Business Gateway
            </h3>
            <p className="font-montserrat text-gray-500">
              Vaishnodevi, S.G Highway Ahmedabad
            </p>
            <p className="font-montserrat text-gray-700">2303-5082 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Numbers That Define Us Section */}
      <section id="numbers" className="animate-section mt-16 text-center py-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isVisible.numbers ? "visible" : "hidden"}
        >
          <h2 className="font-montserrat text-gray-500 text-lg font-semibold">
            Numbers That Define Us
          </h2>
          <p className="font-playfair text-xl font-medium max-w-2xl mx-auto mt-2">
            Every Number Tells A Story Of Trust, Commitment, And Excellence.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.numbers ? "visible" : "hidden"}
        >
          <motion.div
            variants={popIn}
            className="p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <h3 className="font-playfair text-3xl font-bold counter">21+</h3>
            <p className="font-montserrat text-gray-500">
              Years Hands-on Experience
            </p>
          </motion.div>
          <motion.div
            variants={popIn}
            className="p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <h3 className="font-playfair text-3xl font-bold counter">19+</h3>
            <p className="font-montserrat text-gray-500">Million Sq. Ft.</p>
          </motion.div>
          <motion.div
            variants={popIn}
            className="p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <h3 className="font-playfair text-3xl font-bold counter">9,000+</h3>
            <p className="font-montserrat text-gray-500">Units</p>
          </motion.div>
          <motion.div
            variants={popIn}
            className="p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <h3 className="font-playfair text-3xl font-bold counter">52+</h3>
            <p className="font-montserrat text-gray-500">
              Residential And Commercial Properties
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Residential Projects Section */}
      <section
        id="residential"
        className="animate-section bg-gray-100 py-16 px-6 lg:px-20"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isVisible.residential ? "visible" : "hidden"}
        >
          <h3 className="font-montserrat text-center text-gray-500 uppercase tracking-wide text-lg">
            Residential
          </h3>
          <h2 className="font-playfair text-center text-4xl font-bold text-gray-900 mt-2">
            Homes Designed For Your Lifestyle
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.residential ? "visible" : "hidden"}
        >
          {/** Project 1 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image1.jpeg"
              alt="Shilp Centrica"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Centrica
            </h3>
            <p className="font-montserrat text-gray-500">
              DTA, Gift City Gandhinagar
            </p>
            <p className="font-montserrat text-gray-700">1326-3538 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>

          {/** Project 2 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image2.jpeg"
              alt="Shilp Twin Towers"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Twin Towers
            </h3>
            <p className="font-montserrat text-gray-500">
              SEZ, Gift City Gandhinagar
            </p>
            <p className="font-montserrat text-gray-700">1725-7835 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>

          {/** Project 3 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image3.jpeg"
              alt="Shilp Business Gateway"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Business Gateway
            </h3>
            <p className="font-montserrat text-gray-500">
              Vaishnodevi, S.G Highway Ahmedabad
            </p>
            <p className="font-montserrat text-gray-700">2303-5082 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>

          {/** Project 4 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image3.jpeg"
              alt="Shilp Business Gateway"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Business Gateway
            </h3>
            <p className="font-montserrat text-gray-500">
              Vaishnodevi, S.G Highway Ahmedabad
            </p>
            <p className="font-montserrat text-gray-700">2303-5082 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>

          {/** Project 5 **/}
          <motion.div
            variants={popIn}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src="/image3.jpeg"
              alt="Shilp Business Gateway"
              className="rounded-lg w-full"
            />
            <h3 className="font-playfair text-xl font-semibold mt-4">
              Shilp Business Gateway
            </h3>
            <p className="font-montserrat text-gray-500">
              Vaishnodevi, S.G Highway Ahmedabad
            </p>
            <p className="font-montserrat text-gray-700">2303-5082 sq. ft.</p>
            <p className="font-montserrat text-gray-700">Commercial</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="animate-section mt-16 text-center py-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isVisible.vision ? "visible" : "hidden"}
        >
          <h2 className="font-montserrat text-gray-500 text-lg font-semibold">
            Our Vision
          </h2>
          <p className="font-playfair text-xl font-medium max-w-3xl mx-auto mt-2">
            We are committed to building innovative, sustainable, and
            high-quality workspaces that empower businesses and individuals to
            thrive in a dynamic world.
          </p>
        </motion.div>
      </section>

      {/* Add CSS for fonts and number counter animation */}
      <style jsx>{`
        /* Font variables - Make sure these match the import in your layout.js */
        :root {
          --font-montserrat: "Montserrat", sans-serif;
          --font-playfair: "Playfair Display", serif;
        }

        /* Font classes */
        .font-montserrat {
          font-family: var(--font-montserrat);
        }

        .font-playfair {
          font-family: var(--font-playfair);
        }

        .counter {
          display: inline-block;
          position: relative;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-section .counter {
          animation: countUp 1.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
