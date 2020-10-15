const image = document.querySelector("#song-image");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music list
const songs = [
    {
        name: "song-1",
        displayName: "Bubbletea",
        artist: "Quebonafide"
    },
    {
        name: "song-2",
        displayName: "SZUBIENICEPESTCYDYBRON",
        artist: "Quebonafide"
    },
    {
        name: "song-3",
        displayName: "Stary dobry ja",
        artist: "Reto"
    },
    {
        name: "song-4",
        displayName: "Pomarancze",
        artist: "Tymek"
    }
];

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

// Play or pause function
function playOrPause() {
    isPlaying ? pauseSong() : playSong();
}

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current song
let songIndex = 0;

// Play next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Play previous song
function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Event listeners
// Play or pause event listener
playBtn.addEventListener("click", playOrPause);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// On load - select first song
loadSong(songs[songIndex]);