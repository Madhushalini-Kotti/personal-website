import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-title-wrapper">
        <h3 className="projects-h3">Projects</h3>
      </div>

      <ProjectCard
  title="News Dashboard"
  techUsed={['React', 'Node.js', 'Express.js', 'News API', 'Axios', 'CSS', 'AWS Amplify']}
  description="Developed a full-stack News Dashboard with a React frontend and Node.js backend. Integrated News API to fetch and display real-time articles based on user queries. Implemented search functionality, modular components, and responsive design for optimal UX. Backend and frontend are deployed via AWS Amplify with automated CI/CD from GitHub."
  imageUrl="/assets/news-dashboard.png"
  links={[
    { name: 'GitHub', url: 'https://github.com/Madhushalini-Kotti/news-explorer' },
    { name: 'Live Demo', url: 'https://yourdemo.com/news-dashboard' }
  ]}
/>

      <ProjectCard
        title="Gym Progress Tracking System"
        techUsed={['AngularJS', 'Node.js', 'AWS Lambda', 'AWS RDS', 'MySQL', 'Docker', 'AWS EC2', 'CloudWatch', 'AWS S3']}
        description="Built and deployed a full-stack Gym Progress Tracker using AngularJS and Node.js. Stored 1,000+ workout logs in AWS RDS (MySQL), enabled serverless logging with AWS Lambda, containerized the app using Docker, and implemented real-time monitoring via CloudWatch while securely managing 500+ images through AWS S3."
        imageUrl="/assets/gym-progress.png"
        links={[
          { name: 'GitHub', url: 'https://github.com' },
          { name: 'Live Demo', url: 'https://demo.com' }
        ]}
      />

      <ProjectCard
        title="Personal Expense Tracker"
        techUsed={['ReactJS', 'Spring Boot', 'PostgreSQL', 'AWS EC2', 'AWS Lambda', 'AWS S3', 'Docker']}
        description="Implemented a full-stack Personal Expense Tracker with a Spring Boot backend and ReactJS front-end. Leveraged AWS RDS for reliable PostgreSQL storage and deployed the backend in a Dockerized AWS EC2 instance. Used AWS Lambda for serverless expense categorization and S3 to securely manage 100+ receipt images."
        imageUrl="/assets/personal-expense.png"
        links={[
          { name: 'GitHub', url: 'https://github.com' },
          { name: 'Live Demo', url: 'https://demo.com' }
        ]}
        reverse
      />

      <ProjectCard
  title="Recipe Search App"
  techUsed={['React', 'Spoonacular API', 'Axios', 'CSS']}
  description="Developed a responsive Recipe Search App using React and the Spoonacular API to fetch recipes based on user-inputted ingredients. Implemented search functionality, error handling, and modular components to enhance user experience and maintainability."
  imageUrl="/assets/recipe-search.png"
  links={[
    { name: 'GitHub', url: 'https://github.com/yourusername/recipe-search-app' },
    { name: 'Live Demo', url: 'https://yourdemo.com/recipe-search-app' }
  ]}
/>


      <ProjectCard
        title="Portfolio Website"
        techUsed={['React', 'HTML', 'CSS']}
        description="Personal Portfolio showcasing projects & experience. Responsive design with dark/light mode and smooth animations."
        imageUrl="/assets/portfolio.png"
        links={[
          { name: 'GitHub', url: 'https://github.com' },
          { name: 'Live Demo', url: 'https://demo.com' }
        ]}
      />
    </section>
  )
}

export default Projects
