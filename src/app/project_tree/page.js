import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const projects = [
  { year: 2003, name: "Shanti Kunj Bunglow", location: "Paldi" },
  { year: 2004, name: "Siddhchal Apartment", location: "Paldi" },
  { year: 2005, name: "Prashann Apartment", location: "Nehrunagar" },
  { year: 2006, name: "Tirth Bhoomi Apartment", location: "Nehrunagar" },
  { year: 2006, name: "Laxmi Apartment", location: "Bopal" },
  { year: 2007, name: "Laxmi Bunglows", location: "Bopal" },
  { year: 2008, name: "Jivanparn Residency", location: "Satellite" },
  { year: 2009, name: "Divya Sadbhav Arcade", location: "Naranpura" },
  { year: 2009, name: "Dev Krupa Heights", location: "Vasna" },
  { year: 2010, name: "Divya Residency", location: "Usmanpura" },
  { year: 2011, name: "Divya Bhoomi Avenue", location: "Maninagar" },
  { year: 2012, name: "Divya Shrushti Residency", location: "Vastral" },
  { year: 2013, name: "The Metro Park Hotel", location: "Ashram Road" },
  { year: 2014, name: "Divya Sanskar City", location: "Gandhinagar" },
  { year: 2015, name: "Divya Kunj Parisar", location: "Paldi" },
  { year: 2017, name: "Divya Homes", location: "Chandlodia" },
  { year: 2018, name: "Divya Exotica", location: "Gota" },
  { year: 2019, name: "Sanidhya Flora", location: "Shela" },
  { year: 2022, name: "Sanidhya Greens", location: "Sarkhej" },
  { year: 2025, name: "Sahaj Square", location: "S G Highway" },
];

export default function ProjectTree() {
  return (
    <>
      <Header />
      <section className="py-32">
        <div className="max-w-screen-lg mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Project Tree
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition"
              >
                <span className="text-sm font-semibold text-gray-600">
                  • {project.year}
                </span>
                <h3 className="text-lg font-bold text-gray-800">
                  {project.name}
                </h3>
                <p className="text-gray-500">{project.location}</p>
                <div className="mt-6 flex justify-center">
                  <Image
                    src="/placeholder.jpg"
                    alt={project.name}
                    width={60}
                    height={60}
                    className="rounded-full border border-gray-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
