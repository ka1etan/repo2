function createaudio() {
  let newtrack = new Audio("nitro_silwerk.mp3");
  document.getElementById("player").innerHTML = newtrack;

  newtrack.addEventListener('suspend', (event) => {
    console.log('Data loading has been suspended.');

  });

  newtrack.addEventListener('loadedmetadata', (event) => {
    console.log(newtrack.duration);
    let tracktime = newtrack.duration/60;
    let trackmins = parseInt(tracktime);
    //console.log(trackmins);
    let tracksecs = parseInt((tracktime - trackmins)*60);

    document.getElementById("dura").innerHTML = "Duration: " + trackmins + " : " + tracksecs;

  });



  let bplay = document.getElementById("play");
  let bpause = document.getElementById("stop");
  let bmute = document.getElementById("mute");
  let brew = document.getElementById("rewind");
  bplay.addEventListener("click", playtrack);
  bpause.addEventListener("click", pausetrack);
  bmute.addEventListener("click", mutetrack);
  brew.addEventListener("click", rewtrack);

  function playtrack() {
    newtrack.play();
  }

  function pausetrack() {
    newtrack.pause();
  }

  function mutetrack() {

    if (newtrack.muted == true) {
      newtrack.muted = false;
    } else newtrack.muted = true;
  }

  function rewtrack() {

    newtrack.currentTime = 0;
  }





}

function init() {
  createaudio();
}

window.addEventListener("load", init);
