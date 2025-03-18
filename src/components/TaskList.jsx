import { useTask } from "../contexts/TaskProvider"
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import './TaskList.css'
import { useMemo, useState } from "react";
import Modal from "./modals/Modal";

const TaskList = () => {
  const {tasks, setTasks, sortOption, search, isModalOpen, setIsModalOpen} = useTask()
  const [modalContent, setModalContent] = useState(null)

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
    setIsModalOpen(true)
    setModalContent({
      title: 'Delete',
      taskId,
    })
  }

  const toggleComplete = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task
    ))
  }

  const handleTaskEdit = (taskId) => {
    setIsModalOpen(true)
    setModalContent({
      title: 'Edit',
      taskId,
    })
  }

    return (<>
    {isModalOpen && <Modal content={modalContent}/>}
    {!tasks.length 
    ? <h2>You don't have any tasks yet!</h2>
    : <div className="tasks-container">
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
            <button onClick={() => handleTaskEdit(task.id)}>
              <FiEdit3 size={20}/>
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>
              <MdOutlineDeleteForever size={20} />
            </button>
          </div>
        </li>)}
      </ul>
    </div>}
  </>
  )
}

export default TaskList