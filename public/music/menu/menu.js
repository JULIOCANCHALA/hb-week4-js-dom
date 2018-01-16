export class menuMusic {
    constructor(node, categories) {
        this.node = node;
        this.categories = categories;
        this.setMenu(categories);

        //this.setClick();
    }

    static templateItemMenu(category) {
        return (
            `<li class="music__menu-container">
                <button class="music__menu-button">${category}</button>
            </li>`
        )
    }

    setMenu(categories) {
        const btnsCategories_aux = categories.map(menuMusic.templateItemMenu).join('');

        const btnreset = '<li class="music__menu-container"><button class="music__menu-button music__menu-button--reset">Reset</button></li>';
        const btnsCategories = btnsCategories_aux.concat(btnreset);
        console.log(btnsCategories);
        this.node.innerHTML = btnsCategories;
    }

    setClick() {
        this.node.addEventListener('click', function(x) {
            const btnSelected = x.target;
            if (btnSelected.classList.contains('music__menu-button')) {
                //console.log(btnSelected.textContent)
                return (btnSelected.textContent);
            }
        })
    }

}