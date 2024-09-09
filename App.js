import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlayerProfile from './pages/PlayerProfile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<PlayerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
