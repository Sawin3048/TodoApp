import React, { MouseEventHandler } from 'react'
import { FilterStateAsArray } from '../const'
import { Filter, SetFilter  } from '../contexts/filter'
import { Button } from './Button'

const RenderController = () => {
  // const FilterStateAsArray:IFilterState[] = ['Active','All'] 
  const setFilter = SetFilter()
  const selectedFilter = Filter()

  return (
    <div className='flex gap-1'>
      {FilterStateAsArray.map(f => {
        return (
          <Button
            onClick={setFilter ? ()=> setFilter(f) as MouseEventHandler : undefined}
            active={f === selectedFilter}
            key={f}
          >
            {f}
          </Button>
        )
      })}
      
    </div>
)
}

export default React.memo(RenderController)
