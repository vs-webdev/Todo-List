import { useEffect, useRef, useState } from 'react'
import { useTask } from '../../contexts/TaskProvider'
import './Modal.css'

const Modal = ({content}) => {
  const {isModalOpen, setIsModalOpen, setTasks} = useTask()
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isModalOpen && inputRef.current) inputRef.current.focus()
  }, [isModalOpen])
  
  const handleConfirm = () => {
    if (content.title === 'Edit' && inputValue){
        setTasks(prevTasks => prevTasks.map(task => {
          if(task.id === content.taskId){
            return {...task, description: inputValue}
          } else {
            return task
          }
        }))
    } else {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== content.taskId))
    }
    setIsModalOpen(false)
  }

  return (<>
      <div className='modal-layover'>
        <div className="modal-container">
          <h1>{content.title}</h1>
          {content.title === 'Edit' && 
          <input type="text" ref={inputRef}
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
          />}
          <div>
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
