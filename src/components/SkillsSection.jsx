import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaPython,FaNodeJs } from "react-icons/fa";
import {
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiJupyter,
  SiScikitlearn,
} from "react-icons/si";

const skills = [
  { name: "HTML", level: 90, category: "frontend", icon: <FaHtml5 /> },
  { name: "CSS", level: 85, category: "frontend", icon: <FaCss3Alt /> },
  { name: "React.js", level: 85, category: "frontend", icon: <FaReact /> },

  { name: "Python", level: 90, category: "backend", icon: <FaPython /> },
  { name: "MySQL", level: 85, category: "backend", icon: <SiMysql /> },
  { name: "Flask API", level: 80, category: "backend", icon: <FaReact /> },
  { name: "Node.js", level: 80, category: "backend", icon: <FaNodeJs /> },


  { name: "TensorFlow", level: 85, category: "machine learning", icon: <SiTensorflow /> },
  { name: "PyTorch", level: 80, category: "machine learning", icon: <SiPytorch /> },
  { name: "OpenCV", level: 80, category: "machine learning", icon: <SiOpencv /> },
  { name: "Scikit-Learn", level: 85, category: "machine learning", icon: <SiScikitlearn /> },
  { name: "Jupyter Notebook", level: 85, category: "machine learning", icon: <SiJupyter /> },

  { name: "Git / GitHub", level: 85, category: "tools", icon: <FaGitAlt /> },
];

const categories = ["all", "frontend", "backend", "machine learning", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="flex items-center space-x-4 mb-4 text-primary text-3xl">
                {skill.icon}
                <h3 className="font-semibold text-lg text-foreground">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1 text-sm text-muted-foreground">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
