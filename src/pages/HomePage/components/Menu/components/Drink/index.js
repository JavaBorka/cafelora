import './style.css'

import { Layer } from '../Layer'

export const Drink = (props) => {
    const { name, image, id, ordered, layers } = props

    const element = document.createElement('div')
    element.classList.add('drink')

    element.innerHTML = `
        <div class="drink__product">
        <div class="drink__cup">
            <img src=${image}>
        </div>
        <div class="drink__info">
            <h3>${name}</h3>

        </div>
        </div>
        <div class="drink__controls">
        <button class="order-btn">
            Objednat
        </button>
        </div>
    `

    element.querySelector('.drink__info').append(
        ...layers.map((layer) => Layer(
            {
            color: layer.color,
            label: layer.label,
            }
        ))
    )

    const orderBtn = element.querySelector('.order-btn')

    if (ordered) {
        orderBtn.classList.add('order-btn--ordered')
        orderBtn.textContent = 'Zrušit'
    } else {
        orderBtn.classList.remove('order-btn--ordered')
        orderBtn.textContent = 'Objednat'
    }

    const handleOrderStatus = () => {

        fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                ordered: !ordered,
            }),
            })
            .then((response) => response.json())
            .then((data) => {
                element.replaceWith(Drink(data.result));
            });
    }
      
    orderBtn.addEventListener('click', handleOrderStatus)

    return element
}