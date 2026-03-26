import React from 'react';

export default function ExperienceList({ experiences }) {
  return (
    <div className="mb-5">
      <h3 className="mb-4 pb-2 border-bottom" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color) !important' }}>
        Previous Experience
      </h3>
      <div className="row g-4">
        {experiences.map((company, index) => (
          <div className="col-12 col-md-6" key={index}>
            <div className="card h-100 shadow-sm border-0" style={{ background: 'var(--surface-color)', transition: 'transform 0.3s' }}>
              <div className="card-body p-4">
                <h4 className="card-title fw-bold" style={{ color: 'var(--primary-color)' }}>{company.companyName}</h4>
                <div className="mt-3">
                  {company.roles.map((role, idx) => (
                    <div key={idx} className="mb-3 ps-3 border-start" style={{ borderColor: 'var(--primary-color) !important', borderWidth: '3px !important' }}>
                      <h6 className="fw-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{role.title}</h6>
                      <small className="text-muted d-block">{role.duration}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
