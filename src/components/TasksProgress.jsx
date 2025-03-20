import { useEffect, useState } from 'react';
import './TasksProgress.css'
import { useTask } from '../contexts/TaskProvider';

const TasksProgress = () => {
  const {tasks} = useTask()
  let circ = 2 * Math.PI * 30;

  const [percent, setPercent] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(0)
  const strokePercent = ((100 - percent) * circ) / 100

  useEffect(() => {
    let len = tasks.filter(task => task.completed).length
    setCompletedTasks(len)
    let newPercent = Math.floor(((len) / (tasks.length)) * 100)
    setPercent(newPercent)
  }, [tasks])

  return (
    <div className='tasks-progress-container'>
      <div className="progress-bar">
        <svg width='200' height='200'>
          <g transform={`rotate(-90 ${'45 100'})`}>
            <circle
              r='30'
              cx='45'
              cy='100'
              fill='transparent'
              stroke='lightgrey'
              strokeWidth='.5rem'
              strokeDasharray={circ}
              strokeDashoffset={strokePercent}
            />
          </g>
        </svg>
        <span>{percent}%</span>
      </div>
      <div className='tasks-progress-info'>
        <h2>You've completed {completedTasks} out of {tasks.length} tasks.</h2>
      </div>
    </div>
  )
}

export default TasksProgress
