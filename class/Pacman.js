import  {Character}  from "./Character.js";
import {createImage} from '../helpers/load-image.js';




export class Pacman extends Character {

    constructor(urlImage,position,size,speed,maxSpeed,points,lifes){


        return (async ()=> {

            super(urlImage,position,size,speed,maxSpeed);
            this.points=points;
            this.lifes=lifes;
            this.image = await createImage(urlImage)
            this.onFire=false;
            return this;
        }) ()       
    }

    die(){

        this.lifes--;
    }
    
    isGameOver(){

        return this.lifes===0;
    }

    addPoints(points){

        this.points+=points
    }

    move(){


         this.position.x+=this.speed.x;
         this.position.y+=this.speed.y;

    }

    keyUp(){

        if (this.onFire)
        this.image.src='../images/pacman-up-fire.png'

        else
       this.image.src='../images/pacman-up.png'
       this.speed.y=-this.maxSpeed; 
       this.speed.x=0;
           
    }

    keyDown(){
        if (this.onFire)
        this.image.src='../images/pacman-down-fire.png'

        else
        this.image.src='../images/pacman-down.png'

        this.speed.y= this.maxSpeed; 
        this.speed.x=0;
    }

    keyLeft(){

        if (this.onFire)
       this.image.src='../images/pacman-left-fire.png'
       else
       this.image.src='../images/pacman-left.png'

       this.speed.x=-this.maxSpeed; 
       this.speed.y=0;
    }

    keyRight(){

        if (this.onFire)
        this.image.src='../images/pacman-right-fire.png'
        else
        this.image.src='../images/pacman-right.png'

        this.speed.x= this.maxSpeed; 
        this.speed.y=0;
    }

   toggleOnFire(){

    this.onFire=!this.onFire;

   }

}