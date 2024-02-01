let song = document.getElementById("song");

let songBar = document.getElementById("progress");

let playButton = document.getElementById("ctrlIcon");


song.onloadedmetadata = function(){
    songBar.max = song.duration;
    songBar.value = song.currentTime;

}


function playPause() {
    if (song.paused) {
        song.play();
        playButton.src = "images/music-pause-icon.jpg";
    } else {
        song.pause();
       playButton.src="images/pink play button.png";
    }
}


    setInterval(()=>{
        if(!song.paused){
            songBar.value = song.currentTime;
        }
        if (song.currentTime === song.duration) {
            // Song has completed
            playButton.src = "images/pink play button.png";
        }
        },500)


songBar.oninput = function(){
    song.play();
    song.currentTime = songBar.value;
    playButton.src = "images/music-pause-icon.jpg";
}


