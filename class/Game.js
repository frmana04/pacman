
import { Pacman } from "./Pacman.js";
import { Map } from "./Map.js";
import {Wall} from "./Wall.js";
import  ct  from '../helpers/constants.js';
import { Coordenate } from './Coordenate.js';
import {ctx} from '../index.js';


export class Game {

    constructor(canvasSize){

        this.canvasSize = canvasSize;
        new Pacman('../images/pacman-right.png',{x:0,y:500},{width:ct.SIZE_IMAGE,height:ct.SIZE_IMAGE},{x:0,y:0},5,100,3).then((data)=>{
            this.pacman = data;
           this.init();
           this.map = new Map(this.pacman);
        })
       
    }

    init(){
        
        requestAnimationFrame(this.animate);         

    }

    moveAll(){

        this.map.pacmanCanMove(this.pacman)
        
            this.pacman.move();
       
    }

    listenKeydown(){
        document.onkeydown = (event)=> {
            console.log(event.keyCode)
            switch(event.keyCode){
           
                case ct.KEY_UP: this.pacman.keyUp(); break;
                case ct.KEY_DOWN: this.pacman.keyDown(); break;
                case ct.KEY_LEFT: this.pacman.keyLeft(); break;
                case ct.KEY_RIGHT: this.pacman.keyRight();
            }

        }
    }

  





    animate=()=>{
        this.listenKeydown();
        ctx.clearRect(0,0,this.canvasSize.width,this.canvasSize.height);
        this.moveAll();
        this.map.draw(); 
        requestAnimationFrame(this.animate);         
       
    }

   

}

