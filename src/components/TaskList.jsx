import { useState } from "react"

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Shopping'}
  ])
  return (
    <div>
      {tasks.map(task => <div key={task.id}>{task.title}</div>)}
    </div>
  )
}

export default TaskList
