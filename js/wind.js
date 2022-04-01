var capture;
var w = windowWidth;
var h = windowWidth*9/16;

function setup() {
    if (isMobileDevice()) {
        console.log("mobile device");
        var constraints = {
        audio: false,
        video: {
            facingMode: {
                exact: "environment"
            }
        }
        };
    capture = createCapture(constraints);
    } else {
        console.log("NOT mobile device");
        capture = createCapture(VIDEO);
    }

    capture.hide();
    capture.size(windowWidth, windowWidth*9/16);
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
    //capture.resize(255,255);
    image(capture, 0, 0);

}

