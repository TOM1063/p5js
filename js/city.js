let obj_model;

function preload() {
    obj_model = loadModel('js/assets/lod1_small_group.obj');
}


function setup() {
    console.log("obj loaded");
    let canvas = createCanvas(windowWidth, windowHeight/1.97, WEBGL);
    canvas.parent(result);
    

}


function draw() {
    background(0);
    //rotateX(frameCount * 0.005);
    rotateX(3.14*60/180);
    rotateZ(frameCount * 0.002);
    noFill();
    stroke(255,255,255,10);
    strokeWeight(0.5);
    scale(2);
    translate(0,0,-30);
    model(obj_model);
    var radius = 0.7 * sin(frameCount*0.03);
    //var radius = 0.7 * noise(frameCount*0.03);
    //var radius = 0.7 * (frameCount*0.01 %1) ;
    //sphere(300);

    scale(100);
    noStroke();
    fill(150,200,255,100);
    fill(255,200,200,100);
    //fill(255,255,255,50);
    translate(0,0,0.2);
    sphere(radius)
    //

    
}