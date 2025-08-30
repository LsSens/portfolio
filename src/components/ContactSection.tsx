import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "joao@exemplo.com",
      href: "mailto:joao@exemplo.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP",
      href: "https://maps.google.com/?q=São+Paulo,SP"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:joao@exemplo.com",
      color: "hover:text-red-500"
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
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-card rounded-full card-shadow hover:card-shadow-hover transition-smooth ${social.color} group`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-smooth" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="animate-slide-in-right border-0 card-shadow">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Nome</label>
                <input
                  type="text"
                  className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Assunto</label>
                <input
                  type="text"
                  className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Mensagem</label>
                <textarea
                  className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth h-32 resize-none"
                  placeholder="Descreva seu projeto ou ideia..."
                ></textarea>
              </div>
              
              <Button 
                className="w-full primary-gradient text-primary-foreground hover:opacity-90 transition-smooth"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;