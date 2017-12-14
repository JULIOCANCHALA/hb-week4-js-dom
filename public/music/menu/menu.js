export class menuMusic{
    constructor(node,categories){
        this.node=node;
        this.categories=categories;
        this.setMenu();
    }
    static get templateMenu(){
        return(
            `<ul class="music__menu">
            </ul>`
        )
    }

    setMenu(){
        this.node.innerHTML=menuMusic.templateMenu;
        console.log("Hola");
    }
}