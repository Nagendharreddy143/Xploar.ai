# Xploar.ai - AI-Powered Learning Platform

##  Project Overview

Xploar.ai is a cutting-edge AI-powered learning platform designed to revolutionize competitive exam preparation in India. The platform addresses the talent distribution crisis by providing personalized, adaptive learning experiences that go beyond traditional rote learning methods.

### 🎯 Mission
To democratize quality education and unlock the innovation potential trapped in administrative roles by providing AI-driven, personalized learning experiences accessible to students across all tiers of Indian cities.

### 🏆 Vision
Transform competitive exam preparation from a one-size-fits-all approach to a personalized, adaptive learning journey that fosters critical thinking, problem-solving, and real-world application skills.

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and development server
- **React Router DOM 7.8.0** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Advanced animations and transitions
- **AOS (Animate On Scroll) 2.3.4** - Scroll-triggered animations

### Icons & Assets
- **Ionicons 8.0.13** - Comprehensive icon library
- Custom SVG icons and brand assets

### Development Tools
- **ESLint 9.33.0** - Code linting and quality assurance
- **TypeScript types** - Type safety for React components

## 📁 Project Structure
Xploar.ai/
├── public/ # Static assets
│ ├── aboutUs.png # About page hero image
│ ├── AI_Learning_Platform_Animation_Request.mp4 # Platform showcase video
│ ├── fav_icon.png # Favicon
│ ├── logo-vertial.png # Vertical logo variant
│ ├── logo-xploar.svg # Main logo (SVG)
│ ├── Xploar_logo.png # Main logo (PNG)
│ └── Xploarai_Platform_Animation_Showcase.mp4 # Animation showcase
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── about/ # About page components
│ │ │ ├── AboutHero.jsx # About page hero section
│ │ │ ├── CoreValues.jsx # Company core values display
│ │ │ ├── Founders.jsx # Founders information
│ │ │ └── MissionVision.jsx # Mission and vision statements
│ │ ├── brand/ # Brand-related components
│ │ │ └── XploarLogo.jsx # Logo component
│ │ ├── common/ # Shared components
│ │ │ ├── Footer.jsx # Site footer
│ │ │ ├── Icons.jsx # Centralized icon definitions
│ │ │ ├── Navbar.jsx # Navigation bar
│ │ │ └── WaitlistModal.jsx # Waitlist signup modal
│ │ ├── contact/ # Contact page components
│ │ │ └── ContactForm.jsx # Contact form
│ │ └── home/ # Home page components
│ │ ├── AllInOneSection.jsx # All-in-one platform features
│ │ ├── BenefitsSection.jsx # Platform benefits
│ │ ├── ChallengeSection.jsx # Problem statement
│ │ ├── CtaSection.jsx # Call-to-action section
│ │ ├── DotBackground.jsx # Animated background
│ │ ├── FaqSection.jsx # Frequently asked questions
│ │ ├── FeatureCard.jsx # Feature display cards
│ │ ├── FeaturesSection.jsx # Main features showcase
│ │ ├── HeroSection.jsx # Home page hero with animations
│ │ ├── HowItWorksSection.jsx # Platform workflow
│ │ └── OutcomesSection.jsx # Expected outcomes
│ ├── context/ # React Context providers
│ │ └── ModalContext.jsx # Modal state management
│ ├── hooks/ # Custom React hooks
│ │ ├── useAos.js # AOS animation hook
│ │ ├── useDotBackground.js # Background animation hook
│ │ ├── useScrollAnimation.js # Scroll-based animations
│ │ └── useTimelineAnimation.js # Timeline animations
│ ├── layouts/ # Page layout components
│ │ └── MainLayout.jsx # Main application layout
│ ├── pages/ # Page components
│ │ ├── AboutPage.jsx # About page
│ │ ├── ContactPage.jsx # Contact page
│ │ └── HomePage.jsx # Home page
│ ├── App.jsx # Main application component
│ ├── index.css # Global styles
│ └── main.jsx # Application entry point
├── package.json # Dependencies and scripts
├── vite.config.js # Vite configuration
└── eslint.config.js # ESLint configuration


## �� Key Features

### 1. **Journey Builder**
- Personalized learning paths (e.g., "UPSC Foundation in 100 days")
- Daily bite-sized plans with auto-revision
- Progress tracking and milestone management

### 2. **Study Planner**
- Clear task management with streaks
- Progress percentage tracking
- Adaptive scheduling based on performance

### 3. **AI Mock Tests**
- Daily adaptive MCQs
- Weekly full-length mock tests
- Instant analytics and performance insights

### 4. **Answer Evaluator (Mains)**
- Upload or write answers
- AI-powered evaluation of structure, relevance, depth
- Example scoring and improvement suggestions

### 5. **Voice Tutor**
- Hands-free doubt resolution
- Crisp, cited explanations
- Natural language interaction

### 6. **Current Affairs Nano-Feed**
- Condensed, exam-ready updates
- Recall checks and retention tools
- Real-time content curation

### 7. **Debate Mode (ClashPoint)**
- 1:1, 1:4, or team debates
- Structured argumentation building
- Performance rubrics and feedback

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or pnpm package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd Xploar.ai

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎯 Target Audience

### Primary Users
- **UPSC Aspirants** - Civil service examination candidates
- **Competitive Exam Students** - Banking, SSC, Railways, etc.
- **Tier-2/3 City Students** - Limited access to quality coaching
- **Working Professionals** - Seeking career transitions

### User Personas
1. **The Traditional Learner** - Seeks structured, familiar learning methods
2. **The Tech-Savvy Student** - Embraces AI-powered personalization
3. **The Time-Constrained Professional** - Needs efficient, focused preparation
4. **The Rural Aspirant** - Requires accessible, quality education

## 🔧 Development Guidelines

### Component Architecture
- **Atomic Design** - Components follow atomic design principles
- **Composition over Inheritance** - Prefer component composition
- **Custom Hooks** - Reusable logic extracted into custom hooks
- **Context API** - State management for global app state

### Animation Strategy
- **Framer Motion** - Complex animations and transitions
- **AOS** - Scroll-triggered animations
- **Custom Hooks** - Reusable animation logic
- **Performance Optimized** - GPU-accelerated animations

### Styling Approach
- **Tailwind CSS** - Utility-first styling
- **Component-Scoped** - Styles co-located with components
- **Responsive Design** - Mobile-first approach
- **Design System** - Consistent spacing, colors, and typography

## 📱 Responsive Design

The platform is built with a mobile-first approach, ensuring optimal experience across:
- **Mobile** (320px - 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (1024px+)

## �� Design System

### Color Palette
- **Primary**: Cosmic Indigo (#6366f1)
- **Secondary**: Electric Aqua (#00d4ff)
- **Background**: Dark theme with white/10 overlays
- **Text**: Slate variations for hierarchy

### Typography
- **Headings**: Space Grotesk font family
- **Body**: System font stack
- **Hierarchy**: Clear size and weight variations

### Spacing
- **Consistent Scale**: 4px base unit system
- **Responsive**: Adaptive spacing for different screen sizes

## 🔮 Future Roadmap

### Phase 1 (Current)
- ✅ Core platform development
- ✅ Basic AI integration
- ✅ Responsive design implementation

### Phase 2 (Planned)
- 🔄 Advanced AI personalization
- 🔄 Real-time collaboration features
- 🔄 Mobile app development

### Phase 3 (Future)
- �� AI-powered content generation
- 📋 Virtual reality learning experiences
- �� Advanced analytics and insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [Xploar.ai](https://xploar.ai)
- **Email**: [contact@xploar.ai](mailto:contact@xploar.ai)
- **LinkedIn**: [Xploar.ai](https://linkedin.com/company/xploar-ai)

---

**Built with ❤️ for the future of education in India**