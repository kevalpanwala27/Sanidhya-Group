"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Head>
        <title>About Us | Sanidhya Group</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
          rel="stylesheet"
        />
      </Head>

      <section className="font-['Poppins']">
        <Header />

        <section className="relative overflow-hidden">
          {/* Full-width Banner Image with Overlay */}
          <div className="w-full relative">
            <Image
              src="/image6.jpeg"
              alt="Sanidhya Group Banner"
              width={1920}
              height={700}
              className="w-full h-[700px] md:h-[700px] object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-white text-center px-4"
              >
                Building Excellence <br /> Since 2004
              </motion.h1>
            </div>
          </div>
        </section>

        <section>
          {/* Main Content */}
          <div className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center">
            {/* Left Section - Text Content */}
            <div className="md:w-1/2" data-aos="fade-right">
              <h1 className="text-4xl font-['Playfair_Display'] font-bold text-gray-900">
                Who We Are
              </h1>
              <div className="w-24 h-1 bg-gray-400 my-4"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sanidhya Group, a leading construction company, is built on the
                pillars of quality, integrity, and innovation. Recognized for
                its excellence in real estate, we have delivered numerous
                landmark projects that shape the skyline.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Established in 2004, Sanidhya Group has consistently set
                benchmarks in the industry. Our projects range from commercial
                hubs to residential spaces, designed with a focus on modern
                architecture and sustainable development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                With a commitment to timely delivery, meticulous planning, and
                customer satisfaction, we continue to build structures that
                redefine aspirations.
              </p>
            </div>

            {/* Right Section - Image */}
            <div
              className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
              data-aos="fade-left"
            >
              <Image
                src="/image3.jpeg"
                alt="Sanidhya Group Building"
                width={500}
                height={400}
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center">
            {/* Left Section - Image */}
            <div
              className="md:w-1/2 flex justify-center order-2 md:order-1"
              data-aos="fade-up-right"
            >
              <Image
                src="/image1.jpeg"
                alt="Modern Skyscraper"
                width={500}
                height={400}
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

            {/* Right Section - Text Content */}
            <div
              className="md:w-1/2 mt-8 md:mt-0 md:pl-12 order-1 md:order-2"
              data-aos="fade-up-left"
            >
              <h2 className="text-4xl font-['Playfair_Display'] font-bold text-gray-900">
                Why Choose Us
              </h2>
              <div className="w-24 h-1 bg-gray-400 my-4"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The story of Shilp Group started way back in 2004 when the
                Founder and CEO, Mr. Yash Brahmbhatt, bid in a land auction by
                AUDA where he acquired a small piece of land...
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                At Shilp Group, we believe that come what may, adapt to
                everything new and trending but don't leave behind the
                simplicity and things that are here to stay for the long term...
              </p>
              {/* Button with hover animation */}
              <div className="mt-8">
                <motion.a
                  href="#"
                  className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule A Visit
                  <span className="ml-2">→</span>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto py-16 px-4">
            {/* Since 21 Years Section */}
            <div className="mt-8 text-center" data-aos="fade-up">
              <div className="flex items-center justify-center text-gray-600 text-lg font-medium">
                <div className="w-1/4 border-b border-gray-300"></div>
                <span className="mx-6 font-['Playfair_Display'] italic">
                  Since 21 Years
                </span>
                <div className="w-1/4 border-b border-gray-300"></div>
              </div>

              {/* Statistics */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: "21+", label: "Years Hands of Experience" },
                  { number: "19+", label: "Million SQ. FT." },
                  { number: "9,000+", label: "Units" },
                  {
                    number: "52+",
                    label: "Residential and Commercial Properties",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-900 p-8 text-center hover:shadow-lg transition-shadow duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    whileHover={{ y: -10 }}
                  >
                    <h3 className="text-4xl font-bold text-gray-900 font-['Playfair_Display']">
                      {item.number}
                    </h3>
                    <p className="text-lg text-gray-700 mt-3">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold mb-12 text-center font-['Playfair_Display']"
              data-aos="fade-up"
            >
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16">
              {[
                {
                  name: "Yash Brahmbhatt",
                  role: "Founder and Chief Executive",
                  image: "/team/yash.jpg",
                },
                {
                  name: "Snehal Brahmbhatt",
                  role: "Chief Operating Officer",
                  image: "/team/snehal.jpg",
                },
                {
                  name: "Arpan Barot",
                  role: "Group General Manager",
                  image: "/team/arpan.jpg",
                },
                {
                  name: "Saumil Patel",
                  role: "General Manager - Sales",
                  image: "/team/saumil.jpg",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ y: -10 }}
                >
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-5 text-2xl font-['Playfair_Display'] font-bold">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
}
