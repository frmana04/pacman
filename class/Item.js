import {createImage} from '../helpers/load-image.js'
import {ctx} from '../index.js'
import  constants  from '../helpers/constants.js'

export class Item {

    constructor(urlImage,points,position){

        this.points=points;

        this.position=position;

        this.image=createImage(urlImage)
        .then(( image=>{ this.image=image
            item.draw()
        }))
        .catch( err =>{console.log(err)})
    }

    draw() {
        
      //  ctx.drawImage(this.image,this.position.x,this.position.y,constants.SIZE_BLOCK,constants.SIZE_BLOCK,);

    }
}

