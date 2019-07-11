import { Item } from './class/Item.js';
import  constants  from './helpers/constants.js'
import { Coordenate } from './class/Coordenate.js';


document.querySelector(`#${constants.CANVAS_ID}`).setAttribute('height',window.outerHeight*0.7); 
document.querySelector(`#${constants.CANVAS_ID}`).setAttribute('width',window.outerWidth*0.7) ;
const ctx = document.getElementById(constants.CANVAS_ID).getContext('2d');

ctx.beginPath();
ctx.strokeStyle = 'blue';


  function drawLine(init,end,width,color){

    if (color) ctx.strokeStyle = color;
    if (width) ctx.lineWidth = width;

    ctx.moveTo(init.x,init.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  
  }

  function drawFrame(init,end,width,color){


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

  function drawT(coord1,coord2,coord3,coord4,width,color){

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




  const coord1=new Coordenate(30,30);
  const coord2=new Coordenate(ctx.canvas.width-30,ctx.canvas.height-30); 
  drawFrame(coord1,coord2,15,'blue');

  const coord3=new Coordenate(100,100);
  const coord4=new Coordenate(300,300);
  drawFrame(coord3,coord4,5,'red');

  const coord5=new Coordenate(500,500);
  const coord6=new Coordenate(1000,600);
  const coord7=new Coordenate(700,800);
  const coord8=new Coordenate(500,600);
  drawT(coord5,coord6,coord7,coord8,5,'green');


export { ctx };