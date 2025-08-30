import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork, Loader2, AlertCircle, Code, Calendar, GitBranch } from "lucide-react";
import { useGitHub } from "@/hooks/useGitHub";
import { GITHUB_CONFIG } from "@/config/github";
import LanguageBadge from "@/components/ui/language-badge";

const ProjectsSection = () => {
  const { starredRepos, loading, error } = useGitHub();

  if (loading) {
    return (
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Meus Projetos
            </h2>
            <div className="w-20 h-1 primary-gradient mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Carregando projetos favoritos do GitHub...
            </p>
          </div>
          
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Meus Projetos
            </h2>
            <div className="w-20 h-1 primary-gradient mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Erro ao carregar projetos favoritos do GitHub
            </p>
          </div>
          
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <p className="text-destructive mb-4">{error}</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
              >
                Tentar Novamente
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 primary-gradient mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus projetos favoritos do GitHub, 
            demonstrando diferentes tecnologias e abordagens para resolver problemas complexos.
          </p>
        </div>

        {starredRepos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Nenhum projeto favorito encontrado</p>
            <p className="text-sm text-muted-foreground mt-2">
              Adicione estrelas aos repositórios que deseja destacar no seu perfil do GitHub
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {starredRepos.map((project, index) => (
              <Card 
                key={project.githubUrl}
                className="group overflow-hidden card-shadow hover:card-shadow-hover transition-smooth animate-scale-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header com ícone e indicador de favorito */}
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="leading-relaxed mt-1">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                    
                    {/* Indicador de repositório favorito */}
                    <div className="bg-primary text-white p-2 rounded-full">
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Estatísticas do repositório */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">{project.forks}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <span className="font-medium">Ativo</span>
                    </div>
                  </div>

                  {/* Tecnologias com ícones e cores */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.length > 0 ? (
                      project.technologies.map((tech) => (
                        <LanguageBadge 
                          key={tech}
                          language={tech}
                          size="sm"
                          showIcon={true}
                        />
                      ))
                    ) : (
                      <span className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                        <Code className="w-4 h-4 inline mr-2" />
                        Sem linguagem detectada
                      </span>
                    )}
                  </div>

                  {/* Topics */}
                  {project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.topics.slice(0, 4).map((topic) => (
                        <span 
                          key={topic}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                        >
                          {topic}
                        </span>
                      ))}
                      {project.topics.length > 4 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                          +{project.topics.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Botões de ação */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 transition-smooth hover:bg-primary hover:text-primary-foreground group"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Ver Projeto
                        </a>
                      </Button>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`transition-smooth hover:bg-primary hover:text-primary-foreground group ${
                        !project.liveUrl ? 'flex-1' : ''
                      }`}
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        {!project.liveUrl ? 'Ver Código' : 'GitHub'}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="transition-smooth hover:bg-primary hover:text-primary-foreground group"
            asChild
          >
            <a href={GITHUB_CONFIG.USER_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Ver Mais no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;