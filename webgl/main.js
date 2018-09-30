let canvas;

function preload() {
    song = loadSound("../audio/song.mp3")

}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL)

    amplitude = new p5.Amplitude();
    // canvas.style('z-index' , '-1')
    song.play();

    pause = select(".pause")
    play = select(".play")

    // song.jump(slider.value())
}

function draw() {
    
    var radius = width * 1.5;

    orbitControl();
    background(0)

    directionalLight(0, 0, 0, 0, 200, 0)

    // ROTATING EVERYTHING
    rtt = frameCount * 0.005
    rotateX(rtt)
    rotateY(rtt)
    rotateZ(rtt)

    normalMaterial()
    boxsize = 250 + frameCount * -1;
    // boxsize = 50;

    var level = amplitude.getLevel();
    boxsize = level * 200

    push()

    newrtt = frameCount * 0.01;
    
    rotateX(newrtt)
    rotateY(newrtt)
    rotateZ(newrtt)

    box(boxsize, boxsize, boxsize)

    pop()

    push()

    newrtt = frameCount * 0.01;

    rotateX(newrtt)
    rotateY(newrtt)
    rotateZ(newrtt)

    translate(300 , 0)
    sphere(boxsize)
    pop()

    push()
    translate(-300 , 0)
    sphere(boxsize)
    pop()

    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
            push();
            var a = j / 12 * PI;
            var b = i / 12 * PI;
            translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2, cos(2 * a) * radius * sin(b));
            if (j % 2 === 0) {
                cone(30, 30);
            } else {
                box(30, 30, 30);
            }
            pop();
        }
    }
    
    pause.mousePressed( function(){

        if(song.isPlaying()){
            song.pause()
            pause.html("Play")
        }else{
            song.play()
            pause.html("Pause")
        }
        
    } )


}