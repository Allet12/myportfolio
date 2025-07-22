import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-green-600"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I'm passionate about developing elegant solutions to complex
              problems and continuously learning new tools and techniques to stay
              ahead in the fast-paced tech world.
            </p>


            <p className="text-muted-foreground">
              I'm passionate about developing elegant solutions to complex
              problems and continuously learning new tools and techniques to stay
              ahead in the fast-paced tech world. I was a regional finalist in the
              Huawei ICT Competition (Computing Track), where I gained hands-on
              experience with openGauss, openEuler, and Kunpeng technologies.
              I also hold a Microsoft Azure AI Fundamentals certification, which
              deepened my understanding of AI concepts and cloud-based solutions.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Mngomezulu%20Kgotlelelo%20CV.pdf"             
                download                   
                className="px-6 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-100 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-green-100">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and full stack web applications using modern tools like React, Tailwind CSS, Spring Boot, and MySQL for both frontend and backend development.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-green-100">
                  <User className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating clean, user-friendly interfaces and smooth user experiences using design tools like Figma and modern frontend technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-green-100">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend & Database Development</h4>
                  <p className="text-muted-foreground">
                    Building robust backend systems with Spring Boot and managing scalable databases using MySQL, openGauss, and other modern tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
