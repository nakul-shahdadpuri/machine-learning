let video;
let poseNet;

let noseX = 0;
let noseY = 0;

let eyelX = 0;
let eyelY = 0;

let eyerX = 0;
let eyerY = 0;

let earlX = 0;
let earlY = 0;

let earrX = 0;
let earrY = 0;

let hiprX = 0;
let hiprY = 0;

let hiplX = 0;
let hiplY = 0;

function setup()
{
	createCanvas(1920,1080);
	video = createCapture(VIDEO);
	video.hide()
	poseNet = ml5.poseNet(video);
	poseNet.on('pose',gotPoses) 
}
function gotPoses(poses)
{
	 if(poses.length > 0)
	{
		let newX = poses[0].pose.keypoints[0].position.x;
		let newY = poses[0].pose.keypoints[0].position.y;
		noseX = lerp(noseX,newX,0.3);
		noseY = lerp(noseY,newY,0.3);

		newX = poses[0].pose.keypoints[1].position.x;
		newY = poses[0].pose.keypoints[1].position.y;
		eyelX = lerp(eyelX,newX,0.3);
		eyelY = lerp(eyelY,newY,0.3);

		newX = poses[0].pose.keypoints[2].position.x;
		newY = poses[0].pose.keypoints[2].position.y;
		eyerX = lerp(eyerX,newX,0.3);
		eyerY = lerp(eyerY,newY,0.3);

		newX = poses[0].pose.keypoints[3].position.x;
		newY = poses[0].pose.keypoints[3].position.y;
		earlX = lerp(earlX,newX,0.3);
		earlY = lerp(earlY,newY,0.3);

		newX = poses[0].pose.keypoints[4].position.x;
		newY = poses[0].pose.keypoints[4].position.y;
		earrX = lerp(earrX,newX,0.3);
		earrY = lerp(earrY,newY,0.3);

		newX = poses[0].pose.keypoints[11].position.x;
		newY = poses[0].pose.keypoints[11].position.y;
		hiplX = lerp(hiplX,newX,0.3);
		hiplY = lerp(hiplY,newY,0.3);

		newX = poses[0].pose.keypoints[11].position.x;
		newY = poses[0].pose.keypoints[11].position.y;
		hiplX = lerp(hiplX,newX,0.3);
		hiplY = lerp(hiplY,newY,0.3);
	}
	
}
function draw()
{
	image(video,0,0);
	background(0);
	strokeWeight(2);
	fill(255);

	d = dist(earrX,earrY,earlX,earlY);
	ellipse((earlX+earrX)/2,(earrY+earlY)/2,d*1.2,d*1.4);
	d = dist()
	fill(0);
	d = dist(eyerX,eyerY,eyelX,eyelY);
	ellipse(eyelX,eyelY,d*0.9);
	ellipse(eyerX,eyerY,d*0.9);
	ellipse(noseX,noseY+d*0.5,d*0.4);
}