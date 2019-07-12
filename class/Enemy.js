import  {Character}  from "./Character.js";


export class Enemy extends Character {

    constructor(urlImage,position,size,speed,maxSpeed,type){
        super(urlImage,position,size,speed,maxSpeed);
        this.type=type;
    }

    die(){

    }
}