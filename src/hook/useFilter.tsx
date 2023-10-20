import { useState } from 'react'
import { FilterState, IFilterState } from '../const' 
import { IsetFilter } from '../types'

export const useFilter = () => {
  const [filter, setStateFilter] = useState<IFilterState>(FilterState.active)
  const setFilter:IsetFilter = (filter)=> setStateFilter(filter)
  return {filter, setFilter}
}
