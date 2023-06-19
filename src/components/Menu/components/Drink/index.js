import './style.css'

export const Drink = (props) => {
    const { name, image } = props

    const element = document.createElement('div')
    element.classList.add('drink')

    element.innerHTML = `
        <div class="drink__product">
        <div class="drink__cup">
            <img src=${image}>
        </div>
        <div class="drink__info">
            <h3>${name}</h3>
            <div class="layer">
            <div class="layer__color" style="background-color: #613916"></div>
            <div class="layer__label">espresso</div>
            </div>
        </div>
        </div>
        <div class="drink__controls">
        <button class="order-btn">
            Objednat
        </button>
        </div>
    `

    return element
}