import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const location = useLocation();
  const username = location.state?.username || 'User';

  return (
    <div style={{ textAlign: 'center', padding: '5px' }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
        alt="Welcome"
        style={{
          marginTop:'10px',
          width: '50px',
          height: '50px',
          borderRadius: '5',
        }}
      />
      <p style={{fontSize:'20px',fontWeight:'bold',margin:'0px'}}>Welcome, {username}!</p>
      <p>You have successfully logged in.</p>

      {/* Navigation Bar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor:'rgba(113, 19, 185, 0.81)',
          padding: '5px',
          borderRadius: '8px',
        }}
      >
        <Link to="/Welcome" style={{ textDecoration: 'none', color: '#fff' , width:'25%'}}>
          Home
        </Link>
        <Link to="/categories" style={{ textDecoration: 'none', color: '#fff', width:'25%' }}>
          Categories
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#fff' , width:'25%'}}>
          About
        </Link>
        <Link to="/contacts" style={{ textDecoration: 'none', color: '#fff', width:'25%'}}>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Welcome;
