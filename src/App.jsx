import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { login, logout, selectUser } from './redux/userSlice';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Login from './pages/Login';
import GiveShoutout from './pages/GiveShoutout';
import ManageShoutouts from './pages/ManageShoutouts';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });

  //   return unsubscribe;
  // }, [dispatch]);

  // const handleLogout = () => {
  //   signOut(auth);
  // };

  return (
    <Router>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Link to="/">Home</Link>
        {/* <Link to="/contact-me">Contact Me</Link> */}
        <Link to="/give-shoutout">Give Shoutout</Link>
        <Link to="/manage-shoutouts">Manage Shoutouts</Link>

        <div style={{ flexGrow: 1 }}></div>

        {user ? (
          <button onClick={handleLogout} className="btn btn-sm btn-outline-danger">
            Logout ({user.email})
          </button>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/give-shoutout" element={<GiveShoutout />} />
        <Route path="/manage-shoutouts" element={<ManageShoutouts />} />
      </Routes>
    </Router>
  );
}

export default App;
