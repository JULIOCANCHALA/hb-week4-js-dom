/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__musicData_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_menu_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_grid_js__ = __webpack_require__(3);





class Music {
    constructor(node, data) {
        this.node = node;
        this.menu;
        this.grid;
        // this.menu_list;
        // this.categorySelected;

        this.filterCategories(data);
        // this.getCategory(data);


    }

    static get templateMusic() {
        return (
            `<ul class="music__menu"></ul>
            <ul class="music__card-grid"></ul>`
        )
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
        this.setGrid(data);
        this.setMenu(categories);
    }

    settemplateMusic() {
        this.node.innerHTML = Music.templateMusic;
    }

    setMenu(categories) {
        this.menu = new __WEBPACK_IMPORTED_MODULE_1__menu_menu_js__["a" /* menuMusic */](this.node.querySelector('.music__menu'), categories, (categorySelected) => {
            // console.log(categorySelected+" on Music");
            this.grid.renovate(categorySelected);
        });
    }

    setGrid(data) {
        this.grid = new __WEBPACK_IMPORTED_MODULE_2__grid_grid_js__["a" /* gridMusic */](this.node.querySelector('.music__card-grid'), data);
    }
}


//console.log(data[0].name);
new Music(document.querySelector('.music'), __WEBPACK_IMPORTED_MODULE_0__musicData_js__["a" /* default */]); //this goes on the index.js

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
        name: 'Guns and Roses',
        category: 'Rock',
        imgUrl: 'https://pbs.twimg.com/profile_images/885491686327169024/ufh03Wmg_400x400.jpg',
        info: 'Guns and Roses es una banda estadounidense de hard rock formada en Hollywood en 1985. El grupo fue fundado por Axl Rose y el guitarrista rítmico Izzy Stradlin.​',
        origin: 'Los Angeles, California, U.S.',
        yearsActive: '1985–present',
        members: 'Slash, Axl Rose, Duff McKagan, Melissa Reese, ...',
    },

    {
        name: 'Iron Maiden',
        category: 'Rock',
        imgUrl: 'https://i2.wp.com/musictrajectory.com/wp-content/uploads/2011/08/iron-maiden-run-to-the-hills-single-cover.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'AC DC',
        category: 'Rock',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71pC173hqVL._SL1500_.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'Metallica',
        category: 'Rock',
        imgUrl: 'http://hello-georgia.com/files/news/117859639_1366089934.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'Led Zeppelin',
        category: 'Rock',
        imgUrl: 'https://cps-static.rovicorp.com/3/JPG_500/MI0003/942/MI0003942580.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'Eminem',
        category: 'Rap',
        imgUrl: 'http://images4.fanpop.com/image/photos/17800000/Eminem-and-D12-eminem-and-the-gang-17878613-632-713.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'Porta',
        category: 'Rap',
        imgUrl: 'http://mp3.hhgroups.com/albumes/Porta-En-boca-de-tantos-31776_front.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'Nach',
        category: 'Rap',
        imgUrl: 'http://www.nach.es/img/fondo_header.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'Canserbero',
        category: 'Rap',
        imgUrl: 'https://i.ytimg.com/vi/U6fYdzOJEyo/maxresdefault.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'The Wailers',
        category: 'Reggae',
        imgUrl: 'https://d31fr2pwly4c4s.cloudfront.net/c/6/a/1000509_0_the-wailers_1024.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'Bob Marley',
        category: 'Reggae',
        imgUrl: 'https://images.fineartamerica.com/images-medium-large-5/original-painting-bob-marley-enxu-zhou.jpg',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    },
    {
        name: 'Cultura Profética',
        category: 'Reggae',
        imgUrl: 'https://i.scdn.co/image/67303b156ab972a5aabdd10be88213163b40e8f3',
        info: '',
        origin: '',
        yearsActive: '',
        members: '',
    }
]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class menuMusic {
    constructor(node, categories,returnCategory) {
        this.node = node;
        this.categories = categories;
        this.returnCategory=returnCategory;

        this.setMenu(categories);
        this.setClick();

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
        // console.log(btnsCategories);
        this.node.innerHTML = btnsCategories;
    }

    setClick(){
        this.node.addEventListener('click',(btn)=>{
            if(btn.target.classList.contains('music__menu-button')){
                const categorySelected=btn.target.textContent
                this.returnCategory(categorySelected);
            }
        })
    }

/*     setClick() {
        this.node.addEventListener('click', function(x) {
            const btnSelected = x.target;
            if (btnSelected.classList.contains('music__menu-button')) {
                //console.log(btnSelected.textContent)
                return (btnSelected.textContent);
            }
        })
    } */

}
/* harmony export (immutable) */ __webpack_exports__["a"] = menuMusic;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_js__ = __webpack_require__(4);


class gridMusic {
    constructor(node, data) {
        this.node = node;
        this.data = data;
        this.setGrid(data, node);
        this.clicked();
    }

    clicked() {
        var i
        this.node.addEventListener('click', function(event) {
            if (event.target.classList.contains('music__card-grid')) {
                for (i = 0; i < this.data.length; i++) {
                    const idCard = ".".concat(this.data[i].name.toString().replace(/ /g, ""))
                    const card = this.node.querySelector(idCard)
                    card.classList.remove('music__card-container--rotated')
                }
            }
        }.bind(this))

    }

    setGrid(data) {

        /* const cards = data.map(function(x) {
             const aux = new cardMusic(x);
             const info = aux.templateCard();
             return info;
         }).join('');

         this.node.innerHTML = cards;*/


        const cards = data.map((dataCard) => {
            return new __WEBPACK_IMPORTED_MODULE_0__card_card_js__["a" /* cardMusic */](dataCard);
        })

        cards.forEach((card) => {
            this.node.appendChild(card.node);
        });


    }

    renovate(categorySelected) {

        const cardsItems = this.node.querySelectorAll('.music__card')
        var i;

        if (categorySelected == "Reset") {
            for (i = 0; i < cardsItems.length; i++) {
                cardsItems[i].classList.remove("music__card--invisible")
            }
        } else {
            for (i = 0; i < cardsItems.length; i++) {
                if (categorySelected != cardsItems[i].querySelector('.music__card-category').textContent) {
                    cardsItems[i].classList.add("music__card--invisible")
                } else {
                    cardsItems[i].classList.remove("music__card--invisible")
                }
            }
        }
        var i
        const cardsItemsContainer = this.node.querySelectorAll('.music__card-container')
        for (i = 0; i < cardsItemsContainer.length; i++) {
            cardsItemsContainer[i].classList.remove('music__card-container--rotated')
        }

    }


}
/* harmony export (immutable) */ __webpack_exports__["a"] = gridMusic;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class cardMusic {
    constructor(dataCard) {
        this.dataCard = dataCard;
        this.node = this.createNode(dataCard);
        this.clicked()
    }

    createNode() {
        const idCard = this.dataCard.name.toString().replace(/ /g, "");
        const templateCard =
            `<li class="music__card">
             <div class="music__card-container ${idCard}">
                 <div class="music__card-front">
                     <div class="music__card-info">
                         <div class="music__card-text">
                             <h2 class="music__card-name">${this.dataCard.name}</h2>
                             <h2 class="music__card-category">${this.dataCard.category}</h2>
                     </div>     
                         <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/adhesivos-discos-vinilo-personalizados-5655.png" class="music__card-disc" alt="disc image">
                         <img src="${this.dataCard.imgUrl}" class="music__card-img" alt="card image">
                     </div>              
                 </div>
                 <div class="music__card-back">
                     <img src="${this.dataCard.imgUrl}" class="music__card-img music__card-img--back" alt="card image">
                     <h2 class="music__card-back-summary">${this.dataCard.info}</h2>

                     <div class="music__card-back-contentInfo">
                         <h2 class="music__card-back-title">Origen: </h2>
                         <h2 class="music__card-back-data">${this.dataCard.origin}</h2>
                     </div>

                     <div class="music__card-back-contentInfo">
                         <h2 class="music__card-back-title">Actividad: </h2>
                         <h2 class="music__card-back-data">${this.dataCard.yearsActive}</h2>
                     </div>

                     <div class="music__card-back-contentInfo">
                         <h2 class="music__card-back-title">Miembros: </h2>
                         <h2 class="music__card-back-data">${this.dataCard.members}</h2>
                     </div>

                 </div>
             </div>
         </li>`;
        return this.DOM(templateCard)
    }

    DOM(template) {
        const domParser = new DOMParser();
        return domParser.parseFromString(template, 'text/html').body.children[0];
    }

    clicked() {

        this.node.addEventListener('click', (event) => {
            const idCard = ".".concat(this.dataCard.name.toString().replace(/ /g, ""))
            const card = this.node.querySelector(idCard)
            card.classList.toggle('music__card-container--rotated')
        })
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = cardMusic;


/***/ })
/******/ ]);