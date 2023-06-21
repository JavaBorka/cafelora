import './style.css'

import { Layer } from '../Layer'

export const Drink = (props) => {
    const { name, image, id } = props

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

    fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    })
    .then((response) => response.json())
    .then((data) => {
        const layers = data.result.layers
        element.querySelector('.drink__info').append(
            ...layers.map((layer) => Layer(
                {
                color: layer.color,
                label: layer.label,
                }
            ))
        )
    })

    return element
}