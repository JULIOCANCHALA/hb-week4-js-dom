import { cardMusic } from '../card/card.js';

export class gridMusic {
    constructor(node, data) {
        this.node = node;
        this.data = data;
        this.card = [];
        this.card_list;

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


}