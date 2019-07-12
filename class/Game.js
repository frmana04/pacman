import { Pacman } from "./Pacman.js";
import {ctx} from '../index.js';


export class Game {

    constructor(){

        this.pacman = new Pacman('../images/pacman.png',{x:100,y:100},{width:30,height:30},{x:2,y:2},5,100,3);
    }

    init(){
        requestAnimationFrame(this.animate);         

    }


    animate=()=>{
        this.pacman.move();
        ctx.clearRect(0,0,window.outerHeight*0.7,window.outerWidth*0.7);
        this.pacman.draw(); 
        requestAnimationFrame(this.animate);         
     
    }

   

}

