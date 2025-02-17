
import React, { useState } from 'react';
import '../styles/seconds.css';

export default function Seconds() {
  const [birthday, setBirthday] = useState('');
  const [stats, setStats] = useState({
    secondsLived: 0,
    secondsLeft: 0,
    percentLived: 0
  });

  const calculateStats = () => {
    const [day, month, year] = birthday.split('-');
    const dateBorn = new Date(`${year}-${month}-${day}`);
    const dateDepart = new Date(dateBorn.getTime());
    dateDepart.setFullYear(dateBorn.getFullYear() + 80);

    setInterval(() => {
      const now = new Date();
      const lived = Math.abs(now - dateBorn) / 1000;
      const left = Math.abs(dateDepart - now) / 1000;
      const total = Math.abs(dateDepart - dateBorn) / 1000;
      const percent = ((lived / total) * 100).toFixed(4);

      setStats({
        secondsLived: Math.floor(lived),
        secondsLeft: Math.floor(left),
        percentLived: percent
      });
    }, 1000);
  };

  return (
    <div className="container">
      <h1>How Much Life Have You Lived?</h1>
      <p className="subtitle">Enter your birthday in <strong>dd-mm-yyyy</strong> format</p>
      
      <div className="input-group">
        <input
          type="text"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          placeholder="dd-mm-yyyy"
        />
        <button onClick={calculateStats}>Start Counting</button>
      </div>

      <div className="stats">
        <div className="stat-box">
          <span className="stat-label">Seconds Lived</span>
          <span className="stat-value">{stats.secondsLived.toLocaleString()}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Seconds Left</span>
          <span className="stat-value">{stats.secondsLeft.toLocaleString()}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Percent Lived</span>
          <span className="stat-value">{stats.percentLived}%</span>
        </div>
      </div>
    </div>
  );
}
