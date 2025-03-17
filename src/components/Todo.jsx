import { TaskProvider } from '../contexts/TaskProvider'
import AddTask from './AddTask'
import TaskList from './TaskList'
import './Todo.css'
import TodoHeader from './TodoHeader'

const Todo = () => {

  return (
    <div className='todo-container'>
      <h1 className='todo-title'>todo list</h1>
      <TaskProvider >
        <TodoHeader />
        <TaskList />
        <AddTask />
      </TaskProvider>
    </div>
  )
}

export default Todo
