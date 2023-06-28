const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipe2 = document.querySelector('.pipe2');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    const pipePosition2 = pipe2.offsetLeft;
    


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/porquin-fan.gif'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

        pipe2.style.animation = 'none';
        pipe2.style.left = `${pipePosition2}px`

        clearInterval(loop);
    }

    
    /*console.log(marioPosition)*/
    

}, 10)

const loop2 = setInterval(() => {

    const pipePosition2 = pipe2.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;


    if(pipePosition2 <= 120 && pipePosition2 > 0 && marioPosition < 100){
        pipe2.style.animation = 'none';
        pipe2.style.left = `${pipePosition2}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/porquin-alegre.gif'
        mario.style.width = '150px'
        mario.style.marginLeft = '20px'

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop2);
    }

    
    /*console.log(marioPosition)*/
    

}, 10)


document.addEventListener('keydown', jump);

