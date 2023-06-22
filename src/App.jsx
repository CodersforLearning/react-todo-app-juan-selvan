import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Task from './task.jsx'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [focusTask, setFocusTask] = useState()

  return (
    <div className="App">
      <h1>Simple TODO app</h1>
      <Task taskData={{title: "make app"}}></Task>
      <div>
        
      </div>
      <h1></h1>
      <div className="card">
        
        <p>
        </p>
      </div>
      <p className="read-the-docs">
      </p>
    </div>
  )
}

