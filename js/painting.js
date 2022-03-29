
var mouse_x, mouse_y;
const points_x = [];
const points_y = [];
let button;
var scene_num;
var time;



function setup() {
    scene_num = 0;
    createCanvas(windowWidth,720)
    background(255);
    button_0 = createButton('FIND VIEW');
    button_0.position(windowWidth/2 -100 , windowHeight - 100);
    button_0.mousePressed(gotoscene1);
    button_0.size(200,50);
    time = 0;
    
}

function draw() {
    if (scene_num == 0) {
        scene0();
    }
    else if(scene_num ==1) {
        scene1();
    }
    else if(scene_num == 2) {
        scene2();
    }
}

function mouseDragged() {
    mouse_x = mouseX;
    mouse_y = mouseY;
    if (scene_num == 0) {
        points_x.push(mouse_x);
        points_y.push(mouse_y);
    }
}

function gotoscene1() {
    scene_num = 1;
}
function gotoscene2() {
    scene_num = 2;
}

function scene0() {
    textSize(32);
    textAlign(CENTER, CENTER);
    text('誰でも画伯', windowWidth/2, 50);
    fill(0, 102, 153);
    noFill();
    stroke(50);
    strokeWeight(2);
    beginShape();
    for (var i = 0; i < points_x.length; i ++) {
        vertex(points_x[i],points_y[i]);
    }
    endShape();
    fill(50);
    circle(mouse_x,mouse_y,1);
}

function scene1() {
    noFill();
    stroke(200);
    strokeWeight(2);
    beginShape();
    for (var i = 0; i < points_x.length; i ++) {
        vertex(points_x[i],points_y[i]);
    }
    endShape();
    loading(time*7);
    time += 1;

    if (time >= 200){
        gotoscene2();
    }
}

function scene2() {
    background(255);
    noFill();
    stroke(50);
    strokeWeight(1);
    rect(10,10,windowWidth / 4, windowHeight/ 4);
    noFill();
    stroke(200);
    strokeWeight(2);
    beginShape();
    for (var i = 0; i < points_x.length; i ++) {
        vertex(points_x[i]/4,points_y[i]/4);
    }
    endShape();
    
}

function loading(deg){
    strokeWeight(10);
    var interior_r = 50;
    var exterior_r = 80;
    var inc = PI / 4;
    stroke(200);
    for (let i = 0; i < 8; i++) {
        if(((i - 3) *inc <= (deg % 360) /360 * TWO_PI ) && ((deg % 360)/360  * TWO_PI  <= (i+1) * inc )){
            stroke(50);
        }
        else{
            stroke(200);
        }
        line(windowWidth/2 + cos(i*inc)*interior_r, windowHeight/2 + sin(i*inc)*interior_r,windowWidth/2 + cos(i*inc)*exterior_r, windowHeight/2 + sin(i*inc)*exterior_r,)
    }

}