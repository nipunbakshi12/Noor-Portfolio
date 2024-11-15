import { useState } from 'react'
import './index.css';
import Portfolio from './components/Portfolio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Portfolio />
    </>
  )
}

export default App
