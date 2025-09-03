import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Welcome.css';
import Contacts from './Contacts';
import Categories from './Categories';
import About from './About';
import Home from './Home';

function Welcome() {
  const location = useLocation();
  const username = location.state?.username || 'User';
  const [activeSection, setActiveSection] = useState('home'); // ← New state

  return (
    <div style={{ textAlign: 'center', padding: '5px' }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
        alt="Welcome"
        style={{
          marginTop: '10px',
          width: '50px',
          height: '50px',
          borderRadius: '5px',
        }}
      />
      <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '0px' }}>
        Welcome, {username}!
      </p>
      <p>You have successfully logged in.</p>

      {/* Navigation Bar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'rgba(113, 19, 185, 0.81)',
          padding: '5px',
          borderRadius: '8px',
        }}
      >
        <button
          onClick={() => setActiveSection('Home')}
          style={navButtonStyle}
        >
          Home
        </button>
        <button
          onClick={() => setActiveSection('Categories')}
          style={navButtonStyle}
        >
          Categories
        </button>
        <button
          onClick={() => setActiveSection('About')}
          style={navButtonStyle}
        >
          About
        </button>
        <button
          onClick={() => setActiveSection('Contacts')}
          style={navButtonStyle}
        >
          Contact
        </button>
      </nav>

      {/* Content Below Navbar Based on Selection */}
      <div style={{ marginTop: '20px' }}>
        {activeSection === 'Home' && <Home />}
        {activeSection === 'Categories' && <Categories />}
        {activeSection === 'About' && <About />}
        {activeSection === 'Contacts' && <Contacts />}
        {/* Add more sections as needed */}
      </div>
    </div>
  );
}

// Styling for nav buttons (acts like links)
const navButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#fff',
  width: '25%',
  fontSize: '16px',
  cursor: 'pointer' ,
  padding: '5px'
};

export default Welcome;
