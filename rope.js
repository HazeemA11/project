
constructor (body1,body2,offsetX.offsetY)
{

this.offsetX=offsetX
this.offsetY=offsetY

var options={
bodyA:body1,
bodyB:body2,

pointB:{x:this.offsetX,y:this.offsetY}
}
this.rope=constraint.create(options)
World.add(world,this.rope)
rope=new rope (bobObject1.body,roofObject.body,-bobDiameter*2,0)
}
