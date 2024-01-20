import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './Calculator'

function App() {
  return (
    <div className='flex h-[100vh] mx-auto items-center justify-center'>
      <Calculator/>
    </div>
  )
}

export default App
