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
    console.log("stard draw");
    background(0);
    //rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    noFill();
    stroke(255,255,255);
    strokeWeight(1);
    //sphere(300);
    model(obj_model);
    console.log("model_show");
    //

    
}