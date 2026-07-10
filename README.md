# CodeMaster Academy - Complete Documentation

## Project Overview
CodeMaster Academy ek online learning platform hai jo students ko programming, web development, DSA aur system design sikhata hai. Authentication system aur course management ke saath.

---

## File-by-File Breakdown

### 1. **CodeMaster.html** - Home Page / Landing Page
**Purpose**: Ye main landing page hai jahan par sabse pehle user aata hai.

#### HTML Structure
- **Navbar**: Navigation bar with logo, links, theme toggle, aur login button
- **Hero Section**: Main heading aur CTA buttons
- **Roadmap Section**: Learning path cards
- **Courses Section**: Popular courses display
- **Statistics Section**: Platform stats (100+ courses, 500+ projects, etc.)
- **Projects Section**: Featured projects showcase
- **Testimonials Section**: Student reviews
- **Modal Overlay**: Login/Signup form (popup)

#### JavaScript Functions

| Function | Type | Kya Kaam Karte Hai |
|----------|------|-------------------|
| `toggleTheme()` | Sync | Dark mode/Light mode ko toggle karte hai - `light-mode` class add/remove karte hai |
| `Store` | Object | Local storage se data save/retrieve karte hai. Two methods: `get()` aur `set()` |
| `hashPassword(pw)` | Async | Password ko SHA-256 encryption ke saath hash karte hai security ke liye |
| `openAuthModal()` | Sync | Auth popup ko open karte hai by adding `active` class |
| `closeAuthModal()` | Sync | Auth popup ko close karte hai by removing `active` class |
| `switchAuthTab(tab)` | Sync | Login aur Signup tabs ke beech switch karte hai |
| `handleSignup(e)` | Async | New account create karte hai - email duplicate check, password hash, Store mein save |
| `handleLogin(e)` | Async | Existing user ko login karte hai - email find, password verify, session create |
| `goToDashboard()` | Sync | User ko dashboard.html par redirect karte hai |
| `handleStartLearning()` | Async | Check karte hai user logged in hai ya nahi. If yes → dashboard, if no → signup form open |
| `scrollToCourses()` | Sync | Page ko "courses" section tak smooth scroll karte hai |
| `refreshAuthUI()` | Async | Login/Logout button ko update karte hai based on current session |

#### Storage Structure
```javascript
// Users array (stored in localStorage/window.storage)
[
  {
    name: "User Name",
    email: "user@email.com",
    passwordHash: "encrypted_password_hash"
  }
]

// Session (currently logged in user)
{
  name: "User Name",
  email: "user@email.com"
}
```

---

### 2. **dashboard.html** - User Dashboard
**Purpose**: Login ke baad users ko ye page dikhta hai jahan par unka progress aur courses hote hai.

#### HTML Structure
- **Navbar**: Logo, Home link, Theme toggle, Logout button
- **Welcome Hero**: User ka naam with personalized welcome message
- **Course Cards Grid**: 4 courses with progress bars (Python, MERN, DSA, System Design)
- **Footer**: Company info

#### JavaScript Functions

| Function | Type | Kya Kaam Karte Hai |
|----------|------|-------------------|
| `toggleTheme()` | Sync | Dark/Light mode toggle |
| `Store` | Object | Same as CodeMaster.html - localStorage abstraction |
| `handleLogout()` | Async | User ka session clear karte hai (session = null) aur CodeMaster.html par redirect |
| `openCourse(courseKey)` | Sync | Course ka key (python/mern/dsa/system) leke learning.html par redirect with URL parameter |
| `guardAndGreet()` | Async | Check karte hai user logged in hai. Agar nahi → CodeMaster.html par redirect. Agar haan → welcome message personalize |

#### Course Cards
```javascript
4 Courses:
- Python Masterclass (45% complete)
- MERN Stack (20% complete)
- Data Structures (0% - Not started)
- System Design (0% - Not started)
```

---

### 3. **learning.html** - Course Learning Page
**Purpose**: Jab student koi course select karte hai to ye page khulta hai jo course content dikhata hai.

#### HTML Structure
- **Navbar**: Back to Dashboard button, Home link
- **Course Hero Card**: Course title, description, progress bar
- **Content Grid**: 
  - Left panel: "What you'll learn" (topics list)
  - Right panel: "Next step" (guidance text)

#### JavaScript Functions

| Function | Type | Kya Kaam Karte Hai |
|----------|------|-------------------|
| `Store` | Object | Same localStorage abstraction |
| `courseData` | Object | 4 courses ka static data with topics aur next steps |
| `protectPage()` | Async | Check karte hai user logged in hai. Agar nahi → CodeMaster.html par redirect |
| `loadCourse()` | Sync | URL parameter se course key leta hai aur courseData se appropriate content load karte hai |

#### Course Data Structure
```javascript
courseData = {
  python: {
    title: "Python Masterclass",
    description: "...",
    progress: "45% complete",
    percent: 45,
    topics: [...],
    nextStep: "..."
  },
  mern: { ... },
  dsa: { ... },
  system: { ... }
}
```

---

### 4. **index.html** - Redirect Page (Fallback)
**Purpose**: Purane links ya direct index.html access ke liye redirect.

#### Functionality
- Automatically redirect to CodeMaster.html using meta refresh
- Fallback link bhi hai manual click ke liye

---

## Authentication Flow

```
CodeMaster.html (Home)
    ↓
User clicks "Start Learning" or "Login"
    ↓
[If logged in] → dashboard.html
[If not logged in] → Auth Modal Opens (Login/Signup)
    ↓
    ├─ SIGNUP → handleSignup() → Store users array → Create session → dashboard.html
    └─ LOGIN → handleLogin() → Verify credentials → Create session → dashboard.html
    ↓
dashboard.html (User sees courses)
    ↓
User clicks course → openCourse() → learning.html?course=python
    ↓
learning.html (Show course content)
    ↓
User clicks "Logout" → handleLogout() → Clear session → CodeMaster.html
```

---

## Data Storage

### Local Storage Keys

| Key | Purpose | Value Type |
|-----|---------|-----------|
| `users` | Sabhi registered users | Array of objects |
| `session` | Currently logged in user | Object with name & email |

### Security Notes
- Passwords SHA-256 hash ke saath store hote hai (plain text nahi)
- Session data browser mein store hota hai (server nahi hai)
- ⚠️ Production mein backend server aur proper database use karo

---

## Color Scheme

| Variable | Value | Use |
|----------|-------|-----|
| `--primary` | #6366f1 | Indigo - Primary buttons, active states |
| `--secondary` | #8b5cf6 | Purple - Gradients, secondary elements |
| `--dark` | #0f172a | Dark blue - Background |
| `--light` | #ffffff | White - Text |

---

## Responsive Design

- **Desktop**: Full layout with sidebar/multi-column
- **Mobile**: Hidden nav links, reduced hero text size
- Breakpoint: `768px` media query

---

## How Everything Connects

```
User Journey:
1. Open CodeMaster.html → Home page
2. Click "Start Learning" 
3. Not logged in? → Auth modal opens
4. Sign up/Login → Session created in Store
5. Redirect to dashboard.html
6. See courses with progress
7. Click course button → learning.html?course=python
8. See course content
9. Click logout → Session cleared → Back to CodeMaster.html
```

---

## Future Enhancements

- [ ] Real backend server with database
- [ ] Lesson videos aur interactive content
- [ ] Quiz aur assignments
- [ ] Certificate generation
- [ ] Payment integration
- [ ] Discussion forum
- [ ] Progress tracking (persistent)
- [ ] Email verification

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Course button nahi khul raha | Check `learning.html` file exists |
| Logout ke baad redirect nahi ho raha | Check `goToDashboard()` function |
| Login/Signup form submit nahi ho raha | Browser console mein error check karo |
| Theme toggle nahi ho raha | CSS mein `.light-mode` class check karo |
| Course content nahi dikh raha | URL parameter check karo (`?course=python`) |

---

**Last Updated**: 28 June 2026  
**Version**: 1.0  
**Maintained by**: CodeMaster Academy Development Team
