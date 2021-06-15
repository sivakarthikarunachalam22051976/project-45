class Ground{
    constructor(){
        var options={
            isStatic: true

        }

this.body=Bodies.rectangle(600,1200,1200,10,options)
World.add(alienworld,this.body)
    
}

    display(){
    var x=this.body.position.x
    var y=this.body.position.y
   rectMode(CENTER)
   rect(x,y,50,50)

    }


}