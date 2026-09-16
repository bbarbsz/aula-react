import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function App() {
  const {pagina, setPagina} = useState('home')

  const renderizarPagina = () => {
    if (pagina === 'home') return <Home/>
    if (pagina === 'sobre') return <Sobre/>
    if (pagina === 'contatos') return <Contatos/>
  }

  return (
    <div id="container">
        <h1>Aula alicia</h1>
        <nav>
          <button onClick={()=>setPagina('home')}>Home</button>
          <button onClick={()=>setPagina('sobre')}>Sobre</button>
          <button onClick={()=>setPagina('contato')}>Contato</button>
        </nav>
        <div className='conteudo'>
          {renderizarPagina()}
        </div>
    </div>
  )
}

export default App
