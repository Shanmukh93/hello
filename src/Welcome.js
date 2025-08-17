import React from 'react';
import { useLocation } from 'react-router-dom';
function Welcome() {
  const location = useLocation();
  const username = location.state?.username || 'User';
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Welcome ,{username}!</h2>
      <p>You have successfully logged in.</p>
    </div>
  );
}

export default Welcome;
