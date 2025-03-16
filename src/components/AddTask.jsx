import { useState } from 'react';
import { useTask } from '../contexts/TaskProvider.jsx';
import { v4 as uuidv4 } from 'uuid';
import './AddTask.css';

const AddTask = () => {
  const {isAddTaskModalOpen, setIsAddTaskModalOpen} = useTask()
  const {setTasks} = useTask()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) return
    setTasks(prev => [...prev, {id: uuidv4(), description: inputValue}])
    setInputValue('')
  }

  return (
    <>
      <div className='add-task-container'>
        <div className="add-task-inner">
            <div className={`add-task-modal ${isAddTaskModalOpen ? 'open' : ''}`}
            >
              <form onSubmit={handleSubmit}>
                <input className='add-input' 
                type="text" 
                placeholder='Add Task...'
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}/>
                <button className='add-btn' type='submit'>Add</button>
              </form>
            </div>
          <button className='add-toggle' onClick={() => setIsAddTaskModalOpen(prev => !prev)}>
            +
          </button>
        </div>
      </div>
    </>
  )
}

export default AddTask
