class Alien{
    constructor(){
        var options={
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
            
        }
 
         this.image=loadImage('alien7.gif')

this.body=Bodies.rectangle(600,200,50,50,options)
World.add(alienworld,this.body)


    
}

    display(){
    var pos=this.body.position
    
   image(this.image,x,y,50,50)

   if(keyIsDown("LEFT_ARROW")){
   pos.x=pos.x-5    
   }
    }


}