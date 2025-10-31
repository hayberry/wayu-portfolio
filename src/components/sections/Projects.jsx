import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-yellow-800 bg-clip-text text-center text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Meri Podcast</h3>
              <p className="text-gray-400 mb-4">
                Scalable Cloud infrastructure Management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="flex items-center bg-blue-500/10 cursor-pointer
                   text-blue-500 py-1 px-3
                 rounded-full text-sm hover:bg-blue-500/20 duration-500
                  ease-in-out  transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div r>
                <a
                  href="https://meri.et/"
                  target="_blank"
                  className="flex items-center my-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="mr-1">View Project</span>{" "}
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">HighCare System</h3>
              <p className="text-gray-400 mb-4">
                Scalable Cloud infrastructure Management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="flex items-center bg-blue-500/10 cursor-pointer
                   text-blue-500 py-1 px-3
                 rounded-full text-sm hover:bg-blue-500/20 duration-500
                  ease-in-out  transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href="https://meri.et/"
                  target="_blank"
                  className="flex items-center my-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="mr-1">View Project</span>{" "}
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">EasyMart System</h3>
              <p className="text-gray-400 mb-4">
                Scalable Cloud infrastructure Management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="flex items-center bg-blue-500/10 cursor-pointer
                   text-blue-500 py-1 px-3
                 rounded-full text-sm hover:bg-blue-500/20 duration-500
                  ease-in-out  transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div r>
                <a
                  href="https://meri.et/"
                  target="_blank"
                  className="flex items-center my-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="mr-1">View Project</span>{" "}
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">EasyMart POS System</h3>
              <p className="text-gray-400 mb-4">
                Scalable Cloud infrastructure Management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="flex items-center bg-blue-500/10 cursor-pointer
                   text-blue-500 py-1 px-3
                 rounded-full text-sm hover:bg-blue-500/20 duration-500
                  ease-in-out  transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div r>
                <a
                  href="https://meri.et/"
                  target="_blank"
                  className="flex items-center my-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="mr-1">View Project</span>{" "}
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
