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
  }
  else if (filter === FilterState.complete) {
    tasksToRender = tasks.filter(task => task.completed)
  }

  return (
    <ul className='todo-list'>
      {tasksToRender.map(todo => (
        <Task key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
