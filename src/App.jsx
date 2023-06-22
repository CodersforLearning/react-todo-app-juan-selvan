import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Task from './task.jsx'
import TaskBox from './taskBox.jsx'
import SuperFocus from './focus.jsx'

function App() {
  const [tasks, setTasks] = useState([])
  const [focusTask, setFocusTask] = useState()

  function handleAdd(event) {
    event.preventDefault()
    const title = event.target.title.value
    const description = event.target.description.value

    console.log(title)
    const newTask = {
      'title': title,
      'description':description,
      'id': Math.random(),
      'atHand': false
    }
    const newList =  [...tasks, newTask]
    setTasks(newList)
    console.log(tasks)
  }

  function remove(id) {
    console.log(id)
    const newList = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(newList)
  }

  function realFocus(id) {
    console.log(id)
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks[i].atHand = true
        setFocusTask(tasks[i])
      }
    } 
    const newList = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(newList)

  }
  
  if (focusTask) {
    return (
      <>
      <h1>FOCUS ON THIS ONE!!!</h1>
    <Task taskData={focusTask}></Task>
      </>
    )
  }
  return (
    <div className="App">
      <div>        
      </div>
      <form onSubmit={handleAdd}  className="adder">
        <h1>Add a Task!!</h1>
        <input name="title" placeholder="Title" />
        <input name="description" placeholder="Description" />
        <button type='submit'>Add Task</button>
      </form>
            
      <div>
        <TaskBox runc={remove} tasks={tasks} focus0={realFocus}></TaskBox>
        
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

export default App

