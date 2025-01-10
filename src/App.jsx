import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Screen1 from './Pages/Screen1'
import Screen2 from './Pages/Screen2'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Screen3 } from './Pages/Screen3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Screen1 />} />
      <Route path="/email" element={<Screen2 />} />
      <Route path="/otp" element={<Screen3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
