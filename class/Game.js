
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

            this.map.ispacmanLimit()
            this.map.pacmanCanMove()
            this.map.pacman.move();
       

    }

    listenKeydown(){
        document.onkeydown = (event)=> {

            let posx, posy;
            if (this.map.pacman.position.x%ct.UNIT_MAP<=4*ct.PACMAN_SPEED)
             posx = Math.trunc(this.map.pacman.position.x/ct.UNIT_MAP)  
            else             if (this.map.pacman.position.x%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED)
             posx = Math.trunc(this.map.pacman.position.x/ct.UNIT_MAP)  +1


            if (this.map.pacman.position.y%ct.UNIT_MAP<=4*ct.PACMAN_SPEED)
             posy = Math.trunc(this.map.pacman.position.y/ct.UNIT_MAP)  
            else             if (this.map.pacman.position.y%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED)
             posy = Math.trunc(this.map.pacman.position.y/ct.UNIT_MAP)  +1   

          
            switch(event.keyCode){
           




                case ct.KEY_UP:   
                
                if(((this.map.pacman.speed.x!=0 || (this.map.pacman.speed.x==0 &&this.map.pacman.speed.y==0)) && (this.map.pacman.position.x%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || this.map.pacman.position.x%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map.map[posx][posy-1] instanceof Wall) )||(  this.map.pacman.speed.y>0 )){
                
                if (this.map.pacman.speed.x!=0)
                this.map.pacman.position.x=posx*ct.UNIT_MAP;
                
                this.map.pacman.keyUp(); 
                }

                break;
                case ct.KEY_DOWN: 

                if(((this.map.pacman.speed.x!=0 ||(this.map.pacman.speed.x==0 &&this.map.pacman.speed.y==0)) && (this.map.pacman.position.x%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || this.map.pacman.position.x%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map.map[posx][posy+1] instanceof Wall) )||(this.map.pacman.speed.y<0)){
                
                if (this.map.pacman.speed.x!=0)

                this.map.pacman.position.x=posx*ct.UNIT_MAP;
                this.map.pacman.keyDown(); 
                }
                break;
                case ct.KEY_LEFT:

                 if(((this.map.pacman.speed.y!=0 ||(this.map.pacman.speed.x==0 &&this.map.pacman.speed.y==0)) && (this.map.pacman.position.y%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || this.map.pacman.position.y%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map.map[posx-1][posy] instanceof Wall ))||(this.map.pacman.speed.x>0)){
                    
                 if (this.map.pacman.speed.y!=0)

                 this.map.pacman.position.y=posy*ct.UNIT_MAP;
                 this.map.pacman.keyLeft(); 
                 }
                 break;
                case ct.KEY_RIGHT: 

                if(((this.map.pacman.speed.y!=0 ||(this.map.pacman.speed.x==0 &&this.map.pacman.speed.y==0)) && (this.map.pacman.position.y%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || this.map.pacman.position.y%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map.map[posx+1][posy] instanceof Wall) )||(this.map.pacman.speed.x<0)){

                if (this.map.pacman.speed.y!=0)

                this.map.pacman.position.y=posy*ct.UNIT_MAP;
                this.map.pacman.keyRight(); 
                }
              
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
        ctx.clearRect(0,0,this.canvasSize.width,this.canvasSize.height);
        this.moveAll();
        this.map.draw(); 
        this.drawInfo();
        requestAnimationFrame(this.animate);         
       
    }

}

