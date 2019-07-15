
import  constants  from './helpers/constants.js'
import {extendCanvas} from './helpers/extend-canvas.js'
import { Game } from './class/Game.js';

const height = window.outerHeight*0.7;
const width = window.outerWidth*0.7;
 document.querySelector(`#${constants.CANVAS_ID}`).setAttribute('height',height); 
 document.querySelector(`#${constants.CANVAS_ID}`).setAttribute('width',width) ;
const ctx = document.getElementById(constants.CANVAS_ID).getContext('2d');

extendCanvas(ctx);
console.log(ctx)


const game = new Game({width,height});




export { ctx };