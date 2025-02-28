"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

// Projects array sorted in decreasing order by year
const projects = [
  {
    year: 2025,
    name: "Sahaj Square",
    location: "S G Highway",
    image: "/image1.jpeg",
  },
  {
    year: 2022,
    name: "Sanidhya Greens",
    location: "Sarkhej",
    image: "/image1.jpeg",
  },
  {
    year: 2019,
    name: "Sanidhya Flora",
    location: "Shela",
    image: "/image1.jpeg",
  },
  {
    year: 2018,
    name: "Divya Exotica",
    location: "Gota",
    image: "/image1.jpeg",
  },
  {
    year: 2017,
    name: "Divya Homes",
    location: "Chandlodia",
    image: "/image1.jpeg",
  },
  {
    year: 2015,
    name: "Divya Kunj Parisar",
    location: "Paldi",
    image: "/image1.jpeg",
  },
  {
    year: 2014,
    name: "Divya Sanskar City",
    location: "Gandhinagar",
    image: "/image1.jpeg",
  },
  {
    year: 2013,
    name: "The Metro Park Hotel",
    location: "Ashram Road",
    image: "/image1.jpeg",
  },
  {
    year: 2012,
    name: "Divya Shrushti Residency",
    location: "Vastral",
    image: "/image1.jpeg",
  },
  {
    year: 2011,
    name: "Divya Bhoomi Avenue",
    location: "Maninagar",
    image: "/image1.jpeg",
  },
  {
    year: 2010,
    name: "Divya Residency",
    location: "Usmanpura",
    image: "/image1.jpeg",
  },
  {
    year: 2009,
    name: "Divya Sadbhav Arcade",
    location: "Naranpura",
    image: "/image1.jpeg",
  },
  {
    year: 2009,
    name: "Dev Krupa Heights",
    location: "Vasna",
    image: "/image1.jpeg",
  },
  {
    year: 2008,
    name: "Jivanparn Residency",
    location: "Satellite",
    image: "/image1.jpeg",
  },
  {
    year: 2007,
    name: "Laxmi Bunglows",
    location: "Bopal",
    image: "/image1.jpeg",
  },
  {
    year: 2006,
    name: "Laxmi Apartment",
    location: "Bopal",
    image: "/image1.jpeg",
  },
  {
    year: 2006,
    name: "Tirth Bhoomi Apartment",
    location: "Nehrunagar",
    image: "/image1.jpeg",
  },
  {
    year: 2005,
    name: "Prashann Apartment",
    location: "Nehrunagar",
    image: "/image1.jpeg",
  },
  {
    year: 2004,
    name: "Siddhchal Apartment",
    location: "Paldi",
    image: "/image1.jpeg",
  },
  {
    year: 2003,
    name: "Shanti Kunj Bunglow",
    location: "Paldi",
    image: "/image1.jpeg",
  },
];

// Define primary color
const primaryColor = "rgb(157, 93, 39)"; // #9D5D27

export default function ProjectTree() {
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

  return (
    <>
      <Header />
      <section className="py-32 bg-white">
        <div className="max-w-screen-lg mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-playfair font-bold mb-4"
              style={{ color: primaryColor }}
            >
              Our Project Timeline
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: primaryColor }}
            ></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animation: `fadeIn 0.6s ease-out forwards ${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="p-6">
                  <span
                    className="text-sm font-montserrat font-semibold mb-2 inline-block"
                    style={{ color: primaryColor }}
                  >
                    • {project.year}
                  </span>
                  <h3 className="text-xl font-playfair font-bold text-gray-800 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 font-montserrat">
                    {project.location}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <div
                      className="p-1 rounded-full border-2 overflow-hidden transform transition-transform duration-500 hover:scale-110"
                      style={{ borderColor: primaryColor }}
                    >
                      <Image
                        src={project.image || "/placeholder.jpg"}
                        alt={project.name}
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .font-playfair {
          font-family: "Playfair Display", serif;
        }

        .font-montserrat {
          font-family: "Montserrat", sans-serif;
        }

        /* Smooth scrolling for entire page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
