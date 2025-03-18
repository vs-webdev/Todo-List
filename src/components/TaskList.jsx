import { useTask } from "../contexts/TaskProvider"
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import './TaskList.css'
import { useMemo } from "react";

const TaskList = () => {
  const {tasks, setTasks, sortOption, search} = useTask()

  const sortedTasksList = useMemo(() => {
    let newTasks;
    if (search){
      newTasks = tasks.filter(task => 
        task.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      newTasks = tasks
    }

    if (sortOption === 'Complete'){
      return newTasks.filter(task => task.completed === true)
    } else if (sortOption === 'Incomplete'){
      return newTasks.filter(task => task.completed === false)
    } 
    return newTasks
  }, [sortOption, tasks, search])

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
      {search && 
      <div>
        {`${sortedTasksList.length} Task${sortedTasksList.length > 1 ? 's' : ''} Found`}
      </div>}
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