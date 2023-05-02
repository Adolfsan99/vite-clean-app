import { useState } from 'react'
import './App.css'

function App() {


  let word = "mundo";
  const [count, setCount] = useState(0)


  return (<>



      <h1 align="center">
        ¡Hola {word}!
      </h1>

      <div align="center">
        <button onClick={() => setCount((count) => count + 1)}>
          Numero de clics: {count}
        </button>
      </div>



  </>)}

export default App
