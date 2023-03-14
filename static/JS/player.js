const audplr = document.querySelector(".audplay");
var audio = document.getElementById("player");

console.dir(audio);

audio.addEventListener(
  "loadeddata",
  () => {
    audplr.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
  },
  false
);

const tmln = audplr.querySelector(".timeline");
tmln.addEventListener("click", e => {
  const tmlnwidth = window.getComputedStyle(tmln).width;
  const timeseek = e.offsetX / parseInt(tmlnwidth) * audio.duration;
  audio.currentTime = timeseek;
}, false);

const volsld = audplr.querySelector(".ctrl .volslid");
volsld.addEventListener('click', e => {
  const sldwidth = window.getComputedStyle(volsld).width;
  const newvol = e.offsetX / parseInt(sldwidth);
  audio.volume = newvol;
  audplr.querySelector(".ctrl .volperc").style.width = newvol * 100 + '%';
}, false)

setInterval(() => {
  const progbar = audplr.querySelector(".progress");
  progbar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audplr.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

const plbtn = audplr.querySelector(".ctrl .togplay");
plbtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      plbtn.classList.remove("fa-play");
      plbtn.classList.add("fa-pause");
      audio.play();
    } else {
      plbtn.classList.remove("fa-pause");
      plbtn.classList.add("fa-play");
      audio.pause();
    }
  },
  false
);

audplr.querySelector(".volbutt").addEventListener("click", () => {
  const volel = audplr.querySelector(".volcont .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volel.classList.remove("fa-volume-up");
    volel.classList.add("fa-volume-mute");
  } else {
    volel.classList.add("fa-volume-up");
    volel.classList.remove("fa-volume-mute");
  }
});

function player_change(song){
  audio.pause();
  plbtn.classList.remove("fa-pause");
  plbtn.classList.add("fa-play");
  audio.setAttribute('src', song);
  audio.load();
  audio.play();
  plbtn.classList.remove("fa-play");
  plbtn.classList.add("fa-pause");
}

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}