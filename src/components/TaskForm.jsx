import React, { useState } from 'react'
import '../Style/Style.css'

export const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    // el evento para el formulario 
    const handleSubmit = e => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            addTask(taskName) // llamar a la funcion para agregar tareas pasadas por promesas 
            setTaskName('') // Con esto limpio la entrada del input
        }
    }


  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={taskName}    
        onChange={e => setTaskName(e.target.value)}
        placeholder='Nueva Tarea'
        />
        <button type="submit">Agregar</button>
    </form>
  )
}
