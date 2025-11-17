import React from 'react';
import Navbar from './components/Navbar';
import HeroAnimatedBackground from './components/HeroAnimatedBackground';
import StatsCounter from './components/StatsCounter';
import FooterModern from './components/FooterModern';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroAnimatedBackground />
      <StatsCounter />
      <FooterModern />
    </div>
  );
}

export default App;