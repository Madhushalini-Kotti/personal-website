import React from 'react';
import './Experience.css';
import Card from './Card';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-title-wrapper">
        <h3 className="experience-h3">Experience</h3>
      </div>

      <div className="experience-cards">
        <Card 
          title="Software Developer Intern" 
          company="Florida Atlantic University" 
          duration="January 2024 – April 2025" 
          description="Developed and deployed a TA Management System using Node.js, Express.js, and ReactJS, streamlining hiring processes across 10+ departments and reducing manual workload by 50%. Built responsive UI components using Next.js, Tailwind CSS, and MaterialUI, improving accessibility and engagement for 500+ users. Integrated AI-powered resume screening and real-time scheduling with WebSockets, and ensured 98% API test coverage using Jest and Supertest."
          imageUrl="/assets/fau-logo.png"
        />
        <Card 
          title="Software Development Engineer Intern" 
          company="Amazon" 
          duration="Januray 2023 – June 2023" 
          description="Built scalable backend microservices using Java and Spring Boot to optimize global logistics workflows, enabling 40% adoption of port recommendations across regions. Enhanced shipping flexibility by integrating ±3-day scheduling logic and Spring-based rule engines. Improved Amazon Freight UI by exposing advanced REST APIs for sorting and filtering. Managed dynamic configs with Spring Cloud Config and supported deployments via AWS CodePipeline."
          imageUrl="/assets/amazon-logo.png"
        />

        <Card 
          title="Software Engineer Intern" 
          company="Physics Wallah" 
          duration="March 2021 – December 2022" 
          description="Developed and maintained full-stack features for the EdTech platform using React and Node.js, improving course content delivery speed by 35%. Implemented reusable UI components with Tailwind CSS and optimized backend APIs to handle a 20% increase in student traffic. Collaborated closely with QA and product teams to resolve bugs and enhance user experience." 
          imageUrl="/assets/pw-logo.png" 
        />

        
      </div>
    </section>
  );
}

export default Experience;
