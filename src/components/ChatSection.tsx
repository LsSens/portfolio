import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, User, Bot, Settings, Eye, EyeOff } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou o João Silva, desenvolvedor full stack. Pode me perguntar qualquer coisa sobre minha experiência, projetos, tecnologias que uso, ou qualquer outra dúvida que tenha!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    if (!apiKey.trim()) {
      alert("Por favor, configure sua API key do Perplexity nas configurações primeiro.");
      setShowSettings(true);
      return;
    }

    const newUserMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: `Você é João Silva, um desenvolvedor full stack brasileiro com mais de 5 anos de experiência. Suas especialidades incluem:

              - Frontend: React, TypeScript, Next.js, Tailwind CSS, Framer Motion
              - Backend: Node.js, Python, Django, PostgreSQL, MongoDB, Redis
              - Cloud: AWS, Vercel, Docker
              - Outras: Git, metodologias ágeis, UI/UX design

              Projetos notáveis:
              - E-commerce Dashboard com analytics em tempo real
              - App de Fitness com gamificação e social features  
              - Sistema de CRM com automação de vendas
              - Portfolio interativo com animações avançadas

              Você é apaixonado por tecnologia, sempre em busca de aprender coisas novas, e gosta de resolver problemas complexos. Seja amigável, profissional e responda como se fosse realmente João Silva falando sobre si mesmo e sua carreira. Use primeira pessoa.`
            },
            {
              role: 'user',
              content: inputMessage
            }
          ],
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 800,
          return_images: false,
          return_related_questions: false,
          frequency_penalty: 1,
          presence_penalty: 0
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage: Message = {
          id: Date.now() + 1,
          text: data.choices[0]?.message?.content || "Desculpe, não consegui processar sua pergunta no momento.",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Falha na comunicação com a API');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Desculpe, houve um erro ao processar sua pergunta. Verifique sua API key e tente novamente.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Olá! Sou o João Silva, desenvolvedor full stack. Pode me perguntar qualquer coisa sobre minha experiência, projetos, tecnologias que uso, ou qualquer outra dúvida que tenha!",
        isUser: false,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Converse Comigo
          </h2>
          <div className="w-20 h-1 primary-gradient mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Faça qualquer pergunta sobre minha experiência, projetos, tecnologias que uso, 
            ou o que quiser saber sobre minha carreira como desenvolvedor!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Settings Panel */}
          {showSettings && (
            <Card className="mb-6 border-orange-200 bg-orange-50 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <Settings className="w-5 h-5 mr-2" />
                  Configurações da API
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertDescription className="text-orange-700">
                    Para usar este chatbot, você precisa de uma API key do Perplexity. 
                    Obtenha sua chave em: <a href="https://www.perplexity.ai/settings/api" target="_blank" rel="noopener noreferrer" className="underline font-medium">perplexity.ai/settings/api</a>
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-orange-800">API Key do Perplexity:</label>
                  <div className="relative">
                    <Input
                      type={showApiKey ? "text" : "password"}
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="pplx-..."
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => setShowSettings(false)}
                    disabled={!apiKey.trim()}
                    className="primary-gradient text-primary-foreground"
                  >
                    Salvar e Fechar
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowSettings(false)}
                  >
                    Fechar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Chat Interface */}
          <Card className="border-0 card-shadow animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-lg">
                  <Bot className="w-5 h-5 mr-2 text-primary" />
                  Chat com João Silva
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearChat}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Limpar Chat
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground ml-8'
                          : 'bg-secondary text-secondary-foreground mr-8'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {!message.isUser && (
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot className="w-4 h-4 text-primary" />
                          </div>
                        )}
                        {message.isUser && (
                          <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <User className="w-4 h-4 text-primary-foreground" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                          <p className={`text-xs mt-2 opacity-70`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground p-4 rounded-2xl mr-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t bg-secondary/20">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Faça uma pergunta sobre minha experiência, projetos, tecnologias..."
                    className="flex-1 p-3 border border-input rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading || !apiKey.trim()}
                    className="px-6 rounded-full primary-gradient text-primary-foreground hover:opacity-90 transition-smooth"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                {!apiKey.trim() && (
                  <p className="text-xs text-orange-600 mt-2 text-center">
                    Configure sua API key do Perplexity nas configurações para começar a conversar
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;