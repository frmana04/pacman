
import {Coordenate} from './Coordenate.js';
import {ctx} from '../index.js'
import  ct  from '../helpers/constants.js';
import {Wall} from './Wall.js';
import {Pacman} from './Pacman.js';

export class Map{

    constructor(pacman,sizeMap){

        this.walls = [];
        this.enemies = [];
        this.items = [];
        this.createWalls();
        this.pacman=pacman
        this.sizeMap = sizeMap;

    }

    drawWalls(){

        this.walls.forEach(wall=>{

            wall.draw();

       })
     

    }

    drawPacman(){
        this.pacman.draw();
    }

    drawEnemies(){

    }

    drawItems(){

    }

    draw(){
      this.drawWalls();
      this.drawPacman()
    }

    createWalls(){

        const wall1 = new Wall([{x:450,y:200},{x:800,y:200},{x:800,y:300},{x:450,y:300},],'red',5);
        const wall2 = new Wall([{x:850,y:500},{x:900,y:500},{x:900,y:900},{x:850,y:900},],'blue',5);
        this.walls.push(wall1,wall2);

    }

    pacmanCanMove(){

        this.walls.forEach(wall=>{

          


        if (this.pacman.speed.x>0){
            if (this.pacman.position.x+ct.SIZE_IMAGE>=wall.coords[0].x && this.pacman.position.y<wall.coords[2].y&&this.pacman.position.y+ct.SIZE_IMAGE>wall.coords[0].y && this.pacman.position.x<wall.coords[2].x){ this.pacman.speed.x=0; this.pacman.position.x=wall.coords[0].x-ct.SIZE_IMAGE;}
        
        }

        if (this.pacman.speed.x<0){
            if (this.pacman.position.x<=wall.coords[2].x && this.pacman.position.y<wall.coords[2].y&&this.pacman.position.y+ct.SIZE_IMAGE>wall.coords[0].y &&this.pacman.position.x+ct.SIZE_IMAGE>wall.coords[0].x ){ this.pacman.speed.x=0; this.pacman.position.x=wall.coords[2].x}
        }


        if (this.pacman.speed.y>0){
            if (this.pacman.position.y+ct.SIZE_IMAGE>=wall.coords[0].y && this.pacman.position.x<wall.coords[2].x&&this.pacman.position.x+ct.SIZE_IMAGE>wall.coords[0].x && this.pacman.position.y<wall.coords[2].y){ this.pacman.speed.y=0; this.pacman.position.y=wall.coords[0].y-ct.SIZE_IMAGE;}
        
        }


        if (this.pacman.speed.y<0){
            if (this.pacman.position.y<=wall.coords[2].y && this.pacman.position.x<wall.coords[2].x&&this.pacman.position.x+ct.SIZE_IMAGE>wall.coords[0].x &&this.pacman.position.y+ct.SIZE_IMAGE>wall.coords[0].y ){ this.pacman.speed.y=0; this.pacman.position.y=wall.coords[2].y}
        }


    })
        
      
   
    }

    ispacmanLimit(){

        if (this.pacman.position.x> this.sizeMap.width)

            this.pacman.position.x=-ct.SIZE_IMAGE;
        
        else if(this.pacman.position.x<-ct.SIZE_IMAGE)
        this.pacman.position.x=this.sizeMap.width;

        else if (this.pacman.position.y> this.sizeMap.height)
        this.pacman.position.y=-ct.SIZE_IMAGE;

        else if (this.pacman.position.y< -ct.SIZE_IMAGE)
        this.pacman.position.y=this.sizeMap.height;
    }


    }

