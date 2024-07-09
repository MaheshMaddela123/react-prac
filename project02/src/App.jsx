import { useState } from 'react'
import Card from './Card'
import './App.css'

let myObj = {
  name: "Mahesh Babu",
  Age: 21,
  addreas : {
    city: "YSR Kadapa",
    state: "Andhra Pradesh",
    country: "India"
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-red-500 p-3 rounded'>Vite with TailWind</h1>
    <Card userName='Mahesh Babu'/>
    <Card myArr = {myObj} />
    </>
  )
}

export default App
