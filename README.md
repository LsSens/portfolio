# 🚀 Personal Chat Display - Portfólio Lucas Sens

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-Latest-000000?style=for-the-badge)

</div>

## 📖 Sobre o Projeto

**Personal Chat Display** é um portfólio pessoal interativo e moderno desenvolvido para Lucas Sens, um desenvolvedor Full Stack apaixonado por criar soluções inovadoras. O projeto combina design responsivo, funcionalidades interativas e integração com APIs externas para criar uma experiência única de apresentação profissional.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface elegante e responsiva com Tailwind CSS
- 💬 **Chat Interativo**: Sistema de chat simulado para interação com visitantes
- 🔗 **Integração GitHub**: Exibição automática de projetos e informações do perfil
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada**: Construído com Vite e React 18
- 🎭 **Animações Suaves**: Transições e animações CSS para melhor UX
- 🌐 **Multi-idioma**: Suporte para português com estrutura para internacionalização

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript 5.8.3** - Superset JavaScript com tipagem estática
- **Vite 5.4.19** - Build tool moderno e rápido
- **Tailwind CSS 3.4.17** - Framework CSS utilitário
- **Shadcn/ui** - Componentes UI reutilizáveis e acessíveis

### Bibliotecas e Ferramentas
- **React Router DOM** - Roteamento para aplicações React
- **React Hook Form** - Gerenciamento de formulários
- **TanStack Query** - Gerenciamento de estado e cache de dados
- **Lucide React** - Ícones SVG modernos
- **Radix UI** - Componentes primitivos acessíveis
- **Framer Motion** - Animações e transições

### Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou bun

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/personal-chat-display.git
cd personal-chat-display
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
bun install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env na raiz do projeto
cp .env.example .env
```

4. **Execute o projeto em desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
bun dev
```

5. **Abra no navegador**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run build:dev    # Build para desenvolvimento
npm run preview      # Preview da build de produção
npm run lint         # Executa ESLint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── ui/             # Componentes UI base (Shadcn/ui)
│   ├── HeroSection.tsx # Seção principal do portfólio
│   ├── ChatSection.tsx # Sistema de chat interativo
│   ├── ProjectsSection.tsx # Exibição de projetos GitHub
│   ├── AboutSection.tsx    # Seção sobre o desenvolvedor
│   ├── ContactSection.tsx  # Formulário de contato
│   └── Navigation.tsx      # Navegação principal
├── hooks/              # Custom hooks React
│   ├── useGitHub.ts    # Hook para integração GitHub
│   └── useMobile.tsx   # Hook para detecção mobile
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página principal
│   └── NotFound.tsx    # Página 404
├── services/           # Serviços externos
│   └── githubService.ts # API GitHub
├── config/             # Configurações
│   ├── github.ts       # Configurações GitHub
│   └── languages.ts    # Configurações de idiomas
├── types/              # Definições TypeScript
├── lib/                # Utilitários e helpers
└── assets/             # Recursos estáticos
```

## 🎯 Funcionalidades

### 1. **Seção Hero**
- Apresentação pessoal com foto do GitHub
- Botões de ação (download CV, contato)
- Redes sociais integradas
- Animações de entrada

### 2. **Chat Interativo**
- Sistema de chat simulado
- Interface responsiva e intuitiva
- Histórico de mensagens
- Funcionalidade de limpeza

### 3. **Projetos GitHub**
- Integração automática com API GitHub
- Exibição de repositórios favoritos
- Estatísticas de stars e forks
- Linguagens de programação destacadas

### 4. **Seção Sobre**
- Descrição profissional
- Habilidades técnicas
- Experiência e formação
- Badges de tecnologias

### 5. **Contato**
- Formulário de contato
- Validação de campos
- Integração com serviços externos

## 🔧 Configuração

### Integração GitHub
Para usar a integração com GitHub, configure as seguintes variáveis:

```typescript
// src/config/github.ts
export const GITHUB_CONFIG = {
  username: 'seu-usuario-github',
  token: process.env.GITHUB_TOKEN, // Token pessoal do GitHub
  // ... outras configurações
};
```

### Personalização
- **Cores**: Edite `tailwind.config.ts` para personalizar o tema
- **Conteúdo**: Modifique os componentes para alterar textos e informações
- **Estilo**: Ajuste classes CSS e animações conforme necessário

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops
- 🖥️ Telas grandes

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

### Deploy no Vercel
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Deploy no Netlify
1. Conecte seu repositório ao Netlify
2. Configure o comando de build: `npm run build`
3. Configure o diretório de publicação: `dist`

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Lucas Sens**
- LinkedIn: [Lucas Sens](https://linkedin.com/in/lucassens)
- GitHub: [@LsSens](https://github.com/LsSens)
- Email: [lucassousasens@gmail.com](mailto:lucassousasens@gmail.com)

## 🙏 Agradecimentos

- [Shadcn/ui](https://ui.shadcn.com/) - Componentes UI incríveis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Vite](https://vitejs.dev/) - Build tool moderno
- [React](https://reactjs.org/) - Biblioteca JavaScript para UIs
- [GitHub](https://github.com/) - Plataforma de desenvolvimento

---

<div align="center">

⭐ **Se este projeto te ajudou, considere dar uma estrela!** ⭐

</div>
