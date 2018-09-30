let video;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    video = createCapture(VIDEO)
    video.size(200, 200)
    video.elt.setAttribute('playsinline', '');
    video.hide()
}

function draw() {

    let mx = mouseX - width / 2;
    let my = mouseY - height / 2

    background(0)

    // stroke(255)
    noStroke();
    // directionalLight(255, 255, 255, 0, 200, 0)

    // directionalLight(255,255,255 , 0 , 0 , 200)

    // translate(mx,my)

    // rotateX(frameCount * 0.01)
    // rotateY(frameCount * 0.001)
    specularMaterial(255);
    
    specularMaterial(0, 255, 255);
    texture(video)
    rotateX(frameCount * 0.001)
    rotateY(frameCount * 0.05)
    rotateZ(frameCount * 0.05)
    box(200,200,200);
}