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
    if (content.title === 'Edit'){
      if (inputValue){
        setTasks(prevTasks => prevTasks.map(task => {
          if(task.id === content.taskId){
            return {...task, description: inputValue}
          } else {
            return task
          }
        }))
      } else {
        return 
      }
    } else {
      console.log('del')
      setTasks(prevTasks => prevTasks.filter(task => task.id !== content.taskId))
    }
    setIsModalOpen(false)
  }

  return (<>
      <div className='modal-layover'>
        <div className="modal-container">
          {content.title === 'Edit' ? 
          <>
            <h1>{content.title} Task</h1>
            <h3>"{content.description}"</h3>
            <input type="text" ref={inputRef} className='modal-input'
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
            />
          </>
          : <>
          <h1>{content.title}</h1>
          <h3>Are you sure you want to Delete {content.description}</h3>
          </>
          }
          <div className='modal-btn-container'>
            <button className='modal-btn confirm' onClick={handleConfirm}>Confirm</button>
            <button className='modal-btn cancel' onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
