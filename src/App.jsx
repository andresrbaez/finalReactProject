import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoadingScreen, NavBar, Footer } from './components'
import { Home, ProductDetail, Purchases, Login, SignUp } from './pages'
import { useSelector } from 'react-redux'


function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <NavBar/>
      <div className='container mt-5'>
        { isLoading && <LoadingScreen/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:id" element={<ProductDetail/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/purchases" element={<Purchases/>}/>
        </Routes>
      </div>
      <Footer/>
    </HashRouter>
  )
}

export default App
