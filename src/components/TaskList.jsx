import { useTask } from "../contexts/TaskProvider"
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import './TaskList.css'
import { useMemo } from "react";

const TaskList = () => {
  const {tasks, setTasks, sortOption} = useTask()

  const sortedTasksList = useMemo(() => {
    if (sortOption === 'Complete'){
      return tasks.filter(task => task.completed === true)
    } else if (sortOption === 'Incomplete'){
      return tasks.filter(task => task.completed === false)
    } 
    return tasks
  }, [sortOption, tasks])

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
        {sortedTasksList.map(task => 
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
            <button>
              <FiEdit3 size={20}/>
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>
              <MdOutlineDeleteForever size={20} />
            </button>
          </div>
        </li>)}
      </ul>
    </div>
  )
}

export default TaskList