var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector("#volume")
	console.log(volume);
	volume.innerHTML = (video.volume * 100) + "%";
	var button = document.querySelector(".play");
	var img = '<img src="images/play.jpg" width=20 height=20 alt="play icon" />';
	button.innerHTML = img + "Play Video";
}

// play icon citation: https://www.vecteezy.com/vector-art/423436-play-icon-vector-illustration

function pauseVid() {
	video.pause();
	console.log("Pause Video");
	var button = document.querySelector(".pause");
	var img = '<img src="images/pause.png" width=20 height=20 alt="pause icon"/>';
	button.innerHTML = img + "Pause Video";
}

// pause icon citation: https://www.visualpharm.com/free-icons/pause%20button-595b40b75ba036ed117d590c

function decreaseSpeed() {
	video.playbackRate -= .2
	console.log("Speed is " + video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate += .25
	console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;
	console.log("Current location is " + video.currentTime);
	if (video.ended) {
		video.load();
		video.playbackRate = 1;
		console.log("Current location is " + video.currentTime);
	}
}

function mute() {
	console.log(video.muted)
	if (video.muted){
			video.muted = false;
			var button = document.querySelector("#mute");
			button.innerHTML = "Unmuted";
		console.log("Changing to Unmuted");
	}
	else {
			video.muted = true;
			var button = document.querySelector("#mute");
			button.innerHTML = "Muted";
				console.log("Changing to Muted");
	}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value);
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = slider.value + "%";
}

function gray() {
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style = "initial";
	console.log("In color")
}
