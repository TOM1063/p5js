
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

var image_num;


function preload(){
    if (debug != true){
        //img = loadImage("js/map.png");    //画像の読み込み
        //img_withedge = loadImage("js/map_withedge.png");
        //img_edge = loadImage("js/map_edge.png");
        img_edge_0 = loadImage("js/bldg_0_edge.png");
        img_edge_1 = loadImage("js/bldg_1_edge.png");
        img_edge_2 = loadImage("js/bldg_2_edge.png");
    }
}
function setup() {
    rect_size_x = (windowWidth - 100);
    rect_size_y = (windowWidth - 100)*9/16;
    margin = windowHeight/20;
    scene_num = 0;
    scene_2_steps = 0;
    current_line_id = 0;
    points_x[current_line_id] = [];
    points_y[current_line_id] = [];
    image_num = 1;
    createCanvas(windowWidth,windowHeight);
    //background(70);
    button_0 = createButton('FIND VIEW');
    button_0.position(windowWidth/2 -100 , windowHeight/2 + windowHeight/6 );
    button_0.mousePressed(gotoscene1);
    button_0.size(250,70);
    let col_0 = color(255);
    button_0.style('background-color',col_0);
    button_0.style('font-size', '25px');

    time = 0;
    //fill(255,255,210);
    
}



function mousePressed(){
    console.log("mousePressed");
    points_x[current_line_id] = [];
    points_y[current_line_id] = [];
    console.log("current_line_id changed to" + str(current_line_id));
    mouse_x = mouseX;
    mouse_y = mouseY;
    area_x = 300;
    area_y = 200;
    if (scene_num == 0) {
        points_x[current_line_id].push(mouse_x);
        points_y[current_line_id].push(mouse_y);
    }
    else if(scene_num == 2) {
        var is_on_area_x = (windowWidth/2 - area_x/2 < mouse_x) && (mouse_x < windowWidth/2 + area_x/2);
        var is_on_area_y = (windowHeight-area_y < mouse_y) && (mouse_y < windowHeight);
        var is_on_area = is_on_area_x && is_on_area_y;
        if(is_on_area) {
            console.log("hidden_button_is_clicked");
            gotoscene0();
        }
    }
}

function mouseDragged() {
    console.log("mouseDragged");
    mouse_x = mouseX;
    mouse_y = mouseY;
    if (scene_num == 0) {
        points_x[current_line_id].push(mouse_x);
        points_y[current_line_id].push(mouse_y);
    }
}

function mouseReleased(){
    console.log("mouseReleased");
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
function gotoscene0() {
    console.log("gotoscene0_setting");
    points_x.length = 0;
    points_y.length = 0;
    current_line_id = 0;
    points_x[current_line_id] = [];
    points_y[current_line_id] = [];
    console.log("lines_initialized");
    background(255);
    console.log("gotoscene0");
    if(image_num == 1){
        image_num = 2;
    }
    else if(image_num == 2) {
        image_num = 3;
    }
    else if(image_num == 3) {
        image_num = 1;
    }
    scene_num = 0;
    time = 0;
}

function scene0() {
    // fill(255);
    // noStroke();
    // textSize(50);
    // textFont("Sawarabi Mincho");
    // textAlign(CENTER, CENTER);
    // text('ダレデモ画伯', windowWidth/2, 40);
    button_0.position(windowWidth/2 -100 , windowHeight/2 + windowHeight/6 );


    fill(255,255,255);
    noStroke();
    //rect(20,80,windowWidth-40,windowHeight - 200);
    noFill();
    stroke(0);
    strokeWeight(1);
    rect(windowWidth/2 - rect_size_x/2,windowHeight/2 - rect_size_y/2-windowHeight/12,rect_size_x,rect_size_y);

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
    loading(time*7,windowWidth/2,windowHeight/2-windowHeight/12);
    time += 1;

    if (time >= 100){
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
    strokeWeight(1.9);
    rect(windowWidth/2 - rect_size_x/2,windowHeight/2 - margin/2 - rect_size_y,rect_size_x,rect_size_y);

    stroke(100);
    strokeWeight(2);

    var adjust = rect_size_y/2 + margin/2 - windowHeight/12
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
        if(image_num == 1){
            img_edge_0.resize(rect_size_x,rect_size_y);
            image(img_edge_0,windowWidth/2 - rect_size_x/2,windowHeight/2 + margin/2);
        }
        else if(image_num == 2){
            img_edge_1.resize(rect_size_x,rect_size_y);
            image(img_edge_1,windowWidth/2 - rect_size_x/2,windowHeight/2 + margin/2);
        }
        else if(image_num == 3){
            img_edge_2.resize(rect_size_x,rect_size_y);
            image(img_edge_2,windowWidth/2 - rect_size_x/2,windowHeight/2 + margin/2);
        }
        
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
    text('Site : Chiyoda-Ku Tokyo',windowWidth/2+20,windowHeight/2 + margin/2 + 50/2);
    //fill(255,255 - 120*(time*4%255 > 127),255- 255*(time*4%255 > 127));
    fill(255 - 255*(time*4%255 > 127))
    text('70% Matching',windowWidth/2 + rect_size_x/2 - 110,windowHeight/2 + margin/2 + 50/2);

    noFill();
    stroke(0);
    strokeWeight(1);
    rect(windowWidth/2 - rect_size_x/2,windowHeight/2 + margin/2,rect_size_x,rect_size_y);


    fill(220);
    noStroke();
    //trokeWeight(1);
    draw_triangle(windowWidth/2,windowHeight/2 - 70/3,170,50);
        // noFill();
        // stroke(200);
        // strokeWeight(2);
        // beginShape();
        // for (var i = 0; i < pen_grad; i ++) {
        //     vertex(points_x[i],points_y[i]);
        // }
        // endShape();
    time +=0.3;
    
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
    vertex(center_x - width/2,center_y);
    endShape();
}