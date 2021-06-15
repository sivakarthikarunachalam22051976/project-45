class Robot{
    constructor(){
        var options={
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
            
        }

this.body=Bodies.rectangle(100,700,50,50,options)
World.add(alienworld,this.body)
    
}

    display(){
    var x=this.body.position.x
    var y=this.body.position.y
   rect(x,y,50,50)

    }


}