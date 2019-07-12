import {createImage} from '../helpers/load-image.js';
import {ctx} from '../index.js';

export class Element {

    constructor(urlImage,position,size){


        this.position = position;
        this.size = size;
        this.image = createImage(urlImage)
        .then(( image=>{ this.image=image
            this.draw()
        }))
        .catch( err =>{console.log(err)})
    }

    draw() {
        
        ctx.drawImage(this.image,this.position.x,this.position.y,this.size.width,this.size.height);      
    }

}