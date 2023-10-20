import { FilterState } from '../const'
import { Filter } from '../contexts/filter'
import { useTasks } from '../contexts/task'
import { Task } from './Task'

export const TaskList = () => {
  const tasks = useTasks()
  const filter = Filter()
  let tasksToRender = tasks
  if (filter !== FilterState.all) {
    tasksToRender = tasks?.filter(task => task.completed)
  }  
  return (
    <ul className='todo-list'>
      {tasks?.map(todo => (
        <Task key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
