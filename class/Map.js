
import {Coordenate} from './Coordenate.js';
import {ctx} from '../index.js'
import  {ct}  from '../helpers/constants.js';
import {Wall} from './Wall.js';
import {Pacman} from './Pacman.js';

export class Map{

    constructor(pacman,map,sizeMap){

        this.map = map

        this.walls = [];
        this.enemies = [];
        this.items = [];
        this.pacman=pacman
        this.sizeMap = sizeMap;
        this.createMap();

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
     
        this.pacman.draw();
        this.map.forEach(e1 => {
            e1.forEach(e2 =>{

                if (e2!=0) e2.draw();

            } )
        })



    }

    createMap(){
       
        this.map=this.map.map((e1,posx) => {
           return e1.map((e2,posy) =>{

                switch (e2){

                    case 0: return 0;break;
                    case 1: return new Wall({x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},ct.COLOR_WALL)
                    case 2: return new Wall({x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},ct.COLOR_WALL)
                }

            } )
        })




    }

    pacmanCanMove(){

        this.walls.forEach(wall=>{

          


        if (this.pacman.speed.x>0){
            if (this.pacman.position.x+ct.UNIT_MAP>=wall.coords[0].x && this.pacman.position.y<wall.coords[2].y&&this.pacman.position.y+ct.UNIT_MAP>wall.coords[0].y && this.pacman.position.x<wall.coords[2].x){ this.pacman.speed.x=0; this.pacman.position.x=wall.coords[0].x-ct.UNIT_MAP;}
        
        }

        if (this.pacman.speed.x<0){
            if (this.pacman.position.x<=wall.coords[2].x && this.pacman.position.y<wall.coords[2].y&&this.pacman.position.y+ct.UNIT_MAP>wall.coords[0].y &&this.pacman.position.x+ct.UNIT_MAP>wall.coords[0].x ){ this.pacman.speed.x=0; this.pacman.position.x=wall.coords[2].x}
        }


        if (this.pacman.speed.y>0){
            if (this.pacman.position.y+ct.UNIT_MAP>=wall.coords[0].y && this.pacman.position.x<wall.coords[2].x&&this.pacman.position.x+ct.UNIT_MAP>wall.coords[0].x && this.pacman.position.y<wall.coords[2].y){ this.pacman.speed.y=0; this.pacman.position.y=wall.coords[0].y-ct.UNIT_MAP;}
        
        }


        if (this.pacman.speed.y<0){
            if (this.pacman.position.y<=wall.coords[2].y && this.pacman.position.x<wall.coords[2].x&&this.pacman.position.x+ct.UNIT_MAP>wall.coords[0].x &&this.pacman.position.y+ct.UNIT_MAP>wall.coords[0].y ){ this.pacman.speed.y=0; this.pacman.position.y=wall.coords[2].y}
        }


    })
        
      
   
    }

    pacmanCanTurn(){

        

    }

    ispacmanLimit(){

        if (this.pacman.position.x> this.sizeMap.width)

            this.pacman.position.x=-ct.UNIT_MAP;
        
        else if(this.pacman.position.x<-ct.UNIT_MAP)
        this.pacman.position.x=this.sizeMap.width;

        else if (this.pacman.position.y> this.sizeMap.height)
        this.pacman.position.y=-ct.UNIT_MAP;

        else if (this.pacman.position.y< -ct.UNIT_MAP)
        this.pacman.position.y=this.sizeMap.height;
    }


    }

