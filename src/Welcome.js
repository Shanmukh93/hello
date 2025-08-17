import React from 'react';
import { useLocation } from 'react-router-dom';
function Welcome() {
  const location = useLocation();
  const username = location.state?.username || 'User';
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
    <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png" // replace with your image
        alt="Welcome"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          marginBottom: '20px',
        }}
      />
      <h2>Welcome ,{username}!</h2>
      <p>You have successfully logged in.</p>
    </div>
  );
}

export default Welcome;
