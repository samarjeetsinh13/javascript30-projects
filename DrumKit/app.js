console.log("Mahadev Mahadev");

function playAudio(keyValue){
    const audio = document.querySelector(`audio[data-key = "${keyValue}"]`)
    const key = document.querySelector(`.key[data-key="${keyValue}"]`)
    if(!audio | !key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', (e)=>{
    playAudio(e.keyCode);
})

const key = document.querySelectorAll(".key");

key.forEach((key)=> key.addEventListener("pointerdown",(e)=>{
    playAudio(e.currentTarget.dataset.key)
}))


function removeTransition(e){
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing')
}

key.forEach((key) => key.addEventListener('transitionend', removeTransition));