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
      {FilterStateAsArray.map(filterName => {
        return (
          <Button
            onClick={setFilter ? () => setFilter(filterName) as MouseEventHandler : undefined}
            active={filterName === selectedFilter}
            key={filterName}
            disabled={filterName === selectedFilter}
          >
            {filterName}
          </Button>
        )
      })}
      
    </div>
)
}

export default React.memo(RenderController)
