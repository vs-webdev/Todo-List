import { TaskProvider } from '../contexts/TaskProvider'
import AddTask from './AddTask'
import TaskList from './TaskList'
import './Todo.css'

const Todo = () => {
  return (
    <div className='todo-container'>
      <h1 className='todo-title'>todo list</h1>
      <div className='todo-header'>
        <input type="text" className='search' placeholder='Search note...'/>
        <button className="sort">All</button>
        <button>Theme</button>
      </div>

      <TaskProvider >
        <TaskList />
        <AddTask />
      </TaskProvider>
    </div>
  )
}

export default Todo
