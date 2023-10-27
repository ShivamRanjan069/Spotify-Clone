let songIndex = 0;
let audioElement = new Audio("songs/128-Abhi Mujh Mein Kahin - Agneepath 128 Kbps.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar")
let flex = document.getElementById("flex")
let masterSongname = document.getElementById("masterSongname")
let songItem = Array.from(document.getElementsByClassName("songItem"))

let song = [
    { songName: "Abhi Mujh Mein ", filePath: "songs/128-Abhi Mujh Mein Kahin - Agneepath 128 Kbps.mp3", coverPath: "covers/Abhi-Mujh-Mein-Kahin-Lofi-Flip-Hindi-2023-20230216114126-500x500.jpg" },

    { songName: "Rabba Rahega Tere Sang  ", filePath:"songs/Rabba Rahega Tere Sang - Arijit Singh(audiosong.in).mp3", coverPath: "covers/maxresdefault.jpg" },

    { songName: "Saware", filePath: "songs/Saware(PaglaSongs).mp3", coverPath: "covers/15249_4.jpg" },

    { songName: "Kahani ", filePath: "songs/01 - Kahani (320 Kbps).mp3", coverPath: "covers/kahani-laal-singh-chaddha-500-500.jpg" },

    { songName: "Kal Ho Naa Ho", filePath: "songs/Kal Ho Naa Ho - Kal Ho Naa Ho 128 Kbps.mp3", coverPath: "covers/images.jpeg"  },

    { songName: "Hawayein  ", filePath: "songs/Hawayein (Lofi Flip) [128] Kbps-(Mp3Jio.Com).mp3", coverPath: "covers/11099_6.jpg"},

    { songName: "Saudebazi ", filePath: "songs/Saudebazi (Slowed - Reverbed)(audiosong.in).mp3", coverPath: "covers/25212_6.jpg" },
]



songItem.forEach((elem , i)=>{
    elem.getElementsByTagName("img")[0].src=song[i].coverPath;
    elem.getElementsByClassName("songName")[0].innerHTML=song[i].songName;

})


masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        flex.style.opacity=1;

    }
    else{
        audioElement.pause()
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
        flex.style.opacity=0;

    }
})



audioElement.addEventListener("timeupdate", () => {
    // console.log("timeupate");
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress
})


myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})



let play =()=>{
    Array.from(document.getElementsByClassName("songItemplay")).forEach((elem)=>{

        elem.classList.remove('fa-pause-circle')
        elem.classList.add('fa-play-circle')


    })
}

Array.from(document.getElementsByClassName("songItemplay")).forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        play();
        songIndex = parseInt(e.target.id)
        e.target.classList.add('fa-pause-circle')
        e.target.classList.remove("fa-play-circle")
        audioElement.src= `songs/${songIndex}.mp3`
        masterSongname.innerText=song[songIndex-1].songName

        audioElement.currentTime=0;
        audioElement.play()
        flex.style.opacity=1;

        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
    })

})


document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=7){
        songIndex=0
    }else{
        songIndex+=1
    }
    audioElement.src= `songs/${songIndex}.mp3`
    masterSongname.innerText=song[songIndex-1].songName

    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})



document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex= 0
    }else{
        songIndex-=1
    }
    audioElement.src= `songs/${songIndex}.mp3`
    masterSongname.innerText=song[songIndex-1].songName
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})
