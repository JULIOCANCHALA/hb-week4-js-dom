import urls from './gallery_images.js';

class Gallery {
    constructor(node, urls) {
            this.node = node
            this.urls = urls
            this.elements = {} //starts empty

            this.settemplate()
            this.setdots(urls)
            this.setimages(urls)
        }
        //Una propiedad o método estático no se duplica en cada objeto, sino que existe una única vez en memoria.


    //HTML to index
    static get templates() { //the static methods are called without instantiate the class
        return (
            `<ul class="gallery__images"></ul>
            
            <nav class="gallery__navrows">
                <button class="gallery__row gallery__row--left"><</button>
                <button class="gallery__row gallery__row--right">></button>
                </nav>
                
            <ul class="gallery__dot-container"></ul>`
        )
    }

    static get states() {
        return {
            imageselected: 'gallery__image--selected',
            buttonselected: ' gallery__dot-button--selected',
            arrowdiseble: 'gallery__row--disable'
        }
    }

    static imageofgallery({ url }) {
        return (
            `<li class="gallery__image-container">
                <img class="gallery__image" src="${url}" alt="Image of gallery">
            </li>`
        )
    }

    static dotofcontainer() {
        return (
            `<li class="gallery__dot">
                <button class="gallery__dot-button"></button>
            </li>`
        )
    }

    //functions for set HTML
    settemplate() {
        this.node.innerHTML = Gallery.templates;
        this.elements.images = this.node.querySelector('.gallery__images'); //add item for elements, container of images
        this.elements.leftrow = this.node.querySelector('.gallery__row--left');
        this.elements.right = this.node.querySelector('.gallery__row--right');
        this.elements.dotcontainer = this.node.querySelector('.gallery__dot-container');
    }

    setdots(urls) {
        const dots = urls.map(Gallery.dotofcontainer).join('');
        this.elements.dotcontainer.innerHTML = dots;
    }

    setimages(urls) {
        const images = urls.map(Gallery.imageofgallery).join('');
        this.elements.images.innerHTML = images;
    }




    //functions for dinamic gallery

    static cont($urls) {

    }

}

new Gallery(document.querySelector('.gallery'), urls)
Gallery.cont(urls);