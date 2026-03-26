import React from 'react';

export default function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container py-5 fade-in" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0" style={{ background: 'var(--surface-color)' }}>
        <div className="card-body p-4 p-md-5">
          <h2 className="text-center mb-4" style={{ color: 'var(--text-primary)' }}>Contact Me</h2>
          
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div>
              <label htmlFor="name" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Enter your name" 
                required
                style={{ borderColor: 'var(--border-color)' }}
              />
            </div>
            
            <div>
              <label htmlFor="mobile" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Mobile Number</label>
              <input 
                type="tel" 
                className="form-control" 
                id="mobile" 
                placeholder="Enter your mobile number" 
                required
                style={{ borderColor: 'var(--border-color)' }}
              />
            </div>

            <div>
              <label htmlFor="reason" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Reason for Contacting</label>
              <textarea 
                className="form-control" 
                id="reason" 
                rows="4" 
                placeholder="How can I help you?" 
                required
                style={{ borderColor: 'var(--border-color)' }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-3 w-100 btn-large">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
