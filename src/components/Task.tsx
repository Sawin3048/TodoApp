import { useTasksDispatch } from '../contexts/task'
import { type Todo as TodoType } from '../types'
import { Trash } from '../assets/trash'
import clsx from 'clsx'

export const Task: React.FC<TodoType> = ({ id, completed, title }) => {
  const controller = useTasksDispatch()

  // const stylesClass = completed
  //   ? {
  //       li: 'bg-lime-50',
  //       span: 'bg-green-600 ',
  //       p: 'line-through decoration-wavy decoration-gray-400 text-gray-600'
  //     }
  //   : {
  //       li: 'outline-1 outline-gray-200',
  //       span: 'border',
  //       p: 'text-gray-600'
  //     }

  return (
    <li className={clsx('justify-between items-center flex border-b px-3 py-1 gap-3',
      {
        'bg-lime-50': completed,
        'outline-1 outline-gray-200': !completed
      })}>
      <input
        aria-label='Complete task'
        title='Complete'
        className='rounded-full peer relative appearance-none shrink-0 w-6 h-6 border-2 border-green-200   bg-white
        focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
        checked:bg-green-500 checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400'
        type='checkbox'
        checked={completed}
        onChange={() => controller?.toggle(id)}
        />
       
      <svg
        className=' absolute w-6 h-6 pointer-events-none hidden peer-checked:block stroke-white p-1 outline-none'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='20 6 9 17 4 12'></polyline>
      </svg>
      <span className={clsx('w-full overflow-hidden break-words text-gray-600',
        {
          'line-through decoration-wavy decoration-gray-400': completed,
        })}>{title}</span>

        <button
        className='col-span-1 place-self-center text-red-500 focus:outline-black focus:outline-8'
          onClick={() => controller?.deleted(id)}
          aria-label='Delete task'
          title='Delete'
        >
        <Trash color='#ef4444' />
      </button>
    </li>
  )
}
