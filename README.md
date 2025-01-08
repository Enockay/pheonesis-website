# Phronesis Tour Logistics Website

Welcome to the **Phronesis Tour Logistics** website repository! This project is designed to provide a dynamic and responsive platform for managing tour logistics and booking freelancers. The platform is built with cutting-edge technologies like **React**, **TypeScript**, **MongoDB**, and **Tailwind CSS**, offering seamless performance, scalability, and user-friendliness.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Core Features:
1. **Dynamic Website Design**: Built on a WordPress CMS backend for flexibility and easy management.
2. **Responsive Design**: Mobile-first, responsive design across all devices using **Tailwind CSS**.
3. **Freelancer Booking**: Integrated calendar for scheduling and managing freelancers.
4. **Payment Gateway**:
   - Supports **USD payments** via credit cards.
   - Secure and reliable payment processing.
5. **Social Media Integration**: Embedded social media and WhatsApp chat for user engagement.
6. **Website Security**: Advanced security measures to prevent hacks.
7. **Admin Panel**: Comprehensive admin dashboard for content and user management.
8. **User Training**: Documentation and training for managing the website.
9. **Hosting & Renewals**: Includes domain, SSL, and email hosting (renewed yearly).

### Additional Features:
- **Modern Design**: UI/UX designed for a smooth user experience.
- **Cutting-Edge Tech Stack**: Built with React, TypeScript, and MongoDB for scalability.
- **Two-Month Support**: Post-launch support and updates.

---

## Tech Stack

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed programming language for scalable development.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **Axios**: For HTTP requests.

### Backend:
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Lightweight web framework for APIs.
- **MongoDB**: NoSQL database for scalable data storage.
- **Mongoose**: ODM for MongoDB.

### Other Tools:
- **Vite**: Fast development build tool.
- **Postman**: For API testing.
- **Git & GitHub**: Version control and repository management.
- **Jest**: For unit and integration testing.

---

## Prerequisites

Ensure you have the following installed:
- **Node.js**: >= 18.0.0
- **npm** or **yarn**: Package manager
- **MongoDB**: For database setup
- **Git**: Version control

---

## Getting Started

Follow these steps to set up the project locally:

### Clone the Repository

# Project Directory Structure - frontend

This is an overview of the file and directory structure for the application. It follows a modular approach with clearly separated concerns, making it easier to scale, maintain, and navigate.

## `src/`
This is the main directory for all the source code of the application.

### `apis/`
Contains utility functions for API integration and all the API calls.

- **`auth.ts`** - Authentication-related API calls  
- **`user.ts`** - User-related API calls  
- **`booking.ts`** - Booking-related API calls  
- **`index.ts`** - Common API utilities or exports  

### `assets/`
Contains static assets like images, fonts, and icons.

- **`images/`** - Image files  
- **`fonts/`** - Font files  
- **`icons/`** - Icon files  

### `components/`
Reusable UI components.

#### `common/`
Generic components like buttons, inputs, etc.

- **`Button.tsx`** - A reusable button component  
- **`Input.tsx`** - A reusable input component  
- **`Modal.tsx`** - A reusable modal component  

#### `layout/`
Layout-related components that are part of the site's overall structure.

- **`Header.tsx`** - Header component  
- **`Footer.tsx`** - Footer component  
- **`Sidebar.tsx`** - Sidebar component  
- **`Navbar.tsx`** - Navbar component  

#### `specific/`
Feature-specific components for different parts of the application.

- **`BookingForm.tsx`** - Booking form component  
- **`Notification.tsx`** - Notification component  
- **`RatingStars.tsx`** - Rating stars component  

- **`index.ts`** - Export for easier imports from components  

### `contexts/`
React context for global state management.

- **`AuthContext.tsx`** - Authentication context  
- **`UserContext.tsx`** - User-related context  
- **`ThemeContext.tsx`** - Theme-related context  

### `hooks/`
Custom React hooks for different functionalities.

- **`useAuth.ts`** - Authentication hook for managing auth state  
- **`useFetch.ts`** - Data fetching hook  
- **`useResponsive.ts`** - Media query or responsive hooks  
- **`index.ts`** - Export for easier imports from hooks  

### `pages/`
Application pages, which represent routes.

- **`Home.tsx`** - Home page component  
- **`About.tsx`** - About page component  
- **`Dashboard.tsx`** - Dashboard page component  
- **`Booking.tsx`** - Booking page component  
- **`Profile.tsx`** - User profile page component  
- **`index.ts`** - Export for easier imports from pages  

### `services/`
Contains business logic and utilities, separate from UI.

- **`authService.ts`** - Authentication-related services  
- **`paymentService.ts`** - Payment-related services  
- **`emailService.ts`** - Email-related services  
- **`index.ts`** - Export for easier imports from services  

### `styles/`
Global and Tailwind configuration files.

- **`index.css`** - Main global CSS file (tailwind base)  
- **`tailwind.css`** - Tailwind CSS configuration  
- **`animations.css`** - Custom animations for UI  
- **`themes.css`** - Theme-related styles (light/dark mode)  

### `types/`
TypeScript type definitions.

- **`api.d.ts`** - API response types  
- **`components.d.ts`** - Component-specific types  
- **`context.d.ts`** - Context-related types  
- **`index.d.ts`** - Common exports from all types  

### `utils/`
Utility functions.

- **`dateUtils.ts`** - Date manipulation utilities  
- **`formatUtils.ts`** - Formatting utilities (e.g., for currency)  
- **`storageUtils.ts`** - LocalStorage/sessionStorage utilities  
- **`index.ts`** - Export for easier imports from utils  

### Root Files  

- **`App.tsx`** - Root React component for the application  
- **`main.tsx`** - Main application entry point (renders `App.tsx`)  
- **`index.html`** - Main HTML template for the application  
- **`vite-env.d.ts`** - Vite environment type definitions (e.g., for Vite config)  

---


## Description of Key Files and Directories - backend 

- **`src/`**: Contains the core source code for the backend, including controllers, models, services, and middlewares.
  - **`controllers/`**: Contains the logic to handle incoming requests, process them, and send appropriate responses.
    - `userController.js`: Handles requests related to user operations (e.g., registration, login).
    - `bookingController.js`: Handles requests related to booking operations (e.g., creating a booking, updating booking).
  - **`models/`**: Contains the Mongoose models that define the structure and schema of the data in the database.
    - `userModel.js`: Defines the schema for the user data in the database.
    - `bookingModel.js`: Defines the schema for booking-related data in the database.
  - **`routers/`**: Contains the API route handlers to define how the routes should behave.
    - `userRouter.js`: Defines routes for user-related requests.
    - `bookingRouter.js`: Defines routes for booking-related requests.
  - **`services/`**: Contains business logic for various functionalities, such as authentication, payments, and bookings.
    - `authService.js`: Contains logic for handling user authentication (e.g., login, signup).
    - `paymentService.js`: Contains logic for handling payment processing.
    - `bookingService.js`: Contains logic for booking-related operations.
  - **`utils/`**: Contains helper functions for tasks like error handling and logging.
    - `errorHandler.js`: Contains utilities for handling errors in the application.
    - `logger.js`: Contains utilities for logging application events.
  - **`config/`**: Contains configuration files such as database connection settings and environment variables.
    - `dbConfig.js`: Contains logic for connecting to the MongoDB database.
  - **`middleware/`**: Contains custom middleware functions used across routes.
    - `authMiddleware.js`: Middleware to check if the user is authenticated.
  - **`index.js`**: Main entry point for the application, initializing Express, connecting to the database, and starting the server.

- **`public/`**: Contains static files (optional) like uploaded files, images, etc.
  - **`uploads/`**: Directory for storing uploaded files such as images.

- **`.env`**: File for storing environment variables, including sensitive data like database credentials, API keys, etc.

- **`package.json`**: Contains project metadata and dependencies.

- **`README.md`**: This file that contains documentation for the project.

---

## Setting Up the Project

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with your environment variables:
    ```bash
    touch .env
    ```

4. Add the following keys to the `.env` file:
    ```env
    DB_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    PORT=<Port number, default is 5000>
    ```

5. Run the application:
    ```bash
    npm start
    ```

---

This structure is designed to keep concerns separated and ensure that files are easy to find and update. It follows common best practices for modularity and scalability in large web applications.


sql
Copy code

---

### **Key Highlights**

- **apis/**: Contains API integration files like authentication and booking calls.
- **assets/**: Stores static files such as images, fonts, and icons, which can be imported into components as needed.
- **components/**: Modular UI components like buttons, forms, navigation bars, and any feature-specific components.
- **contexts/**: Manages global application state using React's context API (e.g., user authentication, theme management).
- **hooks/**: Custom hooks that abstract repetitive logic like authentication, data fetching, or responsive behavior.
- **pages/**: Components for each route or page (e.g., Home, About, Dashboard), which correspond to the main view of the app.
- **services/**: Contains business logic and utilities that don't belong to UI components, like payment and email services.
- **styles/**: Global styles, Tailwind CSS configuration, animations, and theme definitions.
- **types/**: TypeScript type definitions for API responses, context states, components, and utilities, ensuring type safety across the app.
- **utils/**: Helper functions for tasks like date manipulation, format conversion, and managing browser storage.
- **App.tsx**: The main React component that wraps the entire application and renders the routes.
- **main.tsx**: The entry point for React, responsible for rendering the `App.tsx` component into the DOM.
- **index.html**: The main HTML template loaded into the browser.
- **vite-env.d.ts**: Custom TypeScript definitions for Vite, used for environment variables or project-specific configurations.

---

This structure keeps everything modular and scalable for future growth. It ensures that as your application grows, you can easily add or modify components, hooks, and services without cluttering the codebase.
git clone https://github.com/your-username/phronesis-tour-logistics.git
cd phronesis-tour-logistics

Install Dependencies
bash
Copy code
npm install

## Set Up Environment Variables
 - Create a .env file in the root directory and configure the following:

- makefile
- Copy code
- MONGO_URI=your_mongo_db_connection_string
- PORT=5000
- JWT_SECRET=your_jwt_secret
- Run the Project
- Start the development server:

bash
- Copy code
- npm run dev
- Navigate to http://localhost:3000 to view the project in your browser.

### Features Included:
1. Full description of the project's scope and features.
2. Detailed tech stack with all cutting-edge tools mentioned.
3. Setup instructions for both development and production environments.
4. API endpoints and folder structure for clarity.
5. Contribution guidelines and licensing for open collaboration.





