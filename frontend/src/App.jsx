import {useEffect} from 'react'
import MainRoutes from './routes/MainRoutes'
import Nav from './nav/Nav'
import { useDispatch } from 'react-redux'

const App = () => {

  



  return (
    <div className='text-2xl p-5 w-screen h-[110vh]  text-[#FAF9EE] bg-[#222831]'>

      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App