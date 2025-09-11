# 🏍️ MotoWeb - Catálogo de Motocicletas

Um site moderno e responsivo para catálogo de motocicletas, desenvolvido com React, TypeScript e Tailwind CSS. O projeto oferece uma experiência de usuário excepcional com animações suaves, tema escuro/claro e design responsivo.

## ✨ Funcionalidades

### 🏠 **Página Inicial**
- Hero section com imagem de fundo dinâmica
- Seção de benefícios com animações
- Estatísticas da loja
- Call-to-action para catálogo

### 🏍️ **Catálogo de Motos**
- Grid responsivo com 16 motocicletas
- Sistema de filtros por marca, tipo e preço
- Busca em tempo real
- Animações de scroll otimizadas
- Cards interativos com botão de favoritos

### 📱 **Páginas de Detalhes**
- Página individual para cada moto
- Galeria de imagens interativa
- Especificações técnicas detalhadas
- Características e descrição
- Sidebar de contato fixo

### ℹ️ **Página Sobre**
- Informações da loja
- Estatísticas e histórico
- Equipe e valores
- Seção de contato

### 🎨 **Design e UX**
- Tema escuro/claro com toggle
- Animações de scroll suaves
- Design glassmorphism
- Layout responsivo
- Performance otimizada

## 🚀 Tecnologias Utilizadas

### **Frontend**
- **React 18** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilos
- **Vite** - Build tool e dev server
- **React Router** - Roteamento

### **Componentes UI**
- **shadcn/ui** - Componentes reutilizáveis
- **Lucide React** - Ícones
- **Framer Motion** - Animações (implícito)

### **Hooks Customizados**
- `useTheme` - Gerenciamento de tema
- `useIntersectionObserver` - Animações de scroll
- `useMotorcycleSearch` - Filtros e busca

### **Ferramentas**
- **ESLint** - Linting
- **PostCSS** - Processamento CSS
- **Git** - Controle de versão

## 📦 Instalação

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/motoWeb.git
cd motoWeb
```

### **Instale as dependências**
```bash
npm install
# ou
yarn install
```

### **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Footer.tsx      # Rodapé
│   ├── HeroSection.tsx # Seção hero da página inicial
│   ├── MotorcycleCard.tsx # Card de moto
│   └── ScrollAnimation.tsx # Animação de scroll
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página inicial
│   ├── Catalog.tsx     # Catálogo de motos
│   ├── MotorcycleDetails.tsx # Detalhes da moto
│   ├── About.tsx       # Página sobre
│   └── NotFound.tsx    # Página 404
├── hooks/              # Hooks customizados
│   ├── useTheme.ts     # Gerenciamento de tema
│   ├── useIntersectionObserver.ts # Observer de scroll
│   └── useMotorcycleSearch.ts # Filtros e busca
├── data/               # Dados da aplicação
│   └── motorcycles.ts  # Base de dados das motos
├── assets/             # Imagens e recursos
└── styles/             # Estilos globais
    └── index.css       # CSS principal
```

## 🎯 Funcionalidades Detalhadas

### **Sistema de Tema**
- Toggle entre modo claro e escuro
- Persistência no localStorage
- Detecção automática de preferência do sistema
- Cores adaptáveis para ambos os modos

### **Animações de Scroll**
- Intersection Observer API
- Animações escalonadas
- Performance otimizada
- Efeitos de fade, slide e scale

### **Catálogo Interativo**
- Filtros por marca (Honda, Yamaha, Kawasaki, Suzuki, Ducati)
- Filtros por tipo (Esportiva, Naked, Touring, Adventure)
- Filtros por faixa de preço
- Busca por nome/modelo
- Limpeza de filtros

### **Páginas de Detalhes**
- Dados dinâmicos para todas as 16 motos
- Especificações técnicas completas
- Galeria de imagens
- Informações de contato
- Design responsivo

## 🎨 Personalização

### **Cores do Tema**
O projeto usa variáveis CSS para fácil personalização:

```css
:root {
  --primary: 220 100% 50%;        /* Azul principal */
  --primary-foreground: 0 0% 98%; /* Texto sobre azul */
  --secondary: 220 14% 96%;       /* Cinza claro */
  --background: 0 0% 100%;        /* Fundo claro */
  --foreground: 220 9% 46%;       /* Texto principal */
}

.dark {
  --primary: 220 100% 60%;        /* Azul mais suave no escuro */
  --background: 220 9% 9%;        /* Fundo escuro */
  --foreground: 220 9% 95%;       /* Texto claro */
}
```

### **Animações**
As animações podem ser personalizadas no arquivo `index.css`:

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### **Vercel (Recomendado)**
```bash
npm run build
# Faça upload da pasta dist/ para Vercel
```

### **Netlify**
```bash
npm run build
# Faça upload da pasta dist/ para Netlify
```

### **GitHub Pages**
```bash
npm run build
# Configure o GitHub Actions para deploy automático
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


---
