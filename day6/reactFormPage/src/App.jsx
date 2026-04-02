import { useState } from 'react'
import './App.css'

function App() {
  const [form,setForm] = useState({
    name: "",
    email: ""
  })

  const [error, setError] = useState("");

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!form.name || !form.email){
      setError("All fields are required");
      return 
    }
    console.log(form)
    setError("");
  }
  return (
    <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder='Name' />
        <input name="email" onChange={handleChange} placeholder='Email' />
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
    </form>
  )
}

export default App
