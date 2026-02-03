# Varuntej Reddy's Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and passion for web development. Built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/status-active-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF)

## 🎯 About

I'm **Varuntej Reddy**, a Computer Science graduate actively seeking internship opportunities. This portfolio showcases my skills, projects, and passion for building beautiful and functional web applications.

**Key Focus Areas:**
- Frontend Development (React, JavaScript, TypeScript)
- Responsive Design & User Experience
- Web Performance Optimization
- Clean Code & Best Practices

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist interface with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🎯 **Interactive Sections** - Scroll animations and engaging UI components
- 📦 **Production Ready** - Optimized builds and SEO-friendly structure

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Modern build tool

### Development Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **Git** - Version control

## 📁 Project Structure

```
portfolio/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects grid
│   ├── Blog.tsx        # Blog section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   ├── Loading.tsx     # Loading screen
│   ├── AIChat.tsx      # AI chat component
│   └── CustomCursor.tsx # Custom cursor
├── hooks/              # React hooks
│   └── useScrollAnimation.ts
├── services/           # API services
│   └── geminiService.ts
├── styles/             # CSS files
│   ├── cursor.css
│   ├── hero.css
│   └── loading.css
├── public/             # Static assets
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── vite.config.ts      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/varuntejreddy03/varuntej.git
cd varuntej
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or the next available port)

## 📖 Available Scripts

### Development
```bash
npm run dev       # Start development server with hot reload
```

### Build
```bash
npm run build     # Build for production
npm run preview   # Preview production build locally
```

### Git Operations
```bash
# Using batch files (Windows)
./push.bat        # Push with custom commit message
./quick-push.bat  # Quick push with timestamp
./init-git.bat    # Initialize git repository
```

## 🎓 Skills

### Frontend Development
- React & React Hooks
- TypeScript
- Tailwind CSS
- Responsive Design
- Web Animations
- UI/UX Best Practices

### Languages
- JavaScript
- Python
- HTML/CSS
- TypeScript

### Tools & Platforms
- Git & GitHub
- VS Code
- Vite
- npm

## 📂 Key Projects

### 1. AI Chat Application
Interactive chat interface powered by Gemini AI API
- Real-time responses
- Clean, intuitive UI
- Integration with external API

### 2. Responsive Portfolio
This portfolio itself!
- Mobile-first design
- Dark mode support
- Smooth scroll animations
- Performance optimized

### 3. Custom Cursor System
Interactive custom cursor implementation
- Smooth tracking
- Click feedback
- CSS-based animations

## 📱 Mobile Optimization

The entire portfolio is optimized for mobile devices:
- **Responsive Layout** - Adapts seamlessly to all screen sizes
- **Touch-Friendly** - Large tap targets and readable text
- **Fast Loading** - Optimized images and lazy loading
- **Mobile Performance** - Smooth animations and interactions

## 🌐 Deployment

This portfolio can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

### Netlify
- Connect GitHub repository
- Auto-deploys on push to main

## 📞 Contact & Links

- **Email**: varuntejreddy03@example.com
- **GitHub**: [github.com/varuntejreddy03](https://github.com/varuntejreddy03)
- **LinkedIn**: [linkedin.com/in/varuntejreddy03](https://linkedin.com/in/varuntejreddy03)
- **Portfolio**: [yourportfolio.com](https://yourportfolio.com)

## 🤝 Contributing

This is a personal portfolio project. However, feedback and suggestions are always welcome!

## 📝 License

This project is open source and available under the MIT License. See the LICENSE file for more details.

## 🎯 Current Status

🔍 **Actively seeking internship opportunities**

I'm enthusiastic about learning, quick to adapt, and committed to becoming a skilled full-stack developer. Open to:
- Remote internships
- On-site positions
- Hybrid opportunities
- 6-month duration (flexible)

## 📈 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Project filters and categories
- [ ] Newsletter subscription
- [ ] Analytics dashboard
- [ ] More interactive components
- [ ] Performance monitoring

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Google Gemini](https://gemini.google.com/) - AI integration

---

**Made with ❤️ by Varuntej Reddy**

*Last Updated: February 2026*

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
