"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaPhone } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat, Poppins } from "next/font/google";

// Configure the fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for header background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) => setDropdown(dropdown === menu ? null : menu);

  // Brown and White color palette
  const colors = {
    primary: "#9D5D27", // Main brown color (rgb(157,93,39))
    secondary: "#7A4A1D", // Darker brown for accents
    accent: "#BE7B40", // Lighter brown
    highlight: "#D9A76A", // Light brown / tan for highlights
    background: "#FFFFFF", // White background
    text: "#4A3520", // Dark brown for text
    hover: "#C68642", // Medium brown for hover states
    dropdownBg: "#FFF8F0", // Very light cream for dropdowns
    shadowColor: "rgba(157, 93, 39, 0.2)", // Brown shadow with transparency
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-4 ${montserrat.variable} ${poppins.variable}`}
      style={{
        backgroundColor: scrolled
          ? colors.background
          : "rgba(255, 255, 255, 0.95)",
        boxShadow: scrolled ? `0 4px 12px ${colors.shadowColor}` : "none",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Logo with animation */}
        <motion.a
          href="/"
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/logo.png"
            alt="Sanidhya Group Logo"
            width={130}
            height={40}
            className="transition-transform duration-300 hover:scale-105"
          />
        </motion.a>

        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-12 text-base font-medium font-poppins">
          <motion.a
            href="/"
            className="relative transition-colors duration-300"
            style={{ color: colors.text }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, color: colors.primary }}
          >
            Home
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 w-0"
              style={{ backgroundColor: colors.primary }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </motion.a>

          <motion.a
            href="/about"
            className="relative transition-colors duration-300"
            style={{ color: colors.text }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, color: colors.primary }}
          >
            About Us
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 w-0"
              style={{ backgroundColor: colors.primary }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </motion.a>

          {/* Commercial Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => toggleDropdown("commercial")}
              className="flex items-center space-x-1 transition-colors duration-300"
              style={{ color: colors.text }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, color: colors.primary }}
            >
              <span>Commercial</span>
              <motion.div
                animate={{
                  rotate: dropdown === "commercial" ? 180 : 0,
                  color:
                    dropdown === "commercial" ? colors.primary : colors.text,
                }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown size={12} />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {dropdown === "commercial" && (
                <motion.div
                  className="absolute left-0 mt-2 shadow-lg rounded-md py-2 w-48 overflow-hidden font-poppins"
                  style={{
                    backgroundColor: colors.dropdownBg,
                    boxShadow: `0 4px 20px ${colors.shadowColor}`,
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href="/projects/commercial/Divya_sadbhav_arcade"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    Divya sadbhav arcade
                  </motion.a>
                  <motion.a
                    href="/projects/commercial/The_metro_park"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    The metro park
                  </motion.a>
                  <motion.a
                    href="/projects/commercial/Sahaj_square"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    Sahaj square
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Residential Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => toggleDropdown("residential")}
              className="flex items-center space-x-1 transition-colors duration-300"
              style={{ color: colors.text }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, color: colors.primary }}
            >
              <span>Residential</span>
              <motion.div
                animate={{
                  rotate: dropdown === "residential" ? 180 : 0,
                  color:
                    dropdown === "residential" ? colors.primary : colors.text,
                }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown size={12} />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {dropdown === "residential" && (
                <motion.div
                  className="absolute left-0 mt-2 shadow-lg rounded-md py-2 w-48 overflow-hidden font-poppins"
                  style={{
                    backgroundColor: colors.dropdownBg,
                    boxShadow: `0 4px 20px ${colors.shadowColor}`,
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href="/projects/residential/Sanidhya_flora"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    Sanidhya Flora
                  </motion.a>
                  <motion.a
                    href="/projects/residential/Sanidhya_greens"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    Sanidhya Greens
                  </motion.a>
                  <motion.a
                    href="/projects/residential/Divya_exotica"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    Divya Exotica
                  </motion.a>
                  <motion.a
                    href="/projects/residential/Divya_sanskar_city"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    Divya Sanskar city
                  </motion.a>
                  <motion.a
                    href="/projects/residential/Divya_shrushti_residency"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    Divya shrushti residency
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Villas Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => toggleDropdown("villas")}
              className="flex items-center space-x-1 transition-colors duration-300"
              style={{ color: colors.text }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, color: colors.primary }}
            >
              <span>Villas</span>
              <motion.div
                animate={{
                  rotate: dropdown === "villas" ? 180 : 0,
                  color: dropdown === "villas" ? colors.primary : colors.text,
                }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown size={12} />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {dropdown === "villas" && (
                <motion.div
                  className="absolute left-0 mt-2 shadow-lg rounded-md py-2 w-48 overflow-hidden font-poppins"
                  style={{
                    backgroundColor: colors.dropdownBg,
                    boxShadow: `0 4px 20px ${colors.shadowColor}`,
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href="/projects/villas/Laxmi_bunglows"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    Laxmi Bunglows
                  </motion.a>
                  <motion.a
                    href="/projects/villas/Shanti_kunj_bunglows"
                    className="block px-4 py-2 transition-colors duration-200"
                    style={{ color: colors.text }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(157, 93, 39, 0.1)",
                      color: colors.primary,
                    }}
                  >
                    Shanti Kunj Bunglows
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div>
            <motion.a
              href="/project_tree"
              className="relative transition-colors duration-300"
              style={{ color: colors.text }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, color: colors.primary }}
            >
              Project Tree
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 w-0"
                style={{ backgroundColor: colors.primary }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
          </div>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-6">
          {/* Contact Us Button (hidden on mobile) */}
          <motion.a
            href="/contact"
            className="hidden md:block border rounded-full px-5 py-2 transition-all duration-300 ease-in-out font-montserrat font-semibold tracking-wide text-sm"
            style={{
              borderColor: colors.primary,
              color: colors.primary,
              backgroundColor: "transparent",
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: colors.primary,
              color: "white",
              boxShadow: `0 0 15px rgba(157, 93, 39, 0.4)`,
            }}
          >
            Contact Us
          </motion.a>

          {/* Hamburger Button (visible only on mobile) */}
          <motion.button
            style={{ color: colors.primary }}
            onClick={toggleSidebar}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              scale: 1.1,
              color: colors.hover,
              rotate: 5,
            }}
            className="block md:hidden" // Hidden on md (768px) and larger screens
          >
            <FaBars size={24} />
          </motion.button>
        </div>
      </div>

      {/* Sidebar Panel (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={toggleSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed right-0 top-0 h-full w-64 shadow-lg z-50"
        style={{
          backgroundColor: colors.background,
          boxShadow: `-5px 0 20px ${colors.shadowColor}`,
        }}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div
          className="p-6 flex justify-between items-center"
          style={{ borderBottom: `1px solid ${colors.primary}` }}
        >
          <motion.h2
            className="text-lg font-semibold font-montserrat"
            style={{ color: colors.primary }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Menu
          </motion.h2>
          <motion.button
            onClick={toggleSidebar}
            style={{ color: colors.primary }}
            whileHover={{ scale: 1.1, rotate: 90, color: colors.hover }}
            transition={{ duration: 0.2 }}
          >
            <FaTimes size={24} />
          </motion.button>
        </div>
        <nav className="px-6 py-4 space-y-4 font-poppins">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Commercial", path: "/commercial" },
            { name: "Residential", path: "/residential" },
            { name: "Villas", path: "/villas" },
            { name: "Contact Us", path: "/contact" },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.path}
              className="block py-2 transition-colors duration-200"
              style={{
                color: colors.text,
                borderBottom: `1px solid rgba(157, 93, 39, 0.2)`,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
              whileHover={{
                x: 5,
                color: colors.primary,
                textShadow: `0 0 8px rgba(157, 93, 39, 0.3)`,
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
