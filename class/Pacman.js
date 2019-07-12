import  {Character}  from "./Character.js";


export class Pacman extends Character {

    constructor(urlImage,position,size,speed,maxSpeed,points,lifes){
        super(urlImage,position,size,speed,maxSpeed);
        this.points=points;
        this.lifes=lifes;
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


}