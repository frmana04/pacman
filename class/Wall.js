
import {ctx} from '../index.js'

export class Wall {

    constructor(coords,color,lineWidth){

        
        this.coords =coords
        this.color=color
       
        this.lineWidth=lineWidth;
    }

    draw(){


        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;

        ctx.beginPath();
      
        ctx.moveTo(this.coords[0].x,this.coords[0].y);

        this.coords.forEach( coord =>{
            ctx.lineTo(coord.x,coord.y)
        })

        ctx.closePath();
        ctx.stroke();
    }

    isInnerCoord(point){

      
            return a.x < b.x + b.width &&
              a.x + a.width > b.x &&
              a.y < b.y + b.height &&
              a.y + a.height > b.y;
         


    }

   
    

 



}