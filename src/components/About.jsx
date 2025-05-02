import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-photo">
          <img src="/assets/desktop.jpeg" alt="Madhushalini Kotti" />
        </div>
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hi, I’m Madhushalini Kotti — a Full Stack Software Developer with 3+ years of experience in building secure, scalable web and cloud-native applications. I’m proficient in Node.js and Java Spring Boot for backend development, and React.js for frontend, with strong skills in Python and SQL. I also have hands-on experience with AWS (EC2, S3, Lambda), Azure, Docker, and CI/CD tools like GitHub Actions and Jenkins.

I specialize in designing REST APIs, real-time systems, and automation scripts to enhance performance and reliability. With a background in Agile development and cross-functional collaboration, I focus on delivering high-impact solutions aligned with user and business needs.

I recently completed my Master’s in Computer Science from Florida Atlantic University (GPA: 3.83), and I’m actively seeking opportunities in Full Stack, Backend, Frontend, or Cloud Engineering — open to On-site, Hybrid, or Remote roles.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
