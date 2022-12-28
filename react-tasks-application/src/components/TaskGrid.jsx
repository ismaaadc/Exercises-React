import React from 'react'
import { TaskCard } from './TaskCard'

export const TaskGrid = ({tasks, deleteTask}) => {
   if(tasks.length === 0){
    return <h1>No hay categorías</h1>
   }
   
  return (
    <>
    {
        tasks.map((task) => {
            return <>
              <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
            </>
        })
    }
    </>
  )
}
