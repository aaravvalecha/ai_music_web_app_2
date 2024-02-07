music_1="";
music_2="";
rightwrist_X="";
rightwrist_Y="";
leftwrist_X="";
leftwrist_Y="";


function preload(){
    music_1=loadSound("music.mp3");
    music_2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on('pose',got_poses);
}
function got_poses(results){

    if(results.length>0){
        console.log(results);

        rightwrist_X=results[0].pose.rightWrist.x;
        rightwrist_Y=results[0].pose.rightWrist.y;
        leftwrist_X=results[0].pose.leftWrist.x;
    leftwrist_Y=results[0].pose.leftWrist.y;

    console.log("leftwrist x="+leftwrist_X+"leftwrist y="+"rightwrist");
    }
}
function model_loaded(){
    console.log("model loaded");
}
function draw(){

    image(video,0,0,600,400);
}