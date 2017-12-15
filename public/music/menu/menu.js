export class menuMusic{
    constructor(node,categories){
        this.node=node;
        this.categories=categories;
        this.setMenu(categories);
    }

    static templateItemMenu(category){
        return(
            `<li class="music__menu-container">
                <button class="music__menu-button">${category}</button>
            </li>`
        )
    }

    setMenu(categories){
        const btnsCategories=categories.map(menuMusic.templateItemMenu).join('');
        this.node.innerHTML=btnsCategories;
    }
}