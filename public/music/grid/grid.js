import {cardMusic} from '../card/card.js'; 

export class gridMusic{
    constructor(node,data){
        this.node=node;
        this.data=data;
        this.card=[];


        this.setGrid(data);
    }

    setGrid(data){
        this.card[0]=new cardMusic(data[0]); 
        const a=this.card[0].templateCard(data[0].name,data[0].category,data[0].imgUrl)
        console.log(a);
    }
}