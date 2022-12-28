import {useState, useEffect} from 'react'
import { tasks as data } from './tasks'
import { TaskForm } from "./components/TaskForm"
import { TaskGrid } from "./components/TaskGrid"

export const App = () => {
  const [tasks, setTasks] = useState([])

  const createTask = (title, description) => {
    const newTask = {
      id: tasks.length,
      title,
      description
    }

    setTasks([...tasks, newTask]); 
  }

  const deleteTask = (taskID) => {
    setTasks(tasks.filter(task => task.id != taskID))
  }

  useEffect(() => {
    setTasks(data)
  }, [])

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskGrid tasks={tasks} deleteTask={deleteTask} />
    </>
  )  
}
