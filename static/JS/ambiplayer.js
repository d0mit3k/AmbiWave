const audpl = document.querySelector(".ambient");
const rainaud = new Audio("/static/Ambient/rain.mp3");
const windaud = new Audio("/static/Ambient/wind.mp3");
const fireaud = new Audio("/static/Ambient/fire.mp3");
const birdaud = new Audio("/static/Ambient/bird.mp3");

const rain = audpl.querySelector(".ambient .switch .rain");
rain.addEventListener(
  "click",
  () => {
    if (rainaud.paused) {
      rain.classList.remove("fa-toggle-off");
      rain.classList.add("fa-toggle-on");
      rainaud.play();
    } else {
      rain.classList.remove("fa-toggle-on");
      rain.classList.add("fa-toggle-off");
      rainaud.pause();
    }
  },
  false
);

rainaud.addEventListener('ended', function() {
    rainaud.currentTime = 0;
    rainaud.play();
}, false);

const wind = audpl.querySelector(".ambient .switch .wind");
wind.addEventListener(
  "click",
  () => {
    if (windaud.paused) {
      wind.classList.remove("fa-toggle-off");
      wind.classList.add("fa-toggle-on");
      windaud.play();
    } else {
      wind.classList.remove("fa-toggle-on");
      wind.classList.add("fa-toggle-off");
      windaud.pause();
    }
  },
  false
);

windaud.addEventListener('ended', function() {
    windaud.currentTime = 0;
    windaud.play();
}, false);

const fire = audpl.querySelector(".ambient .switch .fire");
fire.addEventListener(
  "click",
  () => {
    if (fireaud.paused) {
      fire.classList.remove("fa-toggle-off");
      fire.classList.add("fa-toggle-on");
      fireaud.play();
    } else {
      fire.classList.remove("fa-toggle-on");
      fire.classList.add("fa-toggle-off");
      fireaud.pause();
    }
  },
  false
);

fireaud.addEventListener('ended', function() {
    fireaud.currentTime = 0;
    fireaud.play();
}, false);

const bird = audpl.querySelector(".ambient .switch .bird");
bird.addEventListener(
  "click",
  () => {
    if (birdaud.paused) {
      bird.classList.remove("fa-toggle-off");
      bird.classList.add("fa-toggle-on");
      birdaud.play();
    } else {
      bird.classList.remove("fa-toggle-on");
      bird.classList.add("fa-toggle-off");
      birdaud.pause();
    }
  },
  false
);

birdaud.addEventListener('ended', function() {
    birdaud.currentTime = 0;
    birdaud.play();
}, false);

const rainvol = audpl.querySelector(".ambient .rainvolslid");
rainvol.addEventListener('click', e => {
  const sldw = window.getComputedStyle(rainvol).width;
  const newvol = e.offsetX / parseInt(sldw);
  rainaud.volume = newvol;
  audpl.querySelector(".ambient .rainvolperc").style.width = newvol * 100 + '%';
}, false);

const windvol = audpl.querySelector(".ambient .windvolslid");
windvol.addEventListener('click', e => {
  const sldw = window.getComputedStyle(windvol).width;
  const newvol = e.offsetX / parseInt(sldw);
  windaud.volume = newvol;
  audpl.querySelector(".ambient .windvolperc").style.width = newvol * 100 + '%';
}, false);

const firevol = audpl.querySelector(".ambient .firevolslid");
firevol.addEventListener('click', e => {
  const sldw = window.getComputedStyle(firevol).width;
  const newvol = e.offsetX / parseInt(sldw);
  fireaud.volume = newvol;
  audpl.querySelector(".ambient .firevolperc").style.width = newvol * 100 + '%';
}, false);

const birdvol = audpl.querySelector(".ambient .birdvolslid");
birdvol.addEventListener('click', e => {
  const sldw = window.getComputedStyle(birdvol).width;
  const newvol = e.offsetX / parseInt(sldw);
  birdaud.volume = newvol;
  audpl.querySelector(".ambient .birdvolperc").style.width = newvol * 100 + '%';
}, false);