import { useState } from 'react'
import { FilterState, type IFilterState } from '../const' 

export const useFilter = () => {
  const [filter, setStateFilter] = useState<IFilterState>(FilterState.active)
  const setFilter = (filter:IFilterState)=> setStateFilter(filter)
  return {filter, setFilter}
}
