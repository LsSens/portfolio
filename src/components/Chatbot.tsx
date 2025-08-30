import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou o assistente virtual do João. Como posso ajudar você?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

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
      // Simulate API call - replace with actual endpoint
      const response = await fetch(process.env.REACT_APP_CHATBOT_ENDPOINT || '/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          conversation_id: 'default'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage: Message = {
          id: Date.now() + 1,
          text: data.response || "Desculpe, não consegui processar sua mensagem no momento.",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Falha na comunicação com o servidor');
      }
    } catch (error) {
      // Fallback response for demo purposes
      const fallbackResponses = [
        "Sou desenvolvedor Full Stack com experiência em React, TypeScript e Node.js.",
        "Tenho mais de 5 anos de experiência criando aplicações web modernas.",
        "Posso ajudar com desenvolvimento front-end, back-end e consultoria técnica.",
        "Meus projetos incluem e-commerce, CRM, apps mobile e sistemas complexos.",
        "Estou sempre disponível para discutir novos projetos e oportunidades."
      ];
      
      const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
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

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full primary-gradient text-primary-foreground shadow-lg hover:opacity-90 transition-smooth z-50 ${
          isOpen ? 'scale-95' : 'scale-100'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 card-shadow border-0 animate-scale-in z-40">
          <CardHeader className="primary-gradient text-primary-foreground rounded-t-lg">
            <CardTitle className="text-lg flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              Chat com João
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {!message.isUser && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      {message.isUser && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <div className="flex-1">
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 opacity-70`}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4" />
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
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 p-2 text-sm border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  size="sm"
                  className="px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;