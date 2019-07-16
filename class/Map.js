
import {Coordenate} from './Coordenate.js';
import {ctx} from '../index.js'
import  ct  from '../helpers/constants.js';
import {Wall} from './Wall.js';
export class Map{

    constructor(pacman){

        this.walls = [];
        this.enemies = [];
        this.items = [];
        this.createWalls();
        this.pacman=pacman

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

    pacmanCanMove(pacman){

        this.walls.forEach(wall=>{

          


        if (pacman.speed.x>0){
            if (pacman.position.x+ct.SIZE_IMAGE>wall.coords[0].x && pacman.position.y<wall.coords[2].y&&pacman.position.y+ct.SIZE_IMAGE>wall.coords[0].y && pacman.position.x<wall.coords[2].x){ pacman.speed.x=0; pacman.position.x=wall.coords[0].x-ct.SIZE_IMAGE;}
        
        }

        if (pacman.speed.x<0){
            if (pacman.position.x<wall.coords[2].x && pacman.position.y<wall.coords[2].y&&pacman.position.y+ct.SIZE_IMAGE>wall.coords[0].y &&pacman.position.x+ct.SIZE_IMAGE>wall.coords[0].x ){ pacman.speed.x=0; pacman.position.x=wall.coords[2].x}
        }


        if (pacman.speed.y>0){
            if (pacman.position.y+ct.SIZE_IMAGE>wall.coords[0].y && pacman.position.x<wall.coords[2].x&&pacman.position.x+ct.SIZE_IMAGE>wall.coords[0].x && pacman.position.y<wall.coords[2].y){ pacman.speed.y=0; pacman.position.y=wall.coords[0].y-ct.SIZE_IMAGE;}
        
        }


        if (pacman.speed.y<0){
            if (pacman.position.y<wall.coords[2].y && pacman.position.x<wall.coords[2].x&&pacman.position.x+ct.SIZE_IMAGE>wall.coords[0].x &&pacman.position.y+ct.SIZE_IMAGE>wall.coords[0].y ){ pacman.speed.y=0; pacman.position.y=wall.coords[2].y}
        }


    })
        
      
   
    }



    }

