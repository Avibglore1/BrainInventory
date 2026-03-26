
import { useState } from 'react'
import './App.css'
import Counter from './hooks/Counter.jsx'
import UseCallback from './hooks/UseCallback.jsx'
import UseContext, { ThemeContext } from './hooks/UseContext.jsx'
import UseEffect from './hooks/UseEffect.jsx'
import UseMemo from './hooks/UseMemo.jsx'


function App() {
  const [theme,setTheme] = useState("light");

  function toggleTheme(){
    setTheme(t=>(t==="light") ? "dark" : "light")
  }
  return(
    <>
    <button onClick={toggleTheme}>ToggleTheme</button>
    <ThemeContext.Provider value={theme}>
      <UseContext/>
    </ThemeContext.Provider>
  </>
  )
  
  
}

export default App
