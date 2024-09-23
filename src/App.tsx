import { Background } from './components/Background'
import { ViewConteiner } from './components/ViewConteiner'
import { FilterProvider } from './contexts/filter'
import { TaskContextProvider } from './contexts/task'

function App () {
  return (
    <Background>
      <TaskContextProvider>
        <FilterProvider>
          <ViewConteiner />
        </FilterProvider>
      </TaskContextProvider>
    </Background>
  )
}

export default App
