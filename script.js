// const player = document.getElementById('player');
// const audio = new Audio ();
// audio.src ='media BPA/Podcast 2.mp3';
                
// player.addEventListener('click', function() {
//     if (audio.paused) {
//         audio.play();
//         player.innerText = 'Pause';
//     }else {
//         audio.pause();
//         player.innerText = 'Play';
//     }
// })

// custom-audio button

const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const resetButton = document.getElementById('reset');

// Format time in mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update progress bar and time
function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
}

// Set audio duration
audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸'; // Pause icon
    } else {
        audio.pause();
        playPauseButton.textContent = '▶'; // Play icon
    }
});

// Update progress bar as audio plays
audio.addEventListener('timeupdate', updateProgress);

// Seek functionality
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Reset functionality
resetButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = '▶'; // Reset to play icon
    updateProgress();
});