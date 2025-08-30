import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Chatbot />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container-custom text-center">
          <p className="text-sm opacity-90">
            © 2024 João Silva. Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-70 mt-2">
            Desenvolvido com ❤️ usando React + TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
