import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { useGitHub } from "@/hooks/useGitHub";
import { GITHUB_CONFIG } from "@/config/github";
import SocialButtons from "./SocialButtons";

const HeroSection = () => {
  const { userInfo, loading: userLoading } = useGitHub();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCurriculum = () => {
    const fileId = '1NCnEN_rR4DVdJqM71uYjP99v4WOQxJ4f';
    window.open(`https://drive.google.com/uc?export=download&id=${fileId}`, '_blank');
  };

  return (
    <section id="hero" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
                Olá, eu sou{" "}
                <span className="text-primary">
                  {userLoading ? "..." : userInfo?.name || "Lucas Sens"}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {userLoading ? "Carregando..." : userInfo?.bio || "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras"}
              </p>
              
              <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Transformando ideias em código, um projeto de cada vez
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                size="lg" 
                className="group"
                onClick={() => downloadCurriculum()}
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Baixar curriculo
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Entre em Contato
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <SocialButtons />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="relative">
              {userLoading ? (
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse flex items-center justify-center">
                  <div className="text-muted-foreground">Carregando...</div>
                </div>
              ) : (
                <img
                  src={userInfo?.avatar_url || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center"}
                  alt={userInfo?.name || "Lucas Sens"}
                  className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/10 hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center";
                  }}
                />
              )}
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;