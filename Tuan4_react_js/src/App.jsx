import { useState } from 'react'
import BasicFetch from './component/BasicFetch'
import './App.css'
import Loading_ErrorState from './component/Loading_ErrorState'
import DynamiFetch from './component/DynamiFetch'
import SearchAndFilter from './component/SearchAndFilter'
import CRUDTodos from './component/CRUDTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <BasicFetch/>
        <Loading_ErrorState/>
        <DynamiFetch/>
        <SearchAndFilter/>
        <CRUDTodos/>
      </div>
    </>
  )
}

export default App
