
# Quiz Website

Welcome to the [Quiz Website](https://idokolenny.github.io/my-quiz-website/), a modern, responsive, and user-friendly web application built using React and Tailwind CSS. This project allows users to take quizzes seamlessly, offering features such as navigation between questions, progress tracking, and final score evaluation.


## Features

- Dynamic Question Rendering: Displays questions dynamically based on user interaction.
- Navigation: Users can move forward or backward between questions, or jump to a specific question using pagination.
- Responsive Design: Fully responsive layout for mobile, tablet, and desktop devices, achieved using Tailwind CSS.
- Final Score Evaluation: At the end of the quiz, users receive a summary of their performance.
- Efficient State Management: React's state hooks are used to manage quiz data, progress, and user answers.


## Tech Stack

**Client:** React, TailwindCSS

**Routing:** React Router


## Installation

 **Clone the repository** 

```bash
 git clone https://github.com/<your-username>/my-quiz-website.git
cd my-quiz-website
```
    

**Install dependencies**

```bash
  npm install 
```
**Open your browser and navigate to http://localhost:5173/ to view the app.**
## Deployment



This project can be deployed on platforms like GitHub Pages, Vercel, or Netlify. Below are instructions for GitHub Pages:

**Install gh-pages:**

```bash
  npm install gh-pages --save-dev

```

**Add homepage to `package.json:`**
```bash
  "homepage": "https://<your-username>.github.io/my-quiz-website"


```

**Update `package.json` scripts:**

```bash
  "predeploy": "npm run build",
"deploy": "gh-pages -d dist"


```
**Deploy**
```bash
    npm run deploy

```
## Contributing

Contributions are always welcome!

Feel free to contribute to this project by opening issues or submitting pull requests. Contributions are always welcome!

## Acknowledgements


- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/en/main)