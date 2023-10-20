export const FilterState = {
  complete :'Completed',
  active :'Active',
  all :'All'
} as const

export type IFilterState = typeof FilterState[keyof typeof FilterState] 
// const a:values = 'Active' 
export const FilterStateAsArray = Object.values(FilterState)  