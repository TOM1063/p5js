let obj_model;


function setup() {
    obj_model = loadModel('assets/brid.obj');
    console.log("obj loaded");
    createCanvas(windowWidth, windowHeight/2, WEBGL);
    

}

function draw() {
    background(0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    model(obj_model);
    noFill();
    stroke(255);
    strokeWeight(2);
    //sphere(300);

}