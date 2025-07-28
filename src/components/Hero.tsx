import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPhoto from "@/assets/developer-photo.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className=" pt-16 min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              <span className="block animate-fade-in-up"></span>
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Sai Charan
                </span>
              </span>
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Java Full Stack Developer focused on building robust backend systems and dynamic user interfaces with Spring Boot, React.js, and AWS.  
              Experienced in designing secure RESTful APIs, developing microservices with Spring Cloud, and deploying scalable, cloud-native solutions using Docker and Kubernetes.  
              Strong advocate for CI/CD automation, event-driven architectures with Kafka, and performance optimization using Redis and JPA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-portfolio-medium"
                size="lg"
              >
                View My Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <a href="/cv/Resume.pdf" download>
  <Button
    className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-portfolio-medium"
    size="lg"
  >
    Download CV
  </Button>
</a>
            </div>
          </div>

          {/* Developer Photo */}
          <div className="flex-shrink-0 animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-white shadow-portfolio-heavy ring-4 ring-white/20 animate-bounce-in">
  <img
    src={developerPhoto}
    alt="Developer"
    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
  />

                
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse-slow" style={{ animationDelay: '1s' }}>
                <span className="text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;