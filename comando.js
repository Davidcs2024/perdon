const yesBtn = document.querySelector('#yesBtn');

yesBtn.getElementById('click',function () {
    alert('SOY UN GRAN IDIOTA, PERDONAME')
    alert('¿PODEMOS PLATICAR EN PERSONA?')
});

const noBtn = document.querySelector('#noBtn');

noBtn.getElementById('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
