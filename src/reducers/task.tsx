import { ID, Todo } from '../types'
import mockTask from '../mocks/todos.json'
import { useReducer } from 'react'
import ls from '../tools/LocalStorage'

type ActionType =
  | { type: 'added'; payload: { title: string } }
  | { type: 'changed'; payload: { task: Todo } }
  | { type: 'deleted'; payload: { id: ID } }
  | { type: 'toggle'; payload: { id: ID } }

function tasksReducer(tasks: Todo[], action: ActionType) {
  // console.log(tasks)
  switch (action.type) {
    case 'added': {
      const newTasks = [
        {
          id: window.crypto.randomUUID(),
          title: action.payload.title,
          completed: false
        },
        ...tasks
      ]
      ls.save(newTasks)
      return newTasks
    }
    case 'changed': {
      const changedTask = action.payload.task
      const newTasks = tasks.map(task => {
        if (task.id === changedTask.id) return changedTask
        return task
      })
      ls.save(newTasks)
      return newTasks
    }
    case 'deleted': {
      const newTasks = tasks.filter(t => t.id !== action.payload.id)
      ls.save(newTasks)
      return newTasks
    }
    case 'toggle': {
      const newTasks = tasks.map(t => {
        if (t.id === action.payload.id) return { ...t, completed: !t.completed }
        return t
      })
      ls.save(newTasks)
      return newTasks
    }
    default: {
      throw Error('Unknown action: ')
    }
  }
}

export interface TaskDispatcher {
  added: (title: string) => void
  deleted: (id: ID) => void
  changed: (task: Todo) => void
  toggle: (id: ID) => void
}

export function useTaskReducer(initialValue = mockTask as Todo[]) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialValue)

  const dispatcher: TaskDispatcher = {
    added: function (title) {
      dispatch({ type: 'added', payload: { title } })
    },
    deleted: function (id) {
      dispatch({ type: 'deleted', payload: { id } })
    },
    changed: function (task) {
      dispatch({ type: 'changed', payload: { task } })
    },
    toggle: function (id) {
      dispatch({ type: 'toggle', payload: { id } })
    }
  }

  return { tasks, dispatcher }
}
