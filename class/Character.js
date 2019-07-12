import {Element} from './Element.js'

export class Character extends Element{

    constructor(urlImage,position,size,speed,maxSpeed){
        super(urlImage,position,size);
        this.speed=speed;
        this.maxSpeed = maxSpeed;
    }

    move(){


    }

}