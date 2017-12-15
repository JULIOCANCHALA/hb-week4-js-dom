import data from './musicData.js';
import {menuMusic} from './menu/menu.js';
import {gridMusic} from './grid/grid.js';

class Music{
    constructor(node,data){
        this.node=node;
        this.data=data;
        this.menu;
        this.grid;
        this.settemplateMusic(data);
    }
    static get templateMusic(){
        return(
            `<ul class="music__menu"></ul>
            <ul class="music__card-grid"></ul>`
        )
    }

    settemplateMusic(data){
        this.node.innerHTML=Music.templateMusic;
        this.menu=new menuMusic(document.querySelector('.music__menu'),data);
        this.grid=new gridMusic(document.querySelector('.music__card-grid'),data);
    }
}

new Music(document.querySelector('.music'),data);//this goes on the index.js