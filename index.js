
import  {ct}  from './helpers/constants.js'
import { Game } from './class/Game.js';


if (window.outerHeight<window.outerWidth){

const coef = ct.PACMAN_SPEED*ct.ROWS;
var height = Math.trunc(window.outerHeight*0.8/coef)*coef;

ct.UNIT_MAP =  height/21;
var width = ct.UNIT_MAP*19+4*ct.UNIT_MAP;
}

else {
    var width = Math.trunc(window.outerWidth*0.8/19)*19;
    ct.UNIT_MAP =  width/19;
    var height = Math.trunc(window.outerHeight*0.8/21)*21;
    width+=4*ct.UNIT_MAP

}


 document.querySelector(`#${ct.CANVAS_ID}`).setAttribute('height',height); 
 document.querySelector(`#${ct.CANVAS_ID}`).setAttribute('width',width) ;
const ctx = document.getElementById(ct.CANVAS_ID).getContext('2d');



const game = new Game({width,height});




export { ctx };