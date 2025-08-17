import {useEffect} from 'react'
import MainRoutes from './routes/MainRoutes'
import Nav from './nav/Nav'
import { useDispatch } from 'react-redux'

import { asyncgetproducts } from './Redux/actions/ProdcutAction'
import { asynccurrentruser } from './Redux/actions/UserAction'
import { useNavigate } from 'react-router-dom'

const App = () => {

  const dispatch = useDispatch()
  const navigate=useNavigate()


  useEffect(() => {
    dispatch(asyncgetproducts())
    dispatch(asynccurrentruser())
    navigate("/")

  }, [])



  return (
    <div className='text-2xl py-[50px ] flex flex-col justify-start w-screen h-screen  text-[#FAF9EE] bg-[#222831]'>

      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App