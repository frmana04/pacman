import {ctx} from '../index.js';
import { Coordenate } from '../class/Coordenate.js';

export function extendCanvas(ctx){
    
console.log(ctx)
    
    
      ctx.drawLine =  (init,end,width,color)=>{
    
        if (color) ctx.strokeStyle = color;
        if (width) ctx.lineWidth = width;
    
        ctx.moveTo(init.x,init.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      
      }
    
     ctx.drawFrame = function (init,end,width,color){
    
    
      ctx.beginPath();
      if (color) ctx.strokeStyle = color;
      if (width) ctx.lineWidth = width;
      ctx.moveTo(init.x,init.y);
      ctx.lineTo(end.x,init.y);
      ctx.lineTo(end.x,end.y);  
      ctx.lineTo(init.x,end.y);  
      ctx.closePath();
      ctx.stroke();
    
      
    
      }
    
    ctx.drawT =  function (coord1,coord2,coord3,coord4,width,color){
    
        ctx.beginPath();
        if (color) ctx.strokeStyle = color;
        if (width) ctx.lineWidth = width;
        ctx.moveTo(coord1.x,coord1.y);
        ctx.lineTo(coord2.x,coord1.y);
        ctx.lineTo(coord2.x,coord2.y);
        ctx.lineTo(coord3.x,coord2.y);
        ctx.lineTo(coord3.x,coord3.y);
        ctx.lineTo(coord4.x,coord3.y);
        ctx.lineTo(coord4.x,coord4.y);
        ctx.lineTo(coord1.x,coord4.y);
        ctx.closePath();
        ctx.stroke();
    
      }
    
    
    
    
      
      
    }