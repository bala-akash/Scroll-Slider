import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SliderComponent } from './SliderComponent/SliderComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SliderComponent/>
    </>
  )
}

export default App
