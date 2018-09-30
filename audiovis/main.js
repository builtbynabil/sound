let song;

function preload() {
    song = loadSound("../../audio/song.mp3")
}

function setup() {
    amp = new p5.Amplitude()

    slider = createSlider(1,2.5,1,0.01)
    yslider = createSlider(1 , 300 , 30)
    
    createCanvas(windowWidth, windowHeight,WEBGL)
    song.play()
}

function draw() {

    perspective(slider.value())
    
    
    
    orbitControl();

    // MOVE GLOBALLY
    translate(0, yslider.value())
    
    directionalLight(0,0,0,200,0,0)
    
    background(0)

    noStroke()
    var level = amp.getLevel();
    var size = level*500
    
    translate(0,40)
    
    push()
    // fill(255)
    normalMaterial();
    box(100 , size , 100)
    pop()

    push();
    normalMaterial();
    translate(-150 , 0)
    // fill(255)
    box(100 , size*2 , 100)
    pop();
    
    push();
    normalMaterial();
    translate(150 , 0)
    // fill(255)
    box(100 , size*2 , 100)
    pop();
    
    for(var i = 0; i < 6; i ++){
        normalMaterial();
        push();
        translate(0 , -i * 200)
        sphere(size/10)
        pop();
    }

    fill(50)
    rotateX(90 + 90 + 10.1)
    plane(1000,1000)
}
