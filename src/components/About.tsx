import { Code, Database, Globe, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Java", level: 95 },
    { name: "Spring Boot & Spring Cloud", level: 90 },
    { name: "React.js", level: 85 },
    { name: "AWS (EC2, Lambda, RDS, S3)", level: 85 },
    { name: "Docker & Kubernetes (EKS)", level: 85 },
    { name: "Apache Kafka", level: 80},
    { name: "PostgreSQL", level: 80 },
    { name: "Terraform", level: 75 },
    { name: "CI/CD (Jenkins, GitHub Actions)", level: 90 },
    { name: "Spring Security, OAuth2, JWT", level: 85 },
    { name: "Swagger/OpenAPI", level: 85 },
    { name: "Redis", level: 80 }
  ];

  const features = [
    {
    icon: Code,
    title: "Frontend Development",
    description: "Developing dynamic and user-centric interfaces using React.js and Angular with responsive design principles"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Building secure, scalable RESTful APIs and microservices using Java, Spring Boot, and Spring Cloud"
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description: "Deploying cloud-native applications on AWS with Docker, Kubernetes, and CI/CD pipelines using Jenkins and GitHub Actions"
  },
  {
    icon: Zap,
    title: "Performance & Monitoring",
    description: "Optimizing system performance with Redis, JPA tuning, and monitoring using Prometheus and Grafana"
  }
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent transition-all duration-1000 animate-fade-in-up`}>
              About Me
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000  'animate-fade-in-up' `} style={{ animationDelay: '0.2s' }}>
              I'm a results-driven Full Stack Developer with 4+ years of experience building scalable, high-performance applications across banking, healthcare, and automotive domains. I specialize in Java, Spring Boot, React.js, and AWS, with a strong focus on microservices, cloud deployments, and real-time systems using Kafka. Passionate about clean architecture, DevOps practices, and delivering impactful software solutions.
            </p>
          </div>

          {/* Professional Summary */}
          <div className={`bg-card rounded-2xl p-8 shadow-portfolio-medium mb-16 transition-all duration-1000  'animate-scale-in'` } style={{ animationDelay: '0.4s' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a dedicated Java Full Stack Developer with 4+ years of experience in designing and deploying enterprise-grade applications.  
                  I specialize in Java, Spring Boot, and React.js, with hands-on expertise in building secure microservices, cloud-native solutions on AWS, and real-time systems using Kafka.  
                  My focus is on creating scalable, resilient architectures that deliver high performance and seamless user experiences.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="font-medium text-primary mr-2"></span>
                    <span>Location: Dallas, TX (Open to Relocate)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium text-primary mr-2"></span>
                    <span>Experience: 4+ Years</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium text-primary mr-2"></span>
                    <span>Focus: Java Full Stack Development</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`p-4 bg-muted rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105  'animate-bounce-in'  `}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <feature.icon className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Experience Section */}
<div className={`mb-16 transition-all duration-1000 'animate-fade-in-up' `} style={{ animationDelay: '0.6s' }}>
  <h3 className="text-3xl font-bold text-center mb-12 text-card-foreground">Professional Experience</h3>
  
  <div className="grid md:grid-cols-3 gap-6">
    {/* JPMorgan */}
    <div className="bg-card rounded-2xl p-6 shadow-portfolio-medium hover:shadow-portfolio-heavy transition-all duration-300 hover:scale-105 border border-border">
      <h4 className="text-lg font-semibold text-card-foreground mb-1">JPMorgan Chase & Co</h4>
      <p className="text-sm text-muted-foreground mb-2">Java Full Stack Developer</p>
      <p className="text-xs text-muted-foreground mb-4">Feb 2024 – Present | Dallas, TX</p>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>Rebuilt credit card systems with Java 17 & Spring Boot.</li>
        <li>Secure APIs with OAuth2/JWT & real-time fraud alerts via Kafka.</li>
        <li>Deployed to AWS EKS with CI/CD automation.</li>
      </ul>
    </div>

    {/* Oak Street Health */}
    <div className="bg-card rounded-2xl p-6 shadow-portfolio-medium hover:shadow-portfolio-heavy transition-all duration-300 hover:scale-105 border border-border">
      <h4 className="text-lg font-semibold text-card-foreground mb-1">Oak Street Health</h4>
      <p className="text-sm text-muted-foreground mb-2">Java Full Stack Developer</p>
      <p className="text-xs text-muted-foreground mb-4">Jul 2020 – Jun 2022 | Remote</p>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>Developed patient modules with React & Java.</li>
        <li>Used Kafka & AWS for event-driven workflows.</li>
        <li>Infrastructure via Terraform, Redis for caching.</li>
      </ul>
    </div>

    {/* Harman */}
    <div className="bg-card rounded-2xl p-6 shadow-portfolio-medium hover:shadow-portfolio-heavy transition-all duration-300 hover:scale-105 border border-border">
      <h4 className="text-lg font-semibold text-card-foreground mb-1">Harman</h4>
      <p className="text-sm text-muted-foreground mb-2">Java Developer</p>
      <p className="text-xs text-muted-foreground mb-4">May 2019 – Jun 2020 | Bangalore</p>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>Built microservices with Spring Boot & Hibernate.</li>
        <li>Enhanced UI using Angular 5 and Bootstrap.</li>
        <li>Integrated RabbitMQ for telemetry dashboards.</li>
      </ul>
    </div>
  </div>
</div>

          {/* Skills Section */}
          <div className={`mb-16 transition-all duration-1000 'animate-fade-in-up' `} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">My Skills</h3>
            <div className="bg-card rounded-2xl p-8 shadow-portfolio-medium">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-1000 'animate-fade-in-up' : `}
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className={`bg-card rounded-2xl p-8 shadow-portfolio-medium transition-all duration-1000 ? 'animate-slide-in-left' `} style={{ animationDelay: '1.2s' }}>
            <h3 className="text-3xl font-bold text-center mb-8 text-card-foreground">Education</h3>
            <div className="max-w-2xl mx-auto">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="pb-8">
                  <h4 className="text-xl font-semibold text-card-foreground">Master of Science in Computer Science</h4>
                  <p className="text-primary font-medium">University of Central Missour</p>
                  <p className="text-muted-foreground">Graduated: Dec 2023</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focused on full stack development with Java, Spring Boot, and React.js, alongside building secure, cloud-native applications using AWS, Docker, and Kubernetes. Experienced in developing robust APIs with OAuth2, JWT, and automating CI/CD pipelines for scalable, high-performance systems.
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

export default About;