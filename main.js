let video;

function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL)
    video = createCapture(VIDEO)
}

function draw(){
    
    let mx = mouseX -width / 2;
    let my = mouseY - height / 2
    
    background(10)
    
    // stroke(255)
    noStroke();
    directionalLight(255,255,255 , 0 , frameCount*0.05 , 0)
    
    // directionalLight(255,255,255 , 0 , 0 , 200)
    
    // translate(mx,my)
    
    // rotateX(frameCount * 0.01)
    // rotateY(frameCount * 0.001)
    specularMaterial(255);
    
    // torus(i, 10);
    rotateY(mouseY * 0.02);
    rotateX(mouseX * 0.02);
    
        
        torus(60 , 10)

    specularMaterial(0,255,255);
    rotateX(frameCount * 0.05)
    rotateY(frameCount * 0.1)
    box(50 , 50 , 50);
}