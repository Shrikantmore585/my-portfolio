import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { login } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pushUserAndNavigate = (user) => {
    dispatch(login({
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
    }));
    navigate('/manage-shoutouts');
  };

  const handleGoogleSignIn = () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => pushUserAndNavigate(result.user))
      .catch((error) => setError(error.message));
  };

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError('Email and password cannot be empty.');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => pushUserAndNavigate(userCredential.user))
      .catch((error) => setError(error.message));
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError('Email and password cannot be empty.');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => pushUserAndNavigate(userCredential.user))
      .catch((error) => setError(error.message));
  };

  return (
    <div className="container py-5 fade-in" style={{ maxWidth: '400px' }}>
      <div className="card shadow-sm border-0" style={{ background: 'var(--surface-color)' }}>
        <div className="card-body p-4 p-md-5">
          <h2 className="text-center mb-4" style={{ color: 'var(--text-primary)' }}>Login</h2>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <form className="d-flex flex-column gap-3">
            <div>
              <label className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                style={{ borderColor: 'var(--border-color)' }}
              />
            </div>

            <div>
              <label className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{ borderColor: 'var(--border-color)' }}
              />
            </div>

            <div className="d-flex gap-2 mt-2">
              <button type="button" className="btn btn-primary flex-grow-1" onClick={handleEmailSignIn}>Log In</button>
              <button type="button" className="btn btn-secondary flex-grow-1" onClick={handleEmailSignUp}>Sign Up</button>
            </div>
          </form>

          <hr className="my-4" style={{ borderColor: 'var(--border-color)' }} />

          <button type="button" className="btn btn-outline-primary w-100 mb-3" onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
