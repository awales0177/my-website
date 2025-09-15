import React from 'react';
import './Enumeration.css';

const Enumeration = ({ items, title, className = '' }) => {
  return (
    <div className={`enumeration-container ${className}`}>
      {title && <h3 className="enumeration-title">{title}</h3>}
      <div className="enumeration-list">
        {items.map((item, index) => (
          <div key={index} className="enumeration-item">
            <div className="enumeration-content">
              <span className="enumeration-label">label: {item.label}</span>
              <span className="enumeration-value">value: {item.number || index + 1}</span>
              <span className="enumeration-description">description: {item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enumeration;