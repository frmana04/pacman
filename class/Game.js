import { Pacman } from "./Pacman.js";
import {ctx} from '../index.js';


export class Game {

    constructor(canvasSize){

        this.canvasSize = canvasSize;
        this.pacman = new Pacman('../images/pacman.png',{x:0,y:500},{width:30,height:30},{x:0,y:0},5,100,3);
    }

    init(){

        requestAnimationFrame(this.animate);         

    }


    animate=()=>{
        this.pacman.move();
        ctx.clearRect(0,0,this.canvasSize.width,this.canvasSize.height);
        this.pacman.draw(); 
        requestAnimationFrame(this.animate);         
        document.onkeydown = (event)=> {
            console.log(event.keyCode)
            switch(event.keyCode){
            case 38: this.pacman.speed.y=-2; this.pacman.speed.x=0; break;
            case 40: this.pacman.speed.y= 2; this.pacman.speed.x=0; break;
            case 37: this.pacman.speed.x=-2; this.pacman.speed.y=0; break;
            case 39: this.pacman.speed.x= 2; this.pacman.speed.y=0; break;
            }



        }
    }

   

}

