import { createContext, useContext, useState } from "react";

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [multipleSelectedTasks, setMultipleSelectedTasks] = useState([])
  const [search, setSearch] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false)

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
  }
  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)