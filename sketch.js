let r = 15
let points = 0
let timer = 10

function setup() {
  createCanvas(1536, 690);
  ball = createVector(
    random(r, width - r),
    random(r, height - r))
}

function draw() {
  background(255, 204, 0);
  textSize(20)
  text(points, 20, 30)
  let c = color(175, 100, 220);
  fill(c)
  player = createVector(mouseX, mouseY)
  ellipse(ball.x, ball.y, r*2)
  if(timer > 0 && points <1)
  {
  textStyle(BOLDITALIC)
  textAlign(LEFT)
  textSize(50)
  text("START" , width/2 , height/2)
  }
  
  if (timer > 0 && points > 0){
  timer -= 1/60  
  }
  
  
  let len = map(timer, 0, 10, 0, 200)
  rect(15, 50, 20, len)

  if (timer < 0){
    noLoop()
    textStyle(BOLDITALIC)
    textAlign(CENTER)
    textSize(50)
    text("FINISH", width/2, height/2)
  }
  
}

function mousePressed(){
  let d = p5.Vector.dist(player, ball)
    if (d < r){
      ball = createVector(
    random(r, width - r),
    random(r, height - r))
      points++
      if (points > 1){
      timer+= 0.5  
      }
      
  }
}