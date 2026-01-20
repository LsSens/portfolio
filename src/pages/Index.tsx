import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ChatSection from "@/components/ChatSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ChatSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container-custom text-center">
          <p className="text-sm opacity-90">
            © 2025 Lucas Sens. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
