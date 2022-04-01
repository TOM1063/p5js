var capture;
var w = windowWidth;
var h = windowWidth*9/16;

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            facingMode: {
              exact: "environment"
            }
          }    
        
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    capture.hide();
    capture.size(windowWidth, windowWidth*9/16);
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
    //capture.resize(255,255);
    image(capture, 0, 0);

}