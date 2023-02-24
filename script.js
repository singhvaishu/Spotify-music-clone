console.log("Wellcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementsByClassName("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "lets play so  ", filePath: "songs/1.mp3", coverPath: "cover1.jpg" },
    { songName: "Let me do", filePath: "songs/2.mp3", coverPath: "cover5.jpg" },
    { songName: "Tum kyu aa", filePath: "songs/3.mp3", coverPath: "cover6.jpg" },
    { songName: "Jiske aane ", filePath: "songs/4.mp3", coverPath: "cover1.jpg" },
    { songName: "Sardi ki rat ", filePath: "songs/5.mp3", coverPath: "cover5.jpg" },
    { songName: "Tum hi aana ", filePath: "songs/6.mp3", coverPath: "cover6.jpg" },

]
songItems.forEach((element, i) => {


    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


});
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {


    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);


})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {

    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e);
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 6) {
        songIndex = 1
    }
    else {
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');



})

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 1
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');



})

