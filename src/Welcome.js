import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Welcome() {
  const location = useLocation();
  const username = location.state?.username || 'User';

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
        alt="Welcome"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          marginBottom: '20px',
        }}
      />
      <h2>Welcome, {username}!</h2>
      <p>You have successfully logged in.</p>

      {/* Navigation Bar */}
      <nav
        style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          backgroundColor: '#f0f0f0',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
          Home
        </Link>
        <Link to="/categories" style={{ textDecoration: 'none', color: '#333' }}>
          Categories
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>
          About
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Welcome;
