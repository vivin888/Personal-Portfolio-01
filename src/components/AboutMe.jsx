import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer & AI/ML Developer
            </h3>

            <p className="text-muted-foreground md:text-left">
              🎓 Currently pursuing my B.Tech in Computer Science Engineering, I am
              passionate about Artificial Intelligence, Machine Learning, and
              full-stack development. I have hands-on experience in building
              intelligent web applications, automation platforms, and data-driven
              systems using modern technologies.
            </p>

            <p className="text-muted-foreground md:text-left">
              I specialize in developing scalable front-end interfaces using
              React.js and Tailwind CSS, and integrating efficient back-end logic
              with Flask, FastAPI, and Node.js. I enjoy transforming real-world
              problems into smart digital solutions and aim to create secure,
              intuitive, and high-performance applications aligned with current
              industry standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Resume/Vivin_Rakul_Resume.pdf"
                download="Vivin_Rakul_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-xs card-hover flex justify-center">
            <img
              className="h-100 overflow-hidden object-cover"
              src="/Images/Screenshot 2026-01-05 122624.png"
              alt="Vivin Rakul"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
