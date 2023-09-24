import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
        <div className='w-[90%] mx-auto'>
        <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
    </>
  )
}

export default App
