import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Screen1 from './Pages/Screen1'
import Screen2 from './Pages/Screen2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Screen1 />
      <Screen2 />
    </>
  )
}

export default App
