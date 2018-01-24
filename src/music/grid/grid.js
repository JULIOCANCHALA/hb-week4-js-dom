import { CardMusic } from '../card/card.js'

export class gridMusic {
  constructor (node, data) {
    this.node = node
    this.data = data
    this.setGrid(data, node)
    this.clicked()
  }

  clicked () {
    var i
    this.node.addEventListener('click', function (event) {
      if (event.target.classList.contains('music__card-grid')) {
        for (i = 0; i < this.data.length; i++) {
          const idCard = '.'.concat(this.data[i].name.toString().replace(/ /g, ''))
          const card = this.node.querySelector(idCard)
          card.classList.remove('music__card-container--rotated')
        }
      }
    }.bind(this))
  }

  setGrid (data) {
    const cards = data.map((dataCard) => {
      return new CardMusic(dataCard)
    })

    cards.forEach((card) => {
      this.node.appendChild(card.node)
    })
  }

  renovate (categorySelected) {
    const cardsItems = this.node.querySelectorAll('.music__card')
    var i
    if (categorySelected === 'Reset') {
      for (i = 0; i < cardsItems.length; i++) {
        cardsItems[i].classList.remove('music__card--invisible')
      }
    } else {
      for (i = 0; i < cardsItems.length; i++) {
        if (categorySelected !== cardsItems[i].querySelector('.music__card-category').textContent) {
          cardsItems[i].classList.add('music__card--invisible')
        } else {
          cardsItems[i].classList.remove('music__card--invisible')
        }
      }
    }
    const cardsItemsContainer = this.node.querySelectorAll('.music__card-container')
    for (i = 0; i < cardsItemsContainer.length; i++) {
      cardsItemsContainer[i].classList.remove('music__card-container--rotated')
    }
  }
}
