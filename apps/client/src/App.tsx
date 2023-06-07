import { useState } from 'react'

function App() {
  const [txt, setTxt] = useState("")
  const api = async () => {
    const response = await fetch("/api")
    const data = await response.text()

  setTxt(data)
  }
 return (
  <>
  <h2>{txt}</h2>
  <button onClick={api}>
    Clikme
  </button>
  </>
 ) 
}

export default App
