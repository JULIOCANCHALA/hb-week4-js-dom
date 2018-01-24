import data from './musicData.js'
import { MenuMusic } from './menu/menu.js'
import { GridMusic } from './grid/grid.js'
class Music {
  constructor (node, data) {
    this.node = node
    this.filterCategories(data)
        // this.getCategory(data);
  }

  static get templateMusic () {
    return (
        `<ul class="music__menu"></ul>
        <ul class="music__card-grid"></ul>`
    )
  }

  filterCategories (data) {
    data = data.sort(function () { return Math.random() - 0.5 })
    const categoriesFull = data.map(function (x) {
      return (x.category)
    })
    const categories = categoriesFull.filter(function (item, pos) {
      return categoriesFull.indexOf(item) === pos
    })
    this.settemplateMusic()
    this.setGrid(data)
    this.setMenu(categories)
  }

  settemplateMusic () {
    this.node.innerHTML = Music.templateMusic
  }

  setMenu (categories) {
    this.menu = new MenuMusic(this.node.querySelector('.music__menu'), categories, (categorySelected) => {
      this.grid.renovate(categorySelected)
    })
  }

  setGrid (data) {
    this.grid = new GridMusic(this.node.querySelector('.music__card-grid'), data)
  }
}

/* eslint-disable no-new */
new Music(document.querySelector('.music'), data) // this goes on the index.js
