
import {Coordenate} from './Coordenate.js';
import {ctx} from '../index.js'
import  {ct,map}  from '../helpers/constants.js';
import {Wall} from './Wall.js';
import {Item} from './Item.js';
import {Pacman} from './Pacman.js';
import { Enemy } from './Enemy.js';


export class Map{

    constructor(sizeMap){

        this.map = Array(map.length).fill().map(()=>Array(map[0].length).fill());
        this.walls = [];
        this.enemies = [];
        this.items = [];
        this.pacman=null;
        this.sizeMap = sizeMap;
        this.enemy;
       
    }




    draw(){
     
      
        this.map.forEach(e1 => {
            e1.forEach(e2 =>{

                if (e2 instanceof Wall || e2 instanceof Item) e2.draw();

            } )
        })

        ctx.fillStyle = 'black';
        this.pacman.draw();
        this.enemy.draw();
        ctx.fillRect(19*ct.UNIT_MAP, 9*ct.UNIT_MAP, ct.UNIT_MAP, ct.UNIT_MAP);


    }

      createMap(){
       
        const promises=[]
        return new Promise (async (resolve) =>{





      

        new Pacman('../images/pacman-right.png',{x:ct.UNIT_MAP*9,y:ct.UNIT_MAP*19},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},{x:5,y:0},5,0,3).then(
            data=>{
                this.pacman=data;
            }
        )

        new Enemy('../images/enemy-1-right.png',{x:ct.UNIT_MAP*10,y:ct.UNIT_MAP*19},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},{x:5,y:0},5,0,3).then(
            data=>{
                this.enemy=data;
            }
        )
        
           map.forEach((e1,posx) => {
           return e1.forEach(async(e2,posy) =>{

                switch (e2){

                    
                    case 1: const wall = new Wall({x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},ct.COLOR_WALL)
                            promises.push( wall);
                            
                    break
                   
                    case 0: promises.push({});break;
                    case 3: const item2 = new Item ('../images/item2.png',{x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},500,"BIGBALL");
                        promises.push (item2); break;
                    case 2:  const item = new Item ('../images/item1.png',{x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},200,"SMALLBALL");
                            promises.push (item);
                           
                 
                            
                   
                    
                    
                    
                    
                }

            } )
        })
       

            Promise.all(promises).then (data=>{
                
                data.forEach( (element,index)=>{

                    this.map[Math.trunc(index/map[0].length)][index%map[0].length] = data[index]
                })
                
                
                resolve (this.map)
            })
          

         

    })  


    }


    characterCanMove(character){ // watch if there is wall in next movement

        var posx = Math.trunc( (character.position.x)/ct.UNIT_MAP)  
        var posy = Math.trunc(character.position.y/ct.UNIT_MAP)

      
        if (character.speed.x!=0){

            if (character.speed.x>0)
            var posx = Math.trunc( (character.position.x+ct.UNIT_MAP-1)/ct.UNIT_MAP)  

            else
            var posx = Math.trunc( (character.position.x-1)/ct.UNIT_MAP)  


            if (posx+1<this.map.length && posx-1>=0) {
            if ( (character.position.x%ct.UNIT_MAP==0  && this.map[posx+1][posy] instanceof Wall )|| ((character.position.x-1)%ct.UNIT_MAP<=5 && this.map[posx-1][posy] instanceof Wall) )                          {
            character.position.x=(posx)*ct.UNIT_MAP;
            character.speed.x=0;
            }
        }}

     
        else if  (character.speed.y!=0){

            if (character.speed.y>0)
            var posy = Math.trunc( (character.position.y+ct.UNIT_MAP-1)/ct.UNIT_MAP)  

            else 
                var posy = Math.trunc( (character.position.y-1)/ct.UNIT_MAP)  
    
            if (posy+1<this.map[0].length && posy-1>=0){
            if (((character.position.y+ct.UNIT_MAP-1)%ct.UNIT_MAP>=48 && this.map[posx][posy+1] instanceof Wall)||((character.position.y-1)%ct.UNIT_MAP<=5 && this.map[posx][posy-1] instanceof Wall)){
            character.position.y=(posy)*ct.UNIT_MAP;
            character.speed.y=0;
            }
        }}

  
    
        if (posx-1>=0 && posx+1<this.map.length && posy-1>=0 && posy+1<this.map[0].length )

        if (this.map[posx][posy] instanceof Item && character instanceof Pacman){
        

            this.pacman.points+= this.map[posx][posy].points;
            if (this.map[posx][posy].type=="BIGBALL") this.pacman.setOnFire();
            this.map[posx][posy]={}



        }
   
    }


    isPacmanLimit(){

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

