function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL)
}

function draw(){

    let mx = mouseX -width / 2;
    let my = mouseY - height / 2
    
    background(0)

    // stroke(255)
    noStroke();
    directionalLight(255,255,255 , mx , my , 0)

    // directionalLight(255,255,255 , 0 , 0 , 200)
    
    // translate(mx,my)

    rotateX(accelerationX * 0.01)
    rotateY(accelerationY * 0.001)

    specularMaterial(255);
    torus(100 , 20);

    fill(255)
    translate(mx,my)
    cone(20 , 30);
}