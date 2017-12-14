import data from './musicData.js';
import {menuMusic} from './menu/menu.js';

//new menuMusic(document.querySelector('.music'),data);

class Music{
    constructor(node,data){
        this.node=node;
        this.data=data;
        this.setMenu();
    }
    static get template(){
        return(
            `<ul class="music__menu"></ul>

            <ul class="music__card-grid"></ul>`
        )
    }

    setMenu(){
        this.node.innerHTML=Music.template;
    }
}

new Music(document.querySelector('.music'),data);