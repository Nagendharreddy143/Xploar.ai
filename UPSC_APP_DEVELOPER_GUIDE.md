# UPSC App Developer Guide

## 🎯 **Overview**

This document provides comprehensive technical documentation for the UPSC preparation application integrated into Xploar.ai. The app consists of two distinct phases with separate state management and routing.

## 🏗️ **Architecture Overview**

### **Component Hierarchy**
```
App.jsx
├── MainLayout
│   ├── Navbar (with UPSC Prep link)
│   ├── Routes
│   │   ├── /upsc → XploarPhase1
│   │   └── /upsc2 → XploarPhase2
│   └── Footer
└── WaitlistModal (updated with UPSC features)
```

### **State Management**
- **Phase 1**: Zustand store with localStorage persistence (`p1/*` keys)
- **Phase 2**: Zustand store with localStorage persistence (`p2/*` keys)
- **Shared**: UPSC foundation topics and MCQ bank

## 📚 **Phase 1: Learning & Planning**

### **Core Components**

#### **1. XploarPhase1.jsx**
**Purpose**: Main container for Phase 1 functionality
**Location**: `src/components/upsc/XploarPhase1.jsx`

**Key Features**:
- Header with search and reset functionality
- Sidebar navigation between sections
- Main content area with dynamic routing
- Footer with brand information

**State Dependencies**:
```javascript
const useApp = create((set, get) => ({
  active: load("p1/active", "onboarding"),
  goal: load("p1/goal", "UPSC Foundation"),
  startDate: load("p1/startDate", fmt(new Date())),
  days: load("p1/days", 100),
  hours: load("p1/hours", 3),
  plan: load("p1/plan", []),
  currentDay: load("p1/currentDay", 1),
  streak: load("p1/streak", 0),
  mcqResults: load("p1/mcqResults", {}),
  // ... more state
}));
```

#### **2. Onboarding Component**
**Purpose**: Initial setup and goal configuration
**Features**:
- Goal setting input
- Start date selection
- Duration configuration (days)
- Daily study hours
- 100-day plan generation
- ICS calendar export

**Key Functions**:
```javascript
const generatePlan100 = () => {
  // Generates 100-day study plan
  // Rotates through UPSC foundation topics
  // Creates daily tasks (Read, Practice, Explain, Recall)
  // Saves to localStorage and updates state
};
```

#### **3. Study Planner Component**
**Purpose**: Daily task management and progress tracking
**Features**:
- Day navigation (previous/next)
- Task completion toggling
- Task deferral to next day
- Progress percentage calculation
- Streak tracking

**Key Functions**:
```javascript
const toggleTask = (taskId) => {
  // Toggles task completion status
  // Updates localStorage
  // Triggers streak calculation
};

const deferTask = (taskId) => {
  // Moves task to next day
  // Generates new task ID
  // Updates localStorage
};
```

#### **4. Multi-Mode Learning**
**Purpose**: Different learning approaches for each topic
**Modes**:
- **Read**: Text-based learning with PDF download
- **Watch**: Video content (placeholder)
- **Practice**: MCQ practice with instant feedback
- **Explain**: AI-powered summary generation
- **Recall**: Memory reinforcement quizzes

#### **5. MCQ Runner Component**
**Purpose**: Interactive question practice
**Features**:
- 10-question loops
- Instant feedback on answers
- Score tracking
- Performance recommendations
- localStorage persistence

**State Management**:
```javascript
const [i, setI] = useState(0);           // Current question index
const [selected, setSelected] = useState(null); // Selected answer
const [correct, setCorrect] = useState(0);      // Correct answers count
const [done, setDone] = useState(false);        // Quiz completion status
```

#### **6. Syllabus Progress**
**Purpose**: Topic coverage tracking
**Features**:
- Visual progress bars for each topic
- Time-based completion calculation
- MCQ performance bonus points
- Real-time updates

**Calculation Logic**:
```javascript
const perTopic = useMemo(() => {
  // Calculate planned vs. actual time for each topic
  // Add MCQ performance bonuses
  // Return percentage completion for each topic
}, [plan, mcqResults]);
```

### **Data Structures**

#### **UPSC Foundation Topics**
```javascript
const UPSC_FOUNDATION = [
  { id: "polity_preamble", name: "Polity: Preamble" },
  { id: "polity_fr", name: "Polity: Fundamental Rights" },
  { id: "history_ivc", name: "History: Indus Valley" },
  // ... 8 total topics
];
```

#### **MCQ Bank Structure**
```javascript
const MCQ_BANK = {
  polity_preamble: [
    {
      stem: "Question text",
      options: ["Option A", "Option B", "Option C", "Option D"],
      ans: 1, // Index of correct answer
      explain: "Explanation text"
    }
  ]
};
```

#### **Study Plan Structure**
```javascript
const plan = [
  {
    day: 1,
    date: "2024-12-17",
    tasks: [
      {
        id: "unique_id",
        topicId: "polity_preamble",
        kind: "Read",
        mins: 120,
        done: false
      }
      // ... more tasks
    ]
  }
  // ... 100 days
];
```

## 🎯 **Phase 2: Performance & Evaluation**

### **Core Components**

#### **1. XploarPhase2.jsx**
**Purpose**: Main container for Phase 2 functionality
**Location**: `src/components/upsc/XploarPhase2.jsx`

**Key Features**:
- Header with search functionality
- Sidebar navigation between evaluation tools
- Main content area with dynamic routing
- Footer with phase information

#### **2. Mock Tests Component**
**Purpose**: Timed practice tests with negative marking
**Features**:
- Subject selection
- Question count configuration
- Time limit setting
- Negative marking (+1 / -0.33)
- Navigation between questions
- Auto-submission on time expiry

**State Management**:
```javascript
const [subject, setSubject] = useState(subjects[0].id);
const [count, setCount] = useState(20);
const [mins, setMins] = useState(20);
const [started, setStarted] = useState(false);
const [seed, setSeed] = useState(0); // For test randomization
```

#### **3. Mock Runner Component**
**Purpose**: Individual mock test execution
**Features**:
- Question display with options
- Answer selection and navigation
- Countdown timer
- Score calculation with negative marking
- Results storage

**Timer Implementation**:
```javascript
useEffect(() => {
  const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
  return () => clearInterval(id);
}, []);

useEffect(() => {
  if (left === 0) submit();
}, [left]);
```

#### **4. Debate Rooms Component**
**Purpose**: Argumentation practice with timed rounds
**Features**:
- 60-second timer for each round
- Chat-like interface
- AI-generated debate topics
- Start/pause functionality
- Thread-based conversation

**State Management**:
```javascript
const [msg, setMsg] = useState("");
const [clock, setClock] = useState(60);
const [run, setRun] = useState(false);
const [thread, setThread] = useState([/* initial AI message */]);
```

#### **5. Interview Evaluator Component**
**Purpose**: AI-powered personality test scoring
**Features**:
- Pre-defined question bank
- 2-minute answer timer
- Heuristic scoring algorithm
- Multi-dimensional evaluation
- Performance feedback

**Scoring Algorithm**:
```javascript
const heuristicScore = (txt) => {
  const L = txt.length;
  const hasEx = /for example|e\.g\.|case/i.test(txt);
  const hasStruct = /first|second|conclude|therefore/i.test(txt);
  
  const clarity = Math.min(10, Math.round(L/120));
  const depth = Math.min(10, hasEx ? 8 + Math.min(2, Math.floor(L/300)) : Math.min(7, Math.floor(L/200)));
  const structure = Math.min(10, hasStruct ? 9 : 6);
  const ethics = /integrity|equity|inclusion|transparency/i.test(txt) ? 9 : 6;
  
  return { clarity, depth, structure, ethics, total: clarity+depth+structure+ethics };
};
```

#### **6. 100 Problems Tracker**
**Purpose**: Daily problem-solving progress monitoring
**Features**:
- Incremental counter (+5 button)
- Visual progress bar
- Percentage calculation
- Simple state management

#### **7. Leaderboard Component**
**Purpose**: Competitive motivation system
**Features**:
- Sample user data
- Score ranking
- Status indicators
- Responsive grid layout

## 🔧 **Development Guidelines**

### **Adding New Features**

#### **1. Create New Component**
```javascript
// src/components/upsc/NewFeature.jsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function NewFeature() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Feature</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Feature content */}
      </CardContent>
    </Card>
  );
}
```

#### **2. Add to Routing**
```javascript
// In XploarPhase1.jsx or XploarPhase2.jsx
const Feature = () => {
  const views = { 
    // ... existing views
    newFeature: <NewFeature /> 
  };
  return views[active] || null;
};
```

#### **3. Update Sidebar**
```javascript
const items = [
  // ... existing items
  { id: "newFeature", label: "New Feature", icon: NewIcon },
];
```

### **State Management Best Practices**

#### **1. LocalStorage Keys**
- **Phase 1**: Use `p1/` prefix
- **Phase 2**: Use `p2/` prefix
- **Shared**: Use `upsc/` prefix

#### **2. State Updates**
```javascript
// Always update localStorage when changing state
const updateState = (newValue) => set(() => {
  save("p1/key", newValue);
  return { key: newValue };
});
```

#### **3. Error Handling**
```javascript
const save = (k, v) => {
  try {
    if (hasStorage) localStorage.setItem(k, JSON.stringify(v));
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
};
```

### **Performance Optimization**

#### **1. Memoization**
```javascript
const expensiveCalculation = useMemo(() => {
  // Complex calculation logic
  return result;
}, [dependency1, dependency2]);
```

#### **2. Lazy Loading**
```javascript
// Consider implementing for large components
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

#### **3. Debouncing**
```javascript
// For search and input handlers
const debouncedSearch = useCallback(
  debounce((query) => {
    // Search logic
  }, 300),
  []
);
```

## 🧪 **Testing Strategy**

### **Component Testing**
1. **Render Testing**: Verify components render without errors
2. **State Testing**: Test state changes and localStorage persistence
3. **Interaction Testing**: Test user interactions and callbacks
4. **Responsive Testing**: Test on different screen sizes

### **Integration Testing**
1. **Routing**: Test navigation between phases and sections
2. **Data Flow**: Test state updates across components
3. **LocalStorage**: Test data persistence and retrieval
4. **Error Handling**: Test error scenarios and fallbacks

### **Performance Testing**
1. **Bundle Size**: Monitor build output size
2. **Load Time**: Test component rendering performance
3. **Memory Usage**: Check for memory leaks in timers and effects
4. **Responsiveness**: Test UI responsiveness during heavy operations

## 🚀 **Deployment Checklist**

### **Pre-Deployment**
- [ ] All components build without errors
- [ ] LocalStorage functionality works correctly
- [ ] Responsive design tested on multiple devices
- [ ] Performance metrics within acceptable limits
- [ ] Error handling implemented for edge cases

### **Production Deployment**
- [ ] Environment variables configured
- [ ] Supabase connection verified
- [ ] Vercel deployment successful
- [ ] Custom domain configured (if applicable)
- [ ] Analytics and monitoring enabled

### **Post-Deployment**
- [ ] Functionality verified on production
- [ ] Performance monitoring active
- [ ] Error tracking implemented
- [ ] User feedback collection started

## 📚 **API Integration**

### **Current Supabase Tables**
```sql
-- Waitlist table
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### **Future UPSC Tables**
```sql
-- User progress tracking
CREATE TABLE user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  topic_id TEXT NOT NULL,
  completion_percentage INTEGER DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Mock test results
CREATE TABLE mock_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  subject TEXT NOT NULL,
  score DECIMAL(5,2) NOT NULL,
  total_questions INTEGER NOT NULL,
  time_taken INTEGER NOT NULL,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Study plans
CREATE TABLE study_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  plan_data JSONB NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔮 **Future Enhancements**

### **Short Term (1-2 months)**
- [ ] User authentication with Supabase Auth
- [ ] Real-time data synchronization
- [ ] Advanced analytics dashboard
- [ ] Content management system

### **Medium Term (3-6 months)**
- [ ] AI-powered content generation
- [ ] Personalized learning paths
- [ ] Social learning features
- [ ] Mobile app development

### **Long Term (6+ months)**
- [ ] Virtual reality learning experiences
- [ ] Advanced AI tutoring
- [ ] Multi-language support
- [ ] Enterprise features

---

**Document Version**: 1.0.0
**Last Updated**: December 2024
**Maintainer**: Development Team
**Next Review**: January 2025
