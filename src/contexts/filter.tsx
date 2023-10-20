import { createContext, useContext } from "react"
import { IFilterState } from "../const"
import { useFilter } from "../hook/useFilter"
import { IsetFilter } from "../types"

const FilterContext = createContext<IFilterState | null>(null)
const SetFilterContext = createContext<IsetFilter| null>(null)

export const Filter = () => {
  return useContext(FilterContext)
}

export const SetFilter = () => {
  return useContext(SetFilterContext)
}

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const {filter, setFilter} = useFilter()
  
  return (
  <FilterContext.Provider value={filter}>
    <SetFilterContext.Provider value={setFilter}>
      {children}
    </SetFilterContext.Provider>
  </FilterContext.Provider>
  )
}
