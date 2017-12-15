import data from './musicData.js';
import {menuMusic} from './menu/menu.js';
import {gridMusic} from './grid/grid.js';

class Music{
    constructor(node,data){
        this.node=node;
        this.data=data;
        this.menu;
        this.grid;

        this.filterCategories(data);
        
    }
    static get templateMusic(){
        return(
            `<ul class="music__menu"></ul>
            <ul class="music__card-grid"></ul>`
        )
    }

    settemplateMusic(){
        this.node.innerHTML=Music.templateMusic;
        //this.grid=new gridMusic(this.node.querySelector('.music__card-grid'),data);     
    }

    setMenu(categories){
        this.menu=new menuMusic(this.node.querySelector('.music__menu'),categories);
    }
    setGrid(data){
        this.grid=new gridMusic(this.node.querySelector('.music__card-grid'),data);
    }

    filterCategories(data){
       const categoriesFull=data.map(function(x){
           return(x.category);
       });
       const categories=categoriesFull.filter(function(item,pos){
           return categoriesFull.indexOf(item)==pos;
       })
       this.settemplateMusic();
       this.setMenu(categories);
       this.setGrid(data);
    }


}

new Music(document.querySelector('.music'),data);//this goes on the index.js