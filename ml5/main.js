
let sound;
let resultP;
let posX = 200;
let posY = 200;
function preload()
{
	let options = { probabiltyThreshold: 0.95};
	sound = ml5.soundClassifier('SpeechCommands18w',options);
}
function setup()
{
	createCanvas(400,400);
	resultP = createP('waiting.......');
	resultP.style('font-size','32pt');
	sound.classify(gotResults);
	sound.classify(move);
}
function gotResults(error,results)
{
	if(error)
	{
		console.log('shit');
		console.log(error);
	}
	if(results[0].label == 'up' || results[0].label == 'down' || results[0].label == 'left'|| results[0].label == 'right')
	{
		resultP.html(`${results[0].label} : ${results[0].confidence}`);
	}
}
function move(error,results)
{
	background(220);
	if(results[0].label == 'right')
	{
		posX = posX + 10;
	}
	if(results[0].label == 'left')
	{
		posX = posX - 10;
	}
	if(results[0].label == 'up')
	{
		posY = posY - 10;
	}
	if(results[0].label == 'down')
	{
		posY = posY + 10;
	}
	if(results[0].label == 'zero')
	{
		posX = 200;
		posY = 200;
	}
	fill(0,0,40);
	noStroke();
	ellipse(posX,posY,20,20);
}