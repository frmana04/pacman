import {createImage} from '../helpers/load-image.js'

export class Item {

    constructor(urlImage,points,position){

        this.points=points;

        this.position=position;

        const image=createImage(urlImage)
        .then(( image=>{ this.image=image
            console.log(this)}))
        .catch( err =>{console.log(err)})
    }
}

