import { TaskProvider } from '../contexts/TaskProvider'
import AddTask from './AddTask'
import TasksProgress from './TasksProgress.jsx'
import TaskList from './TaskList'
import './Todo.css'
import TodoHeader from './TodoHeader'

const Todo = () => {

  return (
    <div className='todo-container'>
      <h1 className='todo-title'>todo list</h1>
      <TaskProvider >
        <TasksProgress />
        <TodoHeader />
        <TaskList />
        <AddTask />
      </TaskProvider>
    </div>
  )
}

export default Todo
