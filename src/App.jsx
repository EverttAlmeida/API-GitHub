import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")
  function handleBuscar(){

    axios.get(`https://api.github.com/users/${usuario}`).then(response => console.log(response))

  }
  return (
    <>
    <input type="text" value = {usuario} onChange={e => setUsuario(e.target.value)} /> 
    <button onClick={handleBuscar}>Pesquisar</button>
    

    </>
  )
}

export default App
