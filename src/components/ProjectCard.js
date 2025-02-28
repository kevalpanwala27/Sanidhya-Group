"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaDownload,
  FaImages,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

const ProjectCard = ({
  title,
  description,
  banner,
  location,
  year,
  about_text,
  about_text_2,
  side_image,
  image1,
  image2,
  image3,
  image4,
  image5,
  address = {},
  phoneNumbers = [],
  emails = [],
  mapUrl = "",
}) => {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Color palette
  const primaryColor = "rgb(157, 93, 39)"; // #9D5D27

  return (
    <>
      <Header />

      {/* Banner Section - adding top margin to account for fixed header */}
      <section>
        <div className="absolute inset-0 transform transition-transform duration-700 hover:scale-105">
          <Image
            src={banner}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority
          />
        </div>

        {/* Overlay Section */}
        <div
          className="absolute bottom-0 left-0 w-full bg-white p-8 rounded-t-3xl shadow-xl"
          style={{
            animation: "slideUp 0.8s ease-out forwards",
            opacity: 0,
            transform: "translateY(100px)",
          }}
        >
          <h2
            className="text-3xl font-playfair font-bold mb-2"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <p className="text-gray-700 text-lg mb-2">{description}</p>
          <p className="text-sm text-gray-500 mb-6 font-medium">
            {location} | {year}
          </p>

          {/* Icons Section */}
          <div className="flex justify-between items-center mt-6 px-4">
            <IconButton
              icon={<FaEnvelope />}
              text="Inquiry"
              primaryColor={primaryColor}
            />
            <IconButton
              icon={<FaDownload />}
              text="Download"
              primaryColor={primaryColor}
            />
            <IconButton
              icon={<FaImages />}
              text="Gallery"
              primaryColor={primaryColor}
            />
            <IconButton
              icon={<FaMapMarkerAlt />}
              text="Location"
              primaryColor={primaryColor}
            />
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      {/* About Project Section */}
      <section
        style={{
          animation: "fadeIn 1s ease-out forwards",
          opacity: 0,
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 p-6">
            <h2
              className="text-4xl font-playfair font-bold mb-6"
              style={{ color: primaryColor }}
            >
              About Project
            </h2>
            <div
              className="w-20 h-1 mb-8"
              style={{ backgroundColor: primaryColor }}
            ></div>
            <p className="text-gray-700 leading-relaxed mb-6">{about_text}</p>
            <p className="text-gray-700 leading-relaxed">{about_text_2}</p>
          </div>

          <div className="md:w-1/2 p-6 overflow-hidden rounded-lg shadow-2xl">
            <div className="transform transition-transform duration-500 hover:scale-105">
              <Image
                src={side_image}
                alt={title}
                width={600}
                height={600}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section
        style={{
          animation: "fadeIn 1.2s ease-out forwards",
          opacity: 0,
        }}
      >
        <h2
          className="text-4xl font-playfair font-bold mb-6 text-center"
          style={{ color: primaryColor }}
        >
          Project Gallery
        </h2>
        <div
          className="w-20 h-1 mx-auto mb-12"
          style={{ backgroundColor: primaryColor }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Image */}
          <div className="row-span-2 overflow-hidden rounded-lg shadow-xl">
            <div className="transform transition-transform duration-500 hover:scale-105 h-full">
              <Image
                src={image1}
                alt="Project View"
                width={800}
                height={800}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Small Images */}
          <div className="grid grid-cols-2 gap-6">
            {[image2, image3, image4, image5].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-xl">
                <div className="transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src={img}
                    alt={`Project Image ${index + 1}`}
                    width={400}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        style={{
          animation: "fadeIn 1.4s ease-out forwards",
          opacity: 0,
        }}
      >
        <h2
          className="text-4xl font-playfair font-bold mb-6 text-center"
          style={{ color: primaryColor }}
        >
          Location & Contact
        </h2>
        <div
          className="w-20 h-1 mx-auto mb-12"
          style={{ backgroundColor: primaryColor }}
        ></div>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left - Contact Details */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            {/* Address */}
            <div className="flex items-start gap-5 mb-8">
              <div
                className="p-4 rounded-full"
                style={{ backgroundColor: `${primaryColor}20` }}
              >
                <FaMapMarkerAlt
                  className="text-2xl"
                  style={{ color: primaryColor }}
                />
              </div>
              <div>
                <p className="text-xl font-semibold mb-2">{address.name}</p>
                <p className="text-gray-600 leading-relaxed">
                  {address.details}
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-5 mb-8">
              <div
                className="p-4 rounded-full"
                style={{ backgroundColor: `${primaryColor}20` }}
              >
                <FaPhone className="text-2xl" style={{ color: primaryColor }} />
              </div>
              <div>
                {phoneNumbers.map((phone, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed mb-2 hover:text-gray-800 transition-colors duration-300"
                  >
                    <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                  </p>
                ))}
              </div>
            </div>

            {/* Email Addresses */}
            <div className="flex items-start gap-5">
              <div
                className="p-4 rounded-full"
                style={{ backgroundColor: `${primaryColor}20` }}
              >
                <FaEnvelope
                  className="text-2xl"
                  style={{ color: primaryColor }}
                />
              </div>
              <div>
                {emails.map((email, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed mb-2 hover:text-gray-800 transition-colors duration-300"
                  >
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Google Map */}
          <div className="md:w-1/2 overflow-hidden rounded-lg shadow-xl">
            <iframe
              title="Google Map"
              className="w-full h-[400px] rounded-lg"
              src={mapUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .font-playfair {
          font-family: "Playfair Display", serif;
        }

        .font-montserrat {
          font-family: "Montserrat", sans-serif;
        }

        /* Fix for header and footer */
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

// Enhanced Icon Button Component
const IconButton = ({ icon, text, primaryColor }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div
      className="p-4 rounded-full transition-all duration-300 transform group-hover:scale-110"
      style={{
        backgroundColor: `${primaryColor}10`,
      }}
    >
      <div
        className="text-xl transition-colors duration-300 group-hover:text-white"
        style={{ color: primaryColor }}
      >
        {icon}
      </div>
    </div>
    <p
      className="text-sm font-medium mt-3 transition-colors duration-300"
      style={{ color: primaryColor }}
    >
      {text}
    </p>
  </div>
);

export default ProjectCard;
