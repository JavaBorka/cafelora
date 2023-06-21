import './style.css'

import { Drink } from './components/Drink'

export const Menu = (props) => {

    const { drinks } = props

    const element = document.createElement('section')
    element.classList.add('menu')

    element.innerHTML = `
    <div id="menu">
      <h2>Naše nabídka</h2>
      <p class="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div class="drinks-list"></div>

    </div>
    `
    const orderDetailElm = document.createElement('div')
    orderDetailElm.classList.add('order-detail')

    orderDetailElm.innerHTML = `
      <a href="/objednavka">Detail objednávky</a>    
    `
    element.querySelector('#menu').append(orderDetailElm)
    

  if (drinks === 'loading') {
    fetch(`https://cafelora.kodim.app/api/me/drinks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      const drinks = data.result
      const drinksListElm = element.querySelector('.drinks-list')
      drinksListElm.append(
        ...drinks.map((drink) => Drink(
          {
          name: drink.name,
          image: drink.image,
          id: drink.id
          }
        ))
      )
    })
  }

  return element
}