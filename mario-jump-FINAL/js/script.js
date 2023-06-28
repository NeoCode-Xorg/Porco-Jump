const porquin = document.querySelector('.porquin');
const vaca = document.querySelector('.vaca');
const bandeira = document.querySelector('.bandeira');
const brilho = document.querySelector('.brilho');

const jump = () => {
    porquin.classList.add('jump');

    setTimeout(() => {
        porquin.classList.remove('jump');
    },500)
}

const loop = setInterval(() => {

    const vacaPosition = vaca.offsetLeft;
    const porquinPosition = +window.getComputedStyle(porquin).bottom.replace('px', '');
    const brilhoPosition = brilho.offsetLeft;
    const bandeiraPosition = bandeira.offsetLeft;
    


    if(vacaPosition <= 120 && vacaPosition > 0 && porquinPosition < 100){
        vaca.style.animation = 'none';
        vaca.style.left = `${vacaPosition}px`

        porquin.style.animation = 'none';
        porquin.style.bottom = `${porquinPosition}px`

        porquin.src = './images/porquin-fan.gif'
        porquin.style.width = '75px'
        porquin.style.marginLeft = '50px'

        brilho.style.animation = 'none';
        brilho.style.left = `${brilhoPosition}px`

        bandeira.style.animation = 'none';
        bandeira.style.left = `${bandeiraPosition}px`

        clearInterval(loop);
    }

    
    /*console.log(porquinPosition)*/
    

}, 10)

const loop2 = setInterval(() => {

    const bandeiraPosition = bandeira.offsetLeft;
    const porquinPosition = +window.getComputedStyle(porquin).bottom.replace('px', '');
    const brilhoPosition = brilho.offsetLeft;


    if(bandeiraPosition <= 120 && bandeiraPosition > 0 && porquinPosition < 100){
        bandeira.style.animation = 'none';
        bandeira.style.left = `${bandeiraPosition}px`

        porquin.style.animation = 'none';
        porquin.style.bottom = `${porquinPosition}px`

        porquin.src = './images/porquin-alegre.gif'
        porquin.style.width = '150px'
        porquin.style.marginLeft = '20px'

        brilho.style.animation = 'none';
        brilho.style.left = `${brilhoPosition}px`

        clearInterval(loop2);
    }

    
    /*console.log(porquinPosition)*/
    

}, 10)


document.addEventListener('keydown', jump);

