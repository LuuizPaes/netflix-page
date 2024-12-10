let audioButton = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let button = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let mutedButton = document.querySelector(".botao-mudo")
let audio = document.querySelector(".audio")

audioButton.addEventListener("click", clickButton)

function clickButton() {
    video.muted = false;

}

mutedButton.addEventListener("click", clickMuted)

function clickMuted() {
    video.muted = true;
}


button.addEventListener("click", showModal)
modal.addEventListener("click", hideModal)

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}

window.addEventListener("load", tocarAudio)

function tocarAudio() {
    audio.play()
}



