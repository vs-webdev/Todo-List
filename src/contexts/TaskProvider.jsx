import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [multipleSelectedTasks, setMultipleSelectedTasks] = useState([])
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false)
  const [filterOption, setFilterOption] = useState('All')
  const [tasks, setTasks] = useState([
    {id: uuidv4(), description: 'Wash Car', completed: false},
    {id: uuidv4(), description: 'Repair Door', completed: false},
  ])

  const contextValue = {
    selectedTaskId,
    setSelectedTaskId,
    multipleSelectedTasks,
    setMultipleSelectedTasks,
    tasks,
    setTasks,
    search,
    setSearch,
    isModalOpen, 
    setIsModalOpen,
    isAddTaskModalOpen,
    setIsAddTaskModalOpen,
    filterOption, 
    setFilterOption,
  }
  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)