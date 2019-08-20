import {createImage} from '../helpers/load-image.js';

export class Element {

    constructor(urlImage,position,size){


        this.position = position;
        this.size = size;
        this.image = createImage(urlImage)
        .then(( image=>{ this.image=image
         
        }))
        .catch( err =>{console.log(err)})
    }

    draw() {
        // ctx.drawImage(this.image, 30*(this.position.x%(ct.SPEED_SPRITES*2) >= ct.SPEED_SPRITES), 0, ct.SIZE_IMAGE, ct.SIZE_IMAGE, this.position.x, this.position.y, ct.SIZE_IMAGE, ct.SIZE_IMAGE);
    }

}