import React from 'react';
import './Card.css';

function Card({ title, company, duration, description, imageUrl, gpa }) {
  return (
    <div className="card">
      <div className="image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="details">
        <div className="institution">
          <strong>{company}</strong> - {title}
        </div>
        <div className="duration">{duration}</div>
        <div className="description">
          {description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
        {gpa && (
          <div className="gpa">
            <strong>GPA: {gpa}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
