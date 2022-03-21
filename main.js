const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');
const nextBtn = document.querySelector('.next-button');
const uiLevel = document.querySelector('.ui-level');
const uiMessage = document.querySelector('.ui-message');
const spookyPicture = document.querySelector('.spooky-picture');
const scarySound = document.querySelector('.scream-sound');

const collisionCheck = (value) => {
    if (value === 'maze-border') alert ('YOU LOST !!! try again');
    if (value === 'finish'){
        nextBtn.style.opacity = 1;
        nextBtn.style.pointerEvents = 'all';
        levelOne.style.pointerEvents='none';
    }
    if (value === 'end-game'){
        scarySound.play();
        spookyPicture.style.display='block';
        document.body.style.background = 'black';
    }
}

window.addEventListener('mousemove', (e)=>{
    let checked = e.target.classList.value;
    collisionCheck(checked);

})

nextBtn.addEventListener('click', ()=>{
    levelOne.style.display = 'none';
    levelTwo.style.display = 'block';
    nextBtn.style.opacity = 0;
    nextBtn.style.pointerEvents = 'none';
    uiLevel.textContent = 'level 2';
    uiMessage.textContent= 'So close to finish';
})