import React from 'react';

export default function TechStack({ technologies }) {
  return (
    <div className="mb-5">
      <h3 className="mb-4 text-center" style={{ color: 'var(--text-primary)' }}>Technologies</h3>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="badge rounded-pill px-4 py-2 fs-6 shadow-sm"
            style={{ 
              backgroundColor: 'var(--surface-color-light)', 
              color: 'var(--primary-color)',
              border: '1px solid var(--border-color)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
