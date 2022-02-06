var bg,s,g,gg,cg,c,eb,e,r,score=0,gamestate=0,ib,pb,bg1,pl,lb,star,rb,nl,hl
function preload(){
bg1=loadImage("hh.jpg")
hl=loadImage("halo.jpg")
pb=loadImage("play.png")
ib=loadImage("windows.png")
bg=loadImage("hbg.png")
g=loadImage("p.png")
ss=loadAnimation("s1.png","s2.png","s3.png","s4.png","s3.png","s2.png","s1.png")
star=loadImage("ssss.png")
cc=loadImage("tii.png")
eb=loadImage("eg.png")
e=loadImage("e.png")
r=loadAnimation("image/Run__000.png","image/Run__001.png","image/Run__002.png","image/Run__003.png","image/Run__004.png","image/Run__005.png","image/Run__006.png","image/Run__007.png","image/Run__008.png","image/Run__009.png",)
rs=loadImage("h.png")
rj=loadAnimation("image2/Jump__000.png","image2/Jump__001.png","image2/Jump__002.png","image2/Jump__003.png","image2/Jump__004.png","image2/Jump__005.png","image2/Jump__006.png","image2/Jump__007.png","image2/Jump__008.png","image2/Jump__009.png")
lb=loadImage("wb.png")
}


function setup(){
createCanvas(1000,600)
s=createSprite(100,0,30,100)
s.addAnimation("stop", rs)
s.addAnimation("jump",rj)
s.addAnimation("moving",r)
s.scale=0.2
rb=createSprite(400,420,50,50)
nl=createSprite(600,420,50,50)
gg= new Group()
cg= new Group()
s.collide(gg)
makeGroundSprites()
makecoinSprites()

}
function draw(){
   console.log(camera.position)
background(220)
if(gamestate==0){
image(bg1,0,0,1000,600)
image(ib,150,50,650,450)
textSize(25)
stroke("black")
strokeWeight(4)
fill("#E6D099")
text("INSTRUCTIONS",400,90)
text("1. collect all stars\n2.gameover on falling into\n the firey pit\n3. press space bar to jump\n4.press right arrow key to\n move forward ",280,200)
fill("#E6D099")
stroke("black")
strokeWeight(10)
textSize(50)
text("PLAY",430,450)
mousePressedOn()

}

if(gamestate==1){ 
s.visible=true
nl.visible=false
rb.visible=false
image(bg,0,0,3980,height)
image(eb,camera.position.x-100,50,250,50)
if(score!=0)
image(e,camera.position.x-50,51,(score/10)*50,48)
textSize(30)
fill("white")
//text(s.x+","+s.y,s.x,s.y-100)
//text(mouseX+","+mouseY,mouseX,mouseY)
s.velocityX=0
if(keyDown("left")){
s.changeAnimation("moving")
s.velocityX=-7    
}
if(keyDown("right")){
s.changeAnimation("moving")
s.velocityX=7    
 }
if(keyDown("space")){
s.changeAnimation("jump")
s.velocityY=-10   
}
if(s.x>3800){
    gamestate=2
}

s.velocityY+=0.5
if(s.x<3015)
camera.position.x=s.x+470
s.collide(gg)
if(s.overlap(cg,callback)){
 score+=1  

}
if(score==5){

}
drawSprites()

}
else if(gamestate==2){
    
image(hl,0,0,1000,600)
s.visible=false
cg.destroyEach()    
imageMode(CENTER)
image(lb,width/2,height/2,400,400)
textSize(30)
//stroke("black")
//strokeWeight(2)
camera.position.x=500
camera.position.y=300
fill("black")
textFont("impact")
text("LEADERBOARD",395,85)
if(score>=20)
image(star,430,260,70,70)
if(score>=10)
image(star,500,200,70,70)
if(score>=30)
image(star,560,260,70,70)
if(mouseIsOver(rb)&&mouseWentDown("leftButton")){
gamestate=1
}
if(mouseIsOver(nl)&&mouseWentDown("leftButton")){
    gamestate=3
    }
drawSprites()
}
textSize(25)
//text(mouseX+","+mouseY,mouseX,mouseY)
//text("score"+score,camera.position.x,50)
}
function mousePressedOn(){
    console.log(mouseX,mouseY)
if(mouseX>=300&&mouseX<=700&&mouseY>=390&&mouseY<=470){
    console.log(true)
    gamestate=1
}

}
