function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL)
}

function draw(){
    background(0)
    translate(mouseX - width/2 , mouseY - height/2)
    rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.05)
    box(50 , 50 , 200);
}