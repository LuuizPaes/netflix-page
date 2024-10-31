let audioButton = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let button = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

audioButton.addEventListener("click", clickButton)

function clickButton() {
    video.muted = false;

}


button.addEventListener("click", showModal)
modal.addEventListener("click", hideModal)

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}
