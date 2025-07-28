import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      description: "Associate level certification validating proficiency in developing and maintaining AWS-based applications",
      link: "#"
    },
    {
      name: "Spring Framework for Java Developers",
      description: "LinkedIn Learning certification covering core Spring concepts like dependency injection, Spring Boot, and MVC",
      link: "#"
    },
    {
      name: "Java Multithreading, Concurrency & Performance Optimization",
      description: "Udemy course focused on writing efficient multi-threaded Java code and tuning performance",
      link: "#"
    },
    {
      name: "Architecting with Google Kubernetes Engine",
      description: "Coursera certification covering Kubernetes deployments, scaling, and architecture on Google Cloud",
      link: "#"
    },
     {
    name: "Modern React with Redux",
    description: "Udemy course exploring React fundamentals, hooks, and state management using Redux",
    link: "#"
  },
  {
    name: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
    description: "Coursera certification focused on developing scalable microservices with Spring Cloud patterns",
    link: "#"
  }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Certifications
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Verified expertise in full stack development and cloud technologies.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`group bg-card rounded-2xl p-8 shadow-portfolio-light hover:shadow-portfolio-medium transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-border hover:border-primary/30 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={`View ${cert.name} certification`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-hero-gradient rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;