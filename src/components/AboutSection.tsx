import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "React, TypeScript, Node.js, Python"
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX, Figma, Design Systems"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização, SEO, Core Web Vitals"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Metodologias ágeis, Git, Code Review"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 primary-gradient mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Transformando ideias em realidade digital
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sou um desenvolvedor full stack com mais de 5 anos de experiência criando 
              aplicações web modernas e responsivas. Especializado em React, TypeScript 
              e Node.js, tenho paixão por resolver problemas complexos e criar experiências 
              de usuário excepcionais.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Acredito que a tecnologia deve ser acessível e intuitiva. Por isso, 
              foco sempre em entregar soluções que não apenas funcionam perfeitamente, 
              mas também proporcionam uma experiência agradável para quem as utiliza.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="bg-card p-6 rounded-lg card-shadow hover:card-shadow-hover transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2 text-card-foreground">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;