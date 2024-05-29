// script.js

let speed = 10;
let fontSize = 16;

function changeSpeed(delta) {
    speed = Math.max(1, speed + delta);
    document.getElementById('text').style.animationDuration = speed + 's';
    console.log(`Playback speed: ${speed}`);
}

function changeFontSize(delta) {
    fontSize = Math.max(10, fontSize + delta);
    document.getElementById('text').style.fontSize = fontSize + 'px';
    console.log(`Font size: ${fontSize}px`);
}
