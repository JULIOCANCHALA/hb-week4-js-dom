import urls from './gallery_images.js';

class Gallery{
    constructor(node, urls){
        this.node=node;
        this.urls=urls;
    }
    //Una propiedad o método estático no se duplica en cada objeto, sino que existe una única vez en memoria.

    static get templates(){
        return{
            template:(
                `
                <ul class="gallery__images"></ul>
                
                <nav class="gallery__navrows">
                    <button class="gallery__row"><</button>
                    <button class="gallery__row">></button>
                 </nav>
                 
                 <ul class="gallery__dot-container"></ul>
                 `
            ),
            dot:(
                `<li class="gallery__dot">
                    <button class="gallery__dot-button"></button>
                </li>`
            )
        }
    }    

    static cont(urls){
        console.log(urls);
    }

}

new Gallery(document.querySelector('.gallery'), urls)
Gallery.cont(urls);

