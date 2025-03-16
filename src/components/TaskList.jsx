import { useTask } from "../contexts/TaskProvider"
import './TaskList.css'

const TaskList = () => {
  const {tasks, setTasks} = useTask()

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="tasks-container">
      <ul className="tasks-inner">
        {tasks.map(task => 
        <li key={task.id} className="tasks-item">
          <div className="task-desc">{task.description}</div>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default TaskList
