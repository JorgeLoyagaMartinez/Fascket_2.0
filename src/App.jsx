import React, { useState, useEffect } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import './Style/Style.css'


const App = () => {
  const [tasks, setTasks] = useState([]);

  // Funciones para gestionar eventos
  const handleComplete = taskId => {
    // Lógica para marcar como completada una tarea
    // Actualización del estado de las tareas
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed : !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = taskId => {
    // Lógica para eliminar una tarea
    // Actualización del estado de las tareas
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const addTask = taskName => {
    // Lógica para agregar una nueva tarea
    // Generación de una nueva tarea y actualización del estado de las tareas
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // useEffect para realizar acciones cuando cambia el estado de las tareas
  useEffect(() => {
    // Ejemplo: Mostrar un mensaje cuando se agrega o elimina una tarea
    console.log('Tareas actualizadas:', tasks);
  }, [tasks]);

  return (
    <div  className='divContenedor'>
      <h1>App - Lista de Tareas</h1>
      <TaskForm  addTask={addTask}/> 
      <TaskList
        tasks={tasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
