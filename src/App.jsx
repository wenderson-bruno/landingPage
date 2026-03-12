import { useState } from 'react'

import './App.css'

import Menu from './menu/menu.jsx'
import BestWatch from './best-watch/best.jsx'
import SectionNew from './section-new-collection/section-new.jsx'
import Avaliações from './maisVendido/vendido.jsx'
import Rodape from './rodapé/rodape.jsx'


function App() {
  const [opneMenuMobile, setOpenMenuMobile] = useState(false)


  /* função de abrir menu mobile */
  function handleOpenMenuMobile() {
    const icon = document.querySelector('.mobile-nav-list')
    if (icon) {
      icon.classList.toggle('active')
    }
    setOpenMenuMobile(true)
  }

  return (
    <div>
      <header id='home'>
        <nav className='nav-bar'>

          <h1 className='title'>Zena</h1>
          <ul className='nav-list'>
            <li className='nav-list active'>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#new-collection">new collection</a>
            </li>
            <li>
              <a href="#best-seller">best selling products</a>
            </li>
          </ul>

          <button className='btn'>Login</button>
          <img className='icon' onClick={handleOpenMenuMobile} width="24" height="24" src="https://img.icons8.com/material-rounded/24/hamburger.png" alt="hamburger" />
        </nav>

        {/* mobile */}
        <div className='mobile'>
          <ul className='mobile-nav-list'>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#new-collection">new collection</a>
            </li>
            <li>
              <a href="#best-seller">best selling products</a>
            </li>
            <button className='btn-order'>order here</button>
          </ul>
        </div>
      </header>

      <Menu />

      <SectionNew />

      <BestWatch />

      <Avaliações />

      <Rodape />
    </div>
  )
}

export default App
