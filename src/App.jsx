import React, { useState, useEffect } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { GrTask } from "react-icons/gr";
import './Style/Style.css'


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTask, setSearchTask] = useState('');

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

  const filteredTasks = tasks.filter((task) =>
  // Filtrar tareas basándote en el término de búsqueda  
    task.name.toLowerCase().includes(searchTask.toLowerCase())
  );

  return (
    <div  className='divContenedor'>
      <div className='contenedorTitulo'>
      <h1>App - Lista de Tareas</h1>
      <GrTask className='icono'/>
      </div>
      <TaskForm  addTask={addTask}/>
      <input
        type="text"
        value={searchTask}
        onChange={(e) => setSearchTask(e.target.value)}
        placeholder="Buscar tarea"
      />
      <TaskList
        tasks={filteredTasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
