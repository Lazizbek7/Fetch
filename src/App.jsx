import './App.css'
import Store from './components/book-store'
import User from './components/user'
import People from './components/people'
import Comments from './components/comments'
import Products from './components/products'
import ClipLoader from "react-spinners/ClipLoader";
import { useState,useEffect } from 'react'
function App() {
  const [loading , setLoading] = useState(false)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },7000)
  } , [])

  return (
    <>
    {
      loading?
      <ClipLoader className='Loader'
        color={"#D0010B"}
        loading={loading}
        size={150}
      />
      :
      <div>
      <Store/>
      <User/>
      <People/>
      <Comments/>
      <Products/></div>
    }
    </>
  )
}

export default App
