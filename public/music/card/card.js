export class cardMusic {
    constructor(dataCard) {
        this.dataCard = dataCard;

    }

    templateCard() {
        return (
            `<li class="music__card">
            <div class="music__card-info">
                    <h2 class="music__card-name">${this.dataCard.name}</h2>
                    <h2 class="music__card-category">${this.dataCard.category}</h2>
            </div>
            <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/adhesivos-discos-vinilo-personalizados-5655.png" class="music__card-disc" alt="disc image">
            <img src="${this.dataCard.imgUrl}" class="music__card-img" alt="card image">
        </li>`
        )
    }


}