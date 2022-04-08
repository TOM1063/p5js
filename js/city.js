let obj_model;

function preload() {
    obj_model = loadModel('js/assets/lod1_small_group.obj');
}


function setup() {
    console.log("obj loaded");
    let canvas = createCanvas(windowWidth, windowHeight/2, WEBGL);
    canvas.parent(result);
    

}


function draw() {
    background(0);
    //rotateX(frameCount * 0.005);
    rotateX(3.14*45/180);
    rotateZ(frameCount * 0.005);
    noFill();
    stroke(255,255,255,10);
    strokeWeight(1);
    //sphere(300);
    model(obj_model);
    //

    
}