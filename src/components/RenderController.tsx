import React, { MouseEventHandler } from 'react'
import { FilterState, IFilterState } from '../const'
import { Filter, SetFilter  } from '../contexts/filter'
import { Button } from './Button'

const RenderController = () => {
  const FilterStateAsArray:IFilterState[] = ['Active','All'] 
  const setFilter = SetFilter()
  const selectedFilter = Filter()





  return (
    <div className='flex gap-1'>
      {FilterStateAsArray.map(f => <Button onClick={setFilter ? setFilter(f) as MouseEventHandler: undefined} active={f === selectedFilter} key={f}>{f}</Button>)}
      
    </div>
)
  // return (
  //   <div className='flex gap-1'>
  //     <button onClick={f1} className={`rounded-full px-2 ${filter === FilterState.all ? activeStyle : desactiveStyle}`}>
  //       All
  //     </button>
  //     <button onClick={f2} className={`rounded-full px-2 ${filter === FilterState.active ? activeStyle : desactiveStyle}`}>
  //       Active
  //     </button>
  //     <button onClick={f3} className={`rounded-full px-2 ${filter === FilterState.complete ? activeStyle : desactiveStyle}`}>
  //       Completed
  //     </button>
  //   </div>
  // )
}

export default React.memo(RenderController)
