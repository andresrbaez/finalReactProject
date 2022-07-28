import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components'
import { Home, ProductDetail, Purchases, Login } from './pages'


function App() {

  return (
    <HashRouter>
      <NavBar/>
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
