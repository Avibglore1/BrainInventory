import { ThemeProvider } from './context/ThemeContext';
import TaskManager from './components/Taskmanager';
import './App.css'

function App() {
  return (
    <>
     <ThemeProvider>
        <TaskManager/>
     </ThemeProvider>
    </>
  )
}

export default App
