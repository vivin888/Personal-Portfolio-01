import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title:"Federated Learning Framework for Decentralized Drone Intelligence",
    description:
      "EdgeFL-Drone is a federated learning–based decentralized drone AI system where multiple drones train models locally and share only model updates with a central server to build a secure, privacy-preserving global model using Python and Flask ",
    image: "/Projects/img1.png",
    tags: ["TensorFlow", "MobileNetV2", "Federated Learning", "Keras","Cloud Aggregation Server"],
    url: "",
    git: " ",
  },

  {
    id: 2,
    title: "Machine Learning Based Phishing Website Detection System",
    description:
      "PhishGuard is a machine learning–based web application designed to identify phishing websites by analyzing URL and website features. Built using Python and Scikit-learn and deployed through a Flask web interface, the system allows users to quickly check whether a website is safe or malicious, helping prevent online fraud and improving web security.",
    image: " ",
    tags: [
      "Scikit-learn",
      "python",
      "Flask",
      "Pandas",
      "NumPy",
      "Git & GitHub",
    ],
    url: "#",
    git: "#",
  },

  {
    id: 3,
    title: "Automated Leaf Disease Detection Using CNN and Image Processing",
    description:
      "This project detects plant leaf diseases by analyzing uploaded images using a deep learning model. It instantly identifies the disease, shows confidence scores, and suggests treatments to help farmers take quick and accurate action.",
    image: "/Projects/img2.png",
    tags: ["TypeScript,", "HTML", "CSS","React.js", "TensorFlow" , "REST API"],
    url: "",
    git: "#",
  },

  {
    id: 4,
    title: "AI-Driven Drug Review Sentiment Analysis System",
    description:
      "An intelligent sentiment prediction system that leverages Bi-LSTM neural networks and NLP pipelines to evaluate patient drug reviews, supporting healthcare analytics and informed medication choices.",
    image: "",
    tags: [
      "NLP",
      "Deep Learning",
      "Python",
      "Healthcare AI",
    ],
    url: "#",
    git: "",
  },
  /*
  {
    id: 5,
    title: "SynergyTop - Website Landing Page",
    description:
      "SynergyTop is presented as a full-service IT agency offering services such as custom software development, web development, eCommerce & mobile-app development",
    image: "/Projects/SynergyTop.png",
    tags: ["React.js", "TailwindCSS", "Framer Motion", "Vite"],
    url: "https://synergytop.netlify.app/",
    git: "https://github.com/abhicodes01/StrategyTop_Redesign_LandingPage",
  },*/
];

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animation happens only once
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="txet-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my approach to writing clean, maintainable code
          and building user-friendly interfaces. I’ve focused on practical
          solutions that balance performance, usability, and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover trasnition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl text-left font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-left text-xs mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button text-xs text-muted-foreground font-semibold flex gap-1"
                  >
                    Live Link <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.git}
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/vivin888"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
