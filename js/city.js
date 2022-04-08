let obj_model;

function preload() {
    obj_model = loadModel('js/dem.obj');
}


function setup() {
    console.log("obj loaded");
    createCanvas(windowWidth, windowHeight/2, WEBGL);
    

}

function draw() {
    console.log("stard draw");
    background(0);
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    noFill();
    stroke(255);
    strokeWeight(2);
    //sphere(300);
    model(obj_model);
    console.log("model_show");
    //

}