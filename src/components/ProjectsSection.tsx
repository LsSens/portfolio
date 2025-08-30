import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "Sistema completo de gerenciamento para e-commerce com analytics em tempo real, gestão de produtos e relatórios avançados.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/exemplo/ecommerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "App de Fitness",
      description: "Aplicativo mobile para acompanhamento de exercícios e nutrição, com gamificação e social features.",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/exemplo/fitness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Sistema de CRM",
      description: "Plataforma de gestão de relacionamento com clientes, automação de vendas e análise de pipeline.",
      technologies: ["Vue.js", "Python", "Django", "Redis"],
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/exemplo/crm",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Portfolio Interativo",
      description: "Site pessoal com animações avançadas, modo escuro/claro e integração com APIs de redes sociais.",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/exemplo/portfolio",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 primary-gradient mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes 
            tecnologias e abordagens para resolver problemas complexos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden card-shadow hover:card-shadow-hover transition-smooth animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 transition-smooth hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="transition-smooth hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Ver Mais no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;