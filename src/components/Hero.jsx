import React from 'react';

export default function Hero({ name, title, highlight }) {
  return (
    <div className="py-5 text-center">
      <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
        Hi, I am {name}.
      </h1>
      <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
        I am a <strong style={{ color: 'var(--primary-color)' }}>{title}</strong> and a <strong style={{ color: 'var(--primary-color)' }}>{highlight}</strong>.
      </p>
    </div>
  );
}
