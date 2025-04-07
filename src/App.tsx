import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Conteudo from './components/Conteudo'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Contact from './components/Contacts'
import Inicio from './components/Inicio'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobre' element={<Conteudo />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter >
  )
}

export default App
