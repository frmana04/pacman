
import {Coordenate} from './Coordenate.js';
import {ctx} from '../index.js'
import  {ct,map}  from '../helpers/constants.js';
import {Wall} from './Wall.js';
import {Item} from './Item.js';
import {Pacman} from './Pacman.js';


export class Map{

    constructor(sizeMap){

        this.map = Array(map.length).fill().map(()=>Array(map[0].length).fill());
        this.walls = [];
        this.enemies = [];
        this.items = [];
        this.pacman=null;
        this.sizeMap = sizeMap;
       
    }




    draw(){
     
      
        this.map.forEach(e1 => {
            e1.forEach(e2 =>{

                if (e2 instanceof Wall || e2 instanceof Item) e2.draw();

            } )
        })

        ctx.fillStyle = 'black';
        ctx.fillRect(19*ct.UNIT_MAP, 9*ct.UNIT_MAP, ct.UNIT_MAP, ct.UNIT_MAP);
        this.pacman.draw();

    }

      createMap(){
       
        const promises=[]
        return new Promise (async (resolve) =>{





      

        new Pacman('../images/pacman-right.png',{x:ct.UNIT_MAP*9,y:ct.UNIT_MAP*19},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},{x:5,y:0},5,0,3).then(
            data=>{
                this.pacman=data;
            }
        )
        
           map.forEach((e1,posx) => {
           return e1.forEach(async(e2,posy) =>{

                switch (e2){

                    
                    case 1: const wall = new Wall({x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},ct.COLOR_WALL)
                            promises.push( wall);
                            
                    break
                   
                    case 0: promises.push({});break;
                    case 3: const item2 = new Item ('../images/item2.png',{x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},500)
                        promises.push (item2); break;
                    case 2:  const item = new Item ('../images/item1.png',{x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},200)
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


    pacmanCanMove(){

      

      
        if (this.pacman.speed.x>0){





            var posx = Math.trunc( (this.pacman.position.x+ct.UNIT_MAP-1)/ct.UNIT_MAP)  
            var posy = Math.trunc(this.pacman.position.y/ct.UNIT_MAP)
    

            if (posx+1<this.map.length) {
            if (this.pacman.position.x%ct.UNIT_MAP==0 && this.pacman.position.y%ct.UNIT_MAP==0 && this.map[posx+1][posy] instanceof Wall)                          {
            this.pacman.position.x=(posx)*ct.UNIT_MAP;
            this.pacman.speed.x=0;
            }
        }}

        else if (this.pacman.speed.x<0){

            var posx = Math.trunc( (this.pacman.position.x-1)/ct.UNIT_MAP)  
            var posy = Math.trunc(this.pacman.position.y/ct.UNIT_MAP)
    
            if (posx-1>=0) {
            if ((this.pacman.position.x-1)%ct.UNIT_MAP<=5 && this.map[posx-1][posy] instanceof Wall){
            this.pacman.position.x=(posx)*ct.UNIT_MAP;
            this.pacman.speed.x=0;
            }
        }}

        else if (this.pacman.speed.y>0){

            var posy = Math.trunc( (this.pacman.position.y+ct.UNIT_MAP-1)/ct.UNIT_MAP)  
            var posx = Math.trunc(this.pacman.position.x/ct.UNIT_MAP)
    
            if (posy+1<this.map[0].length){
            if ((this.pacman.position.y+ct.UNIT_MAP-1)%ct.UNIT_MAP>=48 && this.map[posx][posy+1] instanceof Wall){
            this.pacman.position.y=(posy)*ct.UNIT_MAP;
            this.pacman.speed.y=0;
            }
        }}

        else if (this.pacman.speed.y<0){

            var posy = Math.trunc( (this.pacman.position.y-1)/ct.UNIT_MAP)  
            var posx = Math.trunc(this.pacman.position.x/ct.UNIT_MAP)
    
            if (posy-1>=0){

            if ((this.pacman.position.y-1)%ct.UNIT_MAP<=5 && this.map[posx][posy-1] instanceof Wall){
            this.pacman.position.y=(posy)*ct.UNIT_MAP;
            this.pacman.speed.y=0;
            }
        }}
    
        else {
        
        var posx = Math.trunc( (this.pacman.position.x)/ct.UNIT_MAP)  
        var posy = Math.trunc(this.pacman.position.y/ct.UNIT_MAP)
        }
        if (posx-1>=0 && posx+1<this.map.length && posy-1>=0 && posy+1<this.map[0].length )

        if (this.map[posx][posy] instanceof Item){
        

            this.pacman.points+= this.map[posx][posy].points;
            if (this.map[posx][posy].points==500) this.pacman.toggleOnFire();
            this.map[posx][posy]={}



        }
   
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

