import React from 'react'
import TaskList from './TaskList'
import { TaskProvider } from '../contexts/TaskProvider'

const Task = () => {
  return (
    <div>
        <TaskList/>
    </div>
  )
}

export default Task
