
import {Coordenate} from './Coordenate.js';
import {ctx} from '../index.js'
export class Map{

    constructor(){

        this.walls = [];
        this.enemies = [];
        this.items = [];
        

    }

    drawWalls(){

     

    }

    drawEnemies(){

    }

    drawItems(){

    }

    draw(){
        this.drawEnemies();
        this.drawItems();
        this.drawWalls();
    }

    createWalls(){

        const coord1=new Coordenate(30,30);
        const coord2=new Coordenate(ctx.canvas.width-30,ctx.canvas.height-30); 
        ctx.drawFrame(coord1,coord2,15,'blue');
      
        const coord3=new Coordenate(100,100);
        const coord4=new Coordenate(300,300);
        ctx.drawFrame(coord3,coord4,5,'red');
      
        const coord5=new Coordenate(500,500);
        const coord6=new Coordenate(1000,600);
        const coord7=new Coordenate(700,800);
        const coord8=new Coordenate(500,600);
        ctx.drawT(coord5,coord6,coord7,coord8,5,'green');

    }

    }

