import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Home from './Home';
import Categories from './Categories';
import About from './About';
import Contacts from './Contacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
