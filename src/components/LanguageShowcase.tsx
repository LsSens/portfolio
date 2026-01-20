import LanguageBadge from "@/components/ui/language-badge";

const LanguageShowcase = () => {
  const sampleLanguages = [
    'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'Docker'
  ];

  return (
    <div className="p-6 space-y-6">
      <h3 className="text-lg font-semibold">Demonstração dos Badges de Linguagem</h3>
      
      <div className="space-y-4">
        <h4 className="font-medium">Tamanhos:</h4>
        <div className="flex flex-wrap gap-3">
          <LanguageBadge language="JavaScript" size="sm" />
          <LanguageBadge language="TypeScript" size="md" />
          <LanguageBadge language="Python" size="lg" />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Com e sem ícones:</h4>
        <div className="flex flex-wrap gap-3">
          <LanguageBadge language="React" showIcon={true} />
          <LanguageBadge language="Vue" showIcon={false} />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Todas as linguagens:</h4>
        <div className="flex flex-wrap gap-2">
          {sampleLanguages.map((lang) => (
            <LanguageBadge 
              key={lang} 
              language={lang} 
              size="sm"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Cores personalizadas:</h4>
        <div className="flex flex-wrap gap-2">
          <LanguageBadge 
            language="JavaScript" 
            size="sm"
            className="hover:scale-105 transition-transform"
          />
          <LanguageBadge 
            language="TypeScript" 
            size="sm"
            className="hover:scale-105 transition-transform"
          />
          <LanguageBadge 
            language="Python" 
            size="sm"
            className="hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageShowcase;
