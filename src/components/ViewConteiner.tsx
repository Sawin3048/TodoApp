import { useTasks } from '../contexts/task'
import DownloadButton from './DownloadButton'
import RenderController from './RenderController'
import { TaskAdder } from './TaskAdder'
import { TaskList } from './TaskList'
import Today from './Today'

export const ViewConteiner = () => {
  const counter = useTasks()?.length
  return (
    <>
      <main className='rounded-3xl shadow-lg bg-emerald-50 max-w-7xl m-auto overflow-hidden'>
        <section className='px-5 pt-5 pb-2'>
          <div className='flex justify-between'>
          <Today />
          <DownloadButton />
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-500 text-lg'>{counter ?? 0} tasks</span>
            <RenderController />
          </div>
        </section>
        <TaskAdder />
        <section className='main'>
          <TaskList />
        </section>
      </main>
    </>
  )
}
