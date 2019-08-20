
import { Pacman } from "./Pacman.js";
import { Map } from "./Map.js";
import {Wall} from "./Wall.js";
import  {ct,map}  from '../helpers/constants.js';
import { Coordenate } from './Coordenate.js';
import {ctx} from '../index.js';


export class Game {

    constructor(canvasSize){

        this.canvasSize = canvasSize;
      
            this.map = new Map({width:this.canvasSize.width-ct.UNIT_MAP*4,height:this.canvasSize.height})
            
            this.map.createMap().then(()=>{

                this.init();
            }) 
      

          

       
       
    }

    init(){
        
        requestAnimationFrame(this.animate);         

    }

    moveAll(){

            this.map.isPacmanLimit()
            this.map.characterCanMove(this.map.pacman)
            this.map.characterCanMove(this.map.enemy)

            this.map.pacman.move();
            this.map.enemy.move();

       

    }
    listenKeydown(){

        let direction;
        document.onkeydown = (event)=> {

            switch (event.keyCode){
                case ct.KEY_UP: direction = "UP"; break;
                case ct.KEY_DOWN: direction = "DOWN"; break;
                case ct.KEY_LEFT: direction = "LEFT"; break;
                case ct.KEY_RIGHT: direction = "RIGHT"; break;
            }
            this.handleMovement(this.map.pacman,direction)
        }
       

    }

    randomMovement(){

        let direction;
        const randomNumber=Math.floor(Math.random() * 3); 
        switch (randomNumber){
            case 0: direction = "UP"; break;
            case 1: direction = "DOWN"; break;
            case 2: direction = "LEFT"; break;
            case 3: direction = "RIGHT"; break;
        }
        this.handleMovement(this.map.enemy)

    }

    handleMovement(character,direction){

           

            let posx, posy;
            if (character.position.x%ct.UNIT_MAP<=4*ct.PACMAN_SPEED)
             posx = Math.trunc(character.position.x/ct.UNIT_MAP)  
            else             if (character.position.x%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED)
             posx = Math.trunc(character.position.x/ct.UNIT_MAP)  +1


            if (character.position.y%ct.UNIT_MAP<=4*ct.PACMAN_SPEED)
             posy = Math.trunc(character.position.y/ct.UNIT_MAP)  
            else             if (character.position.y%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED)
             posy = Math.trunc(character.position.y/ct.UNIT_MAP)  +1   

          

            switch(direction){
           

                case "UP":   
                
                if(((character.speed.x!=0 || (character.speed.x==0 &&character.speed.y==0)) && (character.position.x%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || character.position.x%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map.map[posx][posy-1] instanceof Wall) )||(  character.speed.y>0 )){
                
                if (character.speed.x!=0)
                character.position.x=posx*ct.UNIT_MAP;
                
                character.keyUp(); 
                }

                break;
                case "DOWN": 

                if(((character.speed.x!=0 ||(character.speed.x==0 &&character.speed.y==0)) && (character.position.x%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || character.position.x%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map.map[posx][posy+1] instanceof Wall) )||(character.speed.y<0)){
                
                if (character.speed.x!=0)

                character.position.x=posx*ct.UNIT_MAP;
                character.keyDown(); 
                }
                break;
                case "LEFT":

                 if(((character.speed.y!=0 ||(character.speed.x==0 &&character.speed.y==0)) && (character.position.y%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || character.position.y%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map.map[posx-1][posy] instanceof Wall ))||(character.speed.x>0)){
                    
                 if (character.speed.y!=0)

                 character.position.y=posy*ct.UNIT_MAP;
                 character.keyLeft(); 
                 }
                 break;

                case "RIGHT": 

                if(((character.speed.y!=0 ||(character.speed.x==0 &&character.speed.y==0)) && (character.position.y%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || character.position.y%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map.map[posx+1][posy] instanceof Wall) )||(character.speed.x<0)){

                if (character.speed.y!=0)

                character.position.y=posy*ct.UNIT_MAP;
                character.keyRight(); 
                }
              
            }

        
    }

  

drawInfo(){
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";

    ctx.fillText("Points:", this.canvasSize.width-ct.UNIT_MAP*3.5, 50);
    ctx.fillText(this.map.pacman.points, this.canvasSize.width-ct.UNIT_MAP*2, 50);

}

    animate=()=>{
        this.listenKeydown();
        this.randomMovement();
        ctx.clearRect(0,0,this.canvasSize.width,this.canvasSize.height);
        this.moveAll();
        this.map.draw(); 
        this.drawInfo();
        requestAnimationFrame(this.animate);         
       
    }

}

