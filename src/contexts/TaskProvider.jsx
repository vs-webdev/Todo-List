import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [multipleSelectedTasks, setMultipleSelectedTasks] = useState([])
  const [search, setSearch] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false)
  const [tasks, setTasks] = useState([
    {id: uuidv4(), description: 'Wash Car'},
    {id: uuidv4(), description: 'Repair Door'},
  ])

  const contextValue = {
    selectedTaskId,
    setSelectedTaskId,
    multipleSelectedTasks,
    setMultipleSelectedTasks,
    search,
    setSearch,
    isEditModalOpen,
    setIsEditModalOpen,
    isAddTaskModalOpen,
    setIsAddTaskModalOpen,
    tasks,
    setTasks,
  }
  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)