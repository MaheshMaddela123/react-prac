import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl my-20'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={() => setColor('red')} style={{backgroundColor: 'red'}}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black 'onClick={() => setColor('blue')} style={{backgroundColor: 'blue'}}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black'onClick={() => setColor('green')} style={{backgroundColor: 'green'}}>Green</button>
      </div>
      </div>
    </div>
  )
}

export default App
