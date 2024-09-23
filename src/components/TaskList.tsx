import Notepath from '../assets/notepath'
import { FilterState } from '../const'
import { Filter } from '../contexts/filter'
import { useTasks } from '../contexts/task'
import { Todo } from '../types'
import { Task } from './Task'

export const TaskList = () => {
  const tasks = useTasks() as Todo[]
  const filter = Filter()
  let tasksToRender = tasks
  if (filter === FilterState.active) {
    tasksToRender = tasks.filter(task => !task.completed)
  } else if (filter === FilterState.complete) {
    tasksToRender = tasks.filter(task => task.completed)
  }
  return (
    (tasksToRender.length <= 0)
      ? <div className='p-5 text-zinc-300'>
      <Notepath className='m-auto w-fit max-w-xs max-h-80 sm:max-h-96 md:max-h-full'/>
    </div>
      : <ul>
      {tasksToRender.map(todo => (
        <Task key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
