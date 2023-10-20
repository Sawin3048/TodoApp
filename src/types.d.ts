import { IFilterState } from "./const"

export type ID = `${string}-${string}-${string}-${string}-${string}`
export type ColorValueHex = `#${string}`
export interface Todo {
  id: ID
  title: string
  completed: boolean
}

export type ListOfTasks = Todo[]
export type IsetFilter = (filter:IFilterState) => unknown