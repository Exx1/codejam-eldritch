//Ancients

const azathoth = document.querySelector('.azathoth');
const cthulhu = document.querySelector('.cthulhu');
const iogSothoth = document.querySelector('.iogSothoth');
const shubNiggurath = document.querySelector('.shubNiggurath');

function activeAzathoth() {
    azathoth.innerHTML = '';
    cthulhu.innerHTML = '';
    iogSothoth.innerHTML = '';
    shubNiggurath.innerHTML = '';
    azathoth.innerHTML = "<img src=\"./assets/frame.png\" width=\"100%\" height=\"100%\" alt=\"Azathoth\"></img>";
}

function activeCthulhu() {
    azathoth.innerHTML = '';
    cthulhu.innerHTML = '';
    iogSothoth.innerHTML = '';
    shubNiggurath.innerHTML = '';
    cthulhu.innerHTML = "<img src=\"./assets/frame.png\" width=\"100%\" height=\"100%\" alt=\"Azathoth\"></img>";
}

function activeIogSothoth() {
    azathoth.innerHTML = '';
    cthulhu.innerHTML = '';
    iogSothoth.innerHTML = '';
    shubNiggurath.innerHTML = '';
    iogSothoth.innerHTML = "<img src=\"./assets/frame.png\" width=\"100%\" height=\"100%\" alt=\"Azathoth\"></img>";
}

function activeShubNiggurath() {
    azathoth.innerHTML = '';
    cthulhu.innerHTML = '';
    iogSothoth.innerHTML = '';
    shubNiggurath.innerHTML = '';
    shubNiggurath.innerHTML = "<img src=\"./assets/frame.png\" width=\"100%\" height=\"100%\" alt=\"Azathoth\"></img>";
}

azathoth.addEventListener('click', activeAzathoth);
cthulhu.addEventListener('click', activeCthulhu);
iogSothoth.addEventListener('click', activeIogSothoth);
shubNiggurath.addEventListener('click', activeShubNiggurath);

//difficulty Level

const veryEasy = document.querySelector('.veryEasy');
const easy = document.querySelector('.easy');
const normal = document.querySelector('.normal');
const hard = document.querySelector('.hard');
const veryHard = document.querySelector('.veryHard');


function veryEasyActive() {
    veryEasy.classList.remove('diffActive');
    easy.classList.remove('diffActive');
    normal.classList.remove('diffActive');
    hard.classList.remove('diffActive');
    veryHard.classList.remove('diffActive');
    veryEasy.classList.add('diffActive');
}

function easyActive() {
    veryEasy.classList.remove('diffActive');
    easy.classList.remove('diffActive');
    normal.classList.remove('diffActive');
    hard.classList.remove('diffActive');
    veryHard.classList.remove('diffActive');
    easy.classList.add('diffActive');
}

function normalActive() {
    veryEasy.classList.remove('diffActive');
    easy.classList.remove('diffActive');
    normal.classList.remove('diffActive');
    hard.classList.remove('diffActive');
    veryHard.classList.remove('diffActive');
    normal.classList.add('diffActive');
}

function hardActive() {
    veryEasy.classList.remove('diffActive');
    easy.classList.remove('diffActive');
    normal.classList.remove('diffActive');
    hard.classList.remove('diffActive');
    veryHard.classList.remove('diffActive');
    hard.classList.add('diffActive');
}

function veryHardActive() {
    veryEasy.classList.remove('diffActive');
    easy.classList.remove('diffActive');
    normal.classList.remove('diffActive');
    hard.classList.remove('diffActive');
    veryHard.classList.remove('diffActive');
    veryHard.classList.add('diffActive');
}

veryEasy.addEventListener('click', veryEasyActive);
easy.addEventListener('click', easyActive);
normal.addEventListener('click', normalActive);
hard.addEventListener('click', hardActive);
veryHard.addEventListener('click', veryHardActive);