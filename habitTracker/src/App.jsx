
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [habits, setHabits] = useState([])
  const [newHabit, setNewHabit] = useState('')

  const addHabit = (e) => {
    e.preventDefault()
    if (newHabit.trim()) {
      setHabits([...habits, { name: newHabit, completed: false }])
      setNewHabit('')
    }
  }

  const toggleHabit = (index) => {
    const updatedHabits = habits.map((habit, i) => 
      i === index ? { ...habit, completed: !habit.completed } : habit
    )
    setHabits(updatedHabits)
  }

  return (
    <div className="habit-tracker">
      <h1>Habit Tracker</h1>
      <form onSubmit={addHabit}>
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Enter a new habit"
        />
        <button type="submit">Add Habit</button>
      </form>
      <div className="habits-list">
        {habits.map((habit, index) => (
          <div 
            key={index} 
            className={`habit-item ${habit.completed ? 'completed' : ''}`}
            onClick={() => toggleHabit(index)}
          >
            {habit.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
