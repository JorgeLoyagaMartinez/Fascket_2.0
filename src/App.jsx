import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './Style/Style.css'
function App() {
  const [task, setTask] = useState([]);

  //Funciones para gestionar eventos
  const handleComplete = taskId => {
    // Logica para marcar como completado una tarea
    // Actualizacion del estado de las tareas
    const uodateTasks = tasks.map(task => 
      task.id ===taskId ? {...task, completed: !task.completed } : task
      );
      setTasks(updateTasks);
  };

  const handleDelete = taskId => {
    // Logica para eliminar una tarea
    // Actualizacion del estado de las tareas
    const updateTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updateTasks);
  };

  const addTask = taskName => {
    // Logica para agregar una nueva tarea
    // Generacion de una nueva tarea y actualizacion del estado de las tareas
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false, 
    };
    setTasks([...tasks, newTask]);
  };

  // useEffect para realizar acciones cuando cambio el estado de las tareas
  useEffect(() => {
    // Ejemplo mostrar un mensaje cuando se agrega o elimina una tarea
    console.log('Tareas actualizadas:', tasks);
  }, [tasks]);

  return (
    <>
      <div>
        <h1>App - Lista de Tareas</h1>
        <TaskForm addTask={addTask} />
        {/* <TaskList
          tasks={tasks}
          handleComplete={handleComplete}
          handleDelete={handleDelete} 
        /> 
        */}
      </div>
    </>
  );
};

export default App
