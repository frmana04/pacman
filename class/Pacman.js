import  {Character}  from "./Character.js";
import {createImage} from '../helpers/load-image.js';
import  {ct}  from '../helpers/constants.js';




export class Pacman extends Character {

    constructor(urlImage,position,size,speed,maxSpeed,points,lifes){


        return (async ()=> {

            super(urlImage,position,size,speed,maxSpeed);
            this.points=points;
            this.lifes=lifes;
            this.image = await createImage(urlImage);
            return this;
        }) ()       
    }

    die(){

        this.lifes--;
    }
    
  

    addPoints(points){

        this.points+=points
    }

    move(){


         this.position.x+=this.speed.x;
         this.position.y+=this.speed.y;

    }

    keyUp(){

        this.direction="UP";
        if (this.onFire)
        this.image.src='../images/pacman-up-fire.png'

        else
       this.image.src='../images/pacman-up.png'
       this.speed.y=-this.maxSpeed; 
       this.speed.x=0;
           
    }

    keyDown(){
        this.direction="DOWN";
        if (this.onFire)
        this.image.src='../images/pacman-down-fire.png'

        else
        this.image.src='../images/pacman-down.png'

        this.speed.y= this.maxSpeed; 
        this.speed.x=0;
    }

    keyLeft(){

        this.direction="LEFT";
        if (this.onFire)
       this.image.src='../images/pacman-left-fire.png'
       else
       this.image.src='../images/pacman-left.png'

       this.speed.x=-this.maxSpeed; 
       this.speed.y=0;
    }

    keyRight(){

        this.direction="RIGHT";
        if (this.onFire)
        this.image.src='../images/pacman-right-fire.png'
        else
        this.image.src='../images/pacman-right.png'

        this.speed.x= this.maxSpeed; 
        this.speed.y=0;
    }

   setOnFire(){

    this.onFire++;

    this._setImageDirection()
        setTimeout(()=>{

            this.onFire--;
            this._setImageDirection()


        },ct.TIME_ONFIRE)
    
      

   }

   _setImageDirection(){

    let dir = ""
    if (this.onFire) dir="-fire";
    switch (this.direction){

        case "UP": this.image.src=`../images/pacman-up${dir}.png`;break;
        case "DOWN": this.image.src=`../images/pacman-down${dir}.png`;break;
        case "LEFT": this.image.src=`../images/pacman-left${dir}.png`;break;
        case "RIGHT": this.image.src=`../images/pacman-right${dir}.png`;break;


    }

}

}