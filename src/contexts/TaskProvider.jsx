import { createContext, useContext, useState } from "react";

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [multipleSelectedTasks, setMultipleSelectedTasks] = useState([])
  const [search, setSearch] = useState('')
  const [editModalOpen, setEditModalOpen] = useState(false)

  const contextValue = {
    selectedTaskId,
    setSelectedTaskId,
    multipleSelectedTasks,
    setMultipleSelectedTasks,
    search,
    setSearch,
    editModalOpen,
    setEditModalOpen,
  }
  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)