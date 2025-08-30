import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container-custom section-padding text-center">
        <div className="animate-fade-in">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
            <img
              src={profilePhoto}
              alt="Foto de perfil"
              className="w-full h-full object-cover rounded-full border-4 border-primary/20 transition-smooth hover:border-primary/40"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            <span className="block">Olá, eu sou</span>
            <span className="primary-gradient bg-clip-text text-transparent">
              João Silva
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais 
            incríveis e soluções inovadoras
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="primary-gradient text-primary-foreground hover:opacity-90 transition-smooth"
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="w-4 h-4 mr-2" />
              Entrar em Contato
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:joao@exemplo.com"
               className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-smooth animate-bounce"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;