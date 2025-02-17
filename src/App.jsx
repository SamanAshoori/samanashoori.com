import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TodoList from './components/TodoList';
import Seconds from './components/Seconds';
import './styles/main.css';

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
      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/todolist">To do List</Link>
        <Link to="/seconds">Seconds</Link>
        <Link to="/game">There will be clicks</Link>
        <Link to="/blog/home">Blog</Link>
        <Link to="/caffeine">Caffeine Tracker</Link>
        <Link to="/digitalsaman">Digital Saman</Link>
      </nav>

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
