import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialButtons from "./SocialButtons";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !subject || !message) {
      return;
    }

    const whatsappNumber = "5513982201751";
    const whatsappMessage = `Olá, sou ${name}, email: ${email}\n\n${subject}\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lucassenssousa@gmail.com",
      href: "mailto:lucassenssousa@gmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (13) 98220-1751",
      href: "tel:+5513982201751"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Santos, SP",
      href: "https://maps.google.com/?q=Santos,SP"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Vamos Conversar?
          </h2>
          <div className="w-20 h-1 primary-gradient mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Vamos discutir como posso ajudar a transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center p-4 bg-card rounded-lg card-shadow hover:card-shadow-hover transition-smooth group"
                >
                  <info.icon className="w-5 h-5 text-primary mr-4 group-hover:scale-110 transition-smooth" />
                  <div>
                    <p className="font-medium text-card-foreground">{info.label}</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-smooth">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="border-t pt-8">
              <h4 className="font-semibold mb-4">Siga-me nas redes sociais</h4>
              <div className="flex space-x-4">
                <SocialButtons />
              </div>
            </div>
          </div>

          <Card className="animate-slide-in-right border-0 card-shadow">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Assunto</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth h-32 resize-none"
                    placeholder="Descreva seu projeto ou ideia..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full primary-gradient text-primary-foreground hover:opacity-90 transition-smooth"
                  size="lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;