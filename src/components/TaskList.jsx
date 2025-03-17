import { useEffect } from "react"
import { useTask } from "../contexts/TaskProvider"
import './TaskList.css'

const TaskList = () => {
  const {tasks, setTasks} = useTask()

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
  }

  const toggleComplete = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task
    ))
  }

  return (
    <div className="tasks-container">
      <ul className="tasks-inner">
        {tasks.map(task => 
        <li key={task.id} className="tasks-item">
          <div className="task-content">
            <input 
              className="task-toggle" 
              type="checkbox" 
              checked={task.completed}
              onChange={() => toggleComplete(task.id)} 
            />
            <h2 className={`task-description ${task.completed ? 'complete' : ''}`}>
              {task.description}
            </h2>
          </div>
          <div className="task-actions">
            <button onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </div>
        </li>)}
      </ul>
    </div>
  )
}

export default TaskList
