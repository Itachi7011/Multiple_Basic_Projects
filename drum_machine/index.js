document.addEventListener('DOMContentLoaded', function () {
    const drumPads = document.querySelectorAll('.drum-pad');

    drumPads.forEach(pad => {
        pad.addEventListener('click', function () {
            const audio = this.querySelector('.clip');
            audio.currentTime = 0; // Rewind audio to the start
            audio.play();
        });
    });

    // Add keyboard event listeners
    document.addEventListener('keydown', function (event) {
        const key = event.key.toUpperCase();
        const pad = document.getElementById(key);
        if (pad) {
            const audio = pad.querySelector('.clip');
            audio.currentTime = 0; // Rewind audio to the start
            audio.play();
        }
    });
});