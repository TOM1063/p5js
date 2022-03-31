
var mouse_x, mouse_y;
const points_x = [];
const points_y = [];
let button;
var scene_num;
var time;
let img;
let img_withedge;
let img_edge;
var scene_2_steps;

var rect_size_x;
var rect_size_y;


function preload(){
    img = loadImage("js/map.png");    //画像の読み込み
    img_withedge = loadImage("js/map_withedge.png");
    img_edge = loadImage("js/map_edge.png");
}

function setup() {
    rect_size_x = (windowWidth - 40);
    rect_size_y = (windowWidth - 40)*9/16;
    scene_num = 0;
    scene_2_steps = 0;
    createCanvas(windowWidth,windowHeight);
    //background(70);
    button_0 = createButton('FIND VIEW');
    button_0.position(windowWidth/2 -100 , windowHeight/2 + rect_size_y/2 );
    button_0.mousePressed(gotoscene1);
    button_0.size(250,70);
    let col = color(255);
    button_0.style('background-color',col);
    time = 0;
    //fill(255,255,210);
    fill(255,255,255);
    noStroke();
    //rect(20,80,windowWidth-40,windowHeight - 200);
    noFill();
    stroke(0);
    strokeWeight(1);
    rect(20,(windowHeight/2 - rect_size_y/2) /2 - 100,rect_size_x,rect_size_y)
    
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
    // fill(255);
    // noStroke();
    // textSize(50);
    // textFont("Sawarabi Mincho");
    // textAlign(CENTER, CENTER);
    // text('ダレデモ画伯', windowWidth/2, 40);

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
        time = 1;
    }
}

function scene2() {
    background(255);

    button_0.position(1000000,1000000);

    noFill();
    stroke(0);
    strokeWeight(1);
    rect(20,(windowHeight - rect_size_y) /4 - rect_size_y/2,rect_size_x,rect_size_y);


    var pen_grad = time % points_x.length;
    noFill();
    stroke(200);
    strokeWeight(2);
    beginShape();
    for (var i = 0; i < pen_grad; i ++) {
        vertex(points_x[i] + (windowWidth - windowWidth/2)/2,points_y[i] + 100);
    }
    endShape();


    rect(20,(windowHeight - rect_size_y) /4 + rect_size_y/2 + 50,rect_size_x,rect_size_y);
    img_edge.resize(rect_size_x,rect_size_y);
    image(img_edge,20,(windowHeight - rect_size_y) /4);

        // noFill();
        // stroke(200);
        // strokeWeight(2);
        // beginShape();
        // for (var i = 0; i < pen_grad; i ++) {
        //     vertex(points_x[i],points_y[i]);
        // }
        // endShape();
    
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
        line(windowWidth/2 + cos(i*inc)*interior_r, windowHeight/2 - 300 + sin(i*inc)*interior_r,windowWidth/2 + cos(i*inc)*exterior_r, windowHeight/2 -300 + sin(i*inc)*exterior_r,)
    }

}