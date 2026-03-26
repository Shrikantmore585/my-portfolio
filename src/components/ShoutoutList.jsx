import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function ShoutoutList({ shoutouts, onDelete }) {
  if (!shoutouts || shoutouts.length === 0) {
    return <div className="text-center text-muted">No shoutouts yet.</div>;
  }

  return (
    <div className="mb-5 mt-5">
      <h3 className="mb-4 pb-2 border-bottom" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color) !important' }}>
        Shoutouts
      </h3>
      <div className="row g-4">
        {shoutouts.map((shoutout) => (
          <div className="col-12 col-md-6" key={shoutout.id}>
            <div className="card h-100 shadow-sm border-0 position-relative" style={{ background: 'var(--surface-color)', transition: 'transform 0.3s' }}>
              {onDelete && (
                <button 
                  onClick={() => onDelete(shoutout.id)} 
                  className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 m-3 border-0"
                  aria-label="Delete shoutout"
                  title="Delete shoutout"
                >
                  <FaTrash />
                </button>
              )}
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <p className="card-text fst-italic mb-3" style={{ color: 'var(--text-secondary)' }}>
                  "{shoutout.feedback}"
                </p>
                <div className="text-end">
                  <span className="fw-bold" style={{ color: 'var(--primary-color)' }}>- {shoutout.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
