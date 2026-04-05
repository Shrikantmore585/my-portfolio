import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export default function GiveShoutout() {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !feedback) return;

    try {
      const newId = uuidv4();
      await setDoc(doc(db, "shoutouts", newId), { name, feedback });
      setStatus({ type: 'success', message: 'Shoutout added successfully!' });
      setName('');
      setFeedback('');
    } catch (error) {
      console.error("Error adding shoutout:", error);
      setStatus({ type: 'error', message: 'Failed to add shoutout. Please try again.' });
    }
  };

  return (
    <div className="container py-5 fade-in" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0" style={{ background: 'var(--surface-color)' }}>
        <div className="card-body p-4 p-md-5">
          <h2 className="text-center mb-4" style={{ color: 'var(--text-primary)' }}>Give Shoutout</h2>

          {status && (
            <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} py-2 mb-4`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div>
              <label htmlFor="name" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                style={{ borderColor: 'var(--border-color)' }}
              />
            </div>

            <div>
              <label htmlFor="feedback" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Feedback</label>
              <textarea
                className="form-control"
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="5"
                placeholder="Please share your feedback or experience working with me..."
                required
                style={{ borderColor: 'var(--border-color)' }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-3 w-100 btn-large">
              Submit Shoutout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
