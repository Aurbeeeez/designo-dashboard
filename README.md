# Designo Dashboard Prototype

## 📌 Overview
Designo is a modern, highly interactive frontend prototype for a Learning Management System (LMS) dashboard. Built as a streamlined single-page application (SPA) prototype, it demonstrates advanced frontend UI/UX principles, dynamic state management, and asynchronous data handling.

## ✨ Key Features
* **Modular Architecture:** Utilizes a custom JavaScript component injector (`components.js`) to dynamically load the sidebar and navbar across multiple pages, ensuring DRY (Don't Repeat Yourself) code principles.
* **Live API Integration (CRUD):** The User Management interface connects to the `JSONPlaceholder` dummy API via asynchronous `fetch()` requests, dynamically generating DOM elements, handling loading states, and simulating POST/DELETE requests.
* **Persistent Dark Mode:** A custom theme engine utilizing CSS variables and `localStorage` allows users to toggle between Light and Dark modes seamlessly without losing their preference upon page refresh.
* **Advanced Form Validation:** The Settings and Login pages feature strict client-side validation, simulating secure authentication checks (mock login: `harsh@designo.com` / `123456`) and dynamic password-matching protocols.
* **Responsive Design:** Fully mobile-optimized with Bootstrap 5 media queries, featuring a collapsible off-canvas hamburger menu for smaller viewports.
* **Interactive UI States:** Includes a global event-catcher to provide professional user feedback for placeholder features, ensuring no buttons feel "dead."

## 🛠️ Tech Stack
* **HTML5 / CSS3:** Semantic structure with advanced CSS root variables for theme scaling.
* **JavaScript (ES6+):** Vanilla JS for DOM manipulation, theme engine logic, and asynchronous API calls.
* **Bootstrap 5:** Utility-first layout framework for rapid, responsive grid structuring.
* **jQuery:** Streamlined event handling, DOM traversal, and animation.
* **Bootstrap Icons:** Scalable vector iconography.

## 📂 Project Structure
```text
designo-dashboard/
│
├── assets/                 # Brand images and icons
├── css/
│   └── style.css           # Global styles and Dark Mode overrides
├── js/
│   └── components.js       # Global UI injector, mobile menu, and theme logic
│
├── index.html              # Main Analytics Dashboard
├── users.html              # User Management (API connected)
├── settings.html           # Profile config and form validation
├── login.html              # Standalone mock authentication gateway
└── assignments.html, notes.html, recordings.html, schedule.html # UI Views