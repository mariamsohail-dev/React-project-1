# React Project 1 – User Profile Cards

## About the Project

This is my first React project, developed as part of a React development challenge.

The main objective of this project is to build a responsive user profile card application using reusable React components and dynamic data.

Each user profile displays a profile image, name, role, social media icons, action buttons, and post statistics.

## Challenge Objectives

- Create a reusable `UserCard` component.
- Pass user information through props.
- Display multiple user cards using the JavaScript `map()` method.
- Store user information in a JSON data file.
- Create a responsive grid layout.
- Style the application using Tailwind CSS.

## Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Icons
- JSON

## Project Features

- Reusable user profile card component.
- Dynamic user information using React props.
- Multiple user profiles rendered from JSON data.
- Social media icons.
- Subscribe and Message buttons.
- Like, comment, and share statistics.
- Responsive grid layout for different screen sizes.
- Tailwind CSS for styling.

## Project Structure


React project 1/
|
|── app/
     │
     ├── public/
     |
     ├── node_modules/
     |
     ├── src/
     │   ├── components/
     │   │   ├── UserCard.jsx
     │   │   ├── Button.jsx
     │   │   ├── PostInfo.jsx
     │   │   ├── CreateLine.jsx
     │   │   ├── SocialIcon.jsx
     │   │   └── users-data.json
     │   │
     │   ├── App.jsx
     │   ├── index.css
     │   └── main.jsx
     │
     ├── .gitignore
     ├── eslint.config.js
     ├── index.html
     ├── vite.config.js
     ├── package-lock.json
     ├── package.json
     └── README.md


## Installation and Setup

### 1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL

### 2. Navigate to the Project Folder
cd react-project-1

### 3. Install Dependencies
npm install

### 4. Start the Development Server
npm run dev


Open the local URL provided by Vite in your browser.

## What I Learned

Through this project, I practiced:

- Creating reusable React components.
- Passing and receiving props.
- Rendering lists using the `map()` method.
- Working with JSON data.
- Using React Icons.
- Applying Tailwind CSS utility classes.
- Creating responsive layouts.
- Organizing a React project into components.

## Future Improvements

- Add dynamic social media links and icons for each user.
- Make the Subscribe and Message buttons functional.
- Improve user interactions.

## Author

Created as my first React practice project.