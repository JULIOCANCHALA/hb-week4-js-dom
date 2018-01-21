export class cardMusic {
    constructor(dataCard) {
        this.dataCard = dataCard;
        this.node = this.createNode(dataCard);
        this.clicked()
    }

    createNode() {
        const templateCard =
            `<li class="music__card">
             <div class="music__card-container">
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
            console.log(event)
        })
    }

    /* templateCard() {
         return (
             `<li class="music__card">
             <div class="music__card-container">
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
         </li>`
         )
     }*/


}