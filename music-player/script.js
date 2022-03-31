const songContainer = document.querySelector(".song-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const currentTimeIndication = document.querySelector(".current-time");
const songDurationIndication = document.querySelector(".song-duration");
const cover = document.querySelector("#cover");

// Song Titles
const songs = ["gamda", "sahran", "yftekrny"];

// selection the index of song
let songIndex = 2;

// play the audio
function playSong() {
	songContainer.classList.add("play");
	playBtn.querySelector("i.fas").classList.remove("fa-play");
	playBtn.querySelector("i.fas").classList.add("fa-pause");

	audio.play();
}
// pause the audio
function pauseSong() {
	songContainer.classList.remove("play");
	playBtn.querySelector("i.fas").classList.remove("fa-pause");
	playBtn.querySelector("i.fas").classList.add("fa-play");

	audio.pause();
}
// what to do when clicking prev button
function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	laodSong(songs[songIndex]);
	playSong();
}
// what to do when clicking next button
function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}
	laodSong(songs[songIndex]);
	playSong();
}
// updating progress
function updateProgress(e) {
	e.preventDefault();
	const { currentTime, duration } = e.srcElement;
	currentTimeIndication.textContent =
		currentTime <= 9
			? `0${Math.ceil(currentTime)}`
			: `${Math.ceil(currentTime)}`;
	if (currentTime > 59) {
		const remainSec = duration - currentTime;
		currentTimeIndication.textContent =
			Math.floor(currentTime / 60) +
			":" +
			Math.floor(duration - remainSec);
	}

	// getting the whole seconds
	const minutes = Math.floor(duration / 60);
	const remainingSeconds = Math.floor(duration - minutes * 60);

	songDurationIndication.textContent =
		minutes <= 9
			? `0${Math.floor(minutes)}: ${remainingSeconds}`
			: `${Math.floor(minutes)}: ${remainingSeconds}`;

	const progressPercentage = (currentTime / duration) * 100;
	progress.style.width = `${progressPercentage}%`;
}

function setProgress(e) {
	const clickX = e.offsetX;
	const width = this.clientWidth;
	const duration = audio.duration;

	audio.currentTime = (clickX / width) * duration;
	return audio.currentTime;
}

// Initially load songs into DOm
laodSong(songs[songIndex]);

function laodSong(song) {
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.jpeg`;
}

//Event Listners

playBtn.addEventListener("click", function () {
	const isPlaying = songContainer.classList.contains("play");
	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

//Change Song Event
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// ontimeupdate, please do the function updateProgress
audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);
