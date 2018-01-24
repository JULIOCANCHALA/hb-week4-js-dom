import urls from './gallery_images.js'

class Gallery {
  constructor (node, urls) {
    this.index = 0 // the index of images start in 0
    this.node = node
    this.urls = urls
    this.elements = {} // starts empty

    this.settemplate()
    this.setdots(urls)
    this.setimages(urls)
    this.setclicks()
  }
  // Una propiedad o método estático no se duplica en cada objeto, sino que existe una única vez en memoria.
  // HTML to index
  static get template () { // the static methods are called without instantiate the class
    return (
        `<ul class="gallery__images"></ul>
        
        <nav class="gallery__navrows">
            <button class="gallery__row gallery__row--left"><</button>
            <button class="gallery__row gallery__row--right">></button>
            </nav>
            
        <ul class="gallery__dot-container"></ul>`
    )
  }

  static get states () {
    return {
      imageselected: 'gallery__image-container--selected',
      buttonselected: 'gallery__dot-button--selected',
      arrowdiseble: 'gallery__row--disable',
      dotselected: 'gallery__dot-button--selected'
    }
  }

  static imageofgallery ({ url }) {
    return (
        `<li class="gallery__image-container">
            <img class="gallery__image" src="${url}" alt="Image of gallery">
        </li>`
    )
  }

  static dotofcontainer () {
    return (
        `<li class="gallery__dot">
            <button class="gallery__dot-button"></button>
        </li>`
    )
  }

  // functions for set HTML
  settemplate () {
    this.node.innerHTML = Gallery.template
    this.node.tabIndex = 0
    this.elements.images = this.node.querySelector('.gallery__images')// add reference for element
    this.elements.leftrow = this.node.querySelector('.gallery__row--left')
    this.elements.rightrow = this.node.querySelector('.gallery__row--right')
    this.elements.dotcontainer = this.node.querySelector('.gallery__dot-container')
  }

  setdots (urls) {
    const dots = urls.map(Gallery.dotofcontainer).join('')
    this.elements.dotcontainer.innerHTML = dots
    this.elements.dots_item = this.node.querySelectorAll('.gallery__dot-button')
    this.elements.dots_item[this.index].classList.add(Gallery.states.dotselected)
  }

  setimages (urls) {
    const images = urls.map(Gallery.imageofgallery).join('')
    this.elements.images.innerHTML = images
    this.elements.images_items = this.node.querySelectorAll('.gallery__image-container')
    this.elements.images_items[this.index].classList.add(Gallery.states.imageselected)
    this.stateArrows()
  }

  setclicks () {
    this.elements.leftrow.addEventListener('click', this.changeindex.bind(this)) // bind allows us to link the object with this new function that we just created
    this.elements.rightrow.addEventListener('click', this.changeindex.bind(this))
    this.elements.dotcontainer.addEventListener('click', this.changeindex.bind(this))
    this.node.addEventListener('keydown', this.keyboard.bind(this))
  }

  changeindex (event) {
    const clickedelement = event.target
    if (clickedelement.classList.contains('gallery__row--left')) {
      this.changeitems(this.index - 1)
    }
    if (clickedelement.classList.contains('gallery__row--right')) {
      this.changeitems(this.index + 1)
    }
    if (clickedelement.classList.contains('gallery__dot-button')) {
      const index = Array.from(this.elements.dots_item).indexOf(clickedelement)
      this.changeitems(index)
    }
  }

  changeitems (index) {
    if (index >= 0 && index < this.elements.dots_item.length) {
      this.elements.images_items[this.index].classList.remove(Gallery.states.imageselected)
      this.elements.dots_item[this.index].classList.remove(Gallery.states.dotselected)
      this.index = index
      this.elements.images_items[this.index].classList.add(Gallery.states.imageselected)
      this.elements.dots_item[this.index].classList.add(Gallery.states.dotselected)
      this.stateArrows()
    }
  }

  stateArrows () {
    this.elements.leftrow.classList.remove(Gallery.states.arrowdiseble)
    this.elements.rightrow.classList.remove(Gallery.states.arrowdiseble)
    if (this.index === 0) {
      this.elements.leftrow.classList.add(Gallery.states.arrowdiseble)
    }
    if (this.index === this.elements.dots_item.length - 1) {
      this.elements.rightrow.classList.add(Gallery.states.arrowdiseble)
    }
  }

  keyboard (key) {
    switch (key.keyCode) {
      case 37:
        this.changeitems(this.index - 1)
        break
      case 39:
        this.changeitems(this.index + 1)
        break
    }
  }
}
/* eslint-disable no-new */
new Gallery(document.querySelector('.gallery'), urls)// this goes on the index.js
