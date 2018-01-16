import data from './musicData.js';
import { menuMusic } from './menu/menu.js';
import { gridMusic } from './grid/grid.js';

class Music {
    constructor(node, data) {
        this.node = node;
        this.menu;
        this.grid;
        this.menu_list;
        this.categorySelected;

        this.filterCategories(data);
        this.getCategory(data);

    }

    static get templateMusic() {
        return (
            `<ul class="music__menu"></ul>
            <ul class="music__card-grid"></ul>`
        )
    }

    settemplateMusic() {
        this.node.innerHTML = Music.templateMusic;
        //this.grid=new gridMusic(this.node.querySelector('.music__card-grid'),data);     
    }

    setMenu(categories) {
        this.menu = new menuMusic(this.node.querySelector('.music__menu'), categories);
    }

    setGrid(data) {
        this.grid = new gridMusic(this.node.querySelector('.music__card-grid'), data);
    }

    filterCategories(data) {
        data = data.sort(function() { return Math.random() - 0.5 });
        const categoriesFull = data.map(function(x) {
            return (x.category);
        });
        const categories = categoriesFull.filter(function(item, pos) {
            return categoriesFull.indexOf(item) == pos;
        })
        this.settemplateMusic();
        this.setMenu(categories);
        this.setGrid(data);
    }

    getCategory(data) {
        this.menu_list = this.node.querySelector('.music__menu');
        this.menu_list.addEventListener('click', function(btn) {
            if (btn.target.classList.contains('music__menu-button')) {
                const categorySelected = btn.target.textContent;
                this.renovateGrid(categorySelected, data);
                //console.log(categorySelected);
            }
        }.bind(this))
    }

    renovateGrid(categorySelected, data) {
        const data_filter = data.filter(function(info) {
            if (categorySelected == info.category) {
                return info
            }
        })
        if (categorySelected == 'Reset') {
            this.setGrid(data);
        } else {
            this.setGrid(data_filter);
        }

    }





}

new Music(document.querySelector('.music'), data); //this goes on the index.js