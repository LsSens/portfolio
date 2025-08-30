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
    window.open('https://portifoliolsens.s3.us-east-1.amazonaws.com/cv%20lucas%20sens.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAWUAXA3EDUVHUQXXV%2F20250830%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250830T194404Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDhmA4NDS2RJzi%2FLf168%2BinGUOj%2BSI9%2F%2FPVVwr2N5cGsAIhAIEFAQnkCC25k45e0U8dM6g1yxOT6ntsjH1MuTQbFZ8eKt8CCN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNDU1MzE0ODIzNDMxIgwX4CaqHe7NL6IF35oqswJXwHEZEyGxW2tQ60NlPakeUo0ISN3KULilRyira1017SB4TNBIAO2P4jIXDUbqfrGmFjlTyDi75pZb230mBsx4PjS0IsLrrwhy2jdaqqi2lGDJhmEPWhZHl86JUKHAA83W5m7M0WKyw2HsbHuN6GxFtzSWHjoRqTdNFn%2BJxlZ3wdbqmI6FonDSccuz9FFj4chgHlrZ4Puih52JgcZixHhWMYTXV2mXZewgrXTi6668gUfSYi4%2FKLpVbbrhqnGbBFJtbbu%2B%2FMkSqJeFA6KEmbQOs0u6we4N5XSKczAcUuAepPXz04DxMamVvd%2BqFIoxKID%2FBnT3dWvuQlvtoxhi%2FcAkPdwhMju2ayRKowMlB0ZpSMBf%2BF%2F3qocimSXA79%2Fv4v9QQSS8q9ClC9UO92YuSxX7o7tNMLCozcUGOqwCZXcAP4mtSeSFlN7kn3sy2YptUHs1fi6SaihUQA9j1AcFCvnTfEhzIV3ybtY%2BYCrlhtY9c21L8IoxQnstVqST7OGiZB2cQwwCxZJL5TOWD0Rf36KKjPh0AEJP3KYLxyWTOxGOfLK0Sx5MlbyslSoXddzdmo6D88yFyS04tlaZGSSeQ8z3KaQyudkkF1buPiqNhVJjf1LKquBbjm%2BaMRx9ioxq6m5%2BlHlp3GtlLlJL3L%2BfxwKR8VEzVNfAt1TkNaeZakCm98mTqXdtbRBp8kgbgBO5DqkaewyEMC1ykf9ftdGdGRUJcA46IBXOWnnN2fgw%2Bq4XFgHFP1%2BLkqsoz1WFlJbN3HyqlP17FQirR2EBZR08YevizKtIsHt%2FRfKHt8K501n9hyH54BeVqSCo&X-Amz-Signature=a7610568bec5069d8edcfb6994f21d47c02dbc382aee40f8f61003b84981badc&X-Amz-SignedHeaders=host&response-content-disposition=inline', '_blank');
  };

  return (
    <section id="hero" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de Texto */}
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

            {/* Botões de Ação */}
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

            {/* Redes Sociais */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <SocialButtons />
            </div>
          </div>

          {/* Foto de Perfil */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="relative">
              {/* Foto do GitHub */}
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
                    // Fallback para imagem padrão se a foto do GitHub falhar
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center";
                  }}
                />
              )}
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
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