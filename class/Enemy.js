import  {Character}  from "./Character.js";


export class Enemy extends Character {



    constructor(urlImage,position,size,speed,maxSpeed,type){


        return (async ()=> {

            super(urlImage,position,size,speed,maxSpeed);
            this.type=type;
            this.image = await createImage(urlImage);
            return this;
        }) ()       
    }


    die(){

    }

    goUp(){

        this.direction="UP";
        if (this.onFire)
        this.image.src=`../images/enemy${this.type}-up-fire.png`

        else
       this.image.src=`../images/enemy${this.type}-up.png`
       this.speed.y=-this.maxSpeed; 
       this.speed.x=0;
           
    }

    goDown(){
        this.direction="DOWN";
        if (this.onFire)
        this.image.src=`../images/enemy${this.type}-down-fire.png`

        else
        this.image.src=`../images/enemy${this.type}-down.png`

        this.speed.y= this.maxSpeed; 
        this.speed.x=0;
    }

    goLeft(){

        this.direction="LEFT";
        if (this.onFire)
       this.image.src=`../images/enemy${this.type}-left-fire.png`
       else
       this.image.src=`../images/enemy${this.type}-left.png`

       this.speed.x=-this.maxSpeed; 
       this.speed.y=0;
    }

    goRight(){

        this.direction="RIGHT";
        if (this.onFire)
        this.image.src=`../images/enemy${this.type}-right-fire.png`
        else
        this.image.src=`../images/enemy${this.type}-right.png`

        this.speed.x= this.maxSpeed; 
        this.speed.y=0;
    }
}