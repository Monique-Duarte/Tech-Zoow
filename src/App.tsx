import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './components/Contacts'
import Inicio from './components/Inicio'
import Layout from './components/Conteudo'
import Menu from './components/Menu'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobre' element={<Layout />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter >
  )
}

export default App
