import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

export default function ContactInfo({ email, phone, linkedin }) {
  return (
    <div className="card shadow-sm border-0 mb-4" style={{ background: 'var(--surface-color)' }}>
      <div className="card-body py-3 px-4 text-center">
        <h5 className="mb-3" style={{ color: 'var(--text-primary)' }}>Contact Details</h5>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <div className="d-flex align-items-center justify-content-center gap-2">
            <FaEnvelope style={{ color: 'var(--primary-color)' }} size={20} />
            <a href={`mailto:${email}`} className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>{email}</a>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <FaPhone style={{ color: 'var(--primary-color)' }} size={20} />
            <span style={{ color: 'var(--text-secondary)' }}>{phone}</span>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <FaLinkedin style={{ color: 'var(--primary-color)' }} size={20} />
            <a href={linkedin} target="_blank" rel="noreferrer" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>LinkedIn Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}
