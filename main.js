video="";
function preload() {
    video=createVideo('video.mp4');
}
function setup() {
    canvas=createCanvas(480, 380);
    canvas.center();
    video.hide();
}
function draw(){
    image(video, 0, 0, 480, 380);
}
function start() {
   objectDetecter=ml5.objectDetecter('cocossd', modalLoaded);
   document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modalLoaded() {
    console.log("Moadal Loaded");
    status=true;
    video.loop(1);
    video.speed(1);
    video.volume(1);
}