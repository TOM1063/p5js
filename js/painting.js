
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
var margin;
var current_line_id;
var debug = false;


function preload(){
    if (debug != true){
        img = loadImage("js/map.png");    //画像の読み込み
        img_withedge = loadImage("js/map_withedge.png");
        //img_edge = loadImage("js/map_edge.png");
        img_edge = loadImage("js/building2_edge.png");
    }
}
function setup() {
    rect_size_x = (windowWidth - 40);
    rect_size_y = (windowWidth - 40)*9/16;
    margin = 150;
    scene_num = 0;
    scene_2_steps = 0;
    current_line_id = 0;
    points_x[current_line_id] = [];
    points_y[current_line_id] = [];
    createCanvas(windowWidth,windowHeight);
    //background(70);
    button_0 = createButton('FIND VIEW');
    button_0.position(windowWidth/2 -100 , windowHeight/2 + windowHeight/6 );
    button_0.mousePressed(gotoscene1);
    button_0.size(250,70);
    let col = color(255);
    button_0.style('background-color',col);
    button_0.style('font-size', '25px');
    time = 0;
    //fill(255,255,210);
    fill(255,255,255);
    noStroke();
    //rect(20,80,windowWidth-40,windowHeight - 200);
    noFill();
    stroke(0);
    strokeWeight(1);
    rect(windowWidth/2 - rect_size_x/2,windowHeight/2 - rect_size_y/2-windowHeight/9,rect_size_x,rect_size_y);
    
}



function mousePressed(){
    points_x[current_line_id] = [];
    points_y[current_line_id] = [];
    console.log("current_line_id changed to" + str(current_line_id));
}

function mouseDragged() {
    mouse_x = mouseX;
    mouse_y = mouseY;
    if (scene_num == 0) {
        points_x[current_line_id].push(mouse_x);
        points_y[current_line_id].push(mouse_y);
    }
}
function mouseReleased(){
    current_line_id += 1;
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
    for (var i = 0; i < points_x.length; i ++) {
        beginShape();
        for (var j = 0; j < points_x[i].length; j ++){
            vertex(points_x[i][j], points_y[i][j]);
        }
        endShape();
    }
    fill(50);
    circle(mouse_x,mouse_y,1);
}

function scene1() {

    noFill();
    stroke(200);
    strokeWeight(2);
    for (var i = 0; i < points_x.length; i ++) {
        beginShape();
        for (var j = 0; j < points_x[i].length; j ++){
            vertex(points_x[i][j], points_y[i][j]);
        }
        endShape();
    }
    loading(time*7,windowWidth/2,windowHeight/2-windowHeight/9);
    time += 1;

    if (time >= 200){
        gotoscene2();
        time = 1;
    }
}

function scene2() {
    background(255);

    button_0.position(1000000,1000000);
    fill(0);
    noStroke();
    rect(windowWidth/2 - rect_size_x/2,windowHeight/2 - margin/2 - rect_size_y,250,50);
    fill(255);
    noStroke();
    textSize(30);
    textFont("Sawarabi Mincho");
    textAlign(CENTER, CENTER);
    text('Your Drawing', windowWidth/2 - rect_size_x/2 + 125,windowHeight/2 - margin/2 - rect_size_y + 25);

    noFill();
    stroke(0);
    strokeWeight(1.5);
    rect(windowWidth/2 - rect_size_x/2,windowHeight/2 - margin/2 - rect_size_y,rect_size_x,rect_size_y);

    stroke(100);
    strokeWeight(2);

    var adjust = rect_size_y/2 + margin/2 - windowHeight/9 
    for (var i = 0; i < points_x.length; i ++) {
        beginShape();
        for (var j = 0; j < points_x[i].length; j ++){
            vertex(points_x[i][j],points_y[i][j] -  adjust);
        }
        endShape();
    }
    

    noFill();
    stroke(100);
    strokeWeight(4);
    for (var i = 0; i < points_x.length; i ++){
        var pen_grad = time % points_x[i].length;
        beginShape();
        for(j = 0; j < pen_grad; j ++){
            vertex(points_x[i][j],points_y[i][j]  -  adjust);
        }
        endShape();
        //console.log("drawed_line:" + str(i));
    }

    if(debug != true){
        img_edge.resize(rect_size_x,rect_size_y);
        image(img_edge,windowWidth/2 - rect_size_x/2,windowHeight/2 + margin/2);
    }

    fill(0);
    noStroke();
    rect(windowWidth/2 - rect_size_x/2,windowHeight/2 + margin/2,250,50);
    fill(255);
    noStroke();
    textSize(30);
    textFont("Sawarabi Mincho");
    textAlign(CENTER, CENTER);
    text('Result', windowWidth/2 - rect_size_x/2 + 250/2,windowHeight/2 + margin/2 + 50/2);
    fill(0);
    text('Site : Chiyoda-Ku Tokyo',windowWidth/2,windowHeight/2 + margin/2 + 50/2);
    fill(255,255 - 120*(time*4%255 > 127),255- 255*(time*4%255 > 127));
    text('70% Matching',windowWidth/2 + rect_size_x/2 - 110,windowHeight/2 + margin/2 + 50/2);

    noFill();
    stroke(0);
    strokeWeight(1);
    rect(windowWidth/2 - rect_size_x/2,windowHeight/2 + margin/2,rect_size_x,rect_size_y);



    fill(100);
    noStroke();
    draw_triangle(windowWidth/2,windowHeight/2 - 70/2,200,70);
        // noFill();
        // stroke(200);
        // strokeWeight(2);
        // beginShape();
        // for (var i = 0; i < pen_grad; i ++) {
        //     vertex(points_x[i],points_y[i]);
        // }
        // endShape();
    time ++;
    
}

function loading(deg,center_x,center_y){
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
        line(center_x + cos(i*inc)*interior_r, center_y + sin(i*inc)*interior_r,center_x + cos(i*inc)*exterior_r, center_y + sin(i*inc)*exterior_r,)
    }

}

function draw_triangle(center_x,center_y,width,height){
    beginShape();
    vertex(center_x - width/2,center_y);
    vertex(center_x + width/2,center_y);
    vertex(center_x,center_y + height);
    endShape();
}