import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Rightside from './components/RIghtside/Rightside'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
      <div className='AppGlass'>
          <Sidebar />
          <Main />
          <Rightside />
      </div>
     

      </div>
    </>
  )
}

export default App
