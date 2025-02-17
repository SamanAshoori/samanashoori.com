import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TodoList from './components/TodoList';
import Seconds from './components/Seconds';
import Home from './components/Home';
import './styles/main.css';

// Temporary placeholder components
const Game = () => <div>Game Component Coming Soon</div>;
const Caffeine = () => <div>Caffeine Tracker Coming Soon</div>;
const DigitalSaman = () => <div>Digital Saman Coming Soon</div>;

function App() {
  const [portfolioStrike, setPortfolioStrike] = useState(false)
  const [websiteVisible, setWebsiteVisible] = useState(false)

  const handleHeaderClick = () => {
    if (!portfolioStrike) {
      setPortfolioStrike(true)
      setWebsiteVisible(true)
    }
  }

  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todolist">To do List</Link></li>
        <li><Link to="/seconds">Seconds</Link></li>
        <li><Link to="/game">There will be clicks</Link></li>
        <li><Link to="/blog/home">Blog</Link></li>
        <li><Link to="/caffeine">Caffeine Tracker</Link></li>
        <li><Link to="/digitalsaman">Digital Saman</Link></li>
      </ul>

      <main>
        <h1 id="animated" onClick={handleHeaderClick}>
          Welcome to my{' '}
          <span id="portfolioText" className={portfolioStrike ? 'strike-through' : ''}>
            Portfolio
          </span>{' '}
          <span id="websiteText" className={websiteVisible ? 'reveal-active' : ''}>
            Website
          </span>
        </h1>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/seconds" element={<Seconds />} />
          <Route path="/game" element={<Game />} />
          <Route path="/caffeine" element={<Caffeine />} />
          <Route path="/digitalsaman" element={<DigitalSaman />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
