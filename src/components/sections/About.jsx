import React from "react";
import { FaReact, FaAngular, FaNodeJs, FaLaravel } from "react-icons/fa";
import { SiTypescript, SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiCodeigniter, DiMongodb, DiMysql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSills = [
    {
      skill: "React",
      font: <FaReact />,
    },
    {
      skill: "Angular",
      font: <FaAngular />,
    },
    {
      skill: "TypeScript",
      font: <SiTypescript />,
    },
    {
      skill: "TailwindCSS",
      font: <RiTailwindCssFill />,
    },
    {
      skill: "Shadcn UI",
      font: <SiShadcnui />,
    },
  ];
  const backendSkills = [
    {
      skill: "Node.js",
      font: <FaNodeJs />,
    },
    {
      skill: "SpringBoot",
      font: <BiLogoSpringBoot />,
    },
    {
      skill: "Laravel",
      font: <FaLaravel />,
    },
    {
      skill: "CodeIgniter",
      font: <DiCodeigniter />,
    },
    {
      skill: "MongoDB",
      font: <DiMongodb />,
    },
    {
      skill: "Mysqli",
      font: <DiMysql />,
    },
    {
      skill: "GraphQL",
      font: <GrGraphQl />,
    },
    // "Node.js",
    // "SpringBoot",
    // "Laravel",
    // "CodeIgniter",
    // "MongoDB",
    // "REST API",
    // "GraphQL",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-yellow-800 bg-clip-text text-center text-transparent">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-1 transition-all">
            <p className="text-gray-300 mb-6">
              Hi there, I'm Wayu Berry, a skilled and experienced Software
              Engineer with a passion for developing innovative and
              user-friendly web applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSills.map((skill, key) => (
                    <span
                      key={key}
                      className="flex  items-center  justify-center cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 duration-500 ease-in-out  transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      <span className="pr-1">{skill.skill}</span>{" "}
                      <span>{skill.font}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="flex items-center bg-blue-500/10 cursor-pointer text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 duration-500 ease-in-out  transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      <span className="pr-1">{skill.skill}</span>{" "}
                      <span>{skill.font}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓Education</h3>
              <ul className="list-disc list-inside   text-gray-300 ">
                <li>
                  <strong>BSc. in Electrical&Computer Engineering </strong> -
                  Bahirdar University(2014-2018)
                </li>
                <li>
                  <strong>
                    Msc. in Electronics&Communication Engineering{" "}
                  </strong>{" "}
                  - Adama Science&Technology University(2018/19-2021)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experiences</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at Sher Ethiopia PLC (2022 - Present)
                  </h4>

                  <ul className="list-disc list-inside">
                    <li> Develop and maintained bonus system for employees</li>
                    <li>Develop and integrated API with SAP(Successfactors)</li>
                    <li>Develop variety Management system </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Freelancer (2020 - 2022)</h4>

                  <ul className="list-disc list-inside">
                    <li>Hospital Management System</li>
                    <li>Pharmacy Managememt System</li>
                    <li>POS Management System</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
