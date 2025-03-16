import { useTask } from '../contexts/TaskProvider'
import './AddTask.css'

const AddTask = () => {
  const {isAddTaskModalOpen, setIsAddTaskModalOpen} = useTask()
  console.log(isAddTaskModalOpen)
  return (
    <>
      <div className='add-task-container'>
        <div className="add-task-inner">
            <div className={`add-task-modal ${isAddTaskModalOpen ? 'open' : ''}`}
            >
              <form action="">
                <input className='add-input' type="text" placeholder='Add Task...'/>
                <button className='add-btn'>Add</button>
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
