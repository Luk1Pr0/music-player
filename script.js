const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Check if music is playing
let isPlaying = false;
    
function playSong() {
    isPlaying = true;
    playBtn.classList.replace("fa-play-circle", "fa-pause-circle");
    playBtn.setAttribute("title", "Pause");
    music.play();
}

function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace( "fa-pause-circle", "fa-play-circle");
    playBtn.setAttribute("title", "Play");
    music.pause();
}

// Event listeners

// Play or pause event listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
