import { cardMusic } from '../card/card.js';

export class gridMusic {
    constructor(node, data) {
        this.node = node;
        this.data = data;

        this.setGrid(data, node);
    }

    setGrid(data) {

        const cards = data.map(function(x) {
            const aux = new cardMusic(x);
            const info = aux.templateCard();
            return info;
        }).join('');

        this.node.innerHTML = cards;
    }

    renovate(categorySelected){

        const cardsItems=this.node.querySelectorAll('.music__card')
        var i;
        
        if(categorySelected=="Reset"){
            for(i=0;i<cardsItems.length;i++){
                    cardsItems[i].classList.remove("music__card--invisible")
            }
        }
        else{
            for(i=0;i<cardsItems.length;i++){
                if(categorySelected!=cardsItems[i].querySelector('.music__card-category').textContent){
                    cardsItems[i].classList.add("music__card--invisible")
                }
                else{
                    cardsItems[i].classList.remove("music__card--invisible")
                }
            }
        }
    }


}