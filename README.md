# Xploar.ai - AI-Powered Learning Platform

## 🚀 **Project Overview**

Xploar.ai is a comprehensive AI-powered learning platform that empowers learners worldwide with adaptive tools. The platform now includes a **full-featured UPSC preparation application** with two distinct phases.

## 🎯 **What's New - UPSC App Integration**

### **Phase 1: Learning & Planning (Foundation)**
- **Day-0 Onboarding**: Goal setting, start date, duration, daily study hours
- **Auto 100-Day Plan**: AI-generated personalized study plans
- **Study Planner**: Interactive daily task management with progress tracking
- **Multi-Mode Learning**: Read, Watch, Practice (MCQ), Explain, Recall modes
- **Progress Analytics**: Visual progress bars, streak counting, performance insights
- **ICS Export**: One-click calendar file export for all planned tasks

### **Phase 2: Performance & Evaluation (Advanced)**
- **Timed Mock Tests**: Practice tests with negative marking (+1 / -0.33)
- **Mock History**: Comprehensive tracking of all test attempts
- **Debate Rooms**: Real-time argumentation practice with timed rounds
- **Interview Evaluator**: AI-powered scoring for personality test answers
- **100 Problems Tracker**: Daily problem-solving progress monitoring
- **Leaderboard**: Competitive motivation system

## 🏗️ **Architecture & Tech Stack**

### **Frontend**
- **React 19** with modern hooks and functional components
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Zustand** for lightweight state management
- **React Router** for navigation

### **Backend & Database**
- **Supabase** for backend services and database
- **PostgreSQL** for data persistence
- **Real-time subscriptions** for live updates

### **Deployment & Infrastructure**
- **Vercel** for frontend hosting and deployment
- **GitHub** for version control and CI/CD
- **Auto-deployment** on every push to main branch

## 📁 **Project Structure**

```
src/
├── components/
│   ├── ui/                    # Reusable UI component library
│   │   ├── button.jsx        # Button component with variants
│   │   ├── card.jsx          # Card components (Header, Title, Content)
│   │   ├── tabs.jsx          # Tab system with context
│   │   ├── progress.jsx      # Progress bars and indicators
│   │   ├── badge.jsx         # Badge component with variants
│   │   ├── input.jsx         # Input fields with validation
│   │   ├── switch.jsx        # Toggle switches
│   │   ├── textarea.jsx      # Multi-line text inputs
│   │   └── index.js          # Centralized component exports
│   ├── upsc/                 # UPSC application components
│   │   ├── XploarPhase1.jsx # Phase 1: Learning & Planning
│   │   └── XploarPhase2.jsx # Phase 2: Performance & Evaluation
│   ├── common/               # Shared components (Navbar, Footer, etc.)
│   ├── home/                 # Homepage components
│   ├── about/                # About page components
│   └── contact/              # Contact page components
├── pages/                    # Main page components
├── layouts/                  # Layout wrappers
├── hooks/                    # Custom React hooks
├── context/                  # React context providers
├── lib/                      # Utility libraries and configurations
└── assets/                   # Static assets
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git
- Supabase account
- Vercel account

### **Local Development Setup**

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Xploar.ai-5
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   # Copy environment template
   cp .env.example .env.local
   
   # Add your Supabase credentials
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - **Main site**: http://localhost:5173
   - **UPSC Phase 1**: http://localhost:5173/upsc
   - **UPSC Phase 2**: http://localhost:5173/upsc2

## 🧪 **Testing the UPSC App**

### **Phase 1 Testing**
1. Navigate to `/upsc`
2. **Onboarding**: Set goals, dates, generate 100-day plan
3. **Study Planner**: Navigate days, toggle tasks, track progress
4. **Multi-Mode**: Test Read, Practice, Explain, Recall modes
5. **Syllabus**: View topic coverage progress

### **Phase 2 Testing**
1. Navigate to `/upsc2`
2. **Mocks**: Start timed tests, check negative marking
3. **Debate**: Practice argumentation with timer
4. **Interview**: Answer questions, get AI evaluation
5. **100 Problems**: Track daily problem solving

## 🔧 **Development Workflow**

### **Making Changes**
1. **Create feature branch**
   ```bash
   git checkout -b feature/upsc-enhancement
   ```

2. **Make your changes**
   - Update components in `src/components/upsc/`
   - Modify UI components in `src/components/ui/`
   - Update routing in `src/App.jsx`

3. **Test locally**
   ```bash
   npm run build  # Check for build errors
   npm run dev    # Test functionality
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add UPSC mock test functionality"
   git push origin feature/upsc-enhancement
   ```

5. **Create Pull Request** on GitHub

### **Auto-Deployment**
- **Vercel** automatically deploys on every push to `main` branch
- **Preview deployments** are created for pull requests
- **Production** is updated automatically after merge

## 📊 **Current Status & Progress**

### **✅ Completed Features**
- [x] **UI Component Library**: Complete set of reusable components
- [x] **UPSC Phase 1**: Full functionality with state management
- [x] **UPSC Phase 2**: Complete mock test and evaluation system
- [x] **Routing**: Both phases accessible via dedicated routes
- [x] **Waitlist Integration**: Updated modal with UPSC features and demo
- [x] **Responsive Design**: Mobile-first approach with Tailwind CSS
- [x] **State Management**: Zustand store with localStorage persistence
- [x] **Build System**: Production-ready build process

### **🔄 In Progress**
- [ ] **Performance Optimization**: Code splitting and lazy loading
- [ ] **Error Handling**: Comprehensive error boundaries
- [ ] **Testing**: Unit and integration tests
- [ ] **Analytics**: User behavior tracking

### **📋 Planned Features**
- [ ] **User Authentication**: Supabase auth integration
- [ ] **Data Sync**: Real-time updates across devices
- [ ] **Admin Panel**: Content management system
- [ ] **Mobile App**: React Native version

## 🐛 **Troubleshooting**

### **Common Issues**

**Blank Screen on UPSC Routes**
```bash
# Check browser console for errors
# Verify component imports in App.jsx
# Ensure all UI components are properly exported
```

**Build Errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for syntax errors
npm run build
```

**Hot Reload Not Working**
```bash
# Restart development server
npm run dev

# Hard refresh browser (Ctrl+F5)
```

### **Performance Issues**
- **Large bundle size**: Consider code splitting
- **Slow loading**: Check network tab for bottlenecks
- **Memory leaks**: Verify useEffect cleanup functions

## 📚 **API Documentation**

### **Supabase Tables**

**waitlist**
```sql
- id: uuid (primary key)
- name: text
- email: text
- created_at: timestamp
```

**Future Tables for UPSC App**
```sql
-- User progress tracking
user_progress (user_id, topic_id, completion_percentage, last_updated)

-- Mock test results
mock_results (user_id, subject, score, total_questions, time_taken, date)

-- Study plans
study_plans (user_id, plan_data, start_date, end_date)
```

## 🤝 **Contributing**

### **Code Standards**
- **ESLint**: Follow project linting rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Consider migrating for better type safety
- **Testing**: Write tests for new features

### **Commit Convention**
```
feat: add new feature
fix: bug fix
docs: documentation updates
style: formatting changes
refactor: code restructuring
test: adding tests
chore: maintenance tasks
```

## 📞 **Support & Contact**

- **Issues**: Create GitHub issues for bugs/features
- **Discussions**: Use GitHub Discussions for questions
- **Email**: support@xploar.ai

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Status**: Production Ready - UPSC App Integration Complete