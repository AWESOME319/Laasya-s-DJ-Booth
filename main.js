Song1="";
Song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
songplaying="";
function preload()
{
    Song1=loadSound("song1");
    Song2=loadSound("song2");
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
        video.hide();
        poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on('pose',gotPoses);
}
function draw()
{
    image( video,0,0,600,500);
    song_variable.isPlaying()
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist>0.2)
    {
        circle(rightWristX,rightWristY,20);
        songplaying="stop"
    
    if(Song1="false")
    {
        song1=loadSound(song1)
        document.getElementById("song_name").innerHTML="Harry Potter Theme song";
     }
}
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.X;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+ leftWristX +"leftWristY = "+ leftWristY);
        righttWristX=results[0].pose.rightWrist.X;
       rightWristY=results[0].pose.rightWrist.y;
       console.log("rightWristX="+ rightWristX +"rightWristY = "+ rightWristY);

    }
}
