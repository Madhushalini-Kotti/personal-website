import React from 'react';
import './Home.css';  
import 'devicon/devicon.min.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-text">
          <h1 className="job-title">Full Stack Software Engineer</h1>
          <p className="description">
            Hi, I'm Madhushalini. A passionate Full Stack Software Engineer with expertise in frontend, backend, and AI technologies.
          </p>
          <div className="social-links">
            <a href="https://github.com/Madhushalini-Kotti" target="_blank" rel="noreferrer noopener" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/madhushalinikotti/" target="_blank" rel="noreferrer noopener" className="social-link">LinkedIn</a>
            <a href="https://drive.google.com/file/d/1r3Wfaq4IxZAGTmf1N6ikFIzXIzEu3eQg/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="social-link">Resume</a>
          </div>
        </div>
        <div className="home-photo">
          <img src="/assets/madhu.jpg" alt="Madhushalini Kotti" className="photo" />
        </div>
          </div>
          
          <div className="tech-stack-container">
              <h1 className="tech-stack-title">Tech Stack</h1>
              <div className='tech-icons'>
                <i className="devicon-python-plain colored" title="Python"></i>
                <i className="devicon-java-plain colored" title="Java"></i>
                <i className="devicon-cplusplus-plain colored" title="C++"></i>
                <i className="devicon-javascript-plain colored" title="JavaScript"></i>
                <i className="devicon-typescript-plain colored" title="TypeScript"></i>
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i className="devicon-react-original colored" title="ReactJS"></i>
                <i className="devicon-angularjs-plain colored" title="AngularJS"></i>
                <i className="devicon-nodejs-plain colored" title="NodeJS"></i>
                <i className="devicon-express-original colored" title="ExpressJS"></i>
                <i className="devicon-django-plain colored" title="Django"></i>
                <i className="devicon-spring-plain colored" title="Spring Boot"></i>
                <i className="devicon-mysql-plain colored" title="MySQL"></i>
                <i className="devicon-postgresql-plain colored" title="PostgreSQL"></i>
                <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
                <i className="devicon-git-plain colored" title="Git"></i>
                <i className="devicon-github-original colored" title="GitHub"></i>
                <i className="devicon-gitlab-plain colored" title="GitLab"></i>
                <i className="devicon-docker-plain colored" title="Docker"></i>
                <i className="devicon-kubernetes-plain colored" title="Kubernetes"></i>
                <i className="devicon-amazonwebservices-original colored" title="AWS"></i>
                <i className="devicon-azure-plain colored" title="Azure"></i>
                <i className="devicon-linux-plain colored" title="DevOps/CI-CD"></i>
               </div>
          </div>
    </section>
  );
}

export default Home;
