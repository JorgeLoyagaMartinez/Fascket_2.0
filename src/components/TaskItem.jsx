
import React, { useState } from 'react';

export const TaskItem = ({handleComplete, handleDelete, task}) => {
    const [isCompleted, setIsCompleted] = useState(false)

    const toggleComplete = () =>{
        setIsCompleted(!isCompleted)
        handleComplete(task.id) //estamos llamando a la tarea que esta completada
    }

    const onDelete = () => {
        handleDelete(task.id)
    }


  return (
    <div>
        <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
            {task.name}
        </span>
        <button onClick={toggleComplete}>Completar</button>
        <button onClick={onDelete}>Eliminar</button>
    </div>
  )
}
