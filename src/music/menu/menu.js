export class MenuMusic {
  constructor (node, categories, returnCategory) {
    this.node = node
    this.categories = categories
    this.returnCategory = returnCategory
    this.setMenu(categories)
    this.setClick()
  }

  static templateItemMenu (category) {
    return (
        `<li class="music__menu-container">
            <button class="music__menu-button">${category}</button>
        </li>`
    )
  }

  setMenu (categories) {
    const btnsCategoriesAux = categories.map(MenuMusic.templateItemMenu).join('')
    const btnreset = '<li class="music__menu-container"><button class="music__menu-button music__menu-button--reset">Reset</button></li>'
    const btnsCategories = btnsCategoriesAux.concat(btnreset)
    // console.log(btnsCategories);
    this.node.innerHTML = btnsCategories
  }

  setClick () {
    this.node.addEventListener('click', (btn) => {
      if (btn.target.classList.contains('music__menu-button')) {
        const categorySelected = btn.target.textContent
        this.returnCategory(categorySelected)
      }
    })
  }
}
