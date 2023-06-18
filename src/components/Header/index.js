import './style.css'

export const Header = () => {
    const element = document.createElement('header')

    element.innerHTML = `
    <div class="header__content container">
      <div class="site-logo"></div>

      <div class="navigation">
        <button class="nav-btn"></button>
        <nav class="rollout-nav nav-closed">
          <a href="#home">domů</a>
          <a href="#menu">menu</a>
          <a href="#gallery">galerie</a>
          <a href="#contact">kontakt</a>
        </nav>
      </div>

    </div>
    `

    const handleRollNav = () => {
      element.querySelector('.rollout-nav').classList.toggle('nav-closed')
    }

    const closeNav = () => {
      element.querySelector('.rollout-nav').classList.add('nav-closed')
    }

    const btnElm = element.querySelector('.nav-btn')
    btnElm.addEventListener('click', handleRollNav)

    const navElm = element.querySelector('.rollout-nav')
    navElm.addEventListener('click', closeNav)

    return element
}