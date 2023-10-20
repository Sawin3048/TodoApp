export const FilterState = {
  all :'All',
  active :'Active',
  complete :'Completed'
} as const

export type IFilterState = typeof FilterState[keyof typeof FilterState] 
// const a:values = 'Active' 
export const FilterStateAsArray = Object.values(FilterState)  