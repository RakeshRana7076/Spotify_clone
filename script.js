// Mock data for songs


// Select elements
const player = document.querySelector('.musicplayer');
const albumImage = player.querySelector('.alb-im');
const songTitle = player.querySelector('.song');
const songArtist = player.querySelector('.singer');
const playPauseButton = player.querySelector('.player-control-icon.play');
const progressBar = player.querySelector('.progress-bar');

let currentSongIndex = 0;
let isPlaying = false;

// Function to update player UI with current song
function updatePlayerUI(index) {
    const currentSong = songs[index];
    albumImage.src = `./assets/${currentSong.image}`;
    songTitle.textContent = currentSong.title;
    songArtist.textContent = currentSong.artist;
}

// Function to play or pause the song
function togglePlayPause() {
    if (isPlaying) {
        // Pause the song
        playPauseButton.src = './assets/player_icon1.png';
        // Logic to pause the song
        isPlaying = false;
    } else {
        // Play the song
        playPauseButton.src = './assets/player_icon2.png';
        // Logic to play the song
        isPlaying = true;
    }
}

// Event listener for play/pause button
playPauseButton.addEventListener('click', togglePlayPause);

// Initial setup
updatePlayerUI(currentSongIndex);
