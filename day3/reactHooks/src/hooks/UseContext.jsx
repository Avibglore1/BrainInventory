import React, { createContext, useContext } from 'react'
export const ThemeContext = createContext("light");

function UseContext() {
    const theme = useContext(ThemeContext);

     const styles = {
    padding: "20px",
    marginTop: "20px",
    backgroundColor: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    borderRadius: "8px"
  };
  return (
    <div style={statusbar}>{theme}</div>
  )
}

export default UseContext