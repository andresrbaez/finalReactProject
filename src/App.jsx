import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoadingScreen, NavBar } from './components'
import { Home, ProductDetail, Purchases, Login } from './pages'
import { useSelector } from 'react-redux'


function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <NavBar/>
      { isLoading && <LoadingScreen/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/purchases" element={<Purchases/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
