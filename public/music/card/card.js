export class cardMusic{
    constructor(dataCard){
        this.dataCard=dataCard;

        this.setCard(dataCard);
    }

    templateCard(Name, Category, src){
        return(
            `<li class="music__card">
            <div class="music__card-info">
                    <h2 class="music__card-name">${Name}</h2>
                    <h2 class="music__card-category">${Category}</h2>
            </div>
            <img src="${src}" class="music__card-img" alt="card image">
        </li>`
        )
    }

    setCard(dataCard){

        //console.log(dataCard);

    }



}