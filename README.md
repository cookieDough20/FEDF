# Modern Web Development Portfolio# FEDF - Front End Development Frameworks

This repository contains the assignments for the Front End Development Frameworks course.

This repository showcases my journey through modern web development, covering fundamental to advanced concepts in front-end development.

## Week 1: Project Initialization and First Commit

## 📚 Repository Structure## Week 2: Branching and Merging

## Week 3: Responsive Web Page and Git History Exploration

### Lab Sessions## Week 4: Implement HTML5 and CSS Positioning with Responsive Design

## Week 5: HTML Form with JavaScript Validation

- **Lab01**: Introduction to Version Control & Basic Git Commands## Week 6: Weather Application with API Integration and Local Storage

- **Lab02**: Advanced Git - Branching Strategies & Merge Conflicts## Week 7: Modular JavaScript and Working with JSON (Online Bookstore)

- **Lab03**: Responsive Design Principles & Mobile-First Approach## Week 8: To-Do List Application with React Hooks

- **Lab04**: Advanced HTML5 & CSS3 Positioning Techniques## Week 9: Book Explorer with React Router and Props

- **Lab05**: Interactive Forms with Client-Side Validation## CO2 Skill Week 5: Implementing Routing Mechanism

- **Lab06**: Real-Time Weather Dashboard (API Integration)## FEDF Assignment 3: Matrix Sum Calculator

- **Lab07**: E-Commerce Bookstore (Modular JavaScript)

- **Lab08**: Task Management System (React + REST API)## Assignment 1

- **Lab09**: Book Discovery Platform (React Router Implementation)

This assignment contains the following:

### Projects

*   `question1.html`: A simple HTML page with a paragraph that can be edited with a button click.

#### Project01: Web Components Gallery*   `question2.html`: An HTML page with an image that changes on a button click.

A collection of interactive web components demonstrating core JavaScript and DOM manipulation skills:*   `question3.html`: A simple multiplication table generator using JavaScript.

- Dynamic content editing*   `question4.html`: An HTML page with a grid of cards showcasing different technologies.

- Image manipulation and events

- Mathematical calculators## Week 6: Weather Application

- Responsive card layouts

**Aim:** To develop a weather application using HTML, CSS, and JavaScript that fetches and displays real-time weather data based on user input, while utilizing localStorage to save the last searched city.

#### RoutingProject: Student Portal System

A comprehensive student management application featuring:### Features:

- Multi-page navigation using React Router- **Weather API Integration**: Uses wttr.in API to fetch real-time weather data

- CGPA calculation and tracking- **Async/Await Implementation**: Modern JavaScript asynchronous programming

- PDF export functionality- **Local Storage**: Remembers the last searched city for better UX

- Clean, professional UI design- **Dynamic DOM Updates**: Real-time weather information display

- **Error Handling**: Graceful handling of invalid cities and network failures

#### MatrixCalculator: Mathematical Operations Tool- **Responsive Design**: Clean and user-friendly interface

Advanced matrix manipulation application:

- Dynamic matrix dimension configuration### Technologies Used:

- Real-time matrix addition- HTML5 for structure

- Input validation and error handling- CSS3 for styling and responsive design

- Modern gradient UI design- JavaScript ES6+ with Fetch API

- Async/Await for asynchronous operations

## 🛠️ Technologies Used- LocalStorage API for data persistence



### Core Technologies### Files:

- **HTML5** - Semantic markup and structure- `Week6/index.html`: Main weather application

- **CSS3** - Modern styling, flexbox, grid, animations- `Week6/README.md`: Detailed documentation and VIVA questions

- **JavaScript ES6+** - Modern JavaScript features

### Key Learning Outcomes:

### Frameworks & Libraries1. Fetch API usage for HTTP requests

- **React 18.x** - Component-based UI development2. Async/await vs Promise chains

- **React Router** - Client-side routing3. DOM manipulation and dynamic content updates

- **Vite** - Next-generation build tool4. Browser storage APIs (localStorage)

- **Axios** - HTTP client for API requests5. Error handling in asynchronous operations



### Tools & APIs## Week 7: Online Bookstore

- **JSON Server** - Mock REST API backend

- **LocalStorage API** - Client-side data persistence**Aim:** To develop a modular JavaScript application that demonstrates ES6 modules, JSON data handling, and dynamic UI updates in an online bookstore application.

- **Fetch API** - Network requests

- **jsPDF** - PDF generation### Features:

- **wttr.in API** - Weather data integration- **Modular Architecture**: Separation of concerns using ES6 modules

- **JSON Data Management**: External JSON file for book inventory

## 🎯 Key Learning Outcomes- **Shopping Cart System**: Add, remove, and calculate cart totals

- **Dynamic UI Updates**: Real-time cart and price updates

1. **Modern JavaScript Development**- **Event Delegation**: Efficient event handling for dynamic elements

   - ES6+ features (modules, async/await, destructuring)- **Stock Management**: Disabled buttons for out-of-stock items

   - Asynchronous programming patterns

   - Event-driven architecture### Technologies Used:

- HTML5 for structure

2. **React Ecosystem**- CSS3 for modern, responsive styling

   - Component lifecycle and hooks (useState, useEffect)- JavaScript ES6+ modules (import/export)

   - Props and state management- JSON for data storage

   - React Router for SPA navigation- DOM manipulation and event listeners

   - RESTful API integration- Async/await for data fetching



3. **Web Development Best Practices**### Files:

   - Responsive design principles- `Week7/index.html`: Main application interface

   - Code modularity and separation of concerns- `Week7/books.json`: JSON data file with book inventory

   - Error handling and validation- `Week7/books.js`: Module for fetching book data

   - Performance optimization- `Week7/cart.js`: Module for cart management operations

- `Week7/ui.js`: Module for dynamic UI updates

4. **Version Control**- `Week7/main.js`: Entry point that coordinates all modules

   - Git fundamentals and workflow- `Week7/README.md`: Detailed documentation with Q&A

   - Branching and merging strategies

   - Collaboration techniques### Key Learning Outcomes:

1. ES6 module system (import/export)

## 🚀 Getting Started2. JSON data structure and parsing

3. Modular code organization and separation of concerns

### Prerequisites4. Event delegation and dynamic event handling

- Node.js (v16 or higher)5. Array methods (forEach, reduce) for data manipulation

- npm or yarn package manager6. DOM manipulation techniques

- Modern web browser (Chrome, Firefox, Edge)7. Async/await with fetch API



### Installation & Setup## Week 8: To-Do List Application



For React projects (Lab08, Lab09, RoutingProject, MatrixCalculator):**Aim:** To develop a To-Do List Application using React Hooks and JSON Server backend to demonstrate full CRUD (Create, Read, Update, Delete) operations.

```bash

# Navigate to project directory### Features:

cd [project-folder]- **React Hooks Implementation**: useState and useEffect for state management

- **Full CRUD Operations**: Create, Read, Update, and Delete tasks

# Install dependencies- **JSON Server Backend**: Mock REST API for data persistence

npm install- **Axios Integration**: HTTP client for API communication

- **Controlled Components**: Form input management

# Start development server- **Conditional Rendering**: Empty state messaging

npm run dev- **Event Handling**: Task completion toggling and deletion

```- **Component Architecture**: Modular component structure



For Lab07 (JSON Server):### Technologies Used:

```bash- React 18.3 with Hooks (useState, useEffect)

# Start backend server- Vite for build tooling and dev server

cd Lab07/backend- Axios for HTTP requests

npx json-server --watch db.json --port 5000- JSON Server for mock backend API

- ESLint for code quality

# In a new terminal, start frontend- CSS3 for styling

cd Lab07/frontend

npm run dev### Files:

```- `Week8/backend/db.json`: JSON Server database file

- `Week8/frontend/src/components/TaskForm.jsx`: Form component for adding tasks

For static HTML projects (Lab01-Lab06, Project01):- `Week8/frontend/src/components/TaskList.jsx`: List rendering component

- Simply open the `index.html` or respective HTML files in your browser- `Week8/frontend/src/components/TaskItem.jsx`: Individual task component

- Some projects may require a local server for CORS (use Live Server extension)- `Week8/frontend/src/App.jsx`: Main application component

- `Week8/frontend/src/api.jsx`: Axios API configuration

## 📝 Project Highlights- `Week8/README.md`: Complete documentation with VIVA Q&A



### Weather Dashboard (Lab06)### Key Learning Outcomes:

Real-time weather application with persistent storage, demonstrating proficiency in:1. React Hooks (useState, useEffect)

- Asynchronous API calls2. RESTful API integration

- LocalStorage implementation3. CRUD operations implementation

- Error handling and UX considerations4. Component state and props management

5. Event handling in React

### Online Bookstore (Lab07)6. Conditional rendering techniques

Modular e-commerce platform showcasing:7. Axios for HTTP requests

- ES6 module system8. Component-based architecture

- Shopping cart functionality9. Controlled form components

- Dynamic UI updates10. Modern React development with Vite

- JSON data management

### API Endpoints:

### Task Manager (Lab08)- **GET** `/tasks` - Fetch all tasks

Full-stack CRUD application featuring:- **GET** `/tasks/:id` - Fetch single task

- React hooks implementation- **POST** `/tasks` - Create new task

- RESTful API integration- **PUT** `/tasks/:id` - Update task

- Component-based architecture- **DELETE** `/tasks/:id` - Delete task

- Backend integration with JSON Server

### Setup:

### Book Explorer (Lab09)```bash

Dynamic routing application demonstrating:# Backend

- React Router implementationcd Week8/backend

- URL parameters and navigationnpx json-server --watch db.json --port 5000

- Component reusability

- State management across routes# Frontend

cd Week8/frontend

## 🎨 Design Philosophynpm install

npm run dev

All projects follow modern web development principles:```

- **Responsive First**: Mobile-friendly designs that scale

- **User-Centric**: Intuitive interfaces with clear feedback## Week 9: Book Explorer Application

- **Performance**: Optimized loading and rendering

- **Accessibility**: Semantic HTML and ARIA labels where applicable**Aim:** To develop a Book Explorer application using React Router and Props to demonstrate client-side routing, dynamic routes, and component-based architecture.

- **Clean Code**: Well-structured, maintainable codebase

### Features:

## 📖 Documentation- **React Router Integration** - Client-side routing for seamless navigation

- **Dynamic Routing** - URL parameters for book-specific pages

Each project folder contains its own README with:- **Component Reusability** - Modular BookCard and BookDetail components

- Detailed project description- **Props Data Passing** - Parent-to-child data flow

- Setup instructions- **useState & useEffect Hooks** - State management and data loading

- Feature documentation- **useParams Hook** - Dynamic URL parameter extraction

- Technical implementation details- **Simulated API Fetch** - Loading state demonstration

- Common interview questions and answers- **Navigation Links** - Smooth transitions between views



## 🔧 Development Workflow### Technologies Used:

- React 18.3 with Hooks (useState, useEffect)

This repository demonstrates proficiency in:- React Router DOM 6.20 for client-side routing

- Setting up modern development environments- Vite for build tooling and dev server

- Working with build tools (Vite, React Scripts)- ESLint for code quality

- Package management with npm- HTML5 & CSS3 for structure and styling

- Code organization and file structure

- Debugging and testing strategies### Files:

- `Week9/src/main.jsx`: Entry point with BrowserRouter

## 📫 Contact & Collaboration- `Week9/src/App.jsx`: Main app with route configuration

- `Week9/src/components/BookCard.jsx`: Reusable book card component

Feel free to explore the code, provide feedback, or reach out for collaboration opportunities!- `Week9/src/components/BookDetail.jsx`: Book detail page component

- `Week9/src/pages/BookList.jsx`: Book list page with state management

---- `Week9/src/data/booksData.js`: Static book data

- `Week9/README.md`: Complete documentation with VIVA Q&A

**Note**: This is a learning portfolio showcasing progression from basic web development to modern React applications. Each project represents different skill levels and concepts mastered throughout the course.

### Key Learning Outcomes:

*Last Updated: October 2025*1. React Router for single-page applications

2. Dynamic routes and URL parameters
3. useParams hook for route parameters
4. Component props and data flow
5. State management with useState
6. Side effects with useEffect
7. Creating reusable components
8. Conditional rendering techniques
9. Modern React development with Vite
10. Client-side navigation without page reloads

### Routes:
- **GET** `/` - Book list view
- **GET** `/book/:id` - Book detail view with dynamic ID

### Setup:
```bash
cd Week9
npm install
npm install react-router-dom
npm run dev
```

## CO2 Skill Week 5: Student CGPA Management

**Aim:** Implementing Routing Mechanism - ReactJS application that implements a routing mechanism for managing and displaying a student's CGPA details and download as PDF.

### Features:
- **React Router Implementation** - BrowserRouter for client-side routing
- **Two Main Routes** - Add CGPA and View CGPA pages
- **State Management** - useState for managing student data across components
- **Form Handling** - Controlled components for input fields
- **PDF Generation** - jsPDF library for downloading student details
- **Data Passing** - Props to share state between parent and child components
- **Navigation** - Link component for seamless navigation
- **Form Validation** - Required field validation
- **Responsive Design** - Centered layout with clean styling

### Technologies Used:
- React 18.2 with Hooks (useState)
- React Router DOM 6.20 for client-side routing
- jsPDF 2.5 for PDF generation
- React Scripts 5.0 for build tooling
- HTML5 & CSS3 for structure and styling

### Files:
- `CO2_Skill_Week5/src/components/AddCGPA.jsx`: Form component for adding student CGPA
- `CO2_Skill_Week5/src/components/ViewCGPA.jsx`: Component to view and download CGPA
- `CO2_Skill_Week5/src/App.jsx`: Main app with route configuration and state management
- `CO2_Skill_Week5/src/index.jsx`: Entry point
- `CO2_Skill_Week5/README.md`: Complete documentation with React Router concepts

### Key Learning Outcomes:
1. React Router for single-page applications
2. BrowserRouter, Routes, Route, and Link components
3. State management across components using props
4. Controlled components for form handling
5. PDF generation using jsPDF library
6. Client-side routing without page reloads
7. Component communication through state lifting
8. Form validation and user feedback
9. Conditional rendering based on state
10. Understanding different types of React Routers

### Routes:
- **/** - Add CGPA form page
- **/view-cgpa** - View CGPA details page

### React Router Concepts Covered:
- **BrowserRouter** - HTML5 history API routing
- **HashRouter** - Hash-based routing
- **MemoryRouter** - In-memory routing for testing
- **NativeRouter** - React Native routing
- **Route** - URL to component mapping
- **Link** - Navigation without page refresh
- **Routes** - Container for route definitions

### Setup:
```bash
npx create-react-app student-cgpa
cd student-cgpa
npm install react-router-dom
npm install jspdf
npm start
```

## FEDF Assignment 3: Matrix Sum Calculator

**Aim:** Write ReactJS code for sum of two matrices using props and state.

### Features:
- **Dynamic Matrix Dimensions** - User-defined rows and columns for both matrices
- **State Management** - useState hooks for managing matrix data
- **Dynamic Matrix Rendering** - Matrices rendered based on user-defined dimensions
- **Editable Matrix Cells** - Input fields for entering matrix values
- **Matrix Addition** - Calculates sum of two matrices
- **Dimension Validation** - Ensures matrices have same dimensions before addition
- **Result Display** - Shows result matrix after calculation
- **Responsive Design** - Beautiful gradient styling with responsive layout
- **Error Handling** - Alerts for invalid operations

### Technologies Used:
- React 18.2 with Hooks (useState)
- React Scripts 5.0 for build tooling
- CSS3 for gradient styling and animations
- HTML5 for structure

### Files:
- `FEDF_Assignment3/src/MatrixSumCalculator.jsx`: Main component with matrix operations
- `FEDF_Assignment3/src/App.jsx`: Application wrapper
- `FEDF_Assignment3/src/index.jsx`: Entry point
- `FEDF_Assignment3/src/Styles.css`: Beautiful gradient styling
- `FEDF_Assignment3/README.md`: Complete documentation

### Key Learning Outcomes:
1. Managing complex nested state (2D arrays)
2. useState Hook with multiple state variables
3. Event handling for inputs and buttons
4. Conditional rendering based on state
5. Dynamic rendering with map() and Array.from()
6. Component reusability with functions
7. Props - passing functions as props
8. Form handling with controlled components
9. Input and operation validation
10. CSS styling for mathematical applications

### Matrix Operations:
- **Matrix Addition:** C[i][j] = A[i][j] + B[i][j]
- **Dimension Validation:** Matrices must have same dimensions
- **Dynamic Input:** User can set any matrix size

### Setup:
```bash
npx create-react-app matrix-calculator
cd matrix-calculator
# Copy files from FEDF_Assignment3/src
npm start
```