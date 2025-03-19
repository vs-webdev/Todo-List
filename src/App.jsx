import Todo from './components/Todo'
import './App.css'
import { useTheme } from './contexts/ThemeProvider'

function App() {
  const {theme} = useTheme()

  return (
    <div className='app' data-theme={theme}>
      <Todo />
    </div>
  )
}

export default App
