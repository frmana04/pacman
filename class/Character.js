
import {Element} from './Element.js'
import  {ct}  from '../helpers/constants.js'
import {ctx} from '../index.js'

export class Character extends Element{

    constructor(urlImage,position,size,speed,maxSpeed){
        super(urlImage,position,size);
        this.speed=speed;
        this.maxSpeed = maxSpeed;
    }

    move(){

        

    }

    draw(){

        // if(this.position.x%60>=0&&this.position.x%60<15)
        // ctx.drawImage(this.image,0, 0, ct.SIZE_IMAGE, ct.SIZE_IMAGE, this.position.x, this.position.y, ct.SIZE_IMAGE, ct.SIZE_IMAGE);


        // else if(this.position.x%60>=15&&this.position.x%60<30)
        // ctx.drawImage(this.image,32, 0, ct.SIZE_IMAGE, ct.SIZE_IMAGE, this.position.x, this.position.y, ct.SIZE_IMAGE, ct.SIZE_IMAGE);


        // else if(this.position.x%60>=30&&this.position.x%60<45)
        // ctx.drawImage(this.image,64, 0, ct.SIZE_IMAGE, ct.SIZE_IMAGE, this.position.x, this.position.y, ct.SIZE_IMAGE, ct.SIZE_IMAGE);


        // else if(this.position.x%60>=45&&this.position.x%60<60)
        // ctx.drawImage(this.image,96, 0, ct.SIZE_IMAGE, ct.SIZE_IMAGE, this.position.x, this.position.y, ct.SIZE_IMAGE, ct.SIZE_IMAGE);


        if (this.speed.x)
        ctx.drawImage(this.image, ct.SIZE_IMAGE*(this.position.x%(ct.SPEED_SPRITES*2) >= ct.SPEED_SPRITES), 0, ct.SIZE_IMAGE, ct.SIZE_IMAGE, this.position.x, this.position.y, ct.UNIT_MAP, ct.UNIT_MAP);

        else
        ctx.drawImage(this.image, ct.SIZE_IMAGE*(this.position.y%(ct.SPEED_SPRITES*2) >= ct.SPEED_SPRITES), 0, ct.SIZE_IMAGE, ct.SIZE_IMAGE, this.position.x, this.position.y, ct.UNIT_MAP, ct.UNIT_MAP);

        

    }

}